System.register(["@angular/core", "@angular/platform-browser", "@angular/forms", "@angular/http", "./app.component", "@angular/common", "./home.component", "./about.component", "./contact.component", "./signup.component", "./login.component", "./users.component", "./pagenotfound.component", "./_guards/auth.guard", "./services/user.service", "./services/authentication.service", "./app.routes"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, platform_browser_1, forms_1, http_1, app_component_1, common_1, http_2, home_component_1, about_component_1, contact_component_1, signup_component_1, login_component_1, users_component_1, pagenotfound_component_1, auth_guard_1, user_service_1, authentication_service_1, app_routes_1, AppModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
            },
            function (contact_component_1_1) {
                contact_component_1 = contact_component_1_1;
            },
            function (signup_component_1_1) {
                signup_component_1 = signup_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (users_component_1_1) {
                users_component_1 = users_component_1_1;
            },
            function (pagenotfound_component_1_1) {
                pagenotfound_component_1 = pagenotfound_component_1_1;
            },
            function (auth_guard_1_1) {
                auth_guard_1 = auth_guard_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (authentication_service_1_1) {
                authentication_service_1 = authentication_service_1_1;
            },
            function (app_routes_1_1) {
                app_routes_1 = app_routes_1_1;
            }
        ],
        execute: function () {
            AppModule = (function () {
                function AppModule(_compilerCahche) {
                    this._compilerCahche = _compilerCahche;
                    _compilerCahche.clearCache();
                }
                return AppModule;
            }());
            AppModule = __decorate([
                core_1.NgModule({
                    declarations: [app_component_1.AppComponent, home_component_1.HomeComponent, about_component_1.AboutComponent, contact_component_1.ContactComponent, signup_component_1.SignupComponent, login_component_1.LoginComponent, users_component_1.UsersComponent, pagenotfound_component_1.PageNotFoundComponent],
                    imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, app_routes_1.routing],
                    providers: [{ provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
                        auth_guard_1.AuthGuard, user_service_1.UserService, authentication_service_1.AuthenticationService, http_2.BaseRequestOptions,
                    ],
                    bootstrap: [app_component_1.AppComponent]
                }),
                __metadata("design:paramtypes", [core_1.Compiler])
            ], AppModule);
            exports_1("AppModule", AppModule);
        }
    };
});
//# sourceMappingURL=app.module.js.map