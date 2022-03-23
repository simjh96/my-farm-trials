// https://devdactic.com/ionic-image-upload-capacitor/

import { Component, OnInit } from '@angular/core';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { HttpClient } from '@angular/common/http';
import {
  LoadingController,
  NavController,
  Platform,
  ToastController,
} from '@ionic/angular';
import {
  Camera,
  CameraResultType,
  CameraSource,
  Photo,
} from '@capacitor/camera';
import { finalize } from 'rxjs/operators';
import { ItemDetailService } from 'src/app/services/item-detail.service';
import { ActivatedRoute } from '@angular/router';
import { ReviewKeywordService } from 'src/app/services/review-keyword.service';

const IMAGE_DIR = 'stored-images';

interface LocalFile {
  name: string;
  path: string;
  data: string;
}
@Component({
  selector: 'app-review-write',
  templateUrl: './review-write.page.html',
  styleUrls: ['./review-write.page.scss'],
})
export class ReviewWritePage implements OnInit {
  public itemId: number;
  public ithItemDetail;

  public reviewKeywords;
  images: LocalFile[] = [];
  keys: string[];

  constructor(
    private plt: Platform,
    private http: HttpClient,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private itemDetailService: ItemDetailService,
    private route: ActivatedRoute,
    private reviewKeywordService: ReviewKeywordService,
    private navController: NavController
  ) {
    // set ithItemDetail
    this.itemId = +this.route.snapshot.paramMap.get('itemId');
    this.ithItemDetail = itemDetailService.getItemDetail(this.itemId);

    // set reviewKeyword
    this.reviewKeywords = reviewKeywordService.getAllReviewKeywords();
    this.keys = Object.keys(this.reviewKeywords);
  }

  async ngOnInit() {
    this.loadFiles();
  }

  onFollow(params): void {
    console.log('clicked following: ', params);
    if (params.btFollowing == '구독하기') {
      params.btFollowing = '구독중';
    } else {
      params.btFollowing = '구독하기';
    }
  }
  openPage(url: string) {
    this.navController.navigateForward(url, {});
  }

  async loadFiles() {
    this.images = []; // array 에 저장해서 들고 있음! 내부 저장소에 저장 되지 않음

    const loading = await this.loadingCtrl.create({
      message: '사진을 불러오는 중입니다...',
    });
    await loading.present();

    Filesystem.readdir({
      path: IMAGE_DIR,
      directory: Directory.Data,
    })
      .then(
        (result) => {
          this.loadFileData(result.files);
        },
        async (err) => {
          // Folder does not yet exists!
          await Filesystem.mkdir({
            path: IMAGE_DIR,
            directory: Directory.Data,
          });
        }
      )
      .then((_) => {
        loading.dismiss();
      });
  }

  // Get the actual base64 data of an image
  // base on the name of the file
  async loadFileData(fileNames: string[]) {
    for (let f of fileNames) {
      const filePath = `${IMAGE_DIR}/${f}`;

      const readFile = await Filesystem.readFile({
        path: filePath,
        directory: Directory.Data,
      });

      this.images.push({
        name: f,
        path: filePath,
        data: `data:image/jpeg;base64,${readFile.data}`,
      });
    }
  }

  // Little helper
  async presentToast(text) {
    const toast = await this.toastCtrl.create({
      message: text,
      duration: 3000,
    });
    toast.present();
  }

  async selectImage() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Photos, // Camera, Photos or Prompt!
    });

    if (image) {
      this.saveImage(image);
    }
  }

  // Create a new file from a capture image
  async saveImage(photo: Photo) {
    const base64Data = await this.readAsBase64(photo);

    const fileName = new Date().getTime() + '.jpeg';
    const savedFile = await Filesystem.writeFile({
      path: `${IMAGE_DIR}/${fileName}`,
      data: base64Data,
      directory: Directory.Data,
    });

    // Reload the file list
    // Improve by only loading for the new image and unshifting array!
    this.loadFiles();
  }
  // Convert the base64 to blob data
  // and create  formData with it
  async startUpload(file: LocalFile) {
    const response = await fetch(file.data);
    const blob = await response.blob();
    const formData = new FormData();
    formData.append('file', blob, file.name);
    this.uploadData(formData);
  }
  // Upload the formData to our API
  async uploadData(formData: FormData) {
    const loading = await this.loadingCtrl.create({
      message: 'Uploading image...',
    });
    await loading.present();

    // Use your own API!
    const url = 'http://localhost:8888/';

    this.http
      .post(url, formData)
      .pipe(
        finalize(() => {
          loading.dismiss();
        })
      )
      .subscribe((res) => {
        if (res['success']) {
          this.presentToast('파일을 업로드 했습니다!');
        } else {
          this.presentToast('파일 업로드를 실패 했습니다!');
        }
      });
  }
  async deleteImage(file: LocalFile) {
    await Filesystem.deleteFile({
      directory: Directory.Data,
      path: file.path,
    });
    this.loadFiles();
    this.presentToast('파일을 삭제했습니다!');
  }
  // https://ionicframework.com/docs/angular/your-first-app/3-saving-photos
  private async readAsBase64(photo: Photo) {
    if (this.plt.is('hybrid')) {
      const file = await Filesystem.readFile({
        path: photo.path,
      });

      return file.data;
    } else {
      // Fetch the photo, read as a blob, then convert to base64 format
      const response = await fetch(photo.webPath);
      const blob = await response.blob();

      return (await this.convertBlobToBase64(blob)) as string;
    }
  }

  // Helper function
  // eslint-disable-next-line @typescript-eslint/member-ordering
  convertBlobToBase64 = (blob: Blob) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(blob);
    });
}
