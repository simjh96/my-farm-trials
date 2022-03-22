"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_review-write_review-write_module_ts"],{

/***/ 666:
/*!*******************************************************************!*\
  !*** ./src/app/components/chip-sliders/chip-sliders.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChipSlidersComponent": () => (/* binding */ ChipSlidersComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _chip_sliders_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chip-sliders.component.html?ngResource */ 1261);
/* harmony import */ var _chip_sliders_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chip-sliders.component.scss?ngResource */ 8071);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let ChipSlidersComponent = class ChipSlidersComponent {
    constructor() { }
    ngOnInit() { }
};
ChipSlidersComponent.ctorParameters = () => [];
ChipSlidersComponent.propDecorators = {
    keys: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    reviewKeywords: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
ChipSlidersComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-chip-sliders',
        template: _chip_sliders_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_chip_sliders_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ChipSlidersComponent);



/***/ }),

/***/ 2549:
/*!*****************************************************************!*\
  !*** ./src/app/components/item-detail/item-detail.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemDetailComponent": () => (/* binding */ ItemDetailComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _item_detail_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item-detail.component.html?ngResource */ 2946);
/* harmony import */ var _item_detail_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item-detail.component.scss?ngResource */ 5390);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let ItemDetailComponent = class ItemDetailComponent {
    constructor() { }
    ngOnInit() { }
};
ItemDetailComponent.ctorParameters = () => [];
ItemDetailComponent.propDecorators = {
    ithItemDetail: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
ItemDetailComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-item-detail',
        template: _item_detail_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_item_detail_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ItemDetailComponent);



/***/ }),

/***/ 6613:
/*!*******************************************************************!*\
  !*** ./src/app/pages/review-write/review-write-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReviewWritePageRoutingModule": () => (/* binding */ ReviewWritePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _review_write_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./review-write.page */ 4370);




const routes = [
    {
        path: '',
        component: _review_write_page__WEBPACK_IMPORTED_MODULE_0__.ReviewWritePage
    }
];
let ReviewWritePageRoutingModule = class ReviewWritePageRoutingModule {
};
ReviewWritePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ReviewWritePageRoutingModule);



/***/ }),

/***/ 6987:
/*!***********************************************************!*\
  !*** ./src/app/pages/review-write/review-write.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReviewWritePageModule": () => (/* binding */ ReviewWritePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _review_write_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./review-write-routing.module */ 6613);
/* harmony import */ var _review_write_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./review-write.page */ 4370);
/* harmony import */ var src_app_components_item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/item-detail/item-detail.component */ 2549);
/* harmony import */ var src_app_components_chip_sliders_chip_sliders_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/chip-sliders/chip-sliders.component */ 666);
/* harmony import */ var src_app_directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/directives/shared-directives.module */ 6102);










let ReviewWritePageModule = class ReviewWritePageModule {
};
ReviewWritePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _review_write_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReviewWritePageRoutingModule,
            src_app_directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_4__.SharedDirectivesModule,
        ],
        declarations: [_review_write_page__WEBPACK_IMPORTED_MODULE_1__.ReviewWritePage, src_app_components_item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_2__.ItemDetailComponent, src_app_components_chip_sliders_chip_sliders_component__WEBPACK_IMPORTED_MODULE_3__.ChipSlidersComponent],
    })
], ReviewWritePageModule);



/***/ }),

/***/ 4370:
/*!*********************************************************!*\
  !*** ./src/app/pages/review-write/review-write.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReviewWritePage": () => (/* binding */ ReviewWritePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _review_write_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./review-write.page.html?ngResource */ 3849);
/* harmony import */ var _review_write_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./review-write.page.scss?ngResource */ 427);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/filesystem */ 1662);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/camera */ 4241);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 4661);
/* harmony import */ var src_app_services_item_detail_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/item-detail.service */ 9387);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_services_review_keyword_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/review-keyword.service */ 9606);
// https://devdactic.com/ionic-image-upload-capacitor/












