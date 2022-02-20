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
    this.items = QuiFormHelper.convertToMatOption(list, "value");
    this.ngModel = list[0];
  }
  items: MatOption<Model>[];
  fg = new FormGroup({
    input: new FormControl(null, Validators.required)
  });

  ngModel!: Model;
}

export class Model {
  id!: number;
  value!: string;
}