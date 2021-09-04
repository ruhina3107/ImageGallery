import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { ChartsModule } from 'ng2-charts';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AgmCoreModule } from '@agm/core';
import { AgmOverlays } from "agm-overlays"
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { AgmDirectionModule } from 'agm-direction'
import { environment } from 'src/environments/environment';
import { CKEditorModule } from 'ngx-ckeditor';
import { ScrollEventModule } from "ngx-scroll-event";
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
  FormsModule,
} from "@angular/forms";
import {
  NgbModule,
  NgbPaginationModule,
  NgbAlertModule,
  NgbDatepicker,
  NgbDate,
} from "@ng-bootstrap/ng-bootstrap";
import { NgProgressModule } from "@ngx-progressbar/core";
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    NgProgressModule,
    ChartsModule,
    DatePickerModule,
    NgMultiSelectDropDownModule,
    AgmCoreModule,
    AgmOverlays,
    AgmJsMarkerClustererModule,
    AgmDirectionModule,
    CKEditorModule,
    ScrollEventModule

  ],
  exports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    NgProgressModule,
    ChartsModule,
    DatePickerModule,
    NgMultiSelectDropDownModule,
    AgmCoreModule,
    AgmOverlays,
    AgmJsMarkerClustererModule,
    AgmDirectionModule,
    CKEditorModule,
    ScrollEventModule
  ],
})
export class SharedModule {}