const IMAGE_DIR = 'stored-images';
let ReviewWritePage = class ReviewWritePage {
    constructor(plt, http, loadingCtrl, toastCtrl, itemDetailService, route, reviewKeywordService) {
        this.plt = plt;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.itemDetailService = itemDetailService;
        this.route = route;
        this.reviewKeywordService = reviewKeywordService;
        this.images = [];
        // Helper function
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.convertBlobToBase64 = (blob) => new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onerror = reject;
            reader.onload = () => {
                resolve(reader.result);
            };
            reader.readAsDataURL(blob);
        });
        // set ithItemDetail
        this.itemId = +this.route.snapshot.paramMap.get('itemId');
        this.ithItemDetail = itemDetailService.getItemDetail(this.itemId);
        // set reviewKeyword
        this.reviewKeywords = reviewKeywordService.getAllReviewKeywords();
        this.keys = Object.keys(this.reviewKeywords);
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.loadFiles();
        });
    }
    loadFiles() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.images = []; // array 에 저장해서 들고 있음! 내부 저장소에 저장 되지 않음
            const loading = yield this.loadingCtrl.create({
                message: '사진을 불러오는 중입니다...',
            });
            yield loading.present();
            _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Filesystem.readdir({
                path: IMAGE_DIR,
                directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Directory.Data,
            })
                .then((result) => {
                this.loadFileData(result.files);
            }, (err) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                // Folder does not yet exists!
                yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Filesystem.mkdir({
                    path: IMAGE_DIR,
                    directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Directory.Data,
                });
            }))
                .then((_) => {
                loading.dismiss();
            });
        });
    }
    // Get the actual base64 data of an image
    // base on the name of the file
    loadFileData(fileNames) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            for (let f of fileNames) {
                const filePath = `${IMAGE_DIR}/${f}`;
                const readFile = yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Filesystem.readFile({
                    path: filePath,
                    directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Directory.Data,
                });
                this.images.push({
                    name: f,
                    path: filePath,
                    data: `data:image/jpeg;base64,${readFile.data}`,
                });
            }
        });
    }
    // Little helper
    presentToast(text) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: text,
                duration: 3000,
            });
            toast.present();
        });
    }
    selectImage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.Camera.getPhoto({
                quality: 90,
                allowEditing: false,
                resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.CameraResultType.Uri,
                source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.CameraSource.Photos, // Camera, Photos or Prompt!
            });
            if (image) {
                this.saveImage(image);
            }
        });
    }
    // Create a new file from a capture image
    saveImage(photo) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const base64Data = yield this.readAsBase64(photo);
            const fileName = new Date().getTime() + '.jpeg';
            const savedFile = yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Filesystem.writeFile({
                path: `${IMAGE_DIR}/${fileName}`,
                data: base64Data,
                directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Directory.Data,
            });
            // Reload the file list
            // Improve by only loading for the new image and unshifting array!
            this.loadFiles();
        });
    }
    // Convert the base64 to blob data
    // and create  formData with it
    startUpload(file) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const response = yield fetch(file.data);
            const blob = yield response.blob();
            const formData = new FormData();
            formData.append('file', blob, file.name);
            this.uploadData(formData);
        });
    }
    // Upload the formData to our API
    uploadData(formData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: 'Uploading image...',
            });
            yield loading.present();
            // Use your own API!
            const url = 'http://localhost:8888/';
            this.http
                .post(url, formData)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.finalize)(() => {
                loading.dismiss();
            }))
                .subscribe((res) => {
                if (res['success']) {
                    this.presentToast('파일을 업로드 했습니다!');
                }
                else {
                    this.presentToast('파일 업로드를 실패 했습니다!');
                }
            });
        });
    }
    deleteImage(file) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Filesystem.deleteFile({
                directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Directory.Data,
                path: file.path,
            });
            this.loadFiles();
            this.presentToast('파일을 삭제했습니다!');
        });
    }
    // https://ionicframework.com/docs/angular/your-first-app/3-saving-photos
    readAsBase64(photo) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (this.plt.is('hybrid')) {
                const file = yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Filesystem.readFile({
                    path: photo.path,
                });
                return file.data;
            }
            else {
                // Fetch the photo, read as a blob, then convert to base64 format
                const response = yield fetch(photo.webPath);
                const blob = yield response.blob();
                return (yield this.convertBlobToBase64(blob));
            }
        });
    }
};
ReviewWritePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController },
    { type: src_app_services_item_detail_service__WEBPACK_IMPORTED_MODULE_4__.ItemDetailService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute },
    { type: src_app_services_review_keyword_service__WEBPACK_IMPORTED_MODULE_5__.ReviewKeywordService }
];
ReviewWritePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-review-write',
        template: _review_write_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_review_write_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ReviewWritePage);



/***/ }),

/***/ 9606:
/*!****************************************************!*\
  !*** ./src/app/services/review-keyword.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReviewKeywordService": () => (/* binding */ ReviewKeywordService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


let ReviewKeywordService = class ReviewKeywordService {
    constructor() {
        this.keywords = {
            type01: [
                ['달아요', 'star-outline'],
                ['상큼해요', 'star-half-outline'],
                ['잘 익었어요', 'snow-outline'],
                ['새콤해요', 'share-outline'],
                ['신선해요', 'search-circle-outline'],
                ['알차요', 'stats-chart-outline'],
            ],
            type02: [
                ['가격이 적당해요', 'shirt-outline'],
                ['포장이 꼼꼼해요', 'shapes-outline'],
                ['판매자가 친절해요', 'pizza-outline'],
            ],
            type03: [
                ['또 먹고 싶어요', 'people-circle-outline'],
                ['또 샀어요', 'paw-outline'],
                ['아이가 좋아해요', 'person-circle-outline'],
                ['선물했어요', 'notifications-outline'],
            ],
        };
    }
    getReviewKeywords(type) {
        return this.keywords[type];
    }
    getAllReviewKeywords() {
        const result = {};
        Object.assign(result, this.keywords);
        return result;
    }
};
ReviewKeywordService.ctorParameters = () => [];
ReviewKeywordService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root',
    })
], ReviewKeywordService);



/***/ }),

