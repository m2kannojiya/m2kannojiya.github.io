webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_about_component__ = __webpack_require__("../../../../../src/app/about/components/about.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AboutModule = /** @class */ (function () {
    function AboutModule() {
    }
    AboutModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__components_about_component__["a" /* AboutComponent */]
            ]
        })
    ], AboutModule);
    return AboutModule;
}());



/***/ }),

/***/ "../../../../../src/app/about/components/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div id='aboutUs'>\r\n  <div class=\"container gBox\">\r\n    <img src=\"assets/img/team.jpg\" class=\"col-md-4 no-padding-left img-responsive\" alt=\"GingerClub\" />\r\n    <div class=\"col-md-8 noPadding\">\r\n      <h4 class=\"text-center\" style=\"color:#ABCA4E; margin-top: 0;\">{{aboutContent.title}}</h4>\r\n      <p *ngFor=\"let p of aboutContent.content\">{{p}}</p>\r\n    </div>\r\n    <div class=\"col-md-12 noPadding info text-center\">\r\n      <div class=\"col-md-3 no-padding-left\">\r\n        <i class=\"fa fa-map fa-2x\" aria-hidden=\"true\"></i>\r\n        <span>2 Locations in Qatar</span>\r\n      </div>\r\n      <div class=\"col-md-3 no-padding-left\">\r\n        <i class=\"fa fa-spoon fa-2x\" aria-hidden=\"true\"></i>\r\n        <span>Thai & Chinese Cuisine</span>\r\n      </div>\r\n      <div class=\"col-md-3 no-padding-left\">\r\n        <i class=\"fa fa-clock-o fa-2x\" aria-hidden=\"true\"></i>\r\n        <span id=\"parking\">Mon-Sun 11:00 - 23:00</span>\r\n      </div>\r\n      <div class=\"col-md-3 no-padding-left\">\r\n        <i class=\"fa fa-car fa-2x\" aria-hidden=\"true\"></i>\r\n        <span id=\"parking\">Parking - Yes</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/about/components/about.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#aboutUs {\n  color: #000;\n}\n#aboutUs .gBox {\n  padding: 10px;\n}\n#aboutUs p {\n  line-height: 1.7;\n  text-align: justify;\n}\n#aboutUs p:last-child {\n  margin: 0;\n}\n#aboutUs .info {\n  margin-top: 15px;\n  padding: 7px !important;\n  background: #EFEFEF;\n}\n#aboutUs .info div i {\n  color: #ABCA4E;\n}\n#aboutUs .info div * {\n  display: block;\n}\n#aboutUs .info div span {\n  margin-top: 10px;\n  font-size: 15px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/components/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_content_loader_service__ = __webpack_require__("../../../../../src/app/core/services/content-loader.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = /** @class */ (function () {
    function AboutComponent(contentLoader) {
        this.contentLoader = contentLoader;
        this.aboutContent = this.contentLoader.getContent('about');
    }
    AboutComponent.prototype.ngOnInit = function () {
        // this.titleService.setTitle("GingerClub - About Us");
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/about/components/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/components/about.component.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_services_content_loader_service__["a" /* ContentLoaderService */]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-top-header></app-top-header>\r\n<nav-header></nav-header>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_module__ = __webpack_require__("../../../../../src/app/home/home.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__about_about_module__ = __webpack_require__("../../../../../src/app/about/about.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__team_team_module__ = __webpack_require__("../../../../../src/app/team/team.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__order_online_order_online_module__ = __webpack_require__("../../../../../src/app/order-online/order-online.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__contact_contact_module__ = __webpack_require__("../../../../../src/app/contact/contact.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__top_header_top_header_module__ = __webpack_require__("../../../../../src/app/top-header/top-header.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__nav_header_nav_header_module__ = __webpack_require__("../../../../../src/app/nav-header/nav-header.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__core_core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_14__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_13__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_15__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_11__nav_header_nav_header_module__["a" /* NavHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_5__home_home_module__["a" /* HomeModule */],
                __WEBPACK_IMPORTED_MODULE_6__about_about_module__["a" /* AboutModule */],
                __WEBPACK_IMPORTED_MODULE_7__team_team_module__["a" /* TeamModule */],
                __WEBPACK_IMPORTED_MODULE_8__order_online_order_online_module__["a" /* OrderOnlineModule */],
                __WEBPACK_IMPORTED_MODULE_9__contact_contact_module__["a" /* ContactModule */],
                __WEBPACK_IMPORTED_MODULE_10__top_header_top_header_module__["a" /* TopHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_routes__["a" /* APPROUTES */])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* Title */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APPROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_components_home_component__ = __webpack_require__("../../../../../src/app/home/components/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_components_about_component__ = __webpack_require__("../../../../../src/app/about/components/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__team_components_team_component__ = __webpack_require__("../../../../../src/app/team/components/team.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_online_components_order_online_component__ = __webpack_require__("../../../../../src/app/order-online/components/order-online.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_components_contact_component__ = __webpack_require__("../../../../../src/app/contact/components/contact.component.ts");





var APPROUTES = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_0__home_components_home_component__["a" /* HomeComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_1__about_components_about_component__["a" /* AboutComponent */] },
    { path: 'team', component: __WEBPACK_IMPORTED_MODULE_2__team_components_team_component__["a" /* TeamComponent */] },
    { path: 'order-online', component: __WEBPACK_IMPORTED_MODULE_3__order_online_components_order_online_component__["a" /* OrderOnlineComponent */] },
    { path: 'contacts', component: __WEBPACK_IMPORTED_MODULE_4__contact_components_contact_component__["a" /* ContactComponent */] }
];


/***/ }),

/***/ "../../../../../src/app/contact/components/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"contactUs\">\r\n  <div class=\"container\">\r\n    <div class=\"contact col-md-12 gBox margin-bottom\">\r\n      <div class=\"margin-bottom col-md-12 noPadding\">\r\n        <div class=\"col-md-5 no-padding-left\">\r\n          <h5 class=\"heading\">Ginger Club Doha Al Rayyan</h5>\r\n          <h5>\r\n            <a href=\"https://goo.gl/maps/CgWVdCdGXDL2\" target=\"_blank\">Get Direction</a>\r\n          </h5>\r\n          <p>Wathnan Mall, Muaither N St</p>\r\n          <p>Al Rayyan Qatar</p>\r\n          <p>P.O. Box: 24882</p>\r\n        </div>\r\n        <iframe class=\"hidden-xs hidden-sm col-md-7 noPadding\" src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.055654531224!2d51.42149971501768!3d25.268713183862918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45d9825ac775cf%3A0xdbc96c7b05bb2397!2sGinger+Club!5e0!3m2!1sen!2sin!4v1503220892931\"\r\n          height=\"200\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\r\n      </div>\r\n      <div class=\"margin-bottom col-md-12 noPadding\">\r\n        <div class=\"col-md-5 no-padding-left\">\r\n          <h5 class=\"heading\">Ginger Club Pearl Qatar\r\n            <span class=\"blink\">(OPENING SOON)</span>\r\n          </h5>\r\n          <h5>\r\n            <a href=\"https://goo.gl/maps/bPVafwuR3Sz\" target=\"_blank\">Get Direction</a>\r\n          </h5>\r\n          <p>No.115, Qanat Quarter,</p>\r\n          <p>Near Dominos Pizza,</p>\r\n          <p>Pearl Qatar</p>\r\n        </div>\r\n        <iframe class=\"hidden-xs hidden-sm col-md-7 noPadding\" src=\"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d225.30368125588268!2d51.5435797!3d25.376045!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c310f343d21b%3A0xe18c7c70783c5ceb!2sGingerClub+Pearl+Qatar!5e0!3m2!1sen!2s!4v1503674408566\"\r\n          height=\"200\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\r\n      </div>\r\n      <div class=\"col-md-12 contactInfo text-center\">\r\n        <h5>\r\n          <a href=\"tel:+97455617327\">\r\n            <i class=\"fa fa-lg fa-phone-square\" aria-hidden=\"true\"></i> +974 5561 7327</a>\r\n        </h5>\r\n        <h5>\r\n          <a href=\"mailto:gingerclubdoha@gmail.com\">\r\n            <i class=\"fa fa-lg fa-envelope\" aria-hidden=\"true\"></i> gingerclubdoha@gmail.com</a>\r\n        </h5>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/contact/components/contact.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#contactUs .heading {\n  margin: 0 0 10px 0;\n  border-width: 1px;\n}\n#contactUs .contact {\n  padding: 10px;\n}\n#contactUs .contact .contactInfo {\n  background: #555;\n}\n#contactUs .contact .contactInfo h5 {\n  display: inline-block;\n  margin-left: 3%;\n  font-weight: normal;\n}\n#contactUs .contact .contactInfo h5 a {\n  color: #FFF;\n}\n#contactUs .contact .contactInfo h5 a:hover {\n  color: #ABCA4E;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/components/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactComponent = /** @class */ (function () {
    function ContactComponent(titleService) {
        this.titleService = titleService;
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle("GingerClub - Contact Us");
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("../../../../../src/app/contact/components/contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contact/components/contact.component.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/contact/contact.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_contact_component__ = __webpack_require__("../../../../../src/app/contact/components/contact.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ContactModule = /** @class */ (function () {
    function ContactModule() {
    }
    ContactModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__components_contact_component__["a" /* ContactComponent */]
            ]
        })
    ], ContactModule);
    return ContactModule;
}());



/***/ }),

/***/ "../../../../../src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_gateway_service__ = __webpack_require__("../../../../../src/app/core/services/api-gateway.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_content_loader_service__ = __webpack_require__("../../../../../src/app/core/services/content-loader.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CoreModule = /** @class */ (function () {
    function CoreModule(contentLoader) {
        this.contentLoader = contentLoader;
        contentLoader.loadContent();
    }
    CoreModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__services_api_gateway_service__["a" /* ApiGatewayService */],
                __WEBPACK_IMPORTED_MODULE_3__services_content_loader_service__["a" /* ContentLoaderService */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_content_loader_service__["a" /* ContentLoaderService */]])
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "../../../../../src/app/core/services/api-gateway.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiGatewayService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiGatewayService = /** @class */ (function () {
    function ApiGatewayService(http) {
        this.http = http;
    }
    ApiGatewayService.prototype.get = function (endPoint, queryParam, headers) {
        return this.http.get(endPoint, { params: queryParam });
    };
    ApiGatewayService.prototype.post = function (endPoint, payload, headers) {
        var httpOptions = {
            headers: headers ? headers : new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
        };
        return this.http.post(endPoint, payload);
    };
    ApiGatewayService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ApiGatewayService);
    return ApiGatewayService;
}());



/***/ }),

/***/ "../../../../../src/app/core/services/content-loader.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentLoaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_gateway_service__ = __webpack_require__("../../../../../src/app/core/services/api-gateway.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContentLoaderService = /** @class */ (function () {
    function ContentLoaderService(apiGatewayService) {
        this.apiGatewayService = apiGatewayService;
    }
    ContentLoaderService.prototype.loadContent = function () {
        var _this = this;
        this.apiGatewayService.get('../../../assets/mocks/app.content.json').subscribe(function (res) {
            console.log('response recieved', res);
            _this.appContent = res;
        });
    };
    ContentLoaderService.prototype.getContent = function (pageId) {
        if (this.appContent) {
            return this.appContent[pageId] ? this.appContent[pageId] : 'something went wrong';
        }
        else {
            return 'something went wrong';
        }
    };
    ContentLoaderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_gateway_service__["a" /* ApiGatewayService */]])
    ], ContentLoaderService);
    return ContentLoaderService;
}());



