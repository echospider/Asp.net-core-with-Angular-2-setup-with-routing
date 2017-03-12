import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { User } from '../_models/user'
@Injectable()
export class AuthenticationService {
    public token: string;
    public loggedIn: boolean;
    constructor(private http: Http) {
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser != null) {
            this.token = currentUser.token;
            this.loggedIn = true;
        }
        
    }

    login(username: string, password: string): Observable<boolean> {
        //console.log("username:" + username + " password:" + password);
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        let options = new RequestOptions({ headers: headers });

        let body = new URLSearchParams();
        body.set('username', username);
        body.set('password', password);

        //let body = JSON.stringify({ username: username, password: password });
        //var headers = new Headers();
        //headers.append('Content-Type', 'application/json');

        return this.http.post('/api/user/authenticate', body, headers)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let access_token = response.json() && response.json().access_token;
                let expires_in = response.json() && response.json().access_token;
                
                if (access_token) {
                    // set token property
                    this.token = access_token;
                    this.loggedIn = true;
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ username: username, token: access_token, expires_in: expires_in }));

                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    this.loggedIn = false;
                    return false;
                }
            });
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        this.loggedIn = false;
        if (localStorage.length > 0) {
            if (localStorage.getItem("currentUser")) {
                localStorage.removeItem('currentUser');
            }
        }
        
    }
}