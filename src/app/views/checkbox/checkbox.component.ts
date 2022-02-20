import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxViewComponent {
  fg = new FormGroup({
    input: new FormControl(null, Validators.requiredTrue)
  });

  ngModel = true;
}