/***/ }),

/***/ "../../../../../src/app/home/components/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"flexslider\" id=\"home\">\r\n  <ul class=\"slides\">\r\n    <li>\r\n      <h1 class=\"flex-caption\">Welcome to New\r\n        <span class=\"brandColor\">GingerClub\r\n          <sup>&reg;</sup>\r\n        </span>\r\n      </h1>\r\n    </li>\r\n    <li>\r\n      <h1 class=\"flex-caption\">Now Introducing\r\n        <span class=\"brandColor\">Order Online!</span> Get Your Orders At Door Step</h1>\r\n    </li>\r\n  </ul>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/components/home.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#home {\n  background: url(/assets/img/homeBg.jpg) center no-repeat;\n  background-size: cover;\n  text-align: center;\n  margin: 0;\n  position: absolute;\n  top: 84px;\n  left: 0;\n  border-radius: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n}\n#home h1 {\n  font-family: 'Delius Swash Caps';\n  color: #FFF;\n  margin-top: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/components/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_js_flexslider_min_js__ = __webpack_require__("../../../../../src/assets/js/flexslider-min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_js_flexslider_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__assets_js_flexslider_min_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(titleService) {
        this.titleService = titleService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            $('.flexslider').flexslider({
                animation: "slide",
                controlNav: false,
                animationLoop: true
            });
        });
        this.titleService.setTitle("GingerClub");
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/components/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/components/home.component.less"), __webpack_require__("../../../../../src/assets/less/flexslider.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_component__ = __webpack_require__("../../../../../src/app/home/components/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__components_home_component__["a" /* HomeComponent */]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "../../../../../src/app/location/components/location.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12 col-md-9 location\" id=\"locationDiv\">\r\n  <button class=\"hidden-xs hidden-sm btn btn-default btn-sm\" type=\"button\" id=\"location\" (click) = \"showModal()\">\r\n      <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> Choose Your Location\r\n      <span class=\"caret\"></span>\r\n  </button>\r\n<location-modal *ngIf=\"locationResponse\" [locationData] = \"locationResponse\" (locationFoundEvent) = \"locationModalExist()\"></location-modal>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/location/components/location.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/location/components/location.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_location_service__ = __webpack_require__("../../../../../src/app/location/services/location.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LocationComponent = /** @class */ (function () {
    function LocationComponent(locationService) {
        this.locationService = locationService;
    }
    LocationComponent.prototype.ngOnInit = function () {
    };
    LocationComponent.prototype.showModal = function () {
        var _this = this;
        if (this.locationService.isLoacationExist) {
            $('#locationMmDiv').modal('show');
        }
        else {
            this.locationService.getLocation().subscribe(function (res) {
                _this.locationResponse = res.data;
                _this.locationResponse ? _this.locationService.isLoacationExist = true : _this.locationService.isLoacationExist = false;
            });
        }
    };
    LocationComponent.prototype.locationModalExist = function () {
        $('#locationMmDiv').modal('show');
    };
    LocationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'location-selector',
            template: __webpack_require__("../../../../../src/app/location/components/location.component.html"),
            styles: [__webpack_require__("../../../../../src/app/location/components/location.component.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_location_service__["a" /* LocationService */]])
    ], LocationComponent);
    return LocationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/location/location.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_location_component__ = __webpack_require__("../../../../../src/app/location/components/location.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_location_service__ = __webpack_require__("../../../../../src/app/location/services/location.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LocationModule = /** @class */ (function () {
    function LocationModule() {
    }
    LocationModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__components_location_component__["a" /* LocationComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__components_location_component__["a" /* LocationComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_location_service__["a" /* LocationService */]]
        }),
        __metadata("design:paramtypes", [])
    ], LocationModule);
    return LocationModule;
}());



/***/ }),

/***/ "../../../../../src/app/location/services/location.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_services_api_gateway_service__ = __webpack_require__("../../../../../src/app/core/services/api-gateway.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_settings__ = __webpack_require__("../../../../../src/environments/settings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LocationService = /** @class */ (function () {
    function LocationService(apiService) {
        this.apiService = apiService;
        this.isLoacationExist = false;
    }
    LocationService.prototype.getLocation = function () {
        return this.apiService.get(__WEBPACK_IMPORTED_MODULE_3__environments_settings__["a" /* SETTINGS */].ENDPOINT + 'rest/orderOnline/locations');
    };
    LocationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__core_services_api_gateway_service__["a" /* ApiGatewayService */]])
    ], LocationService);
    return LocationService;
}());



/***/ }),

/***/ "../../../../../src/app/nav-header/components/nav-header.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\r\n    <div class=\"container\">\r\n        <!-- <h3 class=\"hidden-md hidden-lg mobileMenu noPadding col-xs-1\">\r\n            <i class=\"fa fa-bars\" aria-hidden=\"true\"></i>\r\n            <i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i>\r\n        </h3> -->\r\n        <div class=\"logo col-xs-11 col-md-6 noPadding\">\r\n            <a class=\"col-xs-11 text-center col-md-3 noPadding\" routerLink=\"/home\">\r\n                <img class=\"img-responsive\" src=\"assets/img/logo.png\">\r\n            </a>\r\n\r\n            <!-- <span class=\"mobileLocation hidden-md hidden-lg col-xs-1 noPadding text-right\">\r\n                <i class=\"fa fa-map-marker\" aria-hidden=\"true\" data-toggle=\"modal\" data-target=\".setLocation\"></i>\r\n            </span> -->\r\n            <location-selector></location-selector>\r\n            \r\n        </div>\r\n\r\n        <nav id=\"menu\" class=\"col-md-6 text-right no-padding-right\">\r\n            <!-- <div class=\"myAccount mobile text-center hidden-md hidden-lg\">\r\n                <ul class=\"hidden noPadding\">\r\n                    <li class=\"userName\"></li>\r\n                    <li>\r\n                        <a href=\"#myaccount\" class=\"tab_20\">\r\n                            <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"#home\" class=\"logOut\">\r\n                            <i class=\"fa fa-power-off\" aria-hidden=\"true\"></i>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </div> -->\r\n\r\n            <a [routerLink]= \"['/home']\" >Home</a>\r\n            <a [routerLink]= \"['/about']\" >About us</a>\r\n            <a [routerLink]= \"['/team']\" >Team</a>\r\n            <a [routerLink]= \"['/order-online']\">Order Online</a>\r\n            <a [routerLink]= \"['/contacts']\" >Contact us</a>\r\n        </nav>\r\n    </div>\r\n</header>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/nav-header/components/nav-header.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".white {\n  background: #FFFFFF;\n}\nheader {\n  margin: 0 0 10px 0;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);\n  background: #FFFFFF;\n}\nheader .logo {\n  transition: all ease-in-out 0.5s;\n}\nheader .logo .location {\n  margin-top: 15px;\n}\nheader .logo img {\n  display: inline;\n  padding: 7px 0;\n}\nheader nav#menu a {\n  min-width: 13%;\n  display: inline-block;\n  font-size: 14px;\n  transition: all ease 0.3s;\n  padding: 17px;\n  text-align: center;\n  font-weight: 500;\n  color: #444;\n}\nheader nav#menu a:hover,\nheader nav#menu a.active {\n  text-decoration: none;\n  color: #8BC53E;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav-header/components/nav-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__location_services_location_service__ = __webpack_require__("../../../../../src/app/location/services/location.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavHeaderComponent = /** @class */ (function () {
    function NavHeaderComponent(locationService) {
        this.locationService = locationService;
    }
    NavHeaderComponent.prototype.ngOnInit = function () {
    };
    NavHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'nav-header',
            template: __webpack_require__("../../../../../src/app/nav-header/components/nav-header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/nav-header/components/nav-header.component.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__location_services_location_service__["a" /* LocationService */]])
    ], NavHeaderComponent);
    return NavHeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/nav-header/nav-header.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavHeaderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_nav_header_component__ = __webpack_require__("../../../../../src/app/nav-header/components/nav-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__location_location_module__ = __webpack_require__("../../../../../src/app/location/location.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var NavHeaderModule = /** @class */ (function () {
    function NavHeaderModule() {
    }
    NavHeaderModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__location_location_module__["a" /* LocationModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__components_nav_header_component__["a" /* NavHeaderComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__components_nav_header_component__["a" /* NavHeaderComponent */]]
        })
    ], NavHeaderModule);
    return NavHeaderModule;
}());



/***/ }),

