import { AfterContentInit, Component, Input, OnInit, Optional, Self } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl, SelectControlValueAccessor, Validators } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { QuiBaseControl } from 'src/app/QuiBaseControl';
import { QuiErrorStateMatcher } from 'src/app/QuiErrorStateMatcher';

@Component({
  selector: 'qui-select',
  templateUrl: './qui-select.component.html'
})
export class QuiSelectComponent extends QuiBaseControl<boolean> implements SelectControlValueAccessor, AfterContentInit {
}
