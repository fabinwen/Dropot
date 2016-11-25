import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { AppComponent } from "./app.component";
import { CameraComponent } from './pages/camera/camera.component';
import { routes, navigatableComponents } from './app.routes';
import { BottomBarComponent } from './pages/bottom/bottom-bar.component';

@NgModule({
    declarations: [AppComponent, BottomBarComponent,
        ...navigatableComponents],
    bootstrap: [AppComponent],
    imports: [NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes)
    ]
})
export class AppModule { }