/***/ 4830:
/*!****************************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/definitions.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraSource": () => (/* binding */ CameraSource),
/* harmony export */   "CameraDirection": () => (/* binding */ CameraDirection),
/* harmony export */   "CameraResultType": () => (/* binding */ CameraResultType)
/* harmony export */ });
var CameraSource;
(function (CameraSource) {
    /**
     * Prompts the user to select either the photo album or take a photo.
     */
    CameraSource["Prompt"] = "PROMPT";
    /**
     * Take a new photo using the camera.
     */
    CameraSource["Camera"] = "CAMERA";
    /**
     * Pick an existing photo fron the gallery or photo album.
     */
    CameraSource["Photos"] = "PHOTOS";
})(CameraSource || (CameraSource = {}));
var CameraDirection;
(function (CameraDirection) {
    CameraDirection["Rear"] = "REAR";
    CameraDirection["Front"] = "FRONT";
})(CameraDirection || (CameraDirection = {}));
var CameraResultType;
(function (CameraResultType) {
    CameraResultType["Uri"] = "uri";
    CameraResultType["Base64"] = "base64";
    CameraResultType["DataUrl"] = "dataUrl";
})(CameraResultType || (CameraResultType = {}));


/***/ }),

/***/ 4241:
/*!**********************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraDirection": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraDirection),
/* harmony export */   "CameraResultType": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraResultType),
/* harmony export */   "CameraSource": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraSource),
/* harmony export */   "Camera": () => (/* binding */ Camera)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 5099);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 4830);

const Camera = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Camera', {
    web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_camera_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 1327)).then(m => new m.CameraWeb()),
});




/***/ }),

/***/ 5099:
/*!****************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Capacitor": () => (/* binding */ Capacitor),
/* harmony export */   "CapacitorException": () => (/* binding */ CapacitorException),
/* harmony export */   "CapacitorPlatforms": () => (/* binding */ CapacitorPlatforms),
/* harmony export */   "ExceptionCode": () => (/* binding */ ExceptionCode),
/* harmony export */   "Plugins": () => (/* binding */ Plugins),
/* harmony export */   "WebPlugin": () => (/* binding */ WebPlugin),
/* harmony export */   "WebView": () => (/* binding */ WebView),
/* harmony export */   "addPlatform": () => (/* binding */ addPlatform),
/* harmony export */   "registerPlugin": () => (/* binding */ registerPlugin),
/* harmony export */   "registerWebPlugin": () => (/* binding */ registerWebPlugin),
/* harmony export */   "setPlatform": () => (/* binding */ setPlatform)
/* harmony export */ });
/* harmony import */ var C_Users_simjh96_my_farm_trials_trial01_my_farm_01_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);


/*! Capacitor: https://capacitorjs.com/ - MIT License */
const createCapacitorPlatforms = win => {
  const defaultPlatformMap = new Map();
  defaultPlatformMap.set('web', {
    name: 'web'
  });
  const capPlatforms = win.CapacitorPlatforms || {
    currentPlatform: {
      name: 'web'
    },
    platforms: defaultPlatformMap
  };

  const addPlatform = (name, platform) => {
    capPlatforms.platforms.set(name, platform);
  };

  const setPlatform = name => {
    if (capPlatforms.platforms.has(name)) {
      capPlatforms.currentPlatform = capPlatforms.platforms.get(name);
    }
  };

  capPlatforms.addPlatform = addPlatform;
  capPlatforms.setPlatform = setPlatform;
  return capPlatforms;
};

const initPlatforms = win => win.CapacitorPlatforms = createCapacitorPlatforms(win);
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */


