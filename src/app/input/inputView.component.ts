import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuiFormHelper } from '../QuiFormHelper';

@Component({
  selector: 'qui-inputView',
  templateUrl: './inputView.component.html'
})
export class InputViewComponent {

  input2Value:any =  "input2Value";

  fg = new FormGroup({
    default: new FormControl("defaultVal", [Validators.required, Validators.email]),
    input: new FormControl("value", Validators.required, new QuiFormHelper().usernameValidator())
  })

  onClick(){
    console.log("consolelog");
  }
}
