import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './services/authentication.service';

@Component({
    //moduleId: module.id,
    selector: 'login',
    templateUrl: './app/login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    error = '';

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService) { }

    ngOnInit() {
        // reset login status
        if (this.authenticationService.loggedIn) {
            this.authenticationService.logout();
            //this.router.navigate(['/']);
        }
        //else {
        //    location.reload();
        //}
        
    }

    login() {
        console.log(this.model.username + " " + this.model.password);
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(result => {
                if (result === true) {
                    // login successful
                    this.router.navigate(['/home']);
                    //location.reload(true);
                } else {
                    // login failed
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                }
            });
    }
}