import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

//Import components
//import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact.component';
import { SignupComponent } from './signup.component';
import { LoginComponent } from './login.component';
import { PageNotFoundComponent } from './pagenotfound.component';

// Route Configuration
const routes: Routes = [
    //{ path: 'home', component: AppComponent },
    //{ path: 'Index.html', redirectTo: '/home', pathMatch: 'full' },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    //{ path: '**', component: PageNotFoundComponent },
    { path: 'home', component: HomeComponent, },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})


//export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

export class AppRoutingModule {
    
}