const CapacitorPlatforms = /*#__PURE__*/initPlatforms(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */

const addPlatform = CapacitorPlatforms.addPlatform;
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */

const setPlatform = CapacitorPlatforms.setPlatform;

const legacyRegisterWebPlugin = (cap, webPlugin) => {
  var _a;

  const config = webPlugin.config;
  const Plugins = cap.Plugins;

  if (!config || !config.name) {
    // TODO: add link to upgrade guide
    throw new Error(`Capacitor WebPlugin is using the deprecated "registerWebPlugin()" function, but without the config. Please use "registerPlugin()" instead to register this web plugin."`);
  } // TODO: add link to upgrade guide


  console.warn(`Capacitor plugin "${config.name}" is using the deprecated "registerWebPlugin()" function`);

  if (!Plugins[config.name] || ((_a = config === null || config === void 0 ? void 0 : config.platforms) === null || _a === void 0 ? void 0 : _a.includes(cap.getPlatform()))) {
    // Add the web plugin into the plugins registry if there already isn't
    // an existing one. If it doesn't already exist, that means
    // there's no existing native implementation for it.
    // - OR -
    // If we already have a plugin registered (meaning it was defined in the native layer),
    // then we should only overwrite it if the corresponding web plugin activates on
    // a certain platform. For example: Geolocation uses the WebPlugin on Android but not iOS
    Plugins[config.name] = webPlugin;
  }
};

var ExceptionCode;

(function (ExceptionCode) {
  /**
   * API is not implemented.
   *
   * This usually means the API can't be used because it is not implemented for
   * the current platform.
   */
  ExceptionCode["Unimplemented"] = "UNIMPLEMENTED";
  /**
   * API is not available.
   *
   * This means the API can't be used right now because:
   *   - it is currently missing a prerequisite, such as network connectivity
   *   - it requires a particular platform or browser version
   */

  ExceptionCode["Unavailable"] = "UNAVAILABLE";
})(ExceptionCode || (ExceptionCode = {}));

class CapacitorException extends Error {
  constructor(message, code) {
    super(message);
    this.message = message;
    this.code = code;
  }

}

const getPlatformId = win => {
  var _a, _b;

  if (win === null || win === void 0 ? void 0 : win.androidBridge) {
    return 'android';
  } else if ((_b = (_a = win === null || win === void 0 ? void 0 : win.webkit) === null || _a === void 0 ? void 0 : _a.messageHandlers) === null || _b === void 0 ? void 0 : _b.bridge) {
    return 'ios';
  } else {
    return 'web';
  }
};

const createCapacitor = win => {
  var _a, _b, _c, _d, _e;

  const capCustomPlatform = win.CapacitorCustomPlatform || null;
  const cap = win.Capacitor || {};
  const Plugins = cap.Plugins = cap.Plugins || {};
  /**
   * @deprecated Use `capCustomPlatform` instead, default functions like registerPlugin will function with the new object.
   */

  const capPlatforms = win.CapacitorPlatforms;

  const defaultGetPlatform = () => {
    return capCustomPlatform !== null ? capCustomPlatform.name : getPlatformId(win);
  };

  const getPlatform = ((_a = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _a === void 0 ? void 0 : _a.getPlatform) || defaultGetPlatform;

  const defaultIsNativePlatform = () => getPlatform() !== 'web';

  const isNativePlatform = ((_b = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _b === void 0 ? void 0 : _b.isNativePlatform) || defaultIsNativePlatform;

  const defaultIsPluginAvailable = pluginName => {
    const plugin = registeredPlugins.get(pluginName);

    if (plugin === null || plugin === void 0 ? void 0 : plugin.platforms.has(getPlatform())) {
      // JS implementation available for the current platform.
      return true;
    }

    if (getPluginHeader(pluginName)) {
      // Native implementation available.
      return true;
    }

    return false;
  };

  const isPluginAvailable = ((_c = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _c === void 0 ? void 0 : _c.isPluginAvailable) || defaultIsPluginAvailable;

  const defaultGetPluginHeader = pluginName => {
    var _a;

    return (_a = cap.PluginHeaders) === null || _a === void 0 ? void 0 : _a.find(h => h.name === pluginName);
  };

  const getPluginHeader = ((_d = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _d === void 0 ? void 0 : _d.getPluginHeader) || defaultGetPluginHeader;

  const handleError = err => win.console.error(err);

  const pluginMethodNoop = (_target, prop, pluginName) => {
    return Promise.reject(`${pluginName} does not have an implementation of "${prop}".`);
  };

  const registeredPlugins = new Map();

  const defaultRegisterPlugin = (pluginName, jsImplementations = {}) => {
    const registeredPlugin = registeredPlugins.get(pluginName);

    if (registeredPlugin) {
      console.warn(`Capacitor plugin "${pluginName}" already registered. Cannot register plugins twice.`);
      return registeredPlugin.proxy;
    }

    const platform = getPlatform();
    const pluginHeader = getPluginHeader(pluginName);
    let jsImplementation;

    const loadPluginImplementation = /*#__PURE__*/function () {
      var _ref = (0,C_Users_simjh96_my_farm_trials_trial01_my_farm_01_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (!jsImplementation && platform in jsImplementations) {
          jsImplementation = typeof jsImplementations[platform] === 'function' ? jsImplementation = yield jsImplementations[platform]() : jsImplementation = jsImplementations[platform];
        } else if (capCustomPlatform !== null && !jsImplementation && 'web' in jsImplementations) {
          jsImplementation = typeof jsImplementations['web'] === 'function' ? jsImplementation = yield jsImplementations['web']() : jsImplementation = jsImplementations['web'];
        }

        return jsImplementation;
      });

      return function loadPluginImplementation() {
        return _ref.apply(this, arguments);
      };
    }();

    const createPluginMethod = (impl, prop) => {
      var _a, _b;

      if (pluginHeader) {
        const methodHeader = pluginHeader === null || pluginHeader === void 0 ? void 0 : pluginHeader.methods.find(m => prop === m.name);

        if (methodHeader) {
          if (methodHeader.rtype === 'promise') {
            return options => cap.nativePromise(pluginName, prop.toString(), options);
          } else {
            return (options, callback) => cap.nativeCallback(pluginName, prop.toString(), options, callback);
          }
        } else if (impl) {
          return (_a = impl[prop]) === null || _a === void 0 ? void 0 : _a.bind(impl);
        }
      } else if (impl) {
        return (_b = impl[prop]) === null || _b === void 0 ? void 0 : _b.bind(impl);
      } else {
        throw new CapacitorException(`"${pluginName}" plugin is not implemented on ${platform}`, ExceptionCode.Unimplemented);
      }
    };

    const createPluginMethodWrapper = prop => {
      let remove;

      const wrapper = (...args) => {
        const p = loadPluginImplementation().then(impl => {
          const fn = createPluginMethod(impl, prop);

          if (fn) {
            const p = fn(...args);
            remove = p === null || p === void 0 ? void 0 : p.remove;
            return p;
          } else {
            throw new CapacitorException(`"${pluginName}.${prop}()" is not implemented on ${platform}`, ExceptionCode.Unimplemented);
          }
        });

        if (prop === 'addListener') {
          p.remove = /*#__PURE__*/(0,C_Users_simjh96_my_farm_trials_trial01_my_farm_01_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            return remove();
          });
        }

        return p;
      }; // Some flair ✨


      wrapper.toString = () => `${prop.toString()}() { [capacitor code] }`;

      Object.defineProperty(wrapper, 'name', {
        value: prop,
        writable: false,
        configurable: false
      });
      return wrapper;
    };

    const addListener = createPluginMethodWrapper('addListener');
    const removeListener = createPluginMethodWrapper('removeListener');

    const addListenerNative = (eventName, callback) => {
      const call = addListener({
        eventName
      }, callback);

      const remove = /*#__PURE__*/function () {
        var _ref3 = (0,C_Users_simjh96_my_farm_trials_trial01_my_farm_01_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          const callbackId = yield call;
          removeListener({
            eventName,
            callbackId
          }, callback);
        });

        return function remove() {
          return _ref3.apply(this, arguments);
        };
      }();

      const p = new Promise(resolve => call.then(() => resolve({
        remove
      })));
      p.remove = /*#__PURE__*/(0,C_Users_simjh96_my_farm_trials_trial01_my_farm_01_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        console.warn(`Using addListener() without 'await' is deprecated.`);
        yield remove();
      });
      return p;
    };

    const proxy = new Proxy({}, {
      get(_, prop) {
        switch (prop) {
          // https://github.com/facebook/react/issues/20030
          case '$$typeof':
            return undefined;

          case 'toJSON':
            return () => ({});

          case 'addListener':
            return pluginHeader ? addListenerNative : addListener;

          case 'removeListener':
            return removeListener;

          default:
            return createPluginMethodWrapper(prop);
        }
      }

    });
    Plugins[pluginName] = proxy;
    registeredPlugins.set(pluginName, {
      name: pluginName,
      proxy,
      platforms: new Set([...Object.keys(jsImplementations), ...(pluginHeader ? [platform] : [])])
    });
    return proxy;
  };

  const registerPlugin = ((_e = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _e === void 0 ? void 0 : _e.registerPlugin) || defaultRegisterPlugin; // Add in convertFileSrc for web, it will already be available in native context

  if (!cap.convertFileSrc) {
    cap.convertFileSrc = filePath => filePath;
  }

  cap.getPlatform = getPlatform;
  cap.handleError = handleError;
  cap.isNativePlatform = isNativePlatform;
  cap.isPluginAvailable = isPluginAvailable;
  cap.pluginMethodNoop = pluginMethodNoop;
  cap.registerPlugin = registerPlugin;
  cap.Exception = CapacitorException;
  cap.DEBUG = !!cap.DEBUG;
  cap.isLoggingEnabled = !!cap.isLoggingEnabled; // Deprecated props

  cap.platform = cap.getPlatform();
  cap.isNative = cap.isNativePlatform();
  return cap;
};

const initCapacitorGlobal = win => win.Capacitor = createCapacitor(win);

const Capacitor = /*#__PURE__*/initCapacitorGlobal(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
const registerPlugin = Capacitor.registerPlugin;
/**
 * @deprecated Provided for backwards compatibility for Capacitor v2 plugins.
 * Capacitor v3 plugins should import the plugin directly. This "Plugins"
 * export is deprecated in v3, and will be removed in v4.
 */

const Plugins = Capacitor.Plugins;
/**
 * Provided for backwards compatibility. Use the registerPlugin() API
 * instead, and provide the web plugin as the "web" implmenetation.
 * For example
 *
 * export const Example = registerPlugin('Example', {
 *   web: () => import('./web').then(m => new m.Example())
 * })
 *
 * @deprecated Deprecated in v3, will be removed from v4.
 */

const registerWebPlugin = plugin => legacyRegisterWebPlugin(Capacitor, plugin);
/**
 * Base class web plugins should extend.
 */


class WebPlugin {
  constructor(config) {
    this.listeners = {};
    this.windowListeners = {};

    if (config) {
      // TODO: add link to upgrade guide
      console.warn(`Capacitor WebPlugin "${config.name}" config object was deprecated in v3 and will be removed in v4.`);
      this.config = config;
    }
  }

  addListener(eventName, listenerFunc) {
    var _this = this;

    const listeners = this.listeners[eventName];

    if (!listeners) {
      this.listeners[eventName] = [];
    }

    this.listeners[eventName].push(listenerFunc); // If we haven't added a window listener for this event and it requires one,
    // go ahead and add it

    const windowListener = this.windowListeners[eventName];

    if (windowListener && !windowListener.registered) {
      this.addWindowListener(windowListener);
    }

    const remove = /*#__PURE__*/function () {
      var _ref5 = (0,C_Users_simjh96_my_farm_trials_trial01_my_farm_01_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        return _this.removeListener(eventName, listenerFunc);
      });

      return function remove() {
        return _ref5.apply(this, arguments);
      };
    }();

    const p = Promise.resolve({
      remove
    });
    Object.defineProperty(p, 'remove', {
      value: function () {
        var _ref6 = (0,C_Users_simjh96_my_farm_trials_trial01_my_farm_01_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          console.warn(`Using addListener() without 'await' is deprecated.`);
          yield remove();
        });

        return function value() {
          return _ref6.apply(this, arguments);
        };
      }()
    });
    return p;
  }

  removeAllListeners() {
    var _this2 = this;

    return (0,C_Users_simjh96_my_farm_trials_trial01_my_farm_01_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.listeners = {};

      for (const listener in _this2.windowListeners) {
        _this2.removeWindowListener(_this2.windowListeners[listener]);
      }

      _this2.windowListeners = {};
    })();
  }

  notifyListeners(eventName, data) {
    const listeners = this.listeners[eventName];

    if (listeners) {
      listeners.forEach(listener => listener(data));
    }
  }

  hasListeners(eventName) {
    return !!this.listeners[eventName].length;
  }

  registerWindowListener(windowEventName, pluginEventName) {
    this.windowListeners[pluginEventName] = {
      registered: false,
      windowEventName,
      pluginEventName,
      handler: event => {
        this.notifyListeners(pluginEventName, event);
      }
    };
  }

  unimplemented(msg = 'not implemented') {
    return new Capacitor.Exception(msg, ExceptionCode.Unimplemented);
  }

  unavailable(msg = 'not available') {
    return new Capacitor.Exception(msg, ExceptionCode.Unavailable);
  }

  removeListener(eventName, listenerFunc) {
    var _this3 = this;

    return (0,C_Users_simjh96_my_farm_trials_trial01_my_farm_01_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const listeners = _this3.listeners[eventName];

      if (!listeners) {
        return;
      }

      const index = listeners.indexOf(listenerFunc);

      _this3.listeners[eventName].splice(index, 1); // If there are no more listeners for this type of event,
      // remove the window listener


      if (!_this3.listeners[eventName].length) {
        _this3.removeWindowListener(_this3.windowListeners[eventName]);
      }
    })();
  }

  addWindowListener(handle) {
    window.addEventListener(handle.windowEventName, handle.handler);
    handle.registered = true;
  }

  removeWindowListener(handle) {
    if (!handle) {
      return;
    }

    window.removeEventListener(handle.windowEventName, handle.handler);
    handle.registered = false;
  }

}

