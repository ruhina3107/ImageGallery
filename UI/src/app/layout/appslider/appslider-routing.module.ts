import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppsliderComponent } from "./appslider.component";

import { AppsliderviewComponent } from "./appsliderview/appsliderview.component";


const routes: Routes = [
  {
    path: "",
    component: AppsliderviewComponent,
  },

  { path: "Add", component: AppsliderComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
 
})
export class AppsliderRoutingModule {}
