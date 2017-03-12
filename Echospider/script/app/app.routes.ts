import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

//Import components
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact.component';
import { SignupComponent } from './signup.component';
import { LoginComponent } from './login.component';
import { UsersComponent } from './users.component';
import { PageNotFoundComponent } from './pagenotfound.component';

import { AuthGuard } from './_guards/auth.guard';

// Route Configuration
const routes: Routes = [
    //{ path: '', component: AppComponent },
    //{ path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent, },
    { path: 'about', component: AboutComponent, canActivate: [AuthGuard]},
    { path: 'contact', component: ContactComponent, canActivate: [AuthGuard] },
    { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },

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


export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

//export class AppRoutingModule {
    
//}