const WebView = /*#__PURE__*/registerPlugin('WebView');


/***/ }),

/***/ 3568:
/*!********************************************************************!*\
  !*** ./node_modules/@capacitor/filesystem/dist/esm/definitions.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Directory": () => (/* binding */ Directory),
/* harmony export */   "Encoding": () => (/* binding */ Encoding),
/* harmony export */   "FilesystemDirectory": () => (/* binding */ FilesystemDirectory),
/* harmony export */   "FilesystemEncoding": () => (/* binding */ FilesystemEncoding)
/* harmony export */ });
var Directory;
(function (Directory) {
    /**
     * The Documents directory
     * On iOS it's the app's documents directory.
     * Use this directory to store user-generated content.
     * On Android it's the Public Documents folder, so it's accessible from other apps.
     * It's not accesible on Android 10 unless the app enables legacy External Storage
     * by adding `android:requestLegacyExternalStorage="true"` in the `application` tag
     * in the `AndroidManifest.xml`.
     * It's not accesible on Android 11 or newer.
     *
     * @since 1.0.0
     */
    Directory["Documents"] = "DOCUMENTS";
    /**
     * The Data directory
     * On iOS it will use the Documents directory.
     * On Android it's the directory holding application files.
     * Files will be deleted when the application is uninstalled.
     *
     * @since 1.0.0
     */
    Directory["Data"] = "DATA";
    /**
     * The Library directory
     * On iOS it will use the Library directory.
     * On Android it's the directory holding application files.
     * Files will be deleted when the application is uninstalled.
     *
     * @since 1.1.0
     */
    Directory["Library"] = "LIBRARY";
    /**
     * The Cache directory
     * Can be deleted in cases of low memory, so use this directory to write app-specific files
     * that your app can re-create easily.
     *
     * @since 1.0.0
     */
    Directory["Cache"] = "CACHE";
    /**
     * The external directory
     * On iOS it will use the Documents directory
     * On Android it's the directory on the primary shared/external
     * storage device where the application can place persistent files it owns.
     * These files are internal to the applications, and not typically visible
     * to the user as media.
     * Files will be deleted when the application is uninstalled.
     *
     * @since 1.0.0
     */
    Directory["External"] = "EXTERNAL";
    /**
     * The external storage directory
     * On iOS it will use the Documents directory
     * On Android it's the primary shared/external storage directory.
     * It's not accesible on Android 10 unless the app enables legacy External Storage
     * by adding `android:requestLegacyExternalStorage="true"` in the `application` tag
     * in the `AndroidManifest.xml`.
     * It's not accesible on Android 11 or newer.
     *
     * @since 1.0.0
     */
    Directory["ExternalStorage"] = "EXTERNAL_STORAGE";
})(Directory || (Directory = {}));
var Encoding;
(function (Encoding) {
    /**
     * Eight-bit UCS Transformation Format
     *
     * @since 1.0.0
     */
    Encoding["UTF8"] = "utf8";
    /**
     * Seven-bit ASCII, a.k.a. ISO646-US, a.k.a. the Basic Latin block of the
     * Unicode character set
     * This encoding is only supported on Android.
     *
     * @since 1.0.0
     */
    Encoding["ASCII"] = "ascii";
    /**
     * Sixteen-bit UCS Transformation Format, byte order identified by an
     * optional byte-order mark
     * This encoding is only supported on Android.
     *
     * @since 1.0.0
     */
    Encoding["UTF16"] = "utf16";
})(Encoding || (Encoding = {}));
/**
 * @deprecated Use `Directory`.
 * @since 1.0.0
 */
