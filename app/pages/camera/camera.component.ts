import { Component, OnInit } from '@angular/core';
import { Page } from "ui/page";
import { ImageAsset } from "image-asset";
import * as camera from "nativescript-camera";

@Component({
    selector: 'dropot-camera',
    templateUrl: 'pages/camera/camera.component.html'
})
export class CameraComponent implements OnInit {
    // >> camera-module-photo-code
    public imageTaken: ImageAsset;
    public saveToGallery: boolean = true;
    public keepAspectRatio: boolean = true;
    public width: number = 300;
    public height: number = 300;

    constructor(private page:Page){}

    onTakePhoto() {
        var options = { width: this.width, height: this.height, keepAspectRatio: this.keepAspectRatio,  saveToGallery: this.saveToGallery };
        camera.takePicture(options)
            .then(imageAsset => {
                this.imageTaken = imageAsset;
                console.log("Size: " + imageAsset.options.width + "x" + imageAsset.options.height);
            }).catch(err => {
                console.log(err.message);
            })
    }
    // << camera-module-photo-code

    // >> camera-module-perm-code
    onRequestPermissions() {
        camera.requestPermissions();
    }
    // << camera-module-perm-code

    // >> camera-module-avai-code
    onCheckForCamera() {
        var isCameraAvailable = camera.isAvailable();
        console.log("Is camera hardware available: " + isCameraAvailable);
    }
    // << camera-module-avai-code

    ngOnInit() {
        //this.page.actionBarHidden = true;
     }
}