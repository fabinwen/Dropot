import {CameraComponent} from './pages/camera/camera.component';
import {MainComponent} from './pages/main/main.component';

export const routes = [
    { path: "", redirectTo: "/main", pathMatch: "full" },
    { path: "main", component:MainComponent},
    { path: "camera", component: CameraComponent }
];

export const navigatableComponents = [
  CameraComponent, MainComponent
];