System.register(["@angular/router", "./app.component", "./home.component", "./about.component", "./contact.component", "./signup.component", "./login.component", "./_guards/auth.guard"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, app_component_1, home_component_1, about_component_1, contact_component_1, signup_component_1, login_component_1, auth_guard_1, routes, routing;
    return {
        setters: [
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
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
            function (auth_guard_1_1) {
                auth_guard_1 = auth_guard_1_1;
            }
        ],
        execute: function () {
            // Route Configuration
            routes = [
                { path: '', component: app_component_1.AppComponent },
                //{ path: '', component: HomeComponent },
                { path: 'home', component: home_component_1.HomeComponent, },
                { path: 'about', component: about_component_1.AboutComponent, canActivate: [auth_guard_1.AuthGuard] },
                { path: 'contact', component: contact_component_1.ContactComponent, canActivate: [auth_guard_1.AuthGuard] },
                { path: 'signup', component: signup_component_1.SignupComponent },
                { path: 'login', component: login_component_1.LoginComponent },
                // otherwise redirect to home
                { path: '**', redirectTo: '' }
            ];
            //@NgModule({
            //    imports: [
            //        RouterModule.forRoot(routes)
            //    ],
            //    exports: [
            //        RouterModule
            //    ]
            //})
            exports_1("routing", routing = router_1.RouterModule.forRoot(routes));
            //export class AppRoutingModule {
            //} 
        }
    };
});
//# sourceMappingURL=app.routes.js.map