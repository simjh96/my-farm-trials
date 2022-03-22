"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_review-search_review-search_module_ts"],{

/***/ 8877:
/*!*************************************************************!*\
  !*** ./src/app/components/item-list/item-list.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemListComponent": () => (/* binding */ ItemListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _item_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item-list.component.html?ngResource */ 5158);
/* harmony import */ var _item_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item-list.component.scss?ngResource */ 8735);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_item_detail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/item-detail.service */ 9387);






let ItemListComponent = class ItemListComponent {
    constructor(navController, itemDetailService) {
        this.navController = navController;
        this.itemDetailService = itemDetailService;
        this.items = itemDetailService.itemDetail.itemAvatars;
        this.cardWide = true;
    }
    ngOnInit() { }
    openPage(url) {
        this.navController.navigateForward(url, {});
    }
};
ItemListComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController },
    { type: src_app_services_item_detail_service__WEBPACK_IMPORTED_MODULE_2__.ItemDetailService }
];
ItemListComponent.propDecorators = {
    cardWide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
ItemListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-item-list',
        template: _item_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_item_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ItemListComponent);



/***/ }),

/***/ 9330:
/*!*****************************************************************************!*\
  !*** ./src/app/components/search-bar-simple/search-bar-simple.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchBarSimpleComponent": () => (/* binding */ SearchBarSimpleComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _search_bar_simple_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-bar-simple.component.html?ngResource */ 8066);
/* harmony import */ var _search_bar_simple_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search-bar-simple.component.scss?ngResource */ 7657);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let SearchBarSimpleComponent = class SearchBarSimpleComponent {
    constructor() { }
    ngOnInit() { }
};
SearchBarSimpleComponent.ctorParameters = () => [];
SearchBarSimpleComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-search-bar-simple',
        template: _search_bar_simple_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_search_bar_simple_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SearchBarSimpleComponent);



/***/ }),

/***/ 4966:
/*!*********************************************************************!*\
  !*** ./src/app/pages/review-search/review-search-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReviewSearchPageRoutingModule": () => (/* binding */ ReviewSearchPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _review_search_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./review-search.page */ 6728);




const routes = [
    {
        path: '',
        component: _review_search_page__WEBPACK_IMPORTED_MODULE_0__.ReviewSearchPage
    }
];
let ReviewSearchPageRoutingModule = class ReviewSearchPageRoutingModule {
};
ReviewSearchPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ReviewSearchPageRoutingModule);



/***/ }),

/***/ 9477:
/*!*************************************************************!*\
  !*** ./src/app/pages/review-search/review-search.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReviewSearchPageModule": () => (/* binding */ ReviewSearchPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _review_search_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./review-search-routing.module */ 4966);
/* harmony import */ var _review_search_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./review-search.page */ 6728);
/* harmony import */ var src_app_components_search_bar_simple_search_bar_simple_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/search-bar-simple/search-bar-simple.component */ 9330);
/* harmony import */ var src_app_components_item_list_item_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/item-list/item-list.component */ 8877);
/* harmony import */ var src_app_directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/directives/shared-directives.module */ 6102);










let ReviewSearchPageModule = class ReviewSearchPageModule {
};
ReviewSearchPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _review_search_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReviewSearchPageRoutingModule,
            src_app_directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_4__.SharedDirectivesModule,
        ],
        declarations: [_review_search_page__WEBPACK_IMPORTED_MODULE_1__.ReviewSearchPage, src_app_components_search_bar_simple_search_bar_simple_component__WEBPACK_IMPORTED_MODULE_2__.SearchBarSimpleComponent, src_app_components_item_list_item_list_component__WEBPACK_IMPORTED_MODULE_3__.ItemListComponent],
    })
], ReviewSearchPageModule);



/***/ }),

/***/ 6728:
/*!***********************************************************!*\
  !*** ./src/app/pages/review-search/review-search.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReviewSearchPage": () => (/* binding */ ReviewSearchPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _review_search_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./review-search.page.html?ngResource */ 3021);
/* harmony import */ var _review_search_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./review-search.page.scss?ngResource */ 9976);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let ReviewSearchPage = class ReviewSearchPage {
    constructor() {
        this.cardWide = true;
    }
    ngOnInit() { }
};
ReviewSearchPage.ctorParameters = () => [];
ReviewSearchPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-review-search',
        template: _review_search_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_review_search_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ReviewSearchPage);



/***/ }),

