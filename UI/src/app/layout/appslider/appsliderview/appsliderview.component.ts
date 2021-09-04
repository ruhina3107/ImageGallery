import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { AppComponent } from 'src/app/app.component';
import { AppSliderViewModel } from './appsliderview.model';
import { AppSliderList } from './appsliderviewlist.model';
import { AppsliderviewService } from './appsliderview.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-appsliderview',
  templateUrl: './appsliderview.component.html',
  styleUrls: ['./appsliderview.component.css']
})
export class AppsliderviewComponent implements OnInit {
List : []
  result: any;
  page: Number =1;
  pages: any;
  appsliderview: AppSliderViewModel;
  appsliderlist: AppSliderList[];
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private service: AppsliderviewService,
    private appspinner: AppComponent,
    private cookie: CookieService
  ) { }
  ngOnInit() {
    this.appspinner.spinnerAlert('show');
    this.service.appsliderListView(this.page).subscribe((res) => {
      if (res.body['error']) {
        environment.swalalert('nodata', res.body['msg']);
        this.appspinner.spinnerAlert('hide');
      } else {
      this.appsliderview = new AppSliderViewModel(res.body['error'], res.body['msg'], res.body['data']);
      if (res.body['data'].length > 0 && this.appsliderview['data'][0].data.length > 0) {
        this.pages = this.appsliderview['data'][0].Count;
        this.result = this.appsliderview['data'][0].data;
        this.appspinner.spinnerAlert('hide');
      } else {
        environment.swalalert('nodata', 'No Data Available ');
        this.appspinner.spinnerAlert('hide');
      }
    }
    },
      (err) => {
       // console.log(err);
        if (err['status'] === 401) {
          environment.swalalert('nodata', err['msg']);
            // this.cookie.delete('Token');
            localStorage.removeItem('Token');
            this.router.navigate(['login']);
        }
      })
  }
  getAppSliderView(page) {
    this.page = page;
    this.appspinner.spinnerAlert('show');
    // this.cookie.set('appsliderlist', page);
    localStorage.setItem('appsliderlist', page);
    this.service.appsliderListView(page).subscribe((res) => {
      if (res['error']) {
        environment.swalalert('nodata', res['msg']);
        this.appspinner.spinnerAlert('hide');
      } else {
      this.appsliderview = new AppSliderViewModel(res.body['error'], res.body['msg'], res.body['data']);
      if (res.body['data'].length > 0 && this.appsliderview['data'][0].data.length > 0) {
        this.pages = this.appsliderview['data'][0].Count;
        this.result = this.appsliderview['data'][0].data;
        this.appspinner.spinnerAlert('hide');
      } else {
        environment.swalalert('nodata', 'No Data Available ');
        this.appspinner.spinnerAlert('hide');
      }
    }
    },
      (err) => {
        console.log(err);
      })
  }
  appsliderdelete(id) {

    environment.swalalert('delete', 'Delete').then(value => {
      if (value) {
        this.service.appsliderdelete(id).subscribe((res) => {
          if (res['error']) {
            environment.swalalert('error', res['msg']);
            this.appspinner.spinnerAlert('hide');
          } else {
            if (res.body['error'] === false) {
              this.getAppSliderView(this.page);
            } else {
              environment.swalalert('error', res.body['msg']);
            }
          }
        },
          (err) => {
            console.log(err);
          })
      }
    });
  }


}


