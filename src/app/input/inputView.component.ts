import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuiFormHelper } from '../QuiFormHelper';

@Component({
  selector: 'qui-inputView',
  templateUrl: './inputView.component.html'
})
export class InputViewComponent {

  input2Value = "input2Value";

  fg = new FormGroup({
    default: new FormControl("defaultVal", [Validators.required, Validators.email]),
    input: new FormControl("value", Validators.required, new QuiFormHelper().usernameValidator()),
    input2: new FormControl("value2", [Validators.required, Validators.email]),
    input3: new FormControl("value3", [Validators.required, Validators.email]),
    input4: new FormControl("value4", [Validators.required, Validators.email]),
    input5: new FormControl("value5", [Validators.required], new QuiFormHelper().usernameValidator())
  })

  onClick(){
    this.fg.get('input')?.clearValidators();
    this.fg.get('input')?.setValidators(Validators.email);
    this.fg.get('input')?.updateValueAndValidity();
  }
}
