import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuiFormHelper } from '../helpers/QuiFormHelper';

@Component({
  selector: 'qui-checkboxView',
  templateUrl: './CheckboxView.component.html'
})
export class CheckboxViewComponent {

  input2Value:any =  "input2Value";

  fg = new FormGroup({
    default: new FormControl(false, [Validators.requiredTrue]),
    input: new FormControl(false, Validators.requiredTrue),
    textarea: new FormControl("value", Validators.required, new QuiFormHelper().usernameValidator())
  })
}
