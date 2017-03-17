import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService) { }

    ngOnInit() {
        // reset login status
        //if (this.authenticationService.loggedIn) {
            this.authenticationService.logout();
            //this.router.navigate(['/home']);

            // get return url from route parameters or default to '/'
            this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
            console.log("returnUrl: " + this.returnUrl);
        //}
    }

    login() {
        //console.log(this.model.username + " " + this.model.password);
        this.loading = true;
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
        console.log("returnUrl: " + this.returnUrl);
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(result => {
                if (result === true) {
                    // login successful
                    //this.router.navigate(['/home']);
                    //this.router.navigate([this.returnUrl]);
                    window.location.href = '/login';
                    //location.reload(true);
                } else {
                    // login failed
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                }
            });
    }
}