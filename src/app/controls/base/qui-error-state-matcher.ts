import { FormControl, FormGroupDirective, NgForm } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";

export class QuiErrorStateMatcher implements ErrorStateMatcher {
  constructor(private control: FormControl){}
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(this.control && this.control.invalid && (this.control.dirty || this.control.touched || isSubmitted));
  }
}