/***/ "../../../../../src/app/order-online/components/order-online.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container gingerRecipes\">\r\n    <div class=\"col-md-8 selectMenu  no-padding-left\">\r\n        <div class=\"menuGrid\">\r\n            <div class=\"panel deliciousRecipes text-center hidden-xs hidden-sm\">\r\n                <img class=\"img-responsive\" src=\"assets/img/spoon.png\" width=\"24px\">\r\n                <h5>Our Menu</h5>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12 gingerMenus\" >\r\n                    <ul id=\"gingerMenu\" class=\"resp-tabs-list col-md-4 no-padding-left\">\r\n                        <li [ngClass]=\"{'resp-tab-active': i==0, 'resp-tab-item': true}\" class=\"resp-tab-item\" \r\n                        [attr.aria-controls]=\"'menu' +menuItem.restMenuId\" role=\"tab\" *ngFor = \"let menuItem of menuResponse; let i = index\">\r\n                            {{menuItem.name}}\r\n                        </li>\r\n                    </ul>\r\n                    <div class=\"resp-tabs-container col-md-8 noPadding\" id=\"menuItems\" >\r\n                        <div class= 'resp-tab-content clearfix' [ngClass]=\"{'resp-tab-content-active': i==0}\" id=\"menu{{menuItem.restMenuId}}\" \r\n                        [attr.aria-labelledby]=\"'menu' +menuItem.restMenuId\" *ngFor = \"let menuItem of menuResponse; let i = index\" >\r\n                            <div class=\"col-md-6 col-sm-6 hidden-xs recipe text-center\" [ngClass] =\"{veg: item.isVeg, nonVeg: !item.isVeg}\" *ngFor = \"let item of menuItem.restMenuItems\">\r\n                                <i class=\"fa fa-circle\" aria-hidden=\"true\"> </i>\r\n                                <img class=\"hidden-xs img-responsive\" [src]=\"item.imageLocation!= '' ? imageURLEndPoint+'/'+ item.imageLocation: defaultImgURL\">\r\n                                <h5>{{item.menuItemName}}</h5>\r\n                                <button id=\"menuItem{{item.restMenuItemId}}\" type=\"button\" class=\"btn-sm btn btn-primary cart text-uppercase\"><i class= \"fa fa-shopping-cart\" aria-hidden= \"true\"> </i>QR {{item.price}}</button>\r\n                                <!-- p class=\"col-md-12 noPadding text-justify hidden-xs\">{{description}}</p -->\r\n                            </div>\r\n                            <div class=\"col-xs-12 hidden-sm hidden-md hidden-lg recipe rm\" [ngClass] =\"{veg: item.isVeg, nonVeg: !item.isVeg}\" *ngFor = \"let item of menuItem.restMenuItems\">\r\n                                <span class=\"col-xs-9 no-padding-left\">\r\n                                    <h5>{{item.menuItemName}}</h5>\r\n                                </span>\r\n                                <button id=\"menuItem{{item.restMenuItemId}}\" type=\"button\" class=\"btn-sm col-xs-3 btn btn-primary cart text-uppercase\"><i class= \"fa fa-shopping-cart\" aria-hidden= \"true\"> </i>QR {{item.price}}</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <location-modal *ngIf=\"locationResponse\" [locationData] = \"locationResponse\" (locationFoundEvent) = \"locationModalExist()\"\r\n        (locationSelectEvent) = \"locationSelectionEvent($event)\"></location-modal>\r\n    <div class=\"hidden-md hidden-lg stickyCart\">\r\n        <div class=\"col-xs-8 mobileYourCart\">\r\n            <h5>\r\n                Your Cart\r\n                <span class=\"totalCount\"></span>\r\n            </h5>\r\n            <small class=\"text-uppercase itemTotl\"></small>\r\n        </div>\r\n        <div class=\"col-xs-4 no-padding-right\">\r\n            <button type=\"button\" class=\"mCheckout hidden-md hidden-lg btn btn-success\" value=\"\" data-toggle=\"modal\" data-target=\".userLogin\">\r\n                Checkout\r\n                <i class=\"fa fa-long-arrow-right\" aria-hidden=\"true\"></i>\r\n            </button>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-4 gBox hidden-xs noCartinfo text-center\">\r\n        <h6>No item added in Cart</h6>\r\n        <i class=\"fa fa-2x fa-smile-o\" aria-hidden=\"true\"></i>\r\n    </div>\r\n    \r\n    <div class=\"col-md-4 basket padding-bottom hidden\">\r\n        <div class=\"menuGrid\">\r\n            <span class=\"col-md-12 noPadding topHead\">\r\n                <h5>Your Orders</h5>\r\n                <small class=\"totalCount pull-right\"></small>\r\n                <small class=\"pull-right\">Total No. Item: </small>\r\n            </span>\r\n            <div class=\"col-md-12 cart-items noPadding\">\r\n                <div class=\"table-responsive\" style=\"border: 1px solid #dddddd\">\r\n                    <table class=\"table table-condensed table-striped\" style=\"margin: 0\">\r\n                        <thead>\r\n                            <th>Recipes</th>\r\n                            <th>Qty</th>\r\n                            <th class=\"text-center\">Price</th>\r\n                            <th></th>\r\n                        </thead>\r\n                        <tbody id=\"checkOutTbl\" class=\"table-striped\"></tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-12 pricing-detail noPadding text-right\">\r\n                <h5>\r\n                    <strong>Item Total:\r\n                        <span class=\"itemTotl text-uppercase\"></span>\r\n                    </strong>\r\n                </h5>\r\n            </div>\r\n            <button id=\"checkOut\" type=\"button\" class=\"btn col-md-12 btn-lg btn-success hidden-xs hidden-sm\">\r\n                Checkout\r\n                <i class=\"fa fa-long-arrow-right\" aria-hidden=\"true\"></i>\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/order-online/components/order-online.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".white {\n  background: #FFFFFF;\n}\n.gBox {\n  background: #FFFFFF;\n  border: 1px solid #DDDDDD;\n}\n.orderBox-desk {\n  max-height: 400px;\n  overflow-y: auto;\n  margin-bottom: 20px;\n}\n.orderBox-mobile {\n  max-height: inherit;\n  overflow-y: visible;\n  margin-bottom: 0;\n}\n.menuGrid {\n  overflow: hidden;\n}\nul#gingerMenu {\n  height: 500px;\n  overflow: hidden;\n}\nul#gingerMenu:hover {\n  overflow-y: scroll;\n}\n.selectMenu .menuGrid {\n  margin-bottom: 50px;\n}\n.selectMenu .deliciousRecipes {\n  background: #FFFFFF;\n  border: 1px solid #DDDDDD;\n  margin: 0 0 10px 0;\n  box-shadow: none;\n  padding: 5px;\n}\n.selectMenu .deliciousRecipes img,\n.selectMenu .deliciousRecipes h5 {\n  display: inline-block;\n  margin: 0;\n  font-weight: bold;\n}\n.selectMenu .deliciousRecipes img {\n  vertical-align: text-bottom;\n  padding-right: 7px;\n}\n.selectMenu .gingerMenus ul.nav-pills li {\n  margin: 0;\n  padding: 0;\n  border-bottom: 1px solid #DDDDDD;\n  background: #FFFFFF;\n}\n.selectMenu .gingerMenus ul.nav-pills li:last-child {\n  border-bottom: 1px solid #DDDDDD;\n}\n.selectMenu .gingerMenus ul.nav-pills li.active a:after {\n  content: \"\\F178\";\n  padding-left: 10px;\n  font-family: fontAwesome;\n}\n.selectMenu .gingerMenus .resp-tab-content .recipe {\n  transition: all ease-in-out 0.3s;\n  height: 210px;\n  background: #FFFFFF;\n  border: 1px solid #DDDDDD;\n  overflow: hidden;\n  padding: 10px;\n  border-top: none;\n}\n.selectMenu .gingerMenus .resp-tab-content .recipe.col-md-6:nth-child(1),\n.selectMenu .gingerMenus .resp-tab-content .recipe.col-md-6:nth-child(3) {\n  border-top: 1px solid #DDDDDD;\n}\n.selectMenu .gingerMenus .resp-tab-content .recipe.col-md-6:nth-child(even) {\n  border-left: none;\n}\n.selectMenu .gingerMenus .resp-tab-content .recipe img {\n  background: #DDD;\n  height: 100px;\n  margin: 0 auto 10px;\n  transition: all ease-in-out 0.3s;\n}\n.selectMenu .gingerMenus .resp-tab-content .recipe i.fa-circle {\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  color: #FFF;\n  padding: 3px;\n  font-size: 8px;\n  z-index: 1;\n}\n.selectMenu .gingerMenus .resp-tab-content .recipe p {\n  margin-top: 10px;\n  margin-bottom: 0;\n}\n.selectMenu .gingerMenus .resp-tab-content .recipe.veg i.fa-circle {\n  background: green;\n}\n.selectMenu .gingerMenus .resp-tab-content .recipe.veg h5 {\n  color: green;\n}\n.selectMenu .gingerMenus .resp-tab-content .recipe.nonVeg i.fa-circle {\n  background: #b22222;\n}\n.selectMenu .gingerMenus .resp-tab-content .recipe.nonVeg h5 {\n  color: #b22222;\n}\n.selectMenu .gingerMenus .resp-tab-content .recipe:hover img {\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n}\n.selectMenu .gingerMenus .resp-tab-content .recipe:hover button {\n  background-color: #555;\n  border-color: #555;\n  color: #fff;\n}\n.noCartinfo {\n  padding: 5%;\n}\n.basket {\n  background: #FFFFFF;\n  border: 1px solid #DDDDDD;\n}\n.basket span.topHead {\n  border-bottom: 1px solid #DDDDDD;\n}\n.basket span.topHead h5,\n.basket span.topHead small {\n  display: inline-block;\n}\n.basket span.topHead small {\n  margin-top: 12px;\n  margin-left: 5px;\n}\n.basket .cart-items {\n  max-height: 400px;\n  overflow-y: auto;\n  margin-bottom: 20px;\n}\n.basket .cart-items table tr td.updatedPrice {\n  padding-right: 0;\n}\n.basket .cart-items input[type=\"number\"] {\n  width: 30px;\n}\n.basket h3 {\n  margin: 0 0 5px 0;\n}\ntd.menuName {\n  width: 200px;\n}\n@media (max-width: 768px) {\n  .menuGrid {\n    margin-bottom: 0 !important;\n    border: none;\n    padding: inherit;\n  }\n  .menuGrid .deliciousRecipes {\n    margin: 0;\n  }\n  .gingerRecipes {\n    padding: 0;\n  }\n  .selectMenu {\n    padding: 0 !important;\n  }\n  .selectMenu .gingerMenus .nav-pills {\n    padding: 0 !important;\n    margin-bottom: 10px;\n  }\n  .selectMenu .gingerMenus .resp-tab-content {\n    max-height: inherit;\n    overflow-y: inherit;\n  }\n  .selectMenu .gingerMenus .resp-tab-content .recipe.rm {\n    padding: 5px;\n    height: auto;\n    border: none;\n    border-bottom: 1px solid #DDDDDD;\n  }\n  .selectMenu .gingerMenus .resp-tab-content .recipe.rm span * {\n    display: inline-block;\n  }\n  .selectMenu .gingerMenus .resp-tab-content .recipe.rm i.fa-circle {\n    border-width: 1px;\n    font-size: x-small;\n    padding: 1px 2px;\n    position: static;\n  }\n  .stickyCart {\n    background: #444;\n    height: 40px;\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: 700;\n    color: #FFF;\n  }\n  .stickyCart h5 {\n    color: #FFF;\n    margin: 0;\n    line-height: 1.6;\n  }\n  .stickyCart h5 span {\n    width: 25px;\n    height: 25px;\n    background: salmon;\n    border-radius: 50%;\n    padding: 5px;\n    position: absolute;\n    text-align: center;\n    line-height: normal;\n    font-size: small;\n    right: 0;\n    top: 0.5em;\n  }\n  .stickyCart button {\n    width: 100%;\n    height: 40px;\n  }\n  .basket {\n    display: none;\n    padding: 0 10px !important;\n    position: fixed;\n    bottom: 40px;\n    right: 0;\n    left: 0;\n    z-index: 701;\n    background: #FFF;\n    height: 50%;\n    overflow-y: scroll;\n    box-shadow: 0 -3px 33px 1px rgba(0, 0, 0, 0.3);\n  }\n  .basket .menuGrid {\n    padding: 5px;\n  }\n  .basket .menuGrid span.topHead {\n    border-bottom: none;\n  }\n  .basket .menuGrid .pricing-detail h3,\n  .basket .menuGrid .pricing-detail a {\n    text-align: center;\n    display: block;\n  }\n  .basket .menuGrid button {\n    display: block;\n    margin: 7px auto;\n    width: 100%;\n  }\n  .basket .menuGrid .cart-items {\n    max-height: inherit;\n    overflow-y: visible;\n    margin-bottom: 0;\n  }\n  .basket .menuGrid .cart-items table tr td.menuName {\n    width: 170px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/order-online/components/order-online.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderOnlineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__location_services_location_service__ = __webpack_require__("../../../../../src/app/location/services/location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_order_online_service__ = __webpack_require__("../../../../../src/app/order-online/services/order-online.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_settings__ = __webpack_require__("../../../../../src/environments/settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_js_easyTabs_js__ = __webpack_require__("../../../../../src/assets/js/easyTabs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_js_easyTabs_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__assets_js_easyTabs_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OrderOnlineComponent = /** @class */ (function () {
    function OrderOnlineComponent(titleService, locationService, orderOnlineService) {
        this.titleService = titleService;
        this.locationService = locationService;
        this.orderOnlineService = orderOnlineService;
        this.imageURLEndPoint = __WEBPACK_IMPORTED_MODULE_4__environments_settings__["a" /* SETTINGS */].ENDPOINT + 'ginger_menu_item_images';
        this.defaultImgURL = '../../../assets/img/noImage.jpg';
    }
    OrderOnlineComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle("GingerClub - Order Online");
        if (!this.locationService.isLoacationExist) {
            this.locationService.getLocation().subscribe(function (res) {
                _this.locationResponse = res.data;
                _this.locationResponse ? _this.locationService.isLoacationExist = true : _this.locationService.isLoacationExist = false;
            });
        }
        else {
            this.loadMenu();
        }
    };
    OrderOnlineComponent.prototype.locationModalExist = function () {
        $('#locationMmDiv').modal('show');
    };
    OrderOnlineComponent.prototype.locationSelectionEvent = function () {
        this.loadMenu();
    };
    OrderOnlineComponent.prototype.loadMenu = function () {
        var _this = this;
        $('#locationMmDiv').modal('hide');
        this.orderOnlineService.getAllMenuItems(this.locationService.currentLocationId).subscribe(function (res) {
            console.log("response recieved for order online", res);
            _this.menuResponse = res.data;
            setTimeout(function () {
                $('.gingerMenus').easyResponsiveTabs({
                    type: 'vertical',
                    width: 'auto',
                    fit: true
                });
            }, 0);
        });
    };
    OrderOnlineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-order-online',
            template: __webpack_require__("../../../../../src/app/order-online/components/order-online.component.html"),
            styles: [__webpack_require__("../../../../../src/app/order-online/components/order-online.component.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */],
            __WEBPACK_IMPORTED_MODULE_2__location_services_location_service__["a" /* LocationService */],
            __WEBPACK_IMPORTED_MODULE_3__services_order_online_service__["a" /* OrderOnlineService */]])
    ], OrderOnlineComponent);
    return OrderOnlineComponent;
}());



