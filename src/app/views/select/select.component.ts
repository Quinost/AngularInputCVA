import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { fadeInItems } from '@angular/material/menu';
import { QuiFormHelper } from 'src/app/controls/base/helpers/qui-form-helper';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectViewComponent {
  constructor(){
    let list = [<Model>{id: 1, value: "Value1"},
    <Model>{id: 2, value: "Value2"},
    <Model>{id: 3, value: "Value3"}]
    this.items = QuiFormHelper.convertToMatOption(list, "value", "Clear");
    this.ngModel = list[0];

    this.apperance = [<MatOption<string>>{ value: "standard", viewValue: "standard" },
    <MatOption<string>>{ value: "fill", viewValue: "fill" },
    <MatOption<string>>{ value: "outline", viewValue: "outline" },];
    this.floatLabel = [<MatOption<string>>{ value: "always", viewValue: "always" },
    <MatOption<string>>{ value: "never", viewValue: "never" },
    <MatOption<string>>{ value: "auto", viewValue: "auto" },];
  }
  
  items: MatOption<Model>[];
  fg = new FormGroup({
    input: new FormControl(null, Validators.required),
    input2: new FormControl(null, Validators.required)
  });

  ngModel!: Model;

  multiple: boolean = false;
  hint: string = "";
  label: string = "";
  placeholder: string = "";
  apperance: MatOption<string>[];
  apperanceItem: "standard" | "fill" | "outline" = "standard";
  floatLabel: MatOption<string>[];
  floatLabelItem: "always" | "never" | "auto" = "auto";
  required: boolean = false;
  hidden: boolean = false;
  readonly: boolean = false;
  disabled: boolean = false;

  disabledChanged(event: boolean) {
    if (event == true)
      this.fg.get('input')?.disable();
    else
      this.fg.get('input')?.enable();
    this.fg.get('input')?.updateValueAndValidity();
  }
}

export class Model {
  id!: number;
  value!: string;
}