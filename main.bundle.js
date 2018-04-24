webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<header>\n  <h2>Football App</h2>\n</header>\n<div style=\"overflow-y: scroll;height: 80%;\">\n  <router-outlet ></router-outlet>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
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
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__competition_list_competition_list_component__ = __webpack_require__("./src/app/competition-list/competition-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__standingscreen_standingscreen_component__ = __webpack_require__("./src/app/standingscreen/standingscreen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__team_screen_team_screen_component__ = __webpack_require__("./src/app/team-screen/team-screen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_date_countdown__ = __webpack_require__("./node_modules/ng2-date-countdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_date_countdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng2_date_countdown__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var appRoutes = [
    { path: '', redirectTo: 'Home', pathMatch: 'full' },
    { path: 'Home', component: __WEBPACK_IMPORTED_MODULE_6__competition_list_competition_list_component__["a" /* CompetitionListComponent */] },
    { path: 'standingscreen/:id', component: __WEBPACK_IMPORTED_MODULE_8__standingscreen_standingscreen_component__["a" /* StandingscreenComponent */] },
    { path: 'teamscreen/:id', component: __WEBPACK_IMPORTED_MODULE_9__team_screen_team_screen_component__["a" /* TeamScreenComponent */] },
    { path: '**', redirectTo: 'Home', pathMatch: 'full' },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__competition_list_competition_list_component__["a" /* CompetitionListComponent */],
                __WEBPACK_IMPORTED_MODULE_8__standingscreen_standingscreen_component__["a" /* StandingscreenComponent */],
                __WEBPACK_IMPORTED_MODULE_9__team_screen_team_screen_component__["a" /* TeamScreenComponent */],
                __WEBPACK_IMPORTED_MODULE_10_ng2_date_countdown__["CountDown"]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["A" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["g" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["i" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["j" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["l" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["m" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["n" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["o" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["p" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["q" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["r" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["s" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["t" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["u" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["v" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["x" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["w" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["y" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["z" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["B" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["C" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["D" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["E" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { useHash: true }),
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */]
            ],
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_7__angular_common__["g" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_7__angular_common__["d" /* HashLocationStrategy */] }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/competition-list/competition-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/competition-list/competition-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <mat-nav-list>\n    <a  mat-list-item [routerLink]=\"['/standingscreen', link.id]\" *ngFor=\"let link of CompetitionList1\"> {{ link.caption | uppercase }} </a>\n  </mat-nav-list>\n</div>\n\n"

/***/ }),

/***/ "./src/app/competition-list/competition-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompetitionListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompetitionListComponent = /** @class */ (function () {
    function CompetitionListComponent(http) {
        var _this = this;
        this.http = http;
        this.CompetitionList1 = [];
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'X-Auth-Token': '660e1384580046548f6d44ad531f3919' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.get('https://api.football-data.org/v1/competitions', options)
            .map(function (res) { return res['_body']; })
            .subscribe(function (data) { return _this.CompetitionList = data; }, null, function () {
            Array.prototype.forEach.call(JSON.parse(_this.CompetitionList), function (child) { return _this.CompetitionList1.push(child); });
        });
    }
    CompetitionListComponent.prototype.ngOnInit = function () {
    };
    CompetitionListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-competition-list',
            template: __webpack_require__("./src/app/competition-list/competition-list.component.html"),
            styles: [__webpack_require__("./src/app/competition-list/competition-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], CompetitionListComponent);
    return CompetitionListComponent;
}());



/***/ }),

/***/ "./src/app/standingscreen/standingscreen.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/standingscreen/standingscreen.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <mat-nav-list>\n    <a  mat-list-item (click)=\"clicked(link._links.team.href)\" *ngFor=\"let link of selectionlist1\"> {{ link.teamName | uppercase }} :  {{ link.points }} Points </a>\n  </mat-nav-list>\n</div>"

/***/ }),

/***/ "./src/app/standingscreen/standingscreen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StandingscreenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StandingscreenComponent = /** @class */ (function () {
    function StandingscreenComponent(route, http, router) {
        var _this = this;
        this.route = route;
        this.http = http;
        this.router = router;
        this.selectionlist1 = [];
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'X-Auth-Token': '660e1384580046548f6d44ad531f3919' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.get('https://api.football-data.org/v1/competitions/' + this.id + '/leagueTable', options)
            .map(function (res) { return JSON.parse('[' + res['_body'] + ']'); })
            .subscribe(function (data) { return _this.selectionlist = data; }, null, function () {
            Array.prototype.forEach.call(_this.selectionlist[0].standing, function (child) { return _this.selectionlist1.push(child); });
        });
    }
    StandingscreenComponent.prototype.ngOnInit = function () {
    };
    StandingscreenComponent.prototype.clicked = function (link) {
        var temp = link.split('/');
        var temp1 = temp[temp.length - 1];
        this.router.navigate(['/teamscreen', temp1]);
    };
    StandingscreenComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    StandingscreenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-standingscreen',
            template: __webpack_require__("./src/app/standingscreen/standingscreen.component.html"),
            styles: [__webpack_require__("./src/app/standingscreen/standingscreen.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], StandingscreenComponent);
    return StandingscreenComponent;
}());



/***/ }),

/***/ "./src/app/team-screen/team-screen.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/team-screen/team-screen.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <header>\n    <h3>Player's List</h3>\n  </header>\n  <div style=\"overflow-y: scroll;height: 300px;\">\n      <mat-nav-list>\n          <a  mat-list-item *ngFor=\"let link of Teamlist1\">Name: {{ link.name | uppercase }} , Position {{link.position | uppercase}} , jerseyNumber {{link.jerseyNumber}} </a>\n        </mat-nav-list>\n  </div>\n\n  <header>\n      <h3>Fixtures</h3>\n    </header>\n    <div style=\"overflow-y: scroll;height: 250px;\">\n        <mat-nav-list>\n            <a  mat-list-item *ngFor=\"let link of fixturelist1\"> AwayTeamName: {{ link.awayTeamName | uppercase }} , Starts in:\n            <countdown units=\"Days | Hours | Minutes | Seconds\"  end=\"{{link.date}}\"></countdown></a>\n          </mat-nav-list>\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/team-screen/team-screen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamScreenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TeamScreenComponent = /** @class */ (function () {
    function TeamScreenComponent(route, http) {
        var _this = this;
        this.route = route;
        this.http = http;
        this.Teamlist1 = [];
        this.fixturelist1 = [];
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'X-Auth-Token': '660e1384580046548f6d44ad531f3919' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.get('https://api.football-data.org/v1/teams/' + this.id + '/players', options)
            .map(function (res) { return JSON.parse('[' + res['_body'] + ']'); })
            .subscribe(function (data) { return _this.Teamlist = data; }, null, function () {
            console.log(_this.Teamlist);
            Array.prototype.forEach.call(_this.Teamlist[0].players, function (child) { return _this.Teamlist1.push(child); });
        });
        this.http.get('https://api.football-data.org/v1/teams/' + this.id + '/fixtures', options)
            .map(function (res) { return JSON.parse('[' + res['_body'] + ']'); })
            .subscribe(function (data) { return _this.fixturelist = data; }, null, function () {
            console.log(_this.fixturelist);
            Array.prototype.forEach.call(_this.fixturelist[0].fixtures, function (child) {
                if (child.status != 'FINISHED' && child.status != 'POSTPONED')
                    _this.fixturelist1.push(child);
            });
        });
    }
    TeamScreenComponent.prototype.ngOnInit = function () {
    };
    TeamScreenComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    TeamScreenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-team-screen',
            template: __webpack_require__("./src/app/team-screen/team-screen.component.html"),
            styles: [__webpack_require__("./src/app/team-screen/team-screen.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], TeamScreenComponent);
    return TeamScreenComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map