/***/ 8735:
/*!**************************************************************************!*\
  !*** ./src/app/components/item-list/item-list.component.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "ion-col {\n  position: relative;\n}\nion-col ion-button {\n  position: absolute;\n  z-index: 2;\n  right: 10px;\n  top: 15px;\n  height: 30px;\n  color: white;\n}\nion-col ion-label {\n  height: 100px;\n  display: flex;\n  flex-direction: column;\n}\n.order-date {\n  color: rgba(0, 0, 255, 0.521);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0tbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0Y7QUFBRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFFSjtBQUFFO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUVKO0FBRUE7RUFDRSw2QkFBQTtBQUNGIiwiZmlsZSI6Iml0ZW0tbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb2wge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBpb24tYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIHRvcDogMTVweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgaW9uLWxhYmVsIHtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbn1cclxuXHJcbi5vcmRlci1kYXRlIHtcclxuICBjb2xvcjogcmdiYSgwLCAwLCAyNTUsIDAuNTIxKTtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 7657:
/*!******************************************************************************************!*\
  !*** ./src/app/components/search-bar-simple/search-bar-simple.component.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2gtYmFyLXNpbXBsZS5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 9976:
/*!************************************************************************!*\
  !*** ./src/app/pages/review-search/review-search.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXZpZXctc2VhcmNoLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 5158:
/*!**************************************************************************!*\
  !*** ./src/app/components/item-list/item-list.component.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<!-- wide card list(default) -->\n<ion-item *ngIf=\"cardWide\"\n  ><ion-grid *ngIf=\"cardWide\">\n    <ion-row>\n      <ion-col\n        size=\"12\"\n        *ngFor=\"let item of items\"\n        (click)=\"openPage('item-detail' + item.id)\"\n      >\n        <ion-button class=\"text-size-sm\" color=\"success\"\n          ><p\n            (click)=\"openPage('review-write/' + item.id)\"\n            class=\"text-size-sm review-write\"\n          >\n            리뷰 작성\n          </p></ion-button\n        >\n\n        <ion-item lines=\"none\" class=\"default-item border border-radius\">\n          <ion-thumbnail slot=\"start\">\n            <img class=\"border-radius\" [src]=\"item.image\" />\n          </ion-thumbnail>\n          <ion-label class=\"ion-justify-content-between\">\n            <!-- Title-->\n\n            <h1 class=\"text-color-primary text-size-lg\">\n              {{ item.title }}\n            </h1>\n            <!-- Subtitle-->\n            <p class=\"text-color-secondary text-size-xs\">\n              {{ item.subtitle }}\n            </p>\n            <p class=\"text-size-sm order-date\">주문일자: 날짜 받아와야함</p>\n          </ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid></ion-item\n>\n\n<!-- slim card list(option2) -->\n<ion-item *ngIf=\"!cardWide\">\n  <ion-item\n    class=\"default-item border border-radius ion-margin-top\"\n    *ngFor=\"let item of items.items\"\n  >\n    <!-- Avatar-->\n    <ion-avatar slot=\"start\">\n      <img [src]=\"item.image\" />\n    </ion-avatar>\n    <!-- Text -->\n    <ion-label>\n      <ion-item>\n        <h2\n          class=\"text-size-md text-color-primary font-regular\"\n          (click)=\"openPage('item-detail/' + item.id)\"\n        >\n          {{ item.title }}\n        </h2>\n        <h3\n          (click)=\"openPage('review-write/' + item.id)\"\n          class=\"text-size-sm\"\n          slot=\"end\"\n        >\n          리뷰 쓰러가기\n        </h3>\n      </ion-item>\n\n      <h2 class=\"text-size-sm text-color-primary font-regular ion-text-wrap\">\n        {{ item.subtitle }}\n      </h2>\n    </ion-label>\n  </ion-item>\n</ion-item>\n";

/***/ }),

/***/ 8066:
/*!******************************************************************************************!*\
  !*** ./src/app/components/search-bar-simple/search-bar-simple.component.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- card width design slim -->\r\n<ion-grid>\r\n  <ion-row>\r\n    <!-- List -->\r\n    <ion-col size=\"12\">\r\n      <ion-list lines=\"none\" class=\"ion-padding-list\">\r\n        <ion-list-header class=\"ion-no-padding\">\r\n          <ion-searchbar class=\"ion-no-padding\"></ion-searchbar>\r\n        </ion-list-header>\r\n      </ion-list>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid>\r\n";

/***/ }),

/***/ 3021:
/*!************************************************************************!*\
  !*** ./src/app/pages/review-search/review-search.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header #header class=\"green\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-capitalize\">리뷰 관리</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content\r\n  [fullscreen]=\"true\"\r\n  scrollEvents=\"true\"\r\n  [appHideHeader]=\"header\"\r\n  class=\"green\"\r\n>\r\n  <app-search-bar-simple></app-search-bar-simple>\r\n  <app-item-list [cardWide]=\"cardWide\"></app-item-list>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_review-search_review-search_module_ts.js.map