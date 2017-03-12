import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.service';
import { User } from './_models/user';

@Component({
    selector: 'users',
    templateUrl: './app/users.component.html'
})

export class UsersComponent implements OnInit {
    users: User[] = [];

    constructor(private userService: UserService) { }

    ngOnInit() {
        // get users from secure api end point
        this.userService.getUsers()
            .subscribe(users => {
                this.users = users;
            });
    }

}