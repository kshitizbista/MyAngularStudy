import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
export class CustomValidator {
  static forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (control.value === 'test') {
      return {'nameIsForbidden': true};
    }
    return null;
  }

  static asynForbiddenNames(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(
          () => {
            if (control.value === 'testProject') {
              resolve({'asynNameIsForbidden': true });
            }else {
              resolve(null);
            }
          }
          , 1500);
      }
    );
    return promise;
  }
}
