import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.scss']
})
export class NumberViewComponent {
  fg = new FormGroup({
    input: new FormControl(21, Validators.required)
  });
  
  ngModel = 35;

  hint: string = "";
  label: string = "";
  placeholder: string = "";
  showClearBtn: boolean = false;
  apperance: "standard" | "fill" | "outline" = "standard";
  floatLabel: "always" | "never" | "auto" = "auto";
  required: boolean = false;
  hidden: boolean = false;
  readonly: boolean = false;
  disabled: boolean = false;
}
