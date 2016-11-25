import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { ScrollEventData } from "ui/scroll-view";
import { Page } from "ui/page";
import { Image } from "ui/image";
import { FlexboxLayout } from "ui/layouts/flexbox-layout";
import {StackLayout} from "ui/layouts/stack-layout";
import { RouterExtensions } from 'nativescript-angular/router';
import {SwipeGestureEventData, SwipeDirection} from 'ui/gestures';

@Component({
    selector: 'app-main',
    templateUrl: 'pages/main/main.component.html',
    styleUrls:['pages/main/main.component.css']
})
export class MainComponent implements OnInit {
    public title: string;
    public desc: string;
    public imageSrc: string;
    public image: Image;
    public flex: FlexboxLayout;
    public barState: string = "visible";
    public showBar: Boolean = true;
   // public bottomBar: StackLayout;

    @ViewChild("img") img: ElementRef;
    @ViewChild("content") content: ElementRef;
    //@ViewChild("bottomBar") bottomStack: ElementRef;

    constructor(public page: Page, private routerExtensions: RouterExtensions) {
        this.page.backgroundSpanUnderStatusBar = true;
    }

    ngOnInit() {
        this.imageSrc = "~/images/m33.jpg";
        this.title = "The Hydrogen Clouds of M33";
        this.desc = "Gorgeous spiral galaxy M33 seems to have more than its fair share of glowing hydrogen gas. A prominent member of the local group of galaxies, M33 is also known as the Triangulum Galaxy and lies about 3 million light-years distant. The galaxy's inner 30,000 light-years or so are shown in this telescopic portrait that enhances its reddish ionized hydrogen clouds or HII regions. Sprawling along loose spiral arms that wind toward the core, M33's giant HII regions are some of the largest known stellar nurseries, sites of the formation of short-lived but very massive stars. Intense ultraviolet radiation from the luminous, massive stars ionizes the surrounding hydrogen gas and ultimately produces the characteristic red glow. To enhance this image, broadband data was used to produce a color view of the galaxy and combined with narrowband data recorded through a hydrogen-alpha filter. That filter transmits the light of the strongest visible hydrogen emission line.";
        this.image = this.img.nativeElement;
        this.flex = this.content.nativeElement;
       //this.bottomBar = this.bottomStack.nativeElement;
    }

    onScroll(args: ScrollEventData) {
        if (args.scrollY <= this.flex.getMeasuredHeight()) {
            this.image.animate({
                translate: { x: 0, y: args.scrollY * 0.3 }
            });
        }
    }

    onShare() {
        console.log("Share action item tapped.");
        this.showBar = false;
    }

    onCamera() {
        console.log("Delete action item tapped.");
        this.showBar = true;
        //this.routerExtensions.navigate(['/camera']);
    }
    onSwipe(args: SwipeGestureEventData) {
        if (SwipeDirection.down == args.direction) {
            console.log("Down====");
            this.showBar = true;
        }
        if (SwipeDirection.up == args.direction) {
            console.log("Up====");
            this.showBar = false;
        }
        console.log("Swipe Direction: " + args.direction);
    }
}