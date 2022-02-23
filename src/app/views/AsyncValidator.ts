import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { delay, map, Observable, of } from "rxjs";

export class AsyncValidator {
    public static usernameValidator(): AsyncValidatorFn {
        return (control: AbstractControl): Observable<ValidationErrors | null> => {
            return this.checkIfUsernameExists(control.value).pipe(
                map(res => {
                    // if res is true, username exists, return true
                    return res ? { asyncValid: true } : null;
                    // NB: Return null if there is no error
                })
            );
        };
    }
    static checkIfUsernameExists(value: any) {
        return of(value == 'hello').pipe(delay(2000));
    }
}