const FilesystemDirectory = Directory;
/**
 * @deprecated Use `Encoding`.
 * @since 1.0.0
 */
const FilesystemEncoding = Encoding;


/***/ }),

/***/ 1662:
/*!**************************************************************!*\
  !*** ./node_modules/@capacitor/filesystem/dist/esm/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Directory": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.Directory),
/* harmony export */   "Encoding": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.Encoding),
/* harmony export */   "FilesystemDirectory": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.FilesystemDirectory),
/* harmony export */   "FilesystemEncoding": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.FilesystemEncoding),
/* harmony export */   "Filesystem": () => (/* binding */ Filesystem)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 5099);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 3568);

const Filesystem = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Filesystem', {
    web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_filesystem_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 4046)).then(m => new m.FilesystemWeb()),
});




/***/ }),

/***/ 8071:
/*!********************************************************************************!*\
  !*** ./src/app/components/chip-sliders/chip-sliders.component.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = ".keyword-chip-select ion-slide {\n  height: 25px;\n  border-radius: 15px;\n  margin: 2px;\n  color: rgba(61, 60, 60, 0.692);\n  border: 1px solid rgba(61, 60, 60, 0.692);\n}\n.keyword-chip-select ion-slide ion-grid {\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: center;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoaXAtc2xpZGVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLHlDQUFBO0FBQUo7QUFDSTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFDTiIsImZpbGUiOiJjaGlwLXNsaWRlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIua2V5d29yZC1jaGlwLXNlbGVjdCB7XHJcbiAgaW9uLXNsaWRlIHtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBtYXJnaW46IDJweDtcclxuICAgIGNvbG9yOiByZ2JhKDYxLCA2MCwgNjAsIDAuNjkyKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNjEsIDYwLCA2MCwgMC42OTIpO1xyXG4gICAgaW9uLWdyaWQge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */";

