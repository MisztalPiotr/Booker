(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+VzF":
/*!****************************************!*\
  !*** ./src/app/services/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");



class AuthGuard {
    constructor(router, afAuth) {
        this.router = router;
        this.afAuth = afAuth;
    }
    canActivate(route, state) {
        return new Promise((resolve, reject) => {
            this.afAuth.onAuthStateChanged((user) => {
                if (user) {
                    // if (!user.emailVerified)                            // if the user hasn't verified their email, send them to that page
                    //     this.router.navigate(['/verify-email']);
                    resolve(true);
                }
                else {
                    console.log('Auth Guard: user is not logged in');
                    this.router.navigate(['/']); // a logged out user will always be sent to home
                    resolve(false);
                }
            });
        });
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\miszt\OneDrive\Pulpit\Booker\Booker\src\main.ts */"zUnb");


/***/ }),

/***/ "8sfI":
/*!******************************************************!*\
  !*** ./src/app/studio/studio-main-page.component.ts ***!
  \******************************************************/
/*! exports provided: StudioMainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudioMainPageComponent", function() { return StudioMainPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_studio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/studio.service */ "TMz6");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function StudioMainPageComponent_div_2_li_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const service_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](service_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](service_r3.description);
} }
function StudioMainPageComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Lokalizacja:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "W\u0142a\u015Bciciel:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Us\u0142ugi:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, StudioMainPageComponent_div_2_li_14_Template, 5, 2, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const studio_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](studio_r1.studioName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", studio_r1.location, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", studio_r1.ownerUsername, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", studio_r1.service);
} }
class StudioMainPageComponent {
    constructor(studioService, route) {
        this.studioService = studioService;
        this.route = route;
        this.hairdresserType = "hairdresser";
        this.makeupType = "makeup";
        this.allType = 'all';
        this.presentedStudios = [];
        this.allStudios = [];
        this.hairdresserStudios = [];
        this.makeupStudios = [];
        this.studioService.getStudios().subscribe((s) => {
            this.presentedStudios = s;
            this.allStudios = s;
            if (this.studioType === this.makeupType) {
                this.loadMakeupStudios();
            }
            if (this.studioType === this.hairdresserType) {
                this.loadHairdresserStudios();
            }
        });
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.studioType = params.get('studioType');
            if (this.studioType === this.makeupType) {
                this.loadMakeupStudios();
            }
            if (this.studioType === this.hairdresserType) {
                this.loadHairdresserStudios();
            }
            if (this.studioType === this.allType) {
                this.loadAllStudios();
            }
        });
    }
    loadHairdresserStudios() {
        this.presentedStudios = this.allStudios.filter(studio => studio.type === this.hairdresserType);
    }
    loadMakeupStudios() {
        this.presentedStudios = this.allStudios.filter(studio => studio.type === this.makeupType);
    }
    loadAllStudios() {
        this.presentedStudios = this.allStudios;
    }
    getStudios() {
    }
}
StudioMainPageComponent.ɵfac = function StudioMainPageComponent_Factory(t) { return new (t || StudioMainPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_studio_service__WEBPACK_IMPORTED_MODULE_1__["StudioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
StudioMainPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StudioMainPageComponent, selectors: [["app-studio-main-page"]], decls: 3, vars: 1, consts: [[1, "main-content"], [1, "blurred-background"], ["class", "studio-card", 4, "ngFor", "ngForOf"], [1, "studio-card"], [4, "ngFor", "ngForOf"]], template: function StudioMainPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StudioMainPageComponent_div_2_Template, 15, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.presentedStudios);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".studio-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center; \r\n    align-items: center; \r\n    background-color: #f0f0f0; \r\n    padding: 50px; \r\n    height: 100vh; \r\n    position: relative;\r\n  }\r\n \r\n  .blurred-background[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-image: url('/assets/images/hairdresser_background.jpg'); \r\n    background-size: cover;\r\n    filter: blur(2px); \r\n    z-index: -1; \r\n    opacity: 1; \r\n  }\r\n \r\n  .main-content[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column; \r\n    justify-content: center; \r\n    align-items: center; \r\n    background-color: transparent; \r\n    padding: 20px; \r\n    min-height: 100vh; \r\n  }\r\n \r\n  \r\n \r\n  .studio-card[_ngcontent-%COMP%] {\r\n    border: 1px solid #ccc;\r\n    padding: 10px;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n    border-radius: 5px;\r\n    background-color: #fff;\r\n    width: 100%; \r\n    max-width: 700px; \r\n    margin: 10px; \r\n  }\r\n \r\n  \r\n \r\n  .studio-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    color: #333;\r\n  }\r\n \r\n  \r\n \r\n  .studio-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    margin: 5px 0;\r\n  }\r\n \r\n  \r\n \r\n  .studio-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    padding-left: 0;\r\n  }\r\n \r\n  \r\n \r\n  .studio-card[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    color: #007BFF;\r\n  }\r\n \r\n  \r\n \r\n  .studio-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    color: #777;\r\n  }\r\n \r\n  .studio-card[_ngcontent-%COMP%]:hover {\r\n    transform: scale(1.05); \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0dWRpby1tYWluLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYix1QkFBdUIsRUFBRSx5Q0FBeUM7SUFDbEUsbUJBQW1CLEVBQUUsdUNBQXVDO0lBQzVELHlCQUF5QixFQUFFLHdDQUF3QztJQUNuRSxhQUFhLEVBQUUsd0RBQXdEO0lBQ3ZFLGFBQWEsRUFBRSxrREFBa0Q7SUFDakUsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWixrRUFBa0UsRUFBRSx1Q0FBdUM7SUFDM0csc0JBQXNCO0lBQ3RCLGlCQUFpQixFQUFFLHdDQUF3QztJQUMzRCxXQUFXLEVBQUUsOENBQThDO0lBQzNELFVBQVUsRUFBRSxpQ0FBaUM7RUFDL0M7O0VBQ0E7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCLEVBQUUsNkJBQTZCO0lBQ3JELHVCQUF1QixFQUFFLDhCQUE4QjtJQUN2RCxtQkFBbUIsRUFBRSw0QkFBNEI7SUFDakQsNkJBQTZCLEVBQUUsb0RBQW9EO0lBQ25GLGFBQWEsRUFBRSxrQ0FBa0M7SUFDakQsaUJBQWlCLEVBQUUsbURBQW1EO0VBQ3hFOztFQUNBLDhCQUE4Qjs7RUFDOUI7SUFDRSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLDBDQUEwQztJQUMxQyxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLFdBQVcsRUFBRSwyQ0FBMkM7SUFDeEQsZ0JBQWdCLEVBQUUsd0JBQXdCO0lBQzFDLFlBQVksRUFBRSw4QkFBOEI7RUFDOUM7O0VBRUEsdUNBQXVDOztFQUN2QztJQUNFLGVBQWU7SUFDZixXQUFXO0VBQ2I7O0VBRUEsNkNBQTZDOztFQUM3QztJQUNFLGVBQWU7SUFDZixhQUFhO0VBQ2Y7O0VBRUEsdUJBQXVCOztFQUN2QjtJQUNFLGdCQUFnQjtJQUNoQixlQUFlO0VBQ2pCOztFQUVBLDZCQUE2Qjs7RUFDN0I7SUFDRSxlQUFlO0lBQ2YsY0FBYztFQUNoQjs7RUFFQSxtQ0FBbUM7O0VBQ25DO0lBQ0UsZUFBZTtJQUNmLFdBQVc7RUFDYjs7RUFFQTtJQUNFLHNCQUFzQixFQUFFLHNDQUFzQztFQUNoRSIsImZpbGUiOiJzdHVkaW8tbWFpbi1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3R1ZGlvLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IC8qIENlbnRlciB0aGUgc3R1ZGlvIGNhcmRzIGhvcml6b250YWxseSAqL1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgLyogQ2VudGVyIHRoZSBzdHVkaW8gY2FyZHMgdmVydGljYWxseSAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDsgLyogQmFja2dyb3VuZCBjb2xvciBmb3IgdGhlIGZyZWUgc3BhY2UgKi9cclxuICAgIHBhZGRpbmc6IDUwcHg7IC8qIEFkZCBwYWRkaW5nIHRvIGNyZWF0ZSBtYXJnaW5zIG9uIHRoZSBsZWZ0IGFuZCByaWdodCAqL1xyXG4gICAgaGVpZ2h0OiAxMDB2aDsgLyogU2V0IHRoZSBjb250YWluZXIgaGVpZ2h0IHRvIGZpbGwgdGhlIHZpZXdwb3J0ICovXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gXHJcbiAgLmJsdXJyZWQtYmFja2dyb3VuZCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2hhaXJkcmVzc2VyX2JhY2tncm91bmQuanBnJyk7IC8qIFJlcGxhY2Ugd2l0aCB5b3VyIGJhY2tncm91bmQgaW1hZ2UgKi9cclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBmaWx0ZXI6IGJsdXIoMnB4KTsgLyogQWRqdXN0IHRoZSBibHVyIGludGVuc2l0eSBhcyBuZWVkZWQgKi9cclxuICAgIHotaW5kZXg6IC0xOyAvKiBQbGFjZSB0aGUgYmFja2dyb3VuZCBiZWhpbmQgb3RoZXIgY29udGVudCAqL1xyXG4gICAgb3BhY2l0eTogMTsgLyogQWRqdXN0IHRoZSBvcGFjaXR5IGFzIG5lZWRlZCAqL1xyXG4gIH1cclxuICAubWFpbi1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAvKiBEaXNwbGF5IGl0ZW1zIHZlcnRpY2FsbHkgKi9cclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyAvKiBDZW50ZXIgaXRlbXMgaG9yaXpvbnRhbGx5ICovXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAvKiBDZW50ZXIgaXRlbXMgdmVydGljYWxseSAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIFNldCB5b3VyIGRlc2lyZWQgYmFja2dyb3VuZCBjb2xvciBvciBpbWFnZSBoZXJlICovXHJcbiAgICBwYWRkaW5nOiAyMHB4OyAvKiBBZGQgcGFkZGluZyB0byBjcmVhdGUgbWFyZ2lucyAqL1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7IC8qIEVuc3VyZSB0aGUgY29udGFpbmVyIGZpbGxzIHRoZSB2aWV3cG9ydCBoZWlnaHQgKi9cclxuICB9XHJcbiAgLyogU3R5bGUgZm9yIHRoZSBzdHVkaW8gY2FyZCAqL1xyXG4gIC5zdHVkaW8tY2FyZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICB3aWR0aDogMTAwJTsgLyogU2V0IGNhcmQgd2lkdGggdG8gZmlsbCBhdmFpbGFibGUgc3BhY2UgKi9cclxuICAgIG1heC13aWR0aDogNzAwcHg7IC8qIExpbWl0IG1heGltdW0gd2lkdGggKi9cclxuICAgIG1hcmdpbjogMTBweDsgLyogQWRkIHNwYWNpbmcgYmV0d2VlbiBjYXJkcyAqL1xyXG4gIH1cclxuICBcclxuICAvKiBTdHlsZSBmb3IgdGhlIGhlYWRlciAoc3R1ZGlvIHR5cGUpICovXHJcbiAgLnN0dWRpby1jYXJkIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gIH1cclxuICBcclxuICAvKiBTdHlsZSBmb3IgbG9jYXRpb24gYW5kIG93bmVyIGluZm9ybWF0aW9uICovXHJcbiAgLnN0dWRpby1jYXJkIHAge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luOiA1cHggMDtcclxuICB9XHJcbiAgXHJcbiAgLyogU3R5bGUgZm9yIHNlcnZpY2VzICovXHJcbiAgLnN0dWRpby1jYXJkIHVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFN0eWxlIGZvciBzZXJ2aWNlIHRpdGxlcyAqL1xyXG4gIC5zdHVkaW8tY2FyZCBoNSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogIzAwN0JGRjtcclxuICB9XHJcbiAgXHJcbiAgLyogU3R5bGUgZm9yIHNlcnZpY2UgZGVzY3JpcHRpb25zICovXHJcbiAgLnN0dWRpby1jYXJkIHAge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICM3Nzc7XHJcbiAgfVxyXG5cclxuICAuc3R1ZGlvLWNhcmQ6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTsgLyogQWRqdXN0IHRoZSBzY2FsZSBmYWN0b3IgYXMgbmVlZGVkICovXHJcbiAgfSJdfQ== */"] });


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function HomeComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " User is logged in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " User is not logged in\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HomeComponent {
    constructor(afAuth) {
        this.afAuth = afAuth;
    }
    ngOnInit() {
    }
    logout() {
        this.afAuth.signOut();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 4, vars: 6, consts: [[4, "ngIf"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeComponent_div_0_Template, 3, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_div_2_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.afAuth.user));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, ctx.afAuth.user));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: ["button[_ngcontent-%COMP%] {\r\n    margin-right: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "CXgp":
/*!************************************************!*\
  !*** ./src/app/studio/studio-new.component.ts ***!
  \************************************************/
/*! exports provided: StudioNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudioNewComponent", function() { return StudioNewComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_studio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/studio.service */ "TMz6");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "FKr1");












