import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'AngInputCVA';

  fg = new FormGroup({
    default: new FormControl(null, [Validators.required, Validators.email]),
    input: new FormControl(null, [Validators.required, Validators.email]),
    input2: new FormControl(null, [Validators.required, Validators.email]),
    input3: new FormControl(null, [Validators.required, Validators.email]),
    input4: new FormControl(null, [Validators.required, Validators.email]),
    input5: new FormControl(null, [Validators.required, Validators.email]),
  })
}