/***/ }),

/***/ 5390:
/*!******************************************************************************!*\
  !*** ./src/app/components/item-detail/item-detail.component.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = ".order-detail ion-grid:nth-child(1) {\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.order-detail ion-grid ion-img {\n  height: 150px;\n  object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0tZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQUo7QUFHSTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtBQUROIiwiZmlsZSI6Iml0ZW0tZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9yZGVyLWRldGFpbCB7XHJcbiAgaW9uLWdyaWQ6bnRoLWNoaWxkKDEpIHtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gIGlvbi1ncmlkIHtcclxuICAgIGlvbi1pbWcge1xyXG4gICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 427:
/*!**********************************************************************!*\
  !*** ./src/app/pages/review-write/review-write.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "ion-card ion-card-content {\n  border-bottom: 1px solid var(--dv-background-border);\n}\n\n.text-write ion-textarea {\n  background-color: white;\n  border: 1px solid rgba(131, 115, 115, 0.351);\n}\n\n.photo-upload {\n  display: flex;\n  flex-wrap: nowrap;\n  overflow: scroll;\n  padding: 0px 20px;\n}\n\n.photo-upload ion-thumbnail {\n  position: relative;\n  border: 0.1px solid rgba(61, 60, 60, 0.392);\n  background-color: rgba(61, 60, 60, 0.092);\n  border-radius: 2px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.photo-upload ion-label {\n  display: flex;\n  width: 100px;\n  overflow: auto;\n}\n\n.photo-upload ion-grid {\n  position: relative;\n}\n\n.photo-upload ion-grid ion-button {\n  position: absolute;\n  bottom: -5px;\n  left: 70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJldmlldy13cml0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxvREFBQTtBQUFKOztBQVFFO0VBRUUsdUJBQUE7RUFDQSw0Q0FBQTtBQU5KOztBQVNBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQU5GOztBQU9FO0VBQ0Usa0JBQUE7RUFDQSwyQ0FBQTtFQUNBLHlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUxKOztBQU9FO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBTEo7O0FBT0U7RUFDRSxrQkFBQTtBQUxKOztBQU1JO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQUpOIiwiZmlsZSI6InJldmlldy13cml0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCB7XHJcbiAgaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZHYtYmFja2dyb3VuZC1ib3JkZXIpO1xyXG4gIH1cclxufVxyXG5cclxuLnRleHQtd3JpdGUge1xyXG4gIGlvbi1sYWJlbCB7XHJcbiAgICAvLyBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG4gIGlvbi10ZXh0YXJlYSB7XHJcbiAgICAvLyBtYXJnaW46IDVweCAwcHggMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMzEsIDExNSwgMTE1LCAwLjM1MSk7XHJcbiAgfVxyXG59XHJcbi5waG90by11cGxvYWQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICBwYWRkaW5nOiAwcHggMjBweDtcclxuICBpb24tdGh1bWJuYWlsIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlcjogMC4xcHggc29saWQgcmdiYSg2MSwgNjAsIDYwLCAwLjM5Mik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDYxLCA2MCwgNjAsIDAuMDkyKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gIGlvbi1sYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgfVxyXG4gIGlvbi1ncmlkIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJvdHRvbTogLTVweDtcclxuICAgICAgbGVmdDogNzBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 1261:
/*!********************************************************************************!*\
  !*** ./src/app/components/chip-sliders/chip-sliders.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"keyword-chip-select ion-margin-horizontal green\">\n  <h3 class=\"text-size-xs font-regular text-color-secondary ion-no-margin\">\n    키워드 모음집\n  </h3>\n\n  <ion-slides\n    [options]=\"{ slidesPerView: 'auto', zoom: false, grabCursor: true }\"\n    *ngFor=\"let key of keys\"\n  >\n    <ion-slide\n      *ngFor=\"let values of reviewKeywords[key]\"\n      [style]=\"'width: ' + (values[0].length * 12 + 55) + 'px;'\"\n    >\n      <ion-grid>\n        <ion-icon class=\"icon-color-accent\" [name]=\"values[1]\"></ion-icon>\n        <ion-label class=\"text-size-sm\">{{ values[0] }}</ion-label>\n        <ion-icon name=\"close-circle\"></ion-icon>\n      </ion-grid>\n    </ion-slide>\n  </ion-slides>\n</div>\n";

/***/ }),

