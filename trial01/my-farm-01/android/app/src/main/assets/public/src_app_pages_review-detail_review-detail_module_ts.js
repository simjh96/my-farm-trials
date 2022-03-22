"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_review-detail_review-detail_module_ts"],{

/***/ 5623:
/*!*********************************************************************!*\
  !*** ./src/app/pages/review-detail/review-detail-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReviewDetailPageRoutingModule": () => (/* binding */ ReviewDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _review_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./review-detail.page */ 209);




const routes = [
    {
        path: '',
        component: _review_detail_page__WEBPACK_IMPORTED_MODULE_0__.ReviewDetailPage
    }
];
let ReviewDetailPageRoutingModule = class ReviewDetailPageRoutingModule {
};
ReviewDetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ReviewDetailPageRoutingModule);



/***/ }),

/***/ 2398:
/*!*************************************************************!*\
  !*** ./src/app/pages/review-detail/review-detail.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReviewDetailPageModule": () => (/* binding */ ReviewDetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _review_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./review-detail-routing.module */ 5623);
/* harmony import */ var _review_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./review-detail.page */ 209);







let ReviewDetailPageModule = class ReviewDetailPageModule {
};
ReviewDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _review_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReviewDetailPageRoutingModule
        ],
        declarations: [_review_detail_page__WEBPACK_IMPORTED_MODULE_1__.ReviewDetailPage]
    })
], ReviewDetailPageModule);



/***/ }),

/***/ 209:
/*!***********************************************************!*\
  !*** ./src/app/pages/review-detail/review-detail.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReviewDetailPage": () => (/* binding */ ReviewDetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _review_detail_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./review-detail.page.html?ngResource */ 693);
/* harmony import */ var _review_detail_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./review-detail.page.scss?ngResource */ 5569);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);





let ReviewDetailPage = class ReviewDetailPage {
    constructor(route) {
        this.route = route;
        this.itemId = this.route.snapshot.paramMap.get('itemId');
    }
    ngOnInit() { }
};
ReviewDetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute }
];
ReviewDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-review-detail',
        template: _review_detail_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_review_detail_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ReviewDetailPage);



/***/ }),

/***/ 5569:
/*!************************************************************************!*\
  !*** ./src/app/pages/review-detail/review-detail.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXZpZXctZGV0YWlsLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 693:
/*!************************************************************************!*\
  !*** ./src/app/pages/review-detail/review-detail.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"green\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-capitalize\">리뷰 상세</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  {{itemId}}\n  <!-- <app-search-bar-simple></app-search-bar-simple> -->\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_review-detail_review-detail_module_ts.js.map