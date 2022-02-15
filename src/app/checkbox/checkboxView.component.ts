import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuiFormHelper } from '../QuiFormHelper';

@Component({
  selector: 'qui-checkboxView',
  templateUrl: './CheckboxView.component.html'
})
export class CheckboxViewComponent {

  input2Value:any =  "input2Value";

  fg = new FormGroup({
    default: new FormControl(false, [Validators.required, Validators.email]),
    input: new FormControl(false, Validators.required, new QuiFormHelper().usernameValidator()),
    textarea: new FormControl("value", Validators.required, new QuiFormHelper().usernameValidator())
  })
}
