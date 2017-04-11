import { Component } from '@angular/core';
import { AuthService } from "../../services/auth.service";

@Component({
    selector : 'app-bar',
    templateUrl : './app-bar.component.html',
    styleUrls : ['./app-bar.component.css']
})
export class AppBarComponent
{
    constructor(private auth : AuthService) {}

    onSignout() {
        this.auth.signOut();
    }
}