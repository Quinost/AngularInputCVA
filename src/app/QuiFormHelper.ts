import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { MatOption } from "@angular/material/core";
import { delay, map, Observable, of } from "rxjs";

export class QuiFormHelper {
    public static convertToMatOption<T>(array: T[], propertyName: keyof T): MatOption<T>[] {
        return array.map((x) => { return <MatOption<T>>{ viewValue: x[propertyName] as unknown as string, value: x } });
    }

    takenUsernames = [
        'hello'
      ];

    public usernameValidator(): AsyncValidatorFn {
        return (control: AbstractControl): Observable<ValidationErrors | null> => {
            return this.checkIfUsernameExists(control.value).pipe(
                map(res => {
                    // if res is true, username exists, return true
                    return res ? { usernameExists: true } : null;
                    // NB: Return null if there is no error
                })
            );
        };
    }
    checkIfUsernameExists(username: string): Observable<boolean> {
        return of(this.takenUsernames.includes(username)).pipe(delay(3000));
    }
}

export class ErrorMessage {
    constructor(
      public forValidator: string,
      public text: string
    ) { }
  }

export const MyFormErrorMessage = [
    new ErrorMessage('required', 'Field is required'),
    new ErrorMessage('maxlength', 'Field should have maximal {0}'),
    new ErrorMessage('email', 'Email is not valid'),
    new ErrorMessage('minlength', 'Field should have minimal {0}'),
  ];