function StudioNewComponent_mat_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", type_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](type_r2);
} }
function StudioNewComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StudioNewComponent_div_27_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const service_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.deleteService(service_r3.title, service_r3.description); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Usu\u0144");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const service_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](service_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](service_r3.description);
} }
class StudioNewComponent {
    constructor(studioService, router) {
        this.studioService = studioService;
        this.router = router;
        this.newStudio = {
            studioName: "",
            location: "",
            type: "",
            ownerUsername: "",
            service: []
        };
        this.businessTypes = ['makeup', 'hairdresser', 'all'];
        this.studioForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            'studioName': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            'type': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            'location': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            'ownerUsername': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required)
        });
        this.serviceForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            'title': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            'description': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
        });
        this.imageForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            'file': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](['']),
        });
    }
    ngOnInit() {
    }
    addStudio() {
        console.log(this.studioForm);
        console.log(this.newStudio);
        this.newStudio.location = this.studioForm.value.location,
            this.newStudio.type = this.studioForm.value.type,
            this.newStudio.ownerUsername = this.studioForm.value.ownerUsername,
            this.newStudio.studioName = this.studioForm.value.studioName,
            //console.log(this.newStudio)
            this.studioService.addStudio(this.newStudio);
    }
    addService() {
        const newService = {
            title: this.serviceForm.value.title,
            description: this.serviceForm.value.description,
            reservations: []
        };
        console.log(newService);
        this.newStudio.service.push(newService);
    }
    deleteService(title, description) {
        this.newStudio.service = this.newStudio.service.filter(service => !(service.title === title && service.description === description));
    }
    onFileChange(event) {
    }
    uploadImage() {
    }
}
StudioNewComponent.ɵfac = function StudioNewComponent_Factory(t) { return new (t || StudioNewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_studio_service__WEBPACK_IMPORTED_MODULE_2__["StudioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
StudioNewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: StudioNewComponent, selectors: [["app-studio-new"]], decls: 49, vars: 4, consts: [[1, "main-content"], [1, "blurred-background"], ["type", "", 3, "formGroup", "ngSubmit"], ["appearance", "outline"], ["autocomplete", "off", "formControlName", "studioName", "type", "text", "matInput", "", "placeholder", "Nazwa zak\u0142adu"], ["formControlName", "type"], [3, "value", 4, "ngFor", "ngForOf"], ["autocomplete", "off", "formControlName", "location", "type", "text", "matInput", "", "placeholder", "Lokalizacja"], ["autocomplete", "off", "formControlName", "ownerUsername", "type", "text", "matInput", "", "placeholder", "W\u0142a\u015Bciciel"], ["class", "studio-card", 4, "ngFor", "ngForOf"], [1, "services-card"], ["autocomplete", "off", "formControlName", "title", "type", "text", "matInput", "", "placeholder", "Tytu\u0142"], ["autocomplete", "off", "formControlName", "description", "type", "text", "matInput", "", "placeholder", "Opis"], ["mat-raised-button", "", "color", "primary"], [3, "value"], [1, "studio-card"], ["mat-raised-button", "", "color", "warn", 3, "click"]], template: function StudioNewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "H2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Dodajemy studio");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function StudioNewComponent_Template_form_ngSubmit_5_listener() { return ctx.addStudio(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Nazwa zaka\u0142adu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Typ zak\u0142adu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, StudioNewComponent_mat_option_16_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Lokalizacja");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "W\u0142a\u015Bciciel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, StudioNewComponent_div_27_Template, 9, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-card", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function StudioNewComponent_Template_form_ngSubmit_29_listener() { return ctx.addService(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Tworzenie us\u0142ugi");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Tytu\u0142");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Opis");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Dodaj us\u0142ug\u0119");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Dodaj biznes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.studioForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.businessTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.newStudio.service);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.serviceForm);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"]], styles: ["[_nghost-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n\r\n  .centered-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 100vh; \r\n    \r\n  }\r\n\r\n  .blurred-background[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-image: url('/assets/images/hairdresser_background.jpg'); \r\n    background-size: cover;\r\n    filter: blur(2px); \r\n    z-index: -1; \r\n    opacity: 1; \r\n  }\r\n\r\n  .main-content[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column; \r\n    justify-content: center; \r\n    align-items: center; \r\n    background-color: transparent; \r\n    padding: 20px; \r\n    min-height: 100vh; \r\n  }\r\n\r\n  mat-card[_ngcontent-%COMP%] {\r\n    width: 700px;\r\n    margin: auto;\r\n    margin-top: 50px;\r\n    padding: 20px;\r\n    text-align: center;\r\n  }\r\n\r\n  h2[_ngcontent-%COMP%] {\r\n    color: #333333;\r\n  }\r\n\r\n  .studio-card[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    gap: 20px;\r\n  }\r\n\r\n  mat-form-field[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin-bottom: 15px;\r\n  }\r\n\r\n  .services-card[_ngcontent-%COMP%] {\r\n    width: 90%;\r\n    padding: 20px;\r\n    box-sizing: border-box;\r\n    border: 1px solid #dddddd;\r\n    background-color: #f9f9f9;\r\n    border-radius: 8px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    transition: transform 0.2s;\r\n  }\r\n\r\n  .services-card[_ngcontent-%COMP%]:hover {\r\n    transform: scale(1.05); \r\n  }\r\n\r\n  h5[_ngcontent-%COMP%] {\r\n    color: #333333;\r\n    font-size: 18px;\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  p[_ngcontent-%COMP%] {\r\n    color: #666666;\r\n    font-size: 14px;\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n  button[_ngcontent-%COMP%] {\r\n    margin: 0 auto;\r\n    width: 100%;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0dWRpby1uZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTs7RUFFZjs7RUFFQTtJQUNFLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0VBQWtFLEVBQUUsdUNBQXVDO0lBQzNHLHNCQUFzQjtJQUN0QixpQkFBaUIsRUFBRSx3Q0FBd0M7SUFDM0QsV0FBVyxFQUFFLDhDQUE4QztJQUMzRCxVQUFVLEVBQUUsaUNBQWlDO0VBQy9DOztFQUNBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQixFQUFFLDZCQUE2QjtJQUNyRCx1QkFBdUIsRUFBRSw4QkFBOEI7SUFDdkQsbUJBQW1CLEVBQUUsNEJBQTRCO0lBQ2pELDZCQUE2QixFQUFFLG9EQUFvRDtJQUNuRixhQUFhLEVBQUUsa0NBQWtDO0lBQ2pELGlCQUFpQixFQUFFLG1EQUFtRDtFQUN4RTs7RUFJQTtJQUNFLFlBQVk7SUFDWixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUlBO0lBQ0UsYUFBYTtJQUNiLGVBQWU7SUFDZixTQUFTO0VBQ1g7O0VBQ0E7SUFDRSxXQUFXO0lBQ1gsbUJBQW1CO0VBQ3JCOztFQUNBO0lBQ0UsVUFBVTtJQUNWLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0Usc0JBQXNCLEVBQUUsaUNBQWlDO0VBQzNEOztFQUVBO0lBQ0UsY0FBYztJQUNkLGVBQWU7SUFDZixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsZUFBZTtJQUNmLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxXQUFXO0VBQ2IiLCJmaWxlIjoic3R1ZGlvLW5ldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmNlbnRlcmVkLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDsgXHJcbiAgICBcclxuICB9XHJcblxyXG4gIC5ibHVycmVkLWJhY2tncm91bmQge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9oYWlyZHJlc3Nlcl9iYWNrZ3JvdW5kLmpwZycpOyAvKiBSZXBsYWNlIHdpdGggeW91ciBiYWNrZ3JvdW5kIGltYWdlICovXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgZmlsdGVyOiBibHVyKDJweCk7IC8qIEFkanVzdCB0aGUgYmx1ciBpbnRlbnNpdHkgYXMgbmVlZGVkICovXHJcbiAgICB6LWluZGV4OiAtMTsgLyogUGxhY2UgdGhlIGJhY2tncm91bmQgYmVoaW5kIG90aGVyIGNvbnRlbnQgKi9cclxuICAgIG9wYWNpdHk6IDE7IC8qIEFkanVzdCB0aGUgb3BhY2l0eSBhcyBuZWVkZWQgKi9cclxuICB9XHJcbiAgLm1haW4tY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgLyogRGlzcGxheSBpdGVtcyB2ZXJ0aWNhbGx5ICovXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgLyogQ2VudGVyIGl0ZW1zIGhvcml6b250YWxseSAqL1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgLyogQ2VudGVyIGl0ZW1zIHZlcnRpY2FsbHkgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiBTZXQgeW91ciBkZXNpcmVkIGJhY2tncm91bmQgY29sb3Igb3IgaW1hZ2UgaGVyZSAqL1xyXG4gICAgcGFkZGluZzogMjBweDsgLyogQWRkIHBhZGRpbmcgdG8gY3JlYXRlIG1hcmdpbnMgKi9cclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoOyAvKiBFbnN1cmUgdGhlIGNvbnRhaW5lciBmaWxscyB0aGUgdmlld3BvcnQgaGVpZ2h0ICovXHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIG1hdC1jYXJkIHtcclxuICAgIHdpZHRoOiA3MDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICBoMiB7XHJcbiAgICBjb2xvcjogIzMzMzMzMztcclxuICB9XHJcbiAgXHJcblxyXG5cclxuICAuc3R1ZGlvLWNhcmQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGdhcDogMjBweDtcclxuICB9XHJcbiAgbWF0LWZvcm0tZmllbGQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIH1cclxuICAuc2VydmljZXMtY2FyZCB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xyXG4gIH1cclxuICBcclxuICAuc2VydmljZXMtY2FyZDpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpOyAvKiBPcHRpb25hbDogQWRkIGEgaG92ZXIgZWZmZWN0ICovXHJcbiAgfVxyXG4gIFxyXG4gIGg1IHtcclxuICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgcCB7XHJcbiAgICBjb2xvcjogIzY2NjY2NjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH0iXX0= */"] });