/***/ }),

/***/ "../../../../../src/app/order-online/order-online.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderOnlineModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_order_online_component__ = __webpack_require__("../../../../../src/app/order-online/components/order-online.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__location_location_module__ = __webpack_require__("../../../../../src/app/location/location.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_order_online_service__ = __webpack_require__("../../../../../src/app/order-online/services/order-online.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var OrderOnlineModule = /** @class */ (function () {
    function OrderOnlineModule() {
    }
    OrderOnlineModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_3__location_location_module__["a" /* LocationModule */], __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__components_order_online_component__["a" /* OrderOnlineComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__services_order_online_service__["a" /* OrderOnlineService */]]
        })
    ], OrderOnlineModule);
    return OrderOnlineModule;
}());



/***/ }),

/***/ "../../../../../src/app/order-online/services/order-online.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderOnlineService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_services_api_gateway_service__ = __webpack_require__("../../../../../src/app/core/services/api-gateway.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_settings__ = __webpack_require__("../../../../../src/environments/settings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrderOnlineService = /** @class */ (function () {
    function OrderOnlineService(apiService) {
        this.apiService = apiService;
    }
    OrderOnlineService.prototype.getAllMenuItems = function (locationId) {
        return this.apiService.get(__WEBPACK_IMPORTED_MODULE_3__environments_settings__["a" /* SETTINGS */].ENDPOINT + 'rest/orderOnline/allItems', { locationId: locationId.toString() });
    };
    OrderOnlineService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__core_services_api_gateway_service__["a" /* ApiGatewayService */]])
    ], OrderOnlineService);
    return OrderOnlineService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/location-modal/location-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"setLocation modal fade bs-example-modal-sm\" tabindex=\"-1\" role=\"dialog\" id=\"locationMmDiv\">\r\n    <div class=\"modal-dialog modal-sm\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header text-center\">\r\n                <h4 class=\"modal-title\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> Choose Your Location</h4>\r\n            </div>\r\n            <div *ngIf = \"locationData\" class=\"modal-body locationContainer\">\r\n                <a *ngFor= \"let obj of locationData\" id ='{{obj.locationId}}' href=\"javascript:void(0)\" (click) = \"locationSelectHandler(obj.locationId)\">{{obj.name}} {{obj.restuarentName}}</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/components/location-modal/location-modal.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".setLocation a {\n  display: block;\n  padding: 7px;\n  border-bottom: 1px solid #DDDDDD;\n  margin-bottom: 7px;\n  background: #444;\n  color: #FFF;\n  transition: all ease-in-out 0.3s;\n}\n.setLocation a:last-child {\n  border-bottom: none;\n}\n.setLocation a:hover {\n  background: #777;\n}\n.setLocation a.locSelected {\n  background: #8BC53E;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/location-modal/location-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bootstrap_dist_js_bootstrap_min_js__ = __webpack_require__("../../../../bootstrap/dist/js/bootstrap.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bootstrap_dist_js_bootstrap_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_bootstrap_dist_js_bootstrap_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__location_services_location_service__ = __webpack_require__("../../../../../src/app/location/services/location.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LocationModalComponent = /** @class */ (function () {
    function LocationModalComponent(locationService) {
        this.locationService = locationService;
        this.locationSelectEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.locationFoundEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    LocationModalComponent.prototype.ngOnInit = function () {
        console.log('data recieved', this.locationData);
        if (this.locationService.isLoacationExist) {
            this.locationFoundEvent.emit();
        }
    };
    LocationModalComponent.prototype.locationSelectHandler = function (locationId) {
        this.locationService.currentLocationId = locationId;
        this.locationSelectEvent.emit(locationId);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], LocationModalComponent.prototype, "locationData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], LocationModalComponent.prototype, "locationFoundEvent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], LocationModalComponent.prototype, "locationSelectEvent", void 0);
    LocationModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'location-modal',
            template: __webpack_require__("../../../../../src/app/shared/components/location-modal/location-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/location-modal/location-modal.component.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__location_services_location_service__["a" /* LocationService */]])
    ], LocationModalComponent);
    return LocationModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_location_modal_location_modal_component__ = __webpack_require__("../../../../../src/app/shared/components/location-modal/location-modal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__components_location_modal_location_modal_component__["a" /* LocationModalComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__components_location_modal_location_modal_component__["a" /* LocationModalComponent */]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "../../../../../src/app/team/components/team.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"team\">\r\n  <div class=\"container text-center\">\r\n    <div class=\"ceo col-md-6\">\r\n      <span></span>\r\n      <div class=\"teamDetails\">\r\n        <h4 class=\"text-uppercase\">{{teamContent.ownerInfo}}</h4>\r\n        <h6 class=\"text-capitalize\">{{teamContent.designation}}</h6>\r\n        <div class=\"text-left\">\r\n          <p *ngFor= \"let p of teamContent.testimonials.testimonialOwner\">{{p}}</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"chef col-md-6\">\r\n      <span></span>\r\n      <div class=\"teamDetails\">\r\n        <h4 class=\"text-uppercase\">{{teamContent.chefInfo}}</h4>\r\n        <h6 class=\"text-capitalize\">{{teamContent.chefDesignation}}</h6>\r\n        <div class=\"text-left\">\r\n          <p *ngFor= \"let p of teamContent.testimonials.testimonialChef\">{{p}}</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/team/components/team.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#team div span {\n  height: 150px;\n  width: 150px;\n  margin: 0 auto 15px auto;\n  display: block;\n  border-radius: 50%;\n  position: relative;\n  z-index: 1;\n  border: 1px solid #DDD;\n}\n#team div .teamDetails {\n  background: #FFFFFF;\n  margin: 0;\n  padding: 50px 10px 10px 10px;\n  min-height: 320px;\n  position: relative;\n  top: -70px;\n  border: 1px solid #DDD;\n}\n#team div .teamDetails h4.text-uppercase {\n  color: #8BC53E;\n}\n#team div .teamDetails div.text-left {\n  height: 230px;\n  border-top: 1px solid #EFEFEF;\n}\n#team div .teamDetails div.text-left p {\n  line-height: 1.88;\n  text-align: justify;\n}\n#team div .teamDetails .social {\n  border-top: 1px solid #DDD;\n  padding-top: 5px;\n}\n#team div .teamDetails .social a {\n  display: inline-block;\n  margin: 0 10px;\n}\n#team .ceo span {\n  background: #333 url(/assets/img/ceo.jpg) center no-repeat;\n}\n#team .chef span {\n  background: #333 url(/assets/img/chef1.jpg) center no-repeat;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/team/components/team.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_content_loader_service__ = __webpack_require__("../../../../../src/app/core/services/content-loader.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TeamComponent = /** @class */ (function () {
    function TeamComponent(contentLoader) {
        this.contentLoader = contentLoader;
    }
    TeamComponent.prototype.ngOnInit = function () {
        this.teamContent = this.contentLoader.getContent('team');
        // this.titleService.setTitle("GingerClub - Team");
    };
    TeamComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-team',
            template: __webpack_require__("../../../../../src/app/team/components/team.component.html"),
            styles: [__webpack_require__("../../../../../src/app/team/components/team.component.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_services_content_loader_service__["a" /* ContentLoaderService */]])
    ], TeamComponent);
    return TeamComponent;
}());



/***/ }),

/***/ "../../../../../src/app/team/team.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_team_component__ = __webpack_require__("../../../../../src/app/team/components/team.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TeamModule = /** @class */ (function () {
    function TeamModule() {
    }
    TeamModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__components_team_component__["a" /* TeamComponent */]
            ]
        })
    ], TeamModule);
    return TeamModule;
}());



/***/ }),

/***/ "../../../../../src/app/top-header/components/top-header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"topHeader hidden-xs hidden-sm\">\r\n  <div class=\"container\">\r\n    <ol class=\"col-md-6 breadcrumb\">\r\n      <li>\r\n        <a routerLink=\"/home\">\r\n          <i class=\"fa fa-home fa-lg\" aria-hidden=\"true\"></i>\r\n        </a>\r\n      </li>\r\n      <li class=\"active\">Home</li>\r\n    </ol>\r\n    <!-- <div class=\"myAccount text-center col-md-4\">\r\n    <ul class=\"hidden\">\r\n      <li class=\"userName\"></li>\r\n      <li>\r\n        <a href=\"#\" class=\"userAccount\">\r\n          <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a href=\"#\" class=\"logout\">\r\n          <i class=\"fa fa-power-off\" aria-hidden=\"true\"></i>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </div> -->\r\n    <ul class=\"col-md-6 social text-right list-inline\">\r\n      <li>\r\n        <a href=\"https://www.facebook.com/gingerclubdoha/\" target=\"_blank\">\r\n          <i class=\"fa fa-facebook-official\" aria-hidden=\"true\"></i>\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a class=\"phone\" href=\"tel:+97455617327\">\r\n          <i class=\"fa fa-whatsapp\" aria-hidden=\"true\"></i> +974 5561 7327</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/top-header/components/top-header.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".topHeader {\n  background: #999;\n  padding: 3px;\n}\n.topHeader ol,\n.topHeader ul {\n  margin: 0;\n  padding: 0;\n  background: none;\n}\n.topHeader .myAccount {\n  margin-top: 3px;\n}\n.topHeader .myAccount ul li {\n  list-style: none;\n  display: inline-block;\n  padding: 0 5px;\n  color: #FFF;\n}\n.topHeader .myAccount ul li a {\n  color: #FFF;\n}\n.topHeader ul.social li a.phone {\n  font-size: 14px;\n  vertical-align: bottom;\n  font-weight: 500;\n  color: #FFF;\n}\n.topHeader ul.social li a i {\n  margin-top: 2px;\n  color: #FFF;\n  font-size: 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/top-header/components/top-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TopHeaderComponent = /** @class */ (function () {
    function TopHeaderComponent() {
    }
    TopHeaderComponent.prototype.ngOnInit = function () {
    };
    TopHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-top-header',
            template: __webpack_require__("../../../../../src/app/top-header/components/top-header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/top-header/components/top-header.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], TopHeaderComponent);
    return TopHeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/top-header/top-header.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopHeaderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_top_header_component__ = __webpack_require__("../../../../../src/app/top-header/components/top-header.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TopHeaderModule = /** @class */ (function () {
    function TopHeaderModule() {
    }
    TopHeaderModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__components_top_header_component__["a" /* TopHeaderComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__components_top_header_component__["a" /* TopHeaderComponent */]]
        })
    ], TopHeaderModule);
    return TopHeaderModule;
}());



