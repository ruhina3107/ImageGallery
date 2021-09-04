// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';

export const environment = {
  spinner: NgxSpinnerService,
  production: false,
  // 1-->>// AIzaSyB_p8ItKT_w1WlMG1vocYXsddfFos75BgY
  // 2-->>// mapApi: 'AIzaSyDqdPKQqGBAi72_3lh-ewMghl0jzRpkiS8'
  // 3 -->> AIzaSyDy4YDcrHfTyCRV_IVjlBj8TvIkNLK3hVo
  // 4 -->> AIzaSyCt3rNL6-8e4LUIqS6av1Jdhur7NjdLtas
  // 5 -->> AIzaSyD4UvnwZ0DOWxVZV9LA1AgcqfKF2JKVAxs
  // http://139.59.55.166:3001/
  // http://localhost:3000
  // Url: 'http://localhost:3000/api/admin',
  // IconUrl: 'http://localhost:3000/img',
  // system ip
  Url: 'http://localhost:3000/api/admin',
  IconUrl: 'http://localhost:3000/img',
  mapApiKey: 'AIzaSyDcFwuHmUEtr00VnZBWZHBvZx-Wa48sh50',
  swalalert(type, msg) {
    if (type === 'success') {
      return new Promise(resolve => {
        Swal.fire({
          type: 'success',
          title: 'Success',
          text: msg,
          showConfirmButton: false,
          timer: 1500
        }).then(async (result) => {
          resolve(true);
        });
      });
    } else if (type === 'delete') {
      return new Promise(resolve => {
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, ' + msg + ' it!'
        }).then(async (result) => {
          if (result.value) {
            Swal.fire({
              title: msg + '!',
              text: 'Your file has been ' + msg + '.',
              type: 'success',
              showConfirmButton: false,
              timer: 1000
            }).then(async (result) => {
              resolve(true);
            })
          }
        })
      });
    } else if (type === 'nodata' || type === 'underconst') {
      // Swal.fire({
      //   title: '<strong>' + msg + ' <u>!!!</u></strong>',
      //   type: 'info',
      //   html: 'You can use <b>' + msg + '</b>',
      //   showCloseButton: true,
      //   showCancelButton: true,
      //   focusConfirm: false,
      //   confirmButtonText:
      //     '<i class="fa fa-thumbs-up"></i> Great!',
      //   confirmButtonAriaLabel: 'Thumbs up, great!',
      //   cancelButtonText:
      //     '<i class="fa fa-thumbs-down"></i>',
      //   cancelButtonAriaLabel: 'Thumbs down',
      // })
    }
    else {
      Swal.fire({
        type: type,
        title: 'OOPS!',
        text: msg,
        showConfirmButton: true,
      });
    }
  }
};
