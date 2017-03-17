import { NgModule, Compiler } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
//import { RESOURCE_CACHE_PROVIDER } from '@angular/platform-browser-dynamic';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HashLocationStrategy, PathLocationStrategy, LocationStrategy } from '@angular/common';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/fake-backend';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact.component';
import { SignupComponent } from './signup.component';
import { LoginComponent } from './login.component';
import { UsersComponent } from './users.component';
import { PageNotFoundComponent } from './pagenotfound.component';

import { AuthGuard } from './_guards/auth.guard';
import { UserService } from './services/user.service';
import { AuthenticationService } from './services/authentication.service';

//Loading bar need to implement


import { routing } from './app.routes';

//const routes: Routes = [
//    { path: 'path', component: AppComponent },
//];

@NgModule({
    declarations: [AppComponent, HomeComponent, AboutComponent, ContactComponent, SignupComponent, LoginComponent, UsersComponent, PageNotFoundComponent],
    imports: [BrowserModule, FormsModule, HttpModule, routing],
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy },
        AuthGuard, UserService, AuthenticationService, BaseRequestOptions,

        // providers used to create fake backend
        //fakeBackendProvider,
        //MockBackend,
        //BaseRequestOptions
    ], //For # tag url eg: http://localhost/#/home
    bootstrap: [AppComponent]
    //bootstrap: [LoginComponent]
})


export class AppModule {
    constructor(private _compilerCahche: Compiler) {
        _compilerCahche.clearCache();
        
    }
}