/***/ }),

/***/ "../../../../../src/assets/js/easyTabs.js":
/***/ (function(module, exports) {

// Easy Responsive Tabs Plugin
(function ($) {
    $.fn.extend({
        easyResponsiveTabs: function (options) {
            //Set the default values, use comma to separate the settings, example:
            var defaults = {
                type: 'default', //default, vertical, accordion;
                width: 'auto',
                fit: true,
                closed: false,
                activate: function () {}
            }
            //Variables
            var options = $.extend(defaults, options);
            var opt = options,
                jtype = opt.type,
                jfit = opt.fit,
                jwidth = opt.width,
                vtabs = 'vertical',
                accord = 'accordion';

            //Events
            $(this).bind('tabactivate', function (e, currentTab) {
                if (typeof options.activate === 'function') {
                    options.activate.call(currentTab, e)
                }
            });

            //Main function
            this.each(function () {
                var $respTabs = $(this);
                var $respTabsList = $respTabs.find('ul.resp-tabs-list');
                $respTabs.find('ul.resp-tabs-list li').addClass('resp-tab-item');
                $respTabs.css({
                    'display': 'block',
                    'width': jwidth
                });

                $respTabs.find('.resp-tabs-container > div').addClass('resp-tab-content');
                jtab_options();
                //Properties Function
                function jtab_options() {
                    if (jtype == vtabs) {
                        $respTabs.addClass('resp-vtabs');
                    }
                    if (jfit == true) {
                        $respTabs.css({
                            width: '100%',
                            margin: '0px'
                        });
                    }
                    if (jtype == accord) {
                        $respTabs.addClass('resp-easy-accordion');
                        $respTabs.find('.resp-tabs-list').css('display', 'none');
                    }
                }

                //Assigning the h2 markup to accordion title
                var $tabItemh2;
                $respTabs.find('.resp-tab-content').before("<h2 class='resp-accordion' role='tab'><span class='resp-arrow'></span></h2>");

                var itemCount = 0;
                $respTabs.find('.resp-accordion').each(function () {
                    $tabItemh2 = $(this);
                    var innertext = $respTabs.find('.resp-tab-item:eq(' + itemCount + ')').html();
                    $respTabs.find('.resp-accordion:eq(' + itemCount + ')').append(innertext);
                    $tabItemh2.attr('aria-controls', 'tab_item-' + (itemCount));
                    itemCount++;
                });

                //Assigning the 'aria-controls' to Tab items
                var count = 0,
                    $tabContent;
                $respTabs.find('.resp-tab-item').each(function () {
                    $tabItem = $(this);
                    $tabItem.attr('aria-controls', 'tab_item-' + (count));
                    $tabItem.attr('role', 'tab');

                    //First active tab, keep closed if option = 'closed' or option is 'accordion' and the element is in accordion mode 
                    if (options.closed !== true && !(options.closed === 'accordion' && !$respTabsList.is(':visible')) && !(options.closed === 'tabs' && $respTabsList.is(':visible'))) {
                        $respTabs.find('.resp-tab-item').first().addClass('resp-tab-active');
                        $respTabs.find('.resp-accordion').first().addClass('resp-tab-active');
                        $respTabs.find('.resp-tab-content').first().addClass('resp-tab-content-active clearfix').attr('style', 'display:block');
                    }

                    //Assigning the 'aria-labelledby' attr to tab-content
                    var tabcount = 0;
                    $respTabs.find('.resp-tab-content').each(function () {
                        $tabContent = $(this);
                        $tabContent.attr('aria-labelledby', 'tab_item-' + (tabcount));
                        tabcount++;
                    });
                    count++;
                });

                //Tab Click action function
                $respTabs.find("[role=tab]").each(function () {
                    var $currentTab = $(this);
                    $currentTab.click(function () {

                        var $tabAria = $currentTab.attr('aria-controls');

                        if ($currentTab.hasClass('resp-accordion') && $currentTab.hasClass('resp-tab-active')) {
                            $respTabs.find('.resp-tab-content-active').slideUp('', function () {
                                $(this).addClass('resp-accordion-closed');
                            });
                            $currentTab.removeClass('resp-tab-active');
                            return false;
                        }
                        if (!$currentTab.hasClass('resp-tab-active') && $currentTab.hasClass('resp-accordion')) {
                            $respTabs.find('.resp-tab-active').removeClass('resp-tab-active');
                            $respTabs.find('.resp-tab-content-active').slideUp().removeClass('resp-tab-content-active resp-accordion-closed');
                            $respTabs.find("[aria-controls=" + $tabAria + "]").addClass('resp-tab-active');

                            $respTabs.find('.resp-tab-content[aria-labelledby = ' + $tabAria + ']').slideDown().addClass('resp-tab-content-active clearfix');
                        } else {
                            $respTabs.find('.resp-tab-active').removeClass('resp-tab-active');
                            $respTabs.find('.resp-tab-content-active').removeAttr('style').removeClass('resp-tab-content-active').removeClass('resp-accordion-closed');
                            $respTabs.find("[aria-controls=" + $tabAria + "]").addClass('resp-tab-active');
                            $respTabs.find('.resp-tab-content[aria-labelledby = ' + $tabAria + ']').addClass('resp-tab-content-active clearfix').attr('style', 'display:block');
                        }
                        //Trigger tab activation event
                        $currentTab.trigger('tabactivate', $currentTab);
                    });
                    //Window resize function                   
                    $(window).resize(function () {
                        $respTabs.find('.resp-accordion-closed').removeAttr('style');
                    });
                });
            });
        }
    });
})(jQuery);


/***/ }),