/***/ }),

/***/ "KqQ4":
/*!****************************************!*\
  !*** ./src/navbar/navbar.component.ts ***!
  \****************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function NavbarComponent_li_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Dodaj Biznes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_li_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Za\u0142\u00F3\u017C konto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_li_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Zaloguj si\u0119");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_li_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Witaj ", ctx_r3.user.email, "! ");
} }
function NavbarComponent_li_23_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_li_23_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Wyloguj");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/studio-main-page", "all"]; };
const _c1 = function () { return ["/studio-main-page", "hairdresser"]; };
const _c2 = function () { return ["/studio-main-page", "makeup"]; };
class NavbarComponent {
    constructor(afAuth) {
        this.afAuth = afAuth;
        afAuth.authState.subscribe(user => {
            this.user = user;
        });
    }
    ngOnInit() {
    }
    logout() {
        this.afAuth.signOut();
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["navbar"]], decls: 25, vars: 19, consts: [["rel", "stylesheet", "href", "https://use.fontawesome.com/releases/v5.5.0/css/all.css", "integrity", "sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU", "crossorigin", "anonymous"], ["rel", "stylesheet", "href", "https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"], [1, "navbar", "navbar-expand-md", "custom-navbar", "sticky-top"], [1, "navbar-brand", "custom-logo", 3, "routerLink"], ["type", "button", "data-toggle", "collapse", "data-target", "#navb", "aria-expanded", "true", 1, "navbar-toggler", "navbar-toggler-right"], [1, "navbar-toggler-icon"], ["id", "navb", 1, "navbar-collapse", "collapse", "hide"], [1, "navbar-nav"], [1, "nav-item"], [1, "nav-link", "custom-link", 3, "routerLink"], ["class", "nav-item", 4, "ngIf"], [1, "nav", "navbar-nav", "ml-auto"], ["class", "nav-item", 3, "click", 4, "ngIf"], ["href", "#", "routerLink", "/studio-new", 1, "nav-link", "custom-link"], [1, "fas", "fa-briefcase"], ["href", "#", "routerLink", "/signup", 1, "nav-link", "custom-link"], [1, "fas", "fa-user"], ["href", "#", "routerLink", "/login", 1, "nav-link", "custom-link"], [1, "fas", "fa-sign-in-alt"], [1, "nav-link", "custom-link"], [1, "nav-item", 3, "click"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Booker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Fryzjer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Makija\u017C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, NavbarComponent_li_15_Template, 4, 0, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, NavbarComponent_li_18_Template, 4, 0, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, NavbarComponent_li_20_Template, 4, 0, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, NavbarComponent_li_22_Template, 3, 1, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, NavbarComponent_li_23_Template, 4, 0, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 8, ctx.afAuth.user));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 10, ctx.afAuth.user));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 12, ctx.afAuth.user));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 14, ctx.afAuth.user));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: [".custom-navbar.navbar {\r\n    background: transparent;\r\n  }\r\n  \r\n  .custom-navbar.navbar a {\r\n    color: white; /* Set your desired text color */\r\n  }\r\n  \r\n  .custom-logo {\r\n    font-family: 'Your Custom Font', cursive; /* Use a custom font if desired */\r\n    font-size: 24px; /* Adjust the font size as needed */\r\n    font-weight: bold; /* Adjust the font weight as needed */\r\n    letter-spacing: 2px; /* Adjust the letter spacing as needed */\r\n    color: #ffffff; /* Set your desired text color */\r\n    text-decoration: none; /* Remove underline, if any */\r\n    background-color: #7a5207; /* Set your desired background color */\r\n    padding: 16px 16px; /* Adjust the padding as needed */\r\n    border-radius: 5px; /* Add border-radius for rounded corners if desired */\r\n  }\r\n  \r\n  /* Additional styles for hover or other states if needed */\r\n  \r\n  .custom-logo:hover {\r\n    text-decoration: underline; /* Add underline on hover if desired */\r\n    color: #ffcc00; /* Change color on hover if desired */\r\n  }\r\n  \r\n  .custom-link {\r\n    font-family: 'Your Custom Font', cursive; /* Use a custom font if desired */\r\n    font-size: 16px; /* Adjust the font size as needed */\r\n     /* Adjust the font weight as needed */\r\n    letter-spacing: 2px; /* Adjust the letter spacing as needed */\r\n    color: #ffffff; /* Set your desired text color */\r\n    text-decoration: none; /* Remove underline, if any */\r\n  }\r\n  \r\n  /* Additional styles for hover or other states if needed */\r\n  \r\n  .custom-link:hover {\r\n    text-decoration: underline; /* Add underline on hover if desired */\r\n    color: #ffcc00; /* Change color on hover if desired */\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsWUFBWSxFQUFFLGdDQUFnQztFQUNoRDs7RUFFQTtJQUNFLHdDQUF3QyxFQUFFLGlDQUFpQztJQUMzRSxlQUFlLEVBQUUsbUNBQW1DO0lBQ3BELGlCQUFpQixFQUFFLHFDQUFxQztJQUN4RCxtQkFBbUIsRUFBRSx3Q0FBd0M7SUFDN0QsY0FBYyxFQUFFLGdDQUFnQztJQUNoRCxxQkFBcUIsRUFBRSw2QkFBNkI7SUFDcEQseUJBQXlCLEVBQUUsc0NBQXNDO0lBQ2pFLGtCQUFrQixFQUFFLGlDQUFpQztJQUNyRCxrQkFBa0IsRUFBRSxxREFBcUQ7RUFDM0U7O0VBRUEsMERBQTBEOztFQUMxRDtJQUNFLDBCQUEwQixFQUFFLHNDQUFzQztJQUNsRSxjQUFjLEVBQUUscUNBQXFDO0VBQ3ZEOztFQUVBO0lBQ0Usd0NBQXdDLEVBQUUsaUNBQWlDO0lBQzNFLGVBQWUsRUFBRSxtQ0FBbUM7S0FDbkQscUNBQXFDO0lBQ3RDLG1CQUFtQixFQUFFLHdDQUF3QztJQUM3RCxjQUFjLEVBQUUsZ0NBQWdDO0lBQ2hELHFCQUFxQixFQUFFLDZCQUE2QjtFQUN0RDs7RUFFQSwwREFBMEQ7O0VBQzFEO0lBQ0UsMEJBQTBCLEVBQUUsc0NBQXNDO0lBQ2xFLGNBQWMsRUFBRSxxQ0FBcUM7RUFDdkQiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tLW5hdmJhci5uYXZiYXIge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5jdXN0b20tbmF2YmFyLm5hdmJhciBhIHtcclxuICAgIGNvbG9yOiB3aGl0ZTsgLyogU2V0IHlvdXIgZGVzaXJlZCB0ZXh0IGNvbG9yICovXHJcbiAgfVxyXG5cclxuICAuY3VzdG9tLWxvZ28ge1xyXG4gICAgZm9udC1mYW1pbHk6ICdZb3VyIEN1c3RvbSBGb250JywgY3Vyc2l2ZTsgLyogVXNlIGEgY3VzdG9tIGZvbnQgaWYgZGVzaXJlZCAqL1xyXG4gICAgZm9udC1zaXplOiAyNHB4OyAvKiBBZGp1c3QgdGhlIGZvbnQgc2l6ZSBhcyBuZWVkZWQgKi9cclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyAvKiBBZGp1c3QgdGhlIGZvbnQgd2VpZ2h0IGFzIG5lZWRlZCAqL1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDsgLyogQWRqdXN0IHRoZSBsZXR0ZXIgc3BhY2luZyBhcyBuZWVkZWQgKi9cclxuICAgIGNvbG9yOiAjZmZmZmZmOyAvKiBTZXQgeW91ciBkZXNpcmVkIHRleHQgY29sb3IgKi9cclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgLyogUmVtb3ZlIHVuZGVybGluZSwgaWYgYW55ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2E1MjA3OyAvKiBTZXQgeW91ciBkZXNpcmVkIGJhY2tncm91bmQgY29sb3IgKi9cclxuICAgIHBhZGRpbmc6IDE2cHggMTZweDsgLyogQWRqdXN0IHRoZSBwYWRkaW5nIGFzIG5lZWRlZCAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4OyAvKiBBZGQgYm9yZGVyLXJhZGl1cyBmb3Igcm91bmRlZCBjb3JuZXJzIGlmIGRlc2lyZWQgKi9cclxuICB9XHJcbiAgXHJcbiAgLyogQWRkaXRpb25hbCBzdHlsZXMgZm9yIGhvdmVyIG9yIG90aGVyIHN0YXRlcyBpZiBuZWVkZWQgKi9cclxuICAuY3VzdG9tLWxvZ286aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIEFkZCB1bmRlcmxpbmUgb24gaG92ZXIgaWYgZGVzaXJlZCAqL1xyXG4gICAgY29sb3I6ICNmZmNjMDA7IC8qIENoYW5nZSBjb2xvciBvbiBob3ZlciBpZiBkZXNpcmVkICovXHJcbiAgfVxyXG5cclxuICAuY3VzdG9tLWxpbmsge1xyXG4gICAgZm9udC1mYW1pbHk6ICdZb3VyIEN1c3RvbSBGb250JywgY3Vyc2l2ZTsgLyogVXNlIGEgY3VzdG9tIGZvbnQgaWYgZGVzaXJlZCAqL1xyXG4gICAgZm9udC1zaXplOiAxNnB4OyAvKiBBZGp1c3QgdGhlIGZvbnQgc2l6ZSBhcyBuZWVkZWQgKi9cclxuICAgICAvKiBBZGp1c3QgdGhlIGZvbnQgd2VpZ2h0IGFzIG5lZWRlZCAqL1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDsgLyogQWRqdXN0IHRoZSBsZXR0ZXIgc3BhY2luZyBhcyBuZWVkZWQgKi9cclxuICAgIGNvbG9yOiAjZmZmZmZmOyAvKiBTZXQgeW91ciBkZXNpcmVkIHRleHQgY29sb3IgKi9cclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgLyogUmVtb3ZlIHVuZGVybGluZSwgaWYgYW55ICovXHJcbiAgfVxyXG4gIFxyXG4gIC8qIEFkZGl0aW9uYWwgc3R5bGVzIGZvciBob3ZlciBvciBvdGhlciBzdGF0ZXMgaWYgbmVlZGVkICovXHJcbiAgLmN1c3RvbS1saW5rOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiBBZGQgdW5kZXJsaW5lIG9uIGhvdmVyIGlmIGRlc2lyZWQgKi9cclxuICAgIGNvbG9yOiAjZmZjYzAwOyAvKiBDaGFuZ2UgY29sb3Igb24gaG92ZXIgaWYgZGVzaXJlZCAqL1xyXG4gIH0iXX0= */"], encapsulation: 2 });


/***/ }),

