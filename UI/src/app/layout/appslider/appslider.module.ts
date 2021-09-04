import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppsliderRoutingModule } from './appslider-routing.module';
import { AppsliderComponent } from "./appslider.component";

import {AppsliderviewComponent  } from "./appsliderview/appsliderview.component";
import { SharedModule } from '../shared/shared.module';
import {MatGridListModule} from '@angular/material/grid-list';
import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
  declarations: [
    AppsliderComponent,
    AppsliderviewComponent,
  ],
  imports: [
    CommonModule,
    AppsliderRoutingModule,
    SharedModule,MatGridListModule,NgxPaginationModule
  ]
})
export class AppsliderModule { }
