import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
    selector: 'bottom-bar',
    templateUrl: 'pages/bottom/bottom-bar.component.html'
})
export class BottomBarComponent implements OnInit {
    public showBar: Boolean = true;
    constructor(private routerExtensions: RouterExtensions) { }

    ngOnInit() { }
    public goHome(): void {
        this.routerExtensions.navigate(['/main']);
    }
    public gotoMore(): void {
        this.routerExtensions.navigate(['/camera']);
    }
    public gotoProfile(): void {
        console.log("Me tapped.")
        this.routerExtensions.navigate(['/camera']);
    }
}