/***/ "QX6l":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 4, vars: 0, consts: [["mat-raised-button", "", "color", "primary", "routerLink", "/home"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Admin! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Home\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/navbar/navbar.component */ "KqQ4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'speedrun';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [src_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "TMz6":
/*!********************************************!*\
  !*** ./src/app/services/studio.service.ts ***!
  \********************************************/
/*! exports provided: StudioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudioService", function() { return StudioService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class StudioService {
    constructor(db, router) {
        this.db = db;
        this.router = router;
    }
    getStudios() {
        return this.db.list('studios').valueChanges();
    }
    addStudio(studio) {
        this.getNewId().then((newId) => {
            this.db.list('studios').set(newId.toString(), studio)
                .then(() => {
                this.router.navigate(['/studio-main-page', studio.type]);
            })
                .catch((error) => {
                console.error('Error adding user:', error);
            });
        });
    }
    getNewId() {
        return new Promise((resolve, reject) => {
            this.db.list('studios').query.once('value')
                .then((snapshot) => {
                let highestNumber = 0;
                snapshot.forEach((userSnapshot) => {
                    const userId = parseInt(userSnapshot.key, 10);
                    if (!isNaN(userId) && userId > highestNumber) {
                        highestNumber = userId;
                    }
                });
                const nextAvailableNumber = highestNumber + 1;
                console.log('Next available number:', nextAvailableNumber);
                resolve(nextAvailableNumber);
            })
                .catch((error) => {
                console.error('Error fetching user data:', error);
                reject(error);
            });
        });
    }
    addTestStudio() {
        const reservations = [
            {
                username: 'user1',
                confirmed: true,
                startDate: '2023-10-01 08:30',
                endDate: '2023-10-01 09:00'
            },
            {
                username: 'user2',
                confirmed: false,
                startDate: '2023-10-01 09:30',
                endDate: '2023-10-01 10:00'
            },
        ];
        // Sample Service objects
        const services = [
            {
                title: 'Service 1',
                description: 'Description for Service 1',
                reservations: reservations,
            },
            {
                title: 'Service 2',
                description: 'Description for Service 2',
                reservations: [],
            },
        ];
        // Sample Studio object
        const studio = {
            studioName: 'name',
            type: 'Studio Type',
            location: 'Studio Location',
            ownerUsername: 'owner123',
            service: services,
        };
        // Add the test user using the service
        this.addStudio(studio);
    }
}
StudioService.ɵfac = function StudioService_Factory(t) { return new (t || StudioService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
StudioService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StudioService, factory: StudioService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup/signup.component */ "rd1V");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _studio_studio_main_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./studio/studio-main-page.component */ "8sfI");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _app_environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../app/environments/environment */ "wY2j");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var src_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/navbar/navbar.component */ "KqQ4");
/* harmony import */ var _studio_studio_new_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./studio/studio-new.component */ "CXgp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ "fXoL");




















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"].initializeApp(_app_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].firebaseConfig),
            _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
        src_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_16__["NavbarComponent"],
        _studio_studio_main_page_component__WEBPACK_IMPORTED_MODULE_8__["StudioMainPageComponent"],
        _studio_studio_new_component__WEBPACK_IMPORTED_MODULE_17__["StudioNewComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"], // imports firebase/app needed for everything
        _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"]] }); })();


