import {AppComponent} from './app.component';
import {CameraComponent} from './pages/camera/camera.component';

export const routes = [
    { path: "", redirectTo: "/index", pathMatch: "full" },
    { path: "index", component: AppComponent },
    { path: "camera", component: CameraComponent }
];