import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { QuiFormHelper } from '../QuiFormHelper';

@Component({
  selector: 'qui-selectView',
  templateUrl: './selectView.component.html'
})
export class SelectViewComponent {

  constructor(){
    this.matOptionSelectedModel = QuiFormHelper.convertToMatOption(this.selectModels, "value");
  }

  input2Value = "input2Value";

  fg = new FormGroup({
    default: new FormControl(null, [Validators.required]),
    input: new FormControl(null, Validators.required)
  })

  matOptionSelectedModel: MatOption<SelectModel>[] = [];

  selectModels: SelectModel[] = [
    {id: 1, value: "Value1"}, 
    {id: 2, value: "Value2"}, 
    {id: 3, value: "Value3"}, 
    {id: 4, value: "Value4"}, 
    {id: 5, value: "Value5"}, 
    {id: 6, value: "Value6"}, 
    {id: 7, value: "Value7"}, 
  ];
}

export interface SelectModel{
  id: number;
  value: string;
}
