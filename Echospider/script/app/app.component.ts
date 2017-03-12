import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
@Component({
    //moduleId: module.id,
    selector: 'core-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css']
})


export class AppComponent {
    public loggedIn: boolean;
    constructor(private _authenticationService: AuthenticationService) {
        this.loggedIn = _authenticationService.loggedIn;
    }
}

