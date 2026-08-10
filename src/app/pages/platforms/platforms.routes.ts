import { Routes } from "@angular/router";
import { PlatformsComponent } from "./platforms.component";
import { PlatformComponent } from "./platform/platform.component";

export const routes: Routes = [
    { path: '', component: PlatformsComponent,  children: [
        { path: '', redirectTo: 'pc', pathMatch: 'full' },
        { path: ':platform-name', component: PlatformComponent}
    ]},
  ];