/***/ "../../../../../src/assets/js/flexslider-min.js":
/***/ (function(module, exports) {

/*
 * jQuery FlexSlider v2.6.3
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */!function($){var e=!0;$.flexslider=function(t,a){var n=$(t);n.vars=$.extend({},$.flexslider.defaults,a);var i=n.vars.namespace,s=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,r=("ontouchstart"in window||s||window.DocumentTouch&&document instanceof DocumentTouch)&&n.vars.touch,o="click touchend MSPointerUp keyup",l="",c,d="vertical"===n.vars.direction,u=n.vars.reverse,v=n.vars.itemWidth>0,p="fade"===n.vars.animation,m=""!==n.vars.asNavFor,f={};$.data(t,"flexslider",n),f={init:function(){n.animating=!1,n.currentSlide=parseInt(n.vars.startAt?n.vars.startAt:0,10),isNaN(n.currentSlide)&&(n.currentSlide=0),n.animatingTo=n.currentSlide,n.atEnd=0===n.currentSlide||n.currentSlide===n.last,n.containerSelector=n.vars.selector.substr(0,n.vars.selector.search(" ")),n.slides=$(n.vars.selector,n),n.container=$(n.containerSelector,n),n.count=n.slides.length,n.syncExists=$(n.vars.sync).length>0,"slide"===n.vars.animation&&(n.vars.animation="swing"),n.prop=d?"top":"marginLeft",n.args={},n.manualPause=!1,n.stopped=!1,n.started=!1,n.startTimeout=null,n.transitions=!n.vars.video&&!p&&n.vars.useCSS&&function(){var e=document.createElement("div"),t=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var a in t)if(void 0!==e.style[t[a]])return n.pfx=t[a].replace("Perspective","").toLowerCase(),n.prop="-"+n.pfx+"-transform",!0;return!1}(),n.ensureAnimationEnd="",""!==n.vars.controlsContainer&&(n.controlsContainer=$(n.vars.controlsContainer).length>0&&$(n.vars.controlsContainer)),""!==n.vars.manualControls&&(n.manualControls=$(n.vars.manualControls).length>0&&$(n.vars.manualControls)),""!==n.vars.customDirectionNav&&(n.customDirectionNav=2===$(n.vars.customDirectionNav).length&&$(n.vars.customDirectionNav)),n.vars.randomize&&(n.slides.sort(function(){return Math.round(Math.random())-.5}),n.container.empty().append(n.slides)),n.doMath(),n.setup("init"),n.vars.controlNav&&f.controlNav.setup(),n.vars.directionNav&&f.directionNav.setup(),n.vars.keyboard&&(1===$(n.containerSelector).length||n.vars.multipleKeyboard)&&$(document).bind("keyup",function(e){var t=e.keyCode;if(!n.animating&&(39===t||37===t)){var a=39===t?n.getTarget("next"):37===t?n.getTarget("prev"):!1;n.flexAnimate(a,n.vars.pauseOnAction)}}),n.vars.mousewheel&&n.bind("mousewheel",function(e,t,a,i){e.preventDefault();var s=0>t?n.getTarget("next"):n.getTarget("prev");n.flexAnimate(s,n.vars.pauseOnAction)}),n.vars.pausePlay&&f.pausePlay.setup(),n.vars.slideshow&&n.vars.pauseInvisible&&f.pauseInvisible.init(),n.vars.slideshow&&(n.vars.pauseOnHover&&n.hover(function(){n.manualPlay||n.manualPause||n.pause()},function(){n.manualPause||n.manualPlay||n.stopped||n.play()}),n.vars.pauseInvisible&&f.pauseInvisible.isHidden()||(n.vars.initDelay>0?n.startTimeout=setTimeout(n.play,n.vars.initDelay):n.play())),m&&f.asNav.setup(),r&&n.vars.touch&&f.touch(),(!p||p&&n.vars.smoothHeight)&&$(window).bind("resize orientationchange focus",f.resize),n.find("img").attr("draggable","false"),setTimeout(function(){n.vars.start(n)},200)},asNav:{setup:function(){n.asNav=!0,n.animatingTo=Math.floor(n.currentSlide/n.move),n.currentItem=n.currentSlide,n.slides.removeClass(i+"active-slide").eq(n.currentItem).addClass(i+"active-slide"),s?(t._slider=n,n.slides.each(function(){var e=this;e._gesture=new MSGesture,e._gesture.target=e,e.addEventListener("MSPointerDown",function(e){e.preventDefault(),e.currentTarget._gesture&&e.currentTarget._gesture.addPointer(e.pointerId)},!1),e.addEventListener("MSGestureTap",function(e){e.preventDefault();var t=$(this),a=t.index();$(n.vars.asNavFor).data("flexslider").animating||t.hasClass("active")||(n.direction=n.currentItem<a?"next":"prev",n.flexAnimate(a,n.vars.pauseOnAction,!1,!0,!0))})})):n.slides.on(o,function(e){e.preventDefault();var t=$(this),a=t.index(),s=t.offset().left-$(n).scrollLeft();0>=s&&t.hasClass(i+"active-slide")?n.flexAnimate(n.getTarget("prev"),!0):$(n.vars.asNavFor).data("flexslider").animating||t.hasClass(i+"active-slide")||(n.direction=n.currentItem<a?"next":"prev",n.flexAnimate(a,n.vars.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){n.manualControls?f.controlNav.setupManual():f.controlNav.setupPaging()},setupPaging:function(){var e="thumbnails"===n.vars.controlNav?"control-thumbs":"control-paging",t=1,a,s;if(n.controlNavScaffold=$('<ol class="'+i+"control-nav "+i+e+'"></ol>'),n.pagingCount>1)for(var r=0;r<n.pagingCount;r++){s=n.slides.eq(r),void 0===s.attr("data-thumb-alt")&&s.attr("data-thumb-alt","");var c=""!==s.attr("data-thumb-alt")?c=' alt="'+s.attr("data-thumb-alt")+'"':"";if(a="thumbnails"===n.vars.controlNav?'<img src="'+s.attr("data-thumb")+'"'+c+"/>":'<a href="#">'+t+"</a>","thumbnails"===n.vars.controlNav&&!0===n.vars.thumbCaptions){var d=s.attr("data-thumbcaption");""!==d&&void 0!==d&&(a+='<span class="'+i+'caption">'+d+"</span>")}n.controlNavScaffold.append("<li>"+a+"</li>"),t++}n.controlsContainer?$(n.controlsContainer).append(n.controlNavScaffold):n.append(n.controlNavScaffold),f.controlNav.set(),f.controlNav.active(),n.controlNavScaffold.delegate("a, img",o,function(e){if(e.preventDefault(),""===l||l===e.type){var t=$(this),a=n.controlNav.index(t);t.hasClass(i+"active")||(n.direction=a>n.currentSlide?"next":"prev",n.flexAnimate(a,n.vars.pauseOnAction))}""===l&&(l=e.type),f.setToClearWatchedEvent()})},setupManual:function(){n.controlNav=n.manualControls,f.controlNav.active(),n.controlNav.bind(o,function(e){if(e.preventDefault(),""===l||l===e.type){var t=$(this),a=n.controlNav.index(t);t.hasClass(i+"active")||(a>n.currentSlide?n.direction="next":n.direction="prev",n.flexAnimate(a,n.vars.pauseOnAction))}""===l&&(l=e.type),f.setToClearWatchedEvent()})},set:function(){var e="thumbnails"===n.vars.controlNav?"img":"a";n.controlNav=$("."+i+"control-nav li "+e,n.controlsContainer?n.controlsContainer:n)},active:function(){n.controlNav.removeClass(i+"active").eq(n.animatingTo).addClass(i+"active")},update:function(e,t){n.pagingCount>1&&"add"===e?n.controlNavScaffold.append($('<li><a href="#">'+n.count+"</a></li>")):1===n.pagingCount?n.controlNavScaffold.find("li").remove():n.controlNav.eq(t).closest("li").remove(),f.controlNav.set(),n.pagingCount>1&&n.pagingCount!==n.controlNav.length?n.update(t,e):f.controlNav.active()}},directionNav:{setup:function(){var e=$('<ul class="'+i+'direction-nav"><li class="'+i+'nav-prev"><a class="'+i+'prev" href="#">'+n.vars.prevText+'</a></li><li class="'+i+'nav-next"><a class="'+i+'next" href="#">'+n.vars.nextText+"</a></li></ul>");n.customDirectionNav?n.directionNav=n.customDirectionNav:n.controlsContainer?($(n.controlsContainer).append(e),n.directionNav=$("."+i+"direction-nav li a",n.controlsContainer)):(n.append(e),n.directionNav=$("."+i+"direction-nav li a",n)),f.directionNav.update(),n.directionNav.bind(o,function(e){e.preventDefault();var t;""!==l&&l!==e.type||(t=$(this).hasClass(i+"next")?n.getTarget("next"):n.getTarget("prev"),n.flexAnimate(t,n.vars.pauseOnAction)),""===l&&(l=e.type),f.setToClearWatchedEvent()})},update:function(){var e=i+"disabled";1===n.pagingCount?n.directionNav.addClass(e).attr("tabindex","-1"):n.vars.animationLoop?n.directionNav.removeClass(e).removeAttr("tabindex"):0===n.animatingTo?n.directionNav.removeClass(e).filter("."+i+"prev").addClass(e).attr("tabindex","-1"):n.animatingTo===n.last?n.directionNav.removeClass(e).filter("."+i+"next").addClass(e).attr("tabindex","-1"):n.directionNav.removeClass(e).removeAttr("tabindex")}},pausePlay:{setup:function(){var e=$('<div class="'+i+'pauseplay"><a href="#"></a></div>');n.controlsContainer?(n.controlsContainer.append(e),n.pausePlay=$("."+i+"pauseplay a",n.controlsContainer)):(n.append(e),n.pausePlay=$("."+i+"pauseplay a",n)),f.pausePlay.update(n.vars.slideshow?i+"pause":i+"play"),n.pausePlay.bind(o,function(e){e.preventDefault(),""!==l&&l!==e.type||($(this).hasClass(i+"pause")?(n.manualPause=!0,n.manualPlay=!1,n.pause()):(n.manualPause=!1,n.manualPlay=!0,n.play())),""===l&&(l=e.type),f.setToClearWatchedEvent()})},update:function(e){"play"===e?n.pausePlay.removeClass(i+"pause").addClass(i+"play").html(n.vars.playText):n.pausePlay.removeClass(i+"play").addClass(i+"pause").html(n.vars.pauseText)}},touch:function(){function e(e){e.stopPropagation(),n.animating?e.preventDefault():(n.pause(),t._gesture.addPointer(e.pointerId),T=0,c=d?n.h:n.w,f=Number(new Date),l=v&&u&&n.animatingTo===n.last?0:v&&u?n.limit-(n.itemW+n.vars.itemMargin)*n.move*n.animatingTo:v&&n.currentSlide===n.last?n.limit:v?(n.itemW+n.vars.itemMargin)*n.move*n.currentSlide:u?(n.last-n.currentSlide+n.cloneOffset)*c:(n.currentSlide+n.cloneOffset)*c)}function a(e){e.stopPropagation();var a=e.target._slider;if(a){var n=-e.translationX,i=-e.translationY;return T+=d?i:n,m=T,y=d?Math.abs(T)<Math.abs(-n):Math.abs(T)<Math.abs(-i),e.detail===e.MSGESTURE_FLAG_INERTIA?void setImmediate(function(){t._gesture.stop()}):void((!y||Number(new Date)-f>500)&&(e.preventDefault(),!p&&a.transitions&&(a.vars.animationLoop||(m=T/(0===a.currentSlide&&0>T||a.currentSlide===a.last&&T>0?Math.abs(T)/c+2:1)),a.setProps(l+m,"setTouch"))))}}function i(e){e.stopPropagation();var t=e.target._slider;if(t){if(t.animatingTo===t.currentSlide&&!y&&null!==m){var a=u?-m:m,n=a>0?t.getTarget("next"):t.getTarget("prev");t.canAdvance(n)&&(Number(new Date)-f<550&&Math.abs(a)>50||Math.abs(a)>c/2)?t.flexAnimate(n,t.vars.pauseOnAction):p||t.flexAnimate(t.currentSlide,t.vars.pauseOnAction,!0)}r=null,o=null,m=null,l=null,T=0}}var r,o,l,c,m,f,g,h,S,y=!1,x=0,b=0,T=0;s?(t.style.msTouchAction="none",t._gesture=new MSGesture,t._gesture.target=t,t.addEventListener("MSPointerDown",e,!1),t._slider=n,t.addEventListener("MSGestureChange",a,!1),t.addEventListener("MSGestureEnd",i,!1)):(g=function(e){n.animating?e.preventDefault():(window.navigator.msPointerEnabled||1===e.touches.length)&&(n.pause(),c=d?n.h:n.w,f=Number(new Date),x=e.touches[0].pageX,b=e.touches[0].pageY,l=v&&u&&n.animatingTo===n.last?0:v&&u?n.limit-(n.itemW+n.vars.itemMargin)*n.move*n.animatingTo:v&&n.currentSlide===n.last?n.limit:v?(n.itemW+n.vars.itemMargin)*n.move*n.currentSlide:u?(n.last-n.currentSlide+n.cloneOffset)*c:(n.currentSlide+n.cloneOffset)*c,r=d?b:x,o=d?x:b,t.addEventListener("touchmove",h,!1),t.addEventListener("touchend",S,!1))},h=function(e){x=e.touches[0].pageX,b=e.touches[0].pageY,m=d?r-b:r-x,y=d?Math.abs(m)<Math.abs(x-o):Math.abs(m)<Math.abs(b-o);var t=500;(!y||Number(new Date)-f>t)&&(e.preventDefault(),!p&&n.transitions&&(n.vars.animationLoop||(m/=0===n.currentSlide&&0>m||n.currentSlide===n.last&&m>0?Math.abs(m)/c+2:1),n.setProps(l+m,"setTouch")))},S=function(e){if(t.removeEventListener("touchmove",h,!1),n.animatingTo===n.currentSlide&&!y&&null!==m){var a=u?-m:m,i=a>0?n.getTarget("next"):n.getTarget("prev");n.canAdvance(i)&&(Number(new Date)-f<550&&Math.abs(a)>50||Math.abs(a)>c/2)?n.flexAnimate(i,n.vars.pauseOnAction):p||n.flexAnimate(n.currentSlide,n.vars.pauseOnAction,!0)}t.removeEventListener("touchend",S,!1),r=null,o=null,m=null,l=null},t.addEventListener("touchstart",g,!1))},resize:function(){!n.animating&&n.is(":visible")&&(v||n.doMath(),p?f.smoothHeight():v?(n.slides.width(n.computedW),n.update(n.pagingCount),n.setProps()):d?(n.viewport.height(n.h),n.setProps(n.h,"setTotal")):(n.vars.smoothHeight&&f.smoothHeight(),n.newSlides.width(n.computedW),n.setProps(n.computedW,"setTotal")))},smoothHeight:function(e){if(!d||p){var t=p?n:n.viewport;e?t.animate({height:n.slides.eq(n.animatingTo).innerHeight()},e):t.innerHeight(n.slides.eq(n.animatingTo).innerHeight())}},sync:function(e){var t=$(n.vars.sync).data("flexslider"),a=n.animatingTo;switch(e){case"animate":t.flexAnimate(a,n.vars.pauseOnAction,!1,!0);break;case"play":t.playing||t.asNav||t.play();break;case"pause":t.pause()}},uniqueID:function(e){return e.filter("[id]").add(e.find("[id]")).each(function(){var e=$(this);e.attr("id",e.attr("id")+"_clone")}),e},pauseInvisible:{visProp:null,init:function(){var e=f.pauseInvisible.getHiddenProp();if(e){var t=e.replace(/[H|h]idden/,"")+"visibilitychange";document.addEventListener(t,function(){f.pauseInvisible.isHidden()?n.startTimeout?clearTimeout(n.startTimeout):n.pause():n.started?n.play():n.vars.initDelay>0?setTimeout(n.play,n.vars.initDelay):n.play()})}},isHidden:function(){var e=f.pauseInvisible.getHiddenProp();return e?document[e]:!1},getHiddenProp:function(){var e=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var t=0;t<e.length;t++)if(e[t]+"Hidden"in document)return e[t]+"Hidden";return null}},setToClearWatchedEvent:function(){clearTimeout(c),c=setTimeout(function(){l=""},3e3)}},n.flexAnimate=function(e,t,a,s,o){if(n.vars.animationLoop||e===n.currentSlide||(n.direction=e>n.currentSlide?"next":"prev"),m&&1===n.pagingCount&&(n.direction=n.currentItem<e?"next":"prev"),!n.animating&&(n.canAdvance(e,o)||a)&&n.is(":visible")){if(m&&s){var l=$(n.vars.asNavFor).data("flexslider");if(n.atEnd=0===e||e===n.count-1,l.flexAnimate(e,!0,!1,!0,o),n.direction=n.currentItem<e?"next":"prev",l.direction=n.direction,Math.ceil((e+1)/n.visible)-1===n.currentSlide||0===e)return n.currentItem=e,n.slides.removeClass(i+"active-slide").eq(e).addClass(i+"active-slide"),!1;n.currentItem=e,n.slides.removeClass(i+"active-slide").eq(e).addClass(i+"active-slide"),e=Math.floor(e/n.visible)}if(n.animating=!0,n.animatingTo=e,t&&n.pause(),n.vars.before(n),n.syncExists&&!o&&f.sync("animate"),n.vars.controlNav&&f.controlNav.active(),v||n.slides.removeClass(i+"active-slide").eq(e).addClass(i+"active-slide"),n.atEnd=0===e||e===n.last,n.vars.directionNav&&f.directionNav.update(),e===n.last&&(n.vars.end(n),n.vars.animationLoop||n.pause()),p)r?(n.slides.eq(n.currentSlide).css({opacity:0,zIndex:1}),n.slides.eq(e).css({opacity:1,zIndex:2}),n.wrapup(c)):(n.slides.eq(n.currentSlide).css({zIndex:1}).animate({opacity:0},n.vars.animationSpeed,n.vars.easing),n.slides.eq(e).css({zIndex:2}).animate({opacity:1},n.vars.animationSpeed,n.vars.easing,n.wrapup));else{var c=d?n.slides.filter(":first").height():n.computedW,g,h,S;v?(g=n.vars.itemMargin,S=(n.itemW+g)*n.move*n.animatingTo,h=S>n.limit&&1!==n.visible?n.limit:S):h=0===n.currentSlide&&e===n.count-1&&n.vars.animationLoop&&"next"!==n.direction?u?(n.count+n.cloneOffset)*c:0:n.currentSlide===n.last&&0===e&&n.vars.animationLoop&&"prev"!==n.direction?u?0:(n.count+1)*c:u?(n.count-1-e+n.cloneOffset)*c:(e+n.cloneOffset)*c,n.setProps(h,"",n.vars.animationSpeed),n.transitions?(n.vars.animationLoop&&n.atEnd||(n.animating=!1,n.currentSlide=n.animatingTo),n.container.unbind("webkitTransitionEnd transitionend"),n.container.bind("webkitTransitionEnd transitionend",function(){clearTimeout(n.ensureAnimationEnd),n.wrapup(c)}),clearTimeout(n.ensureAnimationEnd),n.ensureAnimationEnd=setTimeout(function(){n.wrapup(c)},n.vars.animationSpeed+100)):n.container.animate(n.args,n.vars.animationSpeed,n.vars.easing,function(){n.wrapup(c)})}n.vars.smoothHeight&&f.smoothHeight(n.vars.animationSpeed)}},n.wrapup=function(e){p||v||(0===n.currentSlide&&n.animatingTo===n.last&&n.vars.animationLoop?n.setProps(e,"jumpEnd"):n.currentSlide===n.last&&0===n.animatingTo&&n.vars.animationLoop&&n.setProps(e,"jumpStart")),n.animating=!1,n.currentSlide=n.animatingTo,n.vars.after(n)},n.animateSlides=function(){!n.animating&&e&&n.flexAnimate(n.getTarget("next"))},n.pause=function(){clearInterval(n.animatedSlides),n.animatedSlides=null,n.playing=!1,n.vars.pausePlay&&f.pausePlay.update("play"),n.syncExists&&f.sync("pause")},n.play=function(){n.playing&&clearInterval(n.animatedSlides),n.animatedSlides=n.animatedSlides||setInterval(n.animateSlides,n.vars.slideshowSpeed),n.started=n.playing=!0,n.vars.pausePlay&&f.pausePlay.update("pause"),n.syncExists&&f.sync("play")},n.stop=function(){n.pause(),n.stopped=!0},n.canAdvance=function(e,t){var a=m?n.pagingCount-1:n.last;return t?!0:m&&n.currentItem===n.count-1&&0===e&&"prev"===n.direction?!0:m&&0===n.currentItem&&e===n.pagingCount-1&&"next"!==n.direction?!1:e!==n.currentSlide||m?n.vars.animationLoop?!0:n.atEnd&&0===n.currentSlide&&e===a&&"next"!==n.direction?!1:!n.atEnd||n.currentSlide!==a||0!==e||"next"!==n.direction:!1},n.getTarget=function(e){return n.direction=e,"next"===e?n.currentSlide===n.last?0:n.currentSlide+1:0===n.currentSlide?n.last:n.currentSlide-1},n.setProps=function(e,t,a){var i=function(){var a=e?e:(n.itemW+n.vars.itemMargin)*n.move*n.animatingTo,i=function(){if(v)return"setTouch"===t?e:u&&n.animatingTo===n.last?0:u?n.limit-(n.itemW+n.vars.itemMargin)*n.move*n.animatingTo:n.animatingTo===n.last?n.limit:a;switch(t){case"setTotal":return u?(n.count-1-n.currentSlide+n.cloneOffset)*e:(n.currentSlide+n.cloneOffset)*e;case"setTouch":return u?e:e;case"jumpEnd":return u?e:n.count*e;case"jumpStart":return u?n.count*e:e;default:return e}}();return-1*i+"px"}();n.transitions&&(i=d?"translate3d(0,"+i+",0)":"translate3d("+i+",0,0)",a=void 0!==a?a/1e3+"s":"0s",n.container.css("-"+n.pfx+"-transition-duration",a),n.container.css("transition-duration",a)),n.args[n.prop]=i,(n.transitions||void 0===a)&&n.container.css(n.args),n.container.css("transform",i)},n.setup=function(e){if(p)n.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"}),"init"===e&&(r?n.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+n.vars.animationSpeed/1e3+"s ease",zIndex:1}).eq(n.currentSlide).css({opacity:1,zIndex:2}):0==n.vars.fadeFirstSlide?n.slides.css({opacity:0,display:"block",zIndex:1}).eq(n.currentSlide).css({zIndex:2}).css({opacity:1}):n.slides.css({opacity:0,display:"block",zIndex:1}).eq(n.currentSlide).css({zIndex:2}).animate({opacity:1},n.vars.animationSpeed,n.vars.easing)),n.vars.smoothHeight&&f.smoothHeight();else{var t,a;"init"===e&&(n.viewport=$('<div class="'+i+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(n).append(n.container),n.cloneCount=0,n.cloneOffset=0,u&&(a=$.makeArray(n.slides).reverse(),n.slides=$(a),n.container.empty().append(n.slides))),n.vars.animationLoop&&!v&&(n.cloneCount=2,n.cloneOffset=1,"init"!==e&&n.container.find(".clone").remove(),n.container.append(f.uniqueID(n.slides.first().clone().addClass("clone")).attr("aria-hidden","true")).prepend(f.uniqueID(n.slides.last().clone().addClass("clone")).attr("aria-hidden","true"))),n.newSlides=$(n.vars.selector,n),t=u?n.count-1-n.currentSlide+n.cloneOffset:n.currentSlide+n.cloneOffset,d&&!v?(n.container.height(200*(n.count+n.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){n.newSlides.css({display:"block"}),n.doMath(),n.viewport.height(n.h),n.setProps(t*n.h,"init")},"init"===e?100:0)):(n.container.width(200*(n.count+n.cloneCount)+"%"),n.setProps(t*n.computedW,"init"),setTimeout(function(){n.doMath(),n.newSlides.css({width:n.computedW,marginRight:n.computedM,"float":"left",display:"block"}),n.vars.smoothHeight&&f.smoothHeight()},"init"===e?100:0))}v||n.slides.removeClass(i+"active-slide").eq(n.currentSlide).addClass(i+"active-slide"),n.vars.init(n)},n.doMath=function(){var e=n.slides.first(),t=n.vars.itemMargin,a=n.vars.minItems,i=n.vars.maxItems;n.w=void 0===n.viewport?n.width():n.viewport.width(),n.h=e.height(),n.boxPadding=e.outerWidth()-e.width(),v?(n.itemT=n.vars.itemWidth+t,n.itemM=t,n.minW=a?a*n.itemT:n.w,n.maxW=i?i*n.itemT-t:n.w,n.itemW=n.minW>n.w?(n.w-t*(a-1))/a:n.maxW<n.w?(n.w-t*(i-1))/i:n.vars.itemWidth>n.w?n.w:n.vars.itemWidth,n.visible=Math.floor(n.w/n.itemW),n.move=n.vars.move>0&&n.vars.move<n.visible?n.vars.move:n.visible,n.pagingCount=Math.ceil((n.count-n.visible)/n.move+1),n.last=n.pagingCount-1,n.limit=1===n.pagingCount?0:n.vars.itemWidth>n.w?n.itemW*(n.count-1)+t*(n.count-1):(n.itemW+t)*n.count-n.w-t):(n.itemW=n.w,n.itemM=t,n.pagingCount=n.count,n.last=n.count-1),n.computedW=n.itemW-n.boxPadding,n.computedM=n.itemM},n.update=function(e,t){n.doMath(),v||(e<n.currentSlide?n.currentSlide+=1:e<=n.currentSlide&&0!==e&&(n.currentSlide-=1),n.animatingTo=n.currentSlide),n.vars.controlNav&&!n.manualControls&&("add"===t&&!v||n.pagingCount>n.controlNav.length?f.controlNav.update("add"):("remove"===t&&!v||n.pagingCount<n.controlNav.length)&&(v&&n.currentSlide>n.last&&(n.currentSlide-=1,n.animatingTo-=1),f.controlNav.update("remove",n.last))),n.vars.directionNav&&f.directionNav.update()},n.addSlide=function(e,t){var a=$(e);n.count+=1,n.last=n.count-1,d&&u?void 0!==t?n.slides.eq(n.count-t).after(a):n.container.prepend(a):void 0!==t?n.slides.eq(t).before(a):n.container.append(a),n.update(t,"add"),n.slides=$(n.vars.selector+":not(.clone)",n),n.setup(),n.vars.added(n)},n.removeSlide=function(e){var t=isNaN(e)?n.slides.index($(e)):e;n.count-=1,n.last=n.count-1,isNaN(e)?$(e,n.slides).remove():d&&u?n.slides.eq(n.last).remove():n.slides.eq(e).remove(),n.doMath(),n.update(t,"remove"),n.slides=$(n.vars.selector+":not(.clone)",n),n.setup(),n.vars.removed(n)},f.init()},$(window).blur(function(t){e=!1}).focus(function(t){e=!0}),$.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7e3,animationSpeed:600,initDelay:0,randomize:!1,fadeFirstSlide:!0,thumbCaptions:!1,pauseOnAction:!0,pauseOnHover:!1,pauseInvisible:!0,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",customDirectionNav:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:!0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){},init:function(){}},$.fn.flexslider=function(e){if(void 0===e&&(e={}),"object"==typeof e)return this.each(function(){var t=$(this),a=e.selector?e.selector:".slides > li",n=t.find(a);1===n.length&&e.allowOneSlide===!1||0===n.length?(n.fadeIn(400),e.start&&e.start(t)):void 0===t.data("flexslider")&&new $.flexslider(this,e)});var t=$(this).data("flexslider");switch(e){case"play":t.play();break;case"pause":t.pause();break;case"stop":t.stop();break;case"next":t.flexAnimate(t.getTarget("next"),!0);break;case"prev":case"previous":t.flexAnimate(t.getTarget("prev"),!0);break;default:"number"==typeof e&&t.flexAnimate(e,!0)}}}(jQuery);

/***/ }),

/***/ "../../../../../src/assets/less/flexslider.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\r\n * jQuery FlexSlider v2.6.3\r\n * http://www.woothemes.com/flexslider/\r\n *\r\n * Copyright 2012 WooThemes\r\n * Free to use under the GPLv2 and later license.\r\n * http://www.gnu.org/licenses/gpl-2.0.html\r\n *\r\n * Contributing author: Tyler Smith (@mbmufffin)\r\n *\r\n */\r\n\r\n\r\n/* ====================================================================================================================\r\n * FONT-FACE\r\n * ====================================================================================================================*/\r\n\r\n@font-face {\r\n    font-family: 'flexslider-icon';\r\n    src: url('/assets/less/fonts/flexslider-icon.eot');\r\n    src: url('/assets/less/fonts/flexslider-icon.eot?#iefix') format('embedded-opentype'), url('/assets/less/fonts/flexslider-icon.woff') format('woff'), url('/assets/less/fonts/flexslider-icon.ttf') format('truetype'), url('/assets/less/fonts/flexslider-icon.svg#flexslider-icon') format('svg');\r\n    font-weight: normal;\r\n    font-style: normal;\r\n}\r\n\r\n\r\n/* ====================================================================================================================\r\n * RESETS\r\n * ====================================================================================================================*/\r\n\r\n.flex-container a:hover, .flex-slider a:hover {\r\n    outline: none;\r\n}\r\n\r\n.slides, .slides>li, .flex-control-nav, .flex-direction-nav {\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style: none;\r\n}\r\n\r\n.flex-pauseplay span {\r\n    text-transform: capitalize;\r\n}\r\n\r\n\r\n/* ====================================================================================================================\r\n * BASE STYLES\r\n * ====================================================================================================================*/\r\n\r\n.flexslider {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.flexslider .slides>li {\r\n    display: none;\r\n    -webkit-backface-visibility: hidden;\r\n}\r\n\r\n.flexslider .slides img {\r\n    width: 100%;\r\n    display: block;\r\n}\r\n\r\n.flex-caption {\r\n    width: 80%;\r\n    margin: 0 auto;\r\n    padding: 2%;\r\n    box-sizing: border-box;\r\n    left: 0;\r\n    bottom: 0;\r\n    background: rgba(0, 0, 0, .5);\r\n    color: #fff;\r\n    line-height: normal;\r\n    /* white-space: pre-line; */\r\n    font-size: 2.5em;\r\n    text-shadow: 0 -1px 0 rgba(0, 0, 0, .3);\r\n    border: 2px solid #000;\r\n}\r\n\r\n.flexslider .slides:after {\r\n    content: \" \";\r\n    display: block;\r\n    clear: both;\r\n    visibility: hidden;\r\n    line-height: 0;\r\n    height: 0;\r\n}\r\n\r\nhtml[xmlns] .flexslider .slides {\r\n    display: block;\r\n}\r\n\r\n* html .flexslider .slides {\r\n    height: 1%;\r\n}\r\n\r\n.no-js .flexslider .slides>li:first-child {\r\n    display: block;\r\n}\r\n\r\n\r\n/* ====================================================================================================================\r\n * DEFAULT THEME\r\n * ====================================================================================================================*/\r\n\r\n.flexslider {\r\n    position: relative;\r\n    zoom: 1;\r\n    border-radius: 4px;\r\n    -o-box-shadow: '' 0 1px 4px rgba(0, 0, 0, 0.2);\r\n    box-shadow: '' 0 1px 4px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.flexslider .slides {\r\n    zoom: 1;\r\n    margin-top: 18%;\r\n}\r\n\r\n.flexslider .slides img {\r\n    height: auto;\r\n    -moz-user-select: none;\r\n}\r\n\r\n.flex-viewport {\r\n    max-height: 2000px;\r\n    transition: all 1s ease;\r\n}\r\n\r\n.loading .flex-viewport {\r\n    max-height: 300px;\r\n}\r\n\r\n.carousel li {\r\n    margin-right: 5px;\r\n}\r\n\r\n.flex-direction-nav {\r\n    *height: 0;\r\n}\r\n\r\n.flex-direction-nav a {\r\n    text-decoration: none;\r\n    display: block;\r\n    width: 40px;\r\n    height: 50px;\r\n    margin: -20px 0 0;\r\n    position: absolute;\r\n    top: 50%;\r\n    z-index: 10;\r\n    overflow: hidden;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n    color: rgba(255, 255, 255, 0.8);\r\n    text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.3);\r\n    transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.flex-direction-nav a:before {\r\n    font-family: \"flexslider-icon\";\r\n    font-size: 40px;\r\n    display: inline-block;\r\n    content: '\\F001';\r\n    color: rgba(255, 255, 255, 0.8);\r\n    text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.3);\r\n}\r\n\r\n.flex-direction-nav a.flex-next:before {\r\n    content: '\\F002';\r\n}\r\n\r\n.flex-direction-nav .flex-prev {\r\n    left: -50px;\r\n}\r\n\r\n.flex-direction-nav .flex-next {\r\n    right: -50px;\r\n    text-align: right;\r\n}\r\n\r\n.flexslider:hover .flex-direction-nav .flex-prev {\r\n    opacity: 0.7;\r\n    left: 10px;\r\n}\r\n\r\n.flexslider:hover .flex-direction-nav .flex-prev:hover {\r\n    opacity: 1;\r\n}\r\n\r\n.flexslider:hover .flex-direction-nav .flex-next {\r\n    opacity: 0.7;\r\n    right: 10px;\r\n}\r\n\r\n.flexslider:hover .flex-direction-nav .flex-next:hover {\r\n    opacity: 1;\r\n}\r\n\r\n.flex-direction-nav .flex-disabled {\r\n    opacity: 0!important;\r\n    filter: alpha(opacity=0);\r\n    cursor: default;\r\n    z-index: -1;\r\n}\r\n\r\n.flex-pauseplay a {\r\n    display: block;\r\n    width: 20px;\r\n    height: 20px;\r\n    position: absolute;\r\n    bottom: 5px;\r\n    left: 10px;\r\n    opacity: 0.8;\r\n    z-index: 10;\r\n    overflow: hidden;\r\n    cursor: pointer;\r\n    color: #000;\r\n}\r\n\r\n.flex-pauseplay a:before {\r\n    font-family: \"flexslider-icon\";\r\n    font-size: 20px;\r\n    display: inline-block;\r\n    content: '\\F004';\r\n}\r\n\r\n.flex-pauseplay a:hover {\r\n    opacity: 1;\r\n}\r\n\r\n.flex-pauseplay a.flex-play:before {\r\n    content: '\\F003';\r\n}\r\n\r\n.flex-control-nav {\r\n    width: 100%;\r\n    position: absolute;\r\n    bottom: -40px;\r\n    text-align: center;\r\n}\r\n\r\n.flex-control-nav li {\r\n    margin: 0 6px;\r\n    display: inline-block;\r\n    zoom: 1;\r\n    *display: inline;\r\n}\r\n\r\n.flex-control-paging li a {\r\n    width: 11px;\r\n    height: 11px;\r\n    display: block;\r\n    background: #666;\r\n    background: rgba(0, 0, 0, 0.5);\r\n    cursor: pointer;\r\n    text-indent: -9999px;\r\n    -o-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);\r\n    box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);\r\n    border-radius: 20px;\r\n}\r\n\r\n.flex-control-paging li a:hover {\r\n    background: #333;\r\n    background: rgba(0, 0, 0, 0.7);\r\n}\r\n\r\n.flex-control-paging li a.flex-active {\r\n    background: #000;\r\n    background: rgba(0, 0, 0, 0.9);\r\n    cursor: default;\r\n}\r\n\r\n.flex-control-thumbs {\r\n    margin: 5px 0 0;\r\n    position: static;\r\n    overflow: hidden;\r\n}\r\n\r\n.flex-control-thumbs li {\r\n    width: 25%;\r\n    float: left;\r\n    margin: 0;\r\n}\r\n\r\n.flex-control-thumbs img {\r\n    width: 100%;\r\n    height: auto;\r\n    display: block;\r\n    opacity: .7;\r\n    cursor: pointer;\r\n    -moz-user-select: none;\r\n    transition: all 1s ease;\r\n}\r\n\r\n.flex-control-thumbs img:hover {\r\n    opacity: 1;\r\n}\r\n\r\n.flex-control-thumbs .flex-active {\r\n    opacity: 1;\r\n    cursor: default;\r\n}\r\n\r\n\r\n/* ====================================================================================================================\r\n * RESPONSIVE\r\n * ====================================================================================================================*/\r\n\r\n@media screen and (max-width: 860px) {\r\n    .flex-caption {\r\n        font-size: 2em;\r\n        border: none;\r\n    }\r\n    .flexslider .slides {\r\n        margin-top: 50%;\r\n    }\r\n    .flex-direction-nav .flex-prev {\r\n        opacity: 1;\r\n        left: 10px;\r\n    }\r\n    .flex-direction-nav .flex-next {\r\n        opacity: 1;\r\n        right: 10px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/environments/settings.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SETTINGS; });
var SETTINGS = {
    ENDPOINT: 'http://gingerclubqatar.com/GingerClub/',
    CONTENTPATH: 'assets/mocks/'
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map