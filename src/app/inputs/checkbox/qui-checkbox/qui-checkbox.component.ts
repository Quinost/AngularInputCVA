import { AfterContentInit, Component, EventEmitter, Input, Optional, Output, Self } from '@angular/core';
import { FormControl, NgControl, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { QuiBaseControl } from '../../directives/qui-base-control.directive';
import { QuiErrorStateMatcher } from '../../QuiErrorStateMatcher';
import { QuiErrorMessageService } from '../../services/qui-error-message.service';

@Component({
  selector: 'qui-checkbox',
  templateUrl: './qui-checkbox.component.html',
  styleUrls: ['./qui-checkbox.component.scss']
})
export class QuiCheckboxComponent extends QuiBaseControl<boolean> implements AfterContentInit {
  constructor(@Optional() @Self() public ngControl: NgControl,
    quiErrorMessagesService: QuiErrorMessageService) {
    super(quiErrorMessagesService);
    if (ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  @Input() indeterminate: boolean = false;
  @Input() labelPosition: 'after' | 'before' = 'before';
  @Input() color: 'primary' | 'warn' | 'accent' = 'primary';

  @Input() value: boolean = false;
  get _value() {
    return this.value;
  }
  set _value(val: boolean) {
    this.writeValue(val);
  }

  get _required(): boolean {
    return this.formControl.hasValidator(Validators.required) || this.formControl.hasValidator(Validators.requiredTrue) || this.required;
  }

  get errorStateMatcher(): ErrorStateMatcher {
    return new QuiErrorStateMatcher(this.formControl);
  }

  writeValue(obj: any): void {
    this.value = obj;
    this.onChanged(obj);
  }

  ngAfterContentInit(): void {
    if (this.ngControl)
      this.formControl = this.ngControl.control as FormControl;
  }
}