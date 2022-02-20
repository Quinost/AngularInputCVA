import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectViewComponent {
  fg = new FormGroup({
    input: new FormControl(null, Validators.required)
  });

  ngModel = "ngModelTextarea"
}
