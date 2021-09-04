
import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import {AppsliderviewComponent} from "./layout/appslider/appsliderview/appsliderview.component"
import {AppsliderComponent} from "./layout/appslider/appslider.component"

import { NotFoundComponent } from "./not-found/not-found.component";


import { FormsModule } from '@angular/forms';

const routes: Routes = [
  
  { path: "galleryView", component: AppsliderviewComponent},
  { path: "galleryView/Add", component: AppsliderComponent},
    { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
