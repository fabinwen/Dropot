import { Component, OnInit } from "@angular/core";
import { Page } from "ui/page";
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent implements OnInit {
    public counter: number = 16;
    public showBar: Boolean = true;
    constructor(public page: Page, private routerExtensions: RouterExtensions) {
        this.page.backgroundSpanUnderStatusBar = true;
    }

    ngOnInit() { }
}
