import { AbstractControl, ValidationErrors, ValidatorFn, AsyncValidatorFn } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';

export function noSpaceValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value: string = control.value as string;

    if (value && value.indexOf(' ') !== -1) {
      return { noSpace: true };
      
    }
    return null;
  };
}

export function validateUsernameExistence(): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    const username = control.value;

    console.log('Entered validateUsernameExistence function. Username:', username);

    const takenUsernames = ['salma', 'leena', 'nourhan'];

    if (!username) {
      console.log('Username is empty. Validation passed.');
      return of(null); 
    }

    const usernameExists = takenUsernames.includes(username);

    console.log('Checking if username exists in the list. Result:', usernameExists);

    return of(usernameExists).pipe(
      delay(1000),
      tap(res => console.log('Delay completed. Username exists:', res)),
      map(res => (res ? { usernameExists: true } : null))
    );
  };
}

