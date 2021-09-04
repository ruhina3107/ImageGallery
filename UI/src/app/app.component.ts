import { Component } from '@angular/core';
import { NgProgress } from '@ngx-progressbar/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WikiRide';
  constructor(
    public ngProgress: NgProgress
  ) {

  }
  spinnerAlert(show) {
    if(show === 'show') {      
      this.ngProgress.start();
    } else {
        this.ngProgress.done();
  }
  }  
}
