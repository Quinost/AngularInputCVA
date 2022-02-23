import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { QuiFormHelper } from 'src/app/controls/base/helpers/qui-form-helper';
import { AsyncValidator } from '../AsyncValidator';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputViewComponent {
  fg = new FormGroup({
    input: new FormControl("formControlInput", Validators.required)
  });

  constructor() {
    this.apperance = [<MatOption<string>>{ value: "standard", viewValue: "standard" },
    <MatOption<string>>{ value: "fill", viewValue: "fill" },
    <MatOption<string>>{ value: "outline", viewValue: "outline" },];
    this.floatLabel = [<MatOption<string>>{ value: "always", viewValue: "always" },
    <MatOption<string>>{ value: "never", viewValue: "never" },
    <MatOption<string>>{ value: "auto", viewValue: "auto" },];
  }

  ngModel = "ngModelInput"
  hint: string = "";
  label: string = "";
  placeholder: string = "";
  clearBtn: boolean = false;
  apperance: MatOption<string>[];
  apperanceItem: "standard" | "fill" | "outline" = "standard";
  floatLabel: MatOption<string>[];
  floatLabelItem: "always" | "never" | "auto" = "auto";
  required: boolean = false;
  hidden: boolean = false;
  readonly: boolean = false;
  disabled: boolean = false;

  asyncValidator: boolean = false;

  disabledChanged(event: boolean) {
    if (event == true)
      this.fg.get('input')?.disable();
    else
      this.fg.get('input')?.enable();
    this.fg.get('input')?.updateValueAndValidity();
  }

  validatorChanged(event: boolean) {
    if (event == true)
      this.fg.get('input')?.setAsyncValidators(AsyncValidator.usernameValidator());
    else
      this.fg.get('input')?.clearAsyncValidators();
    this.fg.get('input')?.updateValueAndValidity();
  }
}