/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");



class AuthService {
    constructor(router, afAuth) {
        this.router = router;
        this.afAuth = afAuth;
        this.userLoggedIn = false;
        this.afAuth.onAuthStateChanged((user) => {
            if (user) {
                this.userLoggedIn = true;
            }
            else {
                this.userLoggedIn = false;
            }
        });
    }
    loginUser(email, password) {
        return this.afAuth.signInWithEmailAndPassword(email, password)
            .then(() => {
            console.log('Auth Service: loginUser: success');
            // this.router.navigate(['/dashboard']);
        })
            .catch(error => {
            console.log('Auth Service: login error...');
            console.log('error code', error.code);
            console.log('error', error);
            if (error.code)
                return { isValid: false, message: error.message };
        });
    }
    signupUser(user) {
        return this.afAuth.createUserWithEmailAndPassword(user.email, user.password)
            .then((result) => {
            let emailLower = user.email.toLowerCase();
            result.user.sendEmailVerification(); // immediately send the user a verification email
        })
            .catch(error => {
            console.log('Auth Service: signup error', error);
            if (error.code)
                return { isValid: false, message: error.message };
        });
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "rd1V":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");











function SignupComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.firebaseErrorMessage);
} }
class SignupComponent {
    constructor(authService, router, afAuth) {
        this.authService = authService;
        this.router = router;
        this.afAuth = afAuth;
        this.firebaseErrorMessage = '';
    }
    ngOnInit() {
        this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            'displayName': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required)
        });
    }
    signup() {
        if (this.signupForm.invalid) // if there's an error in the form, don't submit it
            return;
        this.authService.signupUser(this.signupForm.value).then((result) => {
            if (result == null) // null is success, false means there was an error
                this.router.navigate(['/studio-main-page', 'all']);
            else if (result.isValid == false) {
                this.firebaseErrorMessage = result.message;
            }
        }).catch(() => {
        });
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"])); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 24, vars: 2, consts: [[1, "main-content"], [1, "blurred-background"], [3, "formGroup", "ngSubmit"], ["appearance", "outline"], ["autocomplete", "off", "formControlName", "displayName", "type", "text", "matInput", "", "placeholder", "Nazwa u\u017Cytkownika"], ["formControlName", "email", "type", "email", "matInput", "", "placeholder", "Email"], ["autocomplete", "off", "formControlName", "password", "type", "password", "matInput", "", "placeholder", "Has\u0142o"], ["class", "error-style", 4, "ngIf"], ["mat-raised-button", "", "color", "primary"], [1, "error-style"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Utw\u00F3rz nowe konto");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_5_listener() { return ctx.signup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Nazwa u\u017Cytkownika");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Has\u0142o");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, SignupComponent_div_21_Template, 3, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Zajerestruj");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.signupForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.firebaseErrorMessage != "");
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"]], styles: ["[_nghost-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n\r\n  .centered-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 100vh; \r\n  }\r\n\r\n  .blurred-background[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-image: url('/assets/images/hairdresser_background.jpg'); \r\n    background-size: cover;\r\n    filter: blur(2px); \r\n    z-index: -1; \r\n    opacity: 1; \r\n  }\r\n\r\n  .main-content[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column; \r\n    justify-content: center; \r\n    align-items: center; \r\n    background-color: transparent; \r\n    padding: 20px; \r\n    min-height: 100vh; \r\n  }\r\n\r\n  mat-card[_ngcontent-%COMP%] {\r\n    width: 300px;\r\n    margin: auto;\r\n    margin-top: 50px;\r\n    text-align: center; \r\n  }\r\n\r\n  h2[_ngcontent-%COMP%] {\r\n    color: #333333; \r\n  }\r\n\r\n  form[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n\r\n  mat-form-field[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n  .error-style[_ngcontent-%COMP%] {\r\n    color: red;\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  button[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0VBQ2Y7O0VBQ0E7SUFDRSxlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtFQUFrRSxFQUFFLHVDQUF1QztJQUMzRyxzQkFBc0I7SUFDdEIsaUJBQWlCLEVBQUUsd0NBQXdDO0lBQzNELFdBQVcsRUFBRSw4Q0FBOEM7SUFDM0QsVUFBVSxFQUFFLGlDQUFpQztFQUMvQzs7RUFDQTtJQUNFLGFBQWE7SUFDYixzQkFBc0IsRUFBRSw2QkFBNkI7SUFDckQsdUJBQXVCLEVBQUUsOEJBQThCO0lBQ3ZELG1CQUFtQixFQUFFLDRCQUE0QjtJQUNqRCw2QkFBNkIsRUFBRSxvREFBb0Q7SUFDbkYsYUFBYSxFQUFFLGtDQUFrQztJQUNqRCxpQkFBaUIsRUFBRSxtREFBbUQ7RUFDeEU7O0VBR0E7SUFDRSxZQUFZO0lBQ1osWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0IsRUFBRSx1Q0FBdUM7RUFDN0Q7O0VBRUE7SUFDRSxjQUFjLEVBQUUsaUNBQWlDO0VBQ25EOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLFdBQVc7RUFDYiIsImZpbGUiOiJzaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5jZW50ZXJlZC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwdmg7IFxyXG4gIH1cclxuICAuYmx1cnJlZC1iYWNrZ3JvdW5kIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvaGFpcmRyZXNzZXJfYmFja2dyb3VuZC5qcGcnKTsgLyogUmVwbGFjZSB3aXRoIHlvdXIgYmFja2dyb3VuZCBpbWFnZSAqL1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGZpbHRlcjogYmx1cigycHgpOyAvKiBBZGp1c3QgdGhlIGJsdXIgaW50ZW5zaXR5IGFzIG5lZWRlZCAqL1xyXG4gICAgei1pbmRleDogLTE7IC8qIFBsYWNlIHRoZSBiYWNrZ3JvdW5kIGJlaGluZCBvdGhlciBjb250ZW50ICovXHJcbiAgICBvcGFjaXR5OiAxOyAvKiBBZGp1c3QgdGhlIG9wYWNpdHkgYXMgbmVlZGVkICovXHJcbiAgfVxyXG4gIC5tYWluLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IC8qIERpc3BsYXkgaXRlbXMgdmVydGljYWxseSAqL1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IC8qIENlbnRlciBpdGVtcyBob3Jpem9udGFsbHkgKi9cclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IC8qIENlbnRlciBpdGVtcyB2ZXJ0aWNhbGx5ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgLyogU2V0IHlvdXIgZGVzaXJlZCBiYWNrZ3JvdW5kIGNvbG9yIG9yIGltYWdlIGhlcmUgKi9cclxuICAgIHBhZGRpbmc6IDIwcHg7IC8qIEFkZCBwYWRkaW5nIHRvIGNyZWF0ZSBtYXJnaW5zICovXHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDsgLyogRW5zdXJlIHRoZSBjb250YWluZXIgZmlsbHMgdGhlIHZpZXdwb3J0IGhlaWdodCAqL1xyXG4gIH1cclxuXHJcblxyXG4gIG1hdC1jYXJkIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IC8qIENlbnRlciB0aGUgY29udGVudCBpbnNpZGUgdGhlIGNhcmQgKi9cclxuICB9XHJcbiAgXHJcbiAgaDIge1xyXG4gICAgY29sb3I6ICMzMzMzMzM7IC8qIFNldCB5b3VyIGRlc2lyZWQgdGl0bGUgY29sb3IgKi9cclxuICB9XHJcbiAgXHJcbiAgZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIG1hdC1mb3JtLWZpZWxkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLmVycm9yLXN0eWxlIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICBidXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfSJdfQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup/signup.component */ "rd1V");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/auth.guard */ "+VzF");
/* harmony import */ var _studio_studio_main_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./studio/studio-main-page.component */ "8sfI");
/* harmony import */ var _studio_studio_new_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./studio/studio-new.component */ "CXgp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");










