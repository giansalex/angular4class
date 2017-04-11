import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'auth-container',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})

export class AuthComponent {
    user = {
        email: '',
        password: ''
    };
    mode = 'login';
    linkText = 'Don\'t have an account?';

    constructor(
        private router: Router,
        private auth: AuthService
    ) {}


    changeMode() {
        if (this.mode === 'login') {
            this.mode = 'register';
            this.linkText = 'Already have an account?';
        } else {
            this.mode = 'login';
            this.linkText = 'Don\'t have an account?';
        }
    }

    authenticate() {
        this.auth.authenticate(this.mode, this.user)
        .subscribe(() => {
            console.log('Prev Navigate');
            this.router.navigate(['']);
        });
    }
}