import { AbstractControl } from '@angular/forms';

export function ValidateSelect(control: AbstractControl): {[key: string]: boolean} | null {
  if (control.value === 'default' ) {
    return { 'defaultSelect': true };
  }
  return null;
}