const routes = [
    { path: '', redirectTo: 'studio-main-page/all', pathMatch: 'full' },
    { path: 'studio-main-page/:studioType', component: _studio_studio_main_page_component__WEBPACK_IMPORTED_MODULE_6__["StudioMainPageComponent"] },
    { path: 'studio-new', component: _studio_studio_new_component__WEBPACK_IMPORTED_MODULE_7__["StudioNewComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: '**', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _services_studio_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/studio.service */ "TMz6");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");












function LoginComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.firebaseErrorMessage);
} }
class LoginComponent {
    constructor(authService, router, afAuth, studioService) {
        this.authService = authService;
        this.router = router;
        this.afAuth = afAuth;
        this.studioService = studioService;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required)
        });
        this.firebaseErrorMessage = '';
    }
    ngOnInit() {
    }
    loginUser() {
        if (this.loginForm.invalid)
            return;
        this.authService.loginUser(this.loginForm.value.email, this.loginForm.value.password).then((result) => {
            if (result == null) { // null is success, false means there was an error
                console.log('logging in...');
                this.router.navigate(['/studio-main-page', 'all']); // when the user is logged in, navigate them to dashboard
            }
            else if (result.isValid == false) {
                console.log('login error', result);
                this.firebaseErrorMessage = result.message;
                this.router.navigate(['/studio-main-page', 'all']);
            }
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_studio_service__WEBPACK_IMPORTED_MODULE_5__["StudioService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 19, vars: 2, consts: [[1, "main-content"], [1, "blurred-background"], ["type", "", 3, "formGroup", "ngSubmit"], ["appearance", "outline"], ["autocomplete", "off", "formControlName", "email", "type", "email", "matInput", "", "placeholder", "Email"], ["autocomplete", "off", "formControlName", "password", "type", "password", "matInput", "", "placeholder", "Has\u0142o"], ["class", "error-style", 4, "ngIf"], ["mat-raised-button", "", "color", "primary"], [1, "error-style"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Zaloguj si\u0119, aby rozpocz\u0105\u0107");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_5_listener() { return ctx.loginUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Has\u0142o");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, LoginComponent_div_16_Template, 3, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Zaloguj");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.firebaseErrorMessage != "");
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"]], styles: ["[_nghost-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n\r\n  .centered-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 100vh; \r\n  }\r\n\r\n  .blurred-background[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-image: url('/assets/images/hairdresser_background.jpg'); \r\n    background-size: cover;\r\n    filter: blur(2px); \r\n    z-index: -1; \r\n    opacity: 1; \r\n  }\r\n\r\n  .main-content[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column; \r\n    justify-content: center; \r\n    align-items: center; \r\n    background-color: transparent; \r\n   \r\n    min-height: 100vh; \r\n  }\r\n\r\n  mat-card[_ngcontent-%COMP%] {\r\n    width: 300px;\r\n    margin: auto;\r\n    margin-top: 50px;\r\n    text-align: center; \r\n  }\r\n\r\n  h2[_ngcontent-%COMP%] {\r\n    color: #333333; \r\n  }\r\n\r\n  form[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n\r\n  mat-form-field[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n  .error-style[_ngcontent-%COMP%] {\r\n    color: red;\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  button[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGFBQWE7RUFDZjs7RUFDQTtJQUNFLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0VBQWtFLEVBQUUsdUNBQXVDO0lBQzNHLHNCQUFzQjtJQUN0QixpQkFBaUIsRUFBRSx3Q0FBd0M7SUFDM0QsV0FBVyxFQUFFLDhDQUE4QztJQUMzRCxVQUFVLEVBQUUsaUNBQWlDO0VBQy9DOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQixFQUFFLDZCQUE2QjtJQUNyRCx1QkFBdUIsRUFBRSw4QkFBOEI7SUFDdkQsbUJBQW1CLEVBQUUsNEJBQTRCO0lBQ2pELDZCQUE2QixFQUFFLG9EQUFvRDs7SUFFbkYsaUJBQWlCLEVBQUUsbURBQW1EO0VBQ3hFOztFQUdBO0lBQ0UsWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCLEVBQUUsdUNBQXVDO0VBQzdEOztFQUVBO0lBQ0UsY0FBYyxFQUFFLGlDQUFpQztFQUNuRDs7RUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsV0FBVztJQUNYLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLFVBQVU7SUFDVixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxXQUFXO0VBQ2IiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5jZW50ZXJlZC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwdmg7IFxyXG4gIH1cclxuICAuYmx1cnJlZC1iYWNrZ3JvdW5kIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvaGFpcmRyZXNzZXJfYmFja2dyb3VuZC5qcGcnKTsgLyogUmVwbGFjZSB3aXRoIHlvdXIgYmFja2dyb3VuZCBpbWFnZSAqL1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGZpbHRlcjogYmx1cigycHgpOyAvKiBBZGp1c3QgdGhlIGJsdXIgaW50ZW5zaXR5IGFzIG5lZWRlZCAqL1xyXG4gICAgei1pbmRleDogLTE7IC8qIFBsYWNlIHRoZSBiYWNrZ3JvdW5kIGJlaGluZCBvdGhlciBjb250ZW50ICovXHJcbiAgICBvcGFjaXR5OiAxOyAvKiBBZGp1c3QgdGhlIG9wYWNpdHkgYXMgbmVlZGVkICovXHJcbiAgfVxyXG5cclxuICAubWFpbi1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAvKiBEaXNwbGF5IGl0ZW1zIHZlcnRpY2FsbHkgKi9cclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyAvKiBDZW50ZXIgaXRlbXMgaG9yaXpvbnRhbGx5ICovXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAvKiBDZW50ZXIgaXRlbXMgdmVydGljYWxseSAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIFNldCB5b3VyIGRlc2lyZWQgYmFja2dyb3VuZCBjb2xvciBvciBpbWFnZSBoZXJlICovXHJcbiAgIFxyXG4gICAgbWluLWhlaWdodDogMTAwdmg7IC8qIEVuc3VyZSB0aGUgY29udGFpbmVyIGZpbGxzIHRoZSB2aWV3cG9ydCBoZWlnaHQgKi9cclxuICB9XHJcblxyXG5cclxuICBtYXQtY2FyZCB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAvKiBDZW50ZXIgdGhlIGNvbnRlbnQgaW5zaWRlIHRoZSBjYXJkICovXHJcbiAgfVxyXG4gIFxyXG4gIGgyIHtcclxuICAgIGNvbG9yOiAjMzMzMzMzOyAvKiBTZXQgeW91ciBkZXNpcmVkIHRpdGxlIGNvbG9yICovXHJcbiAgfVxyXG4gIFxyXG4gIGZvcm0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICBtYXQtZm9ybS1maWVsZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5lcnJvci1zdHlsZSB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH0iXX0= */"] });


/***/ }),

/***/ "wY2j":
/*!*********************************************!*\
  !*** ./src/app/environments/environment.ts ***!
  \*********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyDbJ49nyz5Otq0XIl9dUjsTg9f-QtiJi78",
        authDomain: "nailbooker.firebaseapp.com",
        databaseURL: "https://nailbooker-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "nailbooker",
        storageBucket: "nailbooker.appspot.com",
        messagingSenderId: "522130802424",
        appId: "1:522130802424:web:e381bdf20e1e5a69ed1d0d",
        measurementId: "G-MW030Y6MDN"
    }
};


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _src_app_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/app/environments/environment */ "wY2j");




if (_src_app_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map