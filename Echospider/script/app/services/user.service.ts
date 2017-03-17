import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { AuthenticationService } from '../services/authentication.service';
import { User } from '../_models/user';

@Injectable()
export class UserService {
    constructor(
        private http: Http,
        private authenticationService: AuthenticationService) {
    }

    getUsers(): Observable<User[]> {
        // add authorization header with jwt token
        //let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        //let options = new RequestOptions({ headers: headers });

        // get users from api
        return this.http.get('/api/user/getusers', this.jwt()).map((response: Response) => response.json());
    }

    private jwt() {
        // create authorization header with jwt token
        //let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (this.authenticationService.loggedIn) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
            return new RequestOptions({ headers: headers });
        }
    }
}