/***/ 2946:
/*!******************************************************************************!*\
  !*** ./src/app/components/item-detail/item-detail.component.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"order-detail\">\n  <ion-grid>\n    <h1 class=\"text-size-lg\">주문 상품 상세</h1>\n  </ion-grid>\n  <ion-grid>\n    <ion-row>\n      <ion-col class=\"ion-no-padding\" size=\"12\" size-md=\"6\" size-lg=\"4\">\n        <ion-card class=\"no-box-shadow border color-basic\">\n          <!--Card image-->\n\n          <ion-img [src]=\"ithItemDetail.image\"></ion-img>\n\n          <!--Card content-->\n          <ion-card-content class=\"transparent\">\n            <!--Card subtitle-->\n            <ion-card-title>\n              <h1 class=\"text-size-lg text-color-primary\">\n                {{ ithItemDetail.title }}\n              </h1>\n            </ion-card-title>\n            <!--Card description-->\n            <p class=\"text-size-xs text-color-secondary\">\n              {{ ithItemDetail.description }}\n            </p>\n          </ion-card-content>\n          <ion-item class=\"transparent\" lines=\"none\">\n            <ion-avatar slot=\"start\">\n              <img [src]=\"ithItemDetail.avatar\" />\n            </ion-avatar>\n            <ion-label>\n              <h2 class=\"text-size-sm ion-no-margin\">\n                {{ ithItemDetail.avatarTitle }}\n              </h2>\n              <p class=\"text-size-p ion-no-margin\">\n                {{ ithItemDetail.avatarSubTitle }}\n              </p>\n            </ion-label>\n            <ion-button\n              class=\"button-small color-primary no-box-shadow\"\n              (click)=\"onFollowFunc(item, $event)\"\n              slot=\"end\"\n              shape=\"round\"\n            >\n              {{ ithItemDetail.btFollowing }}\n            </ion-button>\n          </ion-item>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</div>\n";

/***/ }),

/***/ 3849:
/*!**********************************************************************!*\
  !*** ./src/app/pages/review-write/review-write.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header #header class=\"green\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-capitalize\">리뷰 작성</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content scrollEvents=\"true\" [appHideHeader]=\"header\" class=\"green\">\n  <app-item-detail [ithItemDetail]=\"ithItemDetail\"></app-item-detail>\n  <app-chip-sliders\n    [keys]=\"keys\"\n    [reviewKeywords]=\"reviewKeywords\"\n  ></app-chip-sliders>\n\n  <ion-grid class=\"text-write green\">\n    <ion-textarea\n      class=\"border\"\n      rows=\"6\"\n      cols=\"20\"\n      placeholder=\"키워드를 이용해 내용 작성 기능 구현 필요...\"\n    ></ion-textarea>\n    <ion-button class=\"submit\" color=\"success\" expand=\"full\"\n      >리뷰완료</ion-button\n    >\n  </ion-grid>\n\n  <div class=\"photo-upload ion-margin\">\n    <h3 *ngIf=\"images.length === 0\" class=\"ion-padding ion-text-center\">\n      사진을 등록하세요!\n    </h3>\n    <ion-grid>\n      <ion-thumbnail (click)=\"selectImage()\">\n        <p class=\"tex-size-sm\">사진 추가</p>\n        <ion-icon name=\"camera\" class=\"green text-size-lg\"></ion-icon>\n      </ion-thumbnail>\n    </ion-grid>\n\n    <ion-grid *ngFor=\"let file of images; let i = index\">\n      <ion-thumbnail>\n        <ion-img [src]=\"file.data\"></ion-img>\n      </ion-thumbnail>\n      <ion-label class=\"ion-text-wrap\">\n        {{ (file.path.length>10)? '...'+(file.path |\n        slice:-10:file.path.length):(file.path) }}\n      </ion-label>\n      <ion-button fill=\"clear\" (click)=\"deleteImage(file)\">\n        <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n      </ion-button>\n    </ion-grid>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_review-write_review-write_module_ts.js.map