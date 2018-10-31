(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\n    color: white;\n    background-color: #292f36; \n    border-color: #292f36;\n\n    display: inline-block;\n    padding: 16px 48px 18px;\n    font-size: 14px;\n    line-height: 1.0;\n    border-radius: 2.25rem;\n    letter-spacing: 2px;\n    border: 1px solid transparent;\n    display: inline-block;\n    font-weight: bold;\n    text-align: center;\n    white-space: nowrap;\n    vertical-align: middle;\n\n}\n\n.button, .title {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 5px;\n}\n\n.button-group {\n    position: absolute;\n    top: 45%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n}\n\nfooter {\n    position: fixed;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n}\n\n.footer-content {\n    text-align: center;\n    padding: 30px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9zcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLDBCQUEwQjtJQUMxQixzQkFBc0I7O0lBRXRCLHNCQUFzQjtJQUN0Qix3QkFBd0I7SUFDeEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLDhCQUE4QjtJQUM5QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsdUJBQXVCOztDQUUxQjs7QUFFRDtJQUVJLGNBQWM7SUFFZCxvQkFBb0I7SUFFcEIsd0JBQXdCO0lBQ3hCLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsU0FBUztJQUNULFVBQVU7SUFDVix5Q0FBaUM7WUFBakMsaUNBQWlDO0NBQ3BDOztBQUVEO0lBQ0ksZ0JBQWdCO0lBQ2hCLFFBQVE7SUFDUixVQUFVO0lBQ1YsWUFBWTtDQUNmOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7Q0FDakIiLCJmaWxlIjoiY2xpZW50L3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI5MmYzNjsgXG4gICAgYm9yZGVyLWNvbG9yOiAjMjkyZjM2O1xuXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDE2cHggNDhweCAxOHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMS4wO1xuICAgIGJvcmRlci1yYWRpdXM6IDIuMjVyZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcblxufVxuXG4uYnV0dG9uLCAudGl0bGUge1xuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogNXB4O1xufVxuXG4uYnV0dG9uLWdyb3VwIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA0NSU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG5mb290ZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmZvb3Rlci1jb250ZW50IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMzBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n  <div class=\"button-group\">\n    <div class=\"title\">\n      <h1 style=\"font-size: 80px;\">We-J</h1>\n      </div>\n    <div class=\"row button\">\n      <button class=\"btn\">START A PARTY</button>\n    </div>\n    <div class=\"row button\">\n      <button class=\"btn\">JOIN A PARTY</button>\n    </div>\n  </div>\n</main>\n\n<footer>\n  <div class=\"footer-content\">\n    <a href=\"#\" title=\"Made with love\"><i class=\"fas fa-heart fa-2x\"></i></a>\n    <a href=\"https://github.com/jjroush/group-dj-for-spotify\"><i class=\"fab fa-github fa-2x\"></i></a>\n  </div>\n</footer>\n\n<!-- <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"200mm\" height=\"200mm\" viewBox=\"0 0 200 200\">\n  <defs>\n    <clipPath id=\"d\">\n      <path fill=\"#3400ea\" stroke=\"#34e4fe\" stroke-width=\"0\" d=\"M-.935-26.945h210v297h-210z\"/>\n    </clipPath>\n    <clipPath id=\"c\">\n      <path fill=\"#3400ea\" stroke=\"#34e4fe\" stroke-width=\"0\" d=\"M-.935-26.945h210v297h-210z\"/>\n    </clipPath>\n    <clipPath id=\"b\">\n      <path fill=\"#3400ea\" stroke=\"#34e4fe\" stroke-width=\"0\" d=\"M-5.386-285.329h200v200h-200z\"/>\n    </clipPath>\n    <clipPath id=\"a\">\n      <path fill=\"#3400ea\" stroke=\"#34e4fe\" stroke-width=\"0\" d=\"M-5.386-285.329h200v200h-200z\"/>\n    </clipPath>\n  </defs>\n  <g fill=\"#06aed5\">\n    <path transform=\"translate(5.386 285.33)\" clip-path=\"url(#a)\">\n      <animate dur=\"30s\" repeatCount=\"indefinite\" attributeName=\"d\"\n      values=\"M-20.22-235.33s56.929-22.133 134.704-14.4c77.776 7.734 102.632.8 102.632.8l1.336-36.4H-21.823z;\n      \n      M-20.22-235.33s66.764-53.037 134.704-14.4c66.436 37.783 102.632.8 102.632.8l1.336-36.4H-21.823z;\n      \n      M-20.22-235.33s56.929-22.133 134.704-14.4c77.776 7.734 102.632.8 102.632.8l1.336-36.4H-21.823z;\"\n      calcMode=\"spline\"\n      keySplines=\"0.48 0 0.48 1; 0.48 0 0.48 1\"/>\n    </path>\n    <path d=\"M-23.026-135.33s56.928 22.134 134.704 14.4c77.775-7.733 102.631-.8 102.631-.8l1.337 36.4H-24.63z\" transform=\"translate(5.386 285.33)\" clip-path=\"url(#b)\"/>\n  </g>\n  <g fill=\"#34e4ea\">\n    <path d=\"M-11.225-14.12S44.9-14.654 94.012 2.25c49.11 16.905 67.953 20.18 95.683 23.053l27.729 2.873-1.67-57.664-183.348-2.338-43.297 1.336z\" clip-path=\"url(#c)\" transform=\"matrix(-.95238 0 0 -1.08851 199.11 170.67)\"/>\n    <path clip-path=\"url(#d)\" transform=\"matrix(.95238 0 0 1.08851 .89 29.33)\">\n      <animate dur=\"30s\" repeatCount=\"indefinite\" attributeName=\"d\"\n      values=\"M-11.225-14.12S44.9-14.654 94.012 2.25c49.11 16.905 67.953 20.18 95.683 23.053l27.729 2.873-1.67-57.664-183.348-2.338-43.297 1.336z;\n      \n      M-11.225-14.12s53.623 26 105.237 16.37c54.568-10.18 70.222 10.194 96.675 18.018l26.737 7.908-1.67-57.664-183.348-2.338-43.297 1.336z;\n      \n      M-11.225-14.12S44.9-14.654 94.012 2.25c49.11 16.905 67.953 20.18 95.683 23.053l27.729 2.873-1.67-57.664-183.348-2.338-43.297 1.336z;\"\n      calcMode=\"spline\"\n      keySplines=\"0.48 0 0.48 1; 0.48 0 0.48 1\"/>\n    </path>\n  </g>\n</svg> -->\n\n<!-- <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"200mm\" height=\"200mm\" viewBox=\"0 0 200 200\">\n  <defs>\n    <clipPath id=\"d\">\n      <path fill=\"#3400ea\" stroke=\"#34e4fe\" stroke-width=\"0\" d=\"M-.935-26.945h210v297h-210z\"/>\n    </clipPath>\n    <clipPath id=\"c\">\n      <path fill=\"#3400ea\" stroke=\"#34e4fe\" stroke-width=\"0\" d=\"M-.935-26.945h210v297h-210z\"/>\n    </clipPath>\n    <clipPath id=\"b\">\n      <path fill=\"#3400ea\" stroke=\"#34e4fe\" stroke-width=\"0\" d=\"M-5.386-285.329h200v200h-200z\"/>\n    </clipPath>\n    <clipPath id=\"a\">\n      <path fill=\"#3400ea\" stroke=\"#34e4fe\" stroke-width=\"0\" d=\"M-5.386-285.329h200v200h-200z\"/>\n    </clipPath>\n  </defs>\n  <g fill=\"#06aed5\">\n    <path transform=\"translate(5.386 285.33)\" d=\"M-20.22-235.33s66.764-53.037 134.704-14.4c66.436 37.783 102.632.8 102.632.8l1.336-36.4H-21.823z\" clip-path=\"url(#a)\"/>\n    <path d=\"M-23.026-135.33s56.928 22.134 134.704 14.4c77.775-7.733 102.631-.8 102.631-.8l1.337 36.4H-24.63z\" transform=\"translate(5.386 285.33)\" clip-path=\"url(#b)\"/>\n  </g>\n  <g fill=\"#34e4ea\">\n    <path d=\"M-11.225-14.12S44.9-14.654 94.012 2.25c49.11 16.905 67.953 20.18 95.683 23.053l27.729 2.873-1.67-57.664-183.348-2.338-43.297 1.336z\" clip-path=\"url(#c)\" transform=\"matrix(-.95238 0 0 -1.08851 199.11 170.67)\"/>\n    <path d=\"\" clip-path=\"url(#d)\" transform=\"matrix(.95238 0 0 1.08851 .89 29.33)\"/>\n  </g>\n</svg> -->\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'group-dj-for-spotify';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n  <div class=\"button-group\">\n    <div class=\"row button\">\n      <button class=\"btn\">START A PARTY</button>\n    </div>\n    <div class=\"row button\">\n      <button class=\"btn\">JOIN A PARTY</button>\n    </div>\n  </div>\n</main>\n\n<footer>\n  <div class=\"footer-content\">\n    <i class=\"fas fa-heart fa-2x\"></i>\n    <a href=\"https://github.com/jjroush/group-dj-for-spotify\"><i class=\"fab fa-github fa-2x\"></i></a>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jacobroush/projects/group-dj-for-spotfiy/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map