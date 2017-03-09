import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HashLocationStrategy, PathLocationStrategy, LocationStrategy } from '@angular/common';

import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact.component';
import { SignupComponent } from './signup.component';
import { LoginComponent } from './login.component';
import { PageNotFoundComponent } from './pagenotfound.component';

import { AppRoutingModule } from './app.routes';

//const routes: Routes = [
//    { path: 'path', component: AppComponent },
//];

@NgModule({
    declarations: [AppComponent, HomeComponent, AboutComponent, ContactComponent, SignupComponent, LoginComponent, PageNotFoundComponent],
    imports: [BrowserModule, FormsModule, HttpModule, AppRoutingModule],
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }], //For # tag url eg: http://localhost/#/home
    bootstrap: [AppComponent]
})
export class AppModule { }
