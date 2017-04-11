import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { StoreHelperService } from './store-helper.service';
import { StoreService } from './store.service';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class AuthService implements CanActivate {
    JWT_KEY = 'reatin_token';
    JWT = '';
    private api_auth = '/api';

    constructor(
        private router: Router,
        private storeHelper: StoreHelperService,
        private store: StoreService,
        private api: ApiService
    ) {
        const token = window.localStorage.getItem(this.JWT_KEY);
        if (token) {
            this.setJwt(token);
        }
    }

    setJwt(jwt: string) {
        window.localStorage.setItem(this.JWT_KEY, jwt);
        this.JWT = jwt;
        this.api.setHeaders({
            Authorization: `Bearer ${jwt}`
        });
    }

    isAuthorized(): boolean {
        return Boolean(this.JWT);
    }

    canActivate(): boolean {
        const canActivate = this.isAuthorized();
        this.onCanActivate(canActivate);
        return canActivate;
    }

    onCanActivate(canActivate: boolean) {
        if (!canActivate) {
            this.router.navigate(['auth']);
        }
    }

    authenticate(path, credits) {
        return this.api.post(`${this.api_auth}/${path}`, credits)
        .do(res => this.setJwt(res.token))
        .do(res => res);
    }

    signOut() {
        window.localStorage.removeItem(this.JWT_KEY);
        this.JWT = '';
        this.store.purge();
        this.router.navigate(['auth']);
    }
}