import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaViewComponent {
  fg = new FormGroup({
    input: new FormControl("formControlTextarea", Validators.required)
  });

  ngModel = "ngModelTextarea"
}
