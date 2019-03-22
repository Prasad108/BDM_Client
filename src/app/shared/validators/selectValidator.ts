import { AbstractControl } from '@angular/forms';

export function ValidateSelect(control: AbstractControl): {[key: string]: boolean} | null {
  if (control.value === 'default' ) {
    return { 'defaultSelect': true };
  }
  return null;
}


export function ValidateDateRange(control: AbstractControl): {[key: string]: boolean} | null {
    if (!control.value || control.value === '') {
        return { 'dateEmpty': true };
    } else if (control.value.includes('-')) {
      return { 'invalidDateFormat': true };
    } else if (validDateString(control.value)) {
        return { 'DateParse': true };
    }
    return null;
  }

  function validDateString(dateStr: String): boolean {
    const dateArr: string[] = dateStr.split(' - ');
    if (Date.parse(dateArr[0]) === NaN || Date.parse(dateArr[1]) === NaN) {
        return false;
    }
    return true;
  }
