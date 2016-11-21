import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { AppComponent } from "./app.component";
import {CameraComponent} from './pages/camera/camera.component';
import {routes} from './app.routes';

@NgModule({
    declarations: [AppComponent],
    entryComponents: [CameraComponent],
    bootstrap: [AppComponent],
    imports: [NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes)
    ]
})
export class AppModule { }

