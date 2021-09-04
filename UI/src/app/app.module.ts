import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';

import {NgxPaginationModule} from 'ngx-pagination';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule, NgbPaginationModule, NgbAlertModule, NgbDatepicker, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ScrollEventModule } from 'ngx-scroll-event';
import { CKEditorModule } from 'ngx-ckeditor';
import { AgmCoreModule } from '@agm/core';
import { AgmOverlays } from "agm-overlays"
import { ChartsModule, ThemeService } from 'ng2-charts';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { AgmDirectionModule } from 'agm-direction'
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { NotFoundComponent } from "./not-found/not-found.component";
import {AppsliderviewComponent} from "./layout/appslider/appsliderview/appsliderview.component"
import {AppsliderComponent} from "./layout/appslider/appslider.component"
import { LayoutComponent } from "./layout/layout.component";

import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';


@Pipe({
  name: 'filter',
  pure: false
})


@NgModule({
  declarations: [
    AppComponent,
    AppsliderviewComponent,
    AppsliderComponent,
    NotFoundComponent,
    LayoutComponent,

   

  ],
  imports: [
    MatGridListModule,
   // Ng2SearchPipeModule,
   NgxPaginationModule,
    NgbPaginationModule,
    NgbModule,
    NgbAlertModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgProgressModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot(),
    ScrollEventModule,
    CKEditorModule,
    DatePickerModule,
    AgmOverlays,
    AgmJsMarkerClustererModule,
    AgmCoreModule.forRoot({
      apiKey: environment.mapApiKey,
      language: "en",
      libraries: ["geometry", "places"],
    }),
    AgmDirectionModule,
    NgProgressModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ChartsModule,
    NoopAnimationsModule
  ],
  providers: [
    CookieService,
    ThemeService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
