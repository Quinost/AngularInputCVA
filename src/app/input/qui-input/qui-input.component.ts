import { AfterContentInit, Component, EventEmitter, Input, Optional, Output, Self } from '@angular/core';
import { FormControl, NgControl, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { QuiErrorMessageService } from 'src/app/qui-error-message.service';
import { QuiBaseControl } from 'src/app/qui-base-control.directive';
import { QuiErrorStateMatcher } from 'src/app/QuiErrorStateMatcher';

@Component({
  selector: 'qui-input',
  templateUrl: './qui-input.component.html'
})
export class QuiInputComponent extends QuiBaseControl<any> implements AfterContentInit {
  constructor(@Optional() @Self() public ngControl: NgControl,
    quiErrorMessagesService: QuiErrorMessageService) {
    super(quiErrorMessagesService);
    if (ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  @Input() controlType: 'input' | 'textarea' = 'input';
  @Input() showClearBtn: boolean = false;

  @Input() value: any;
  get _value() {
    return this.value;
  }
  set _value(val: any) {
    this.writeValue(val);
  }

  get _required(): boolean {
    return this.formControl.hasValidator(Validators.required) || this.required;
  }

  get errorStateMatcher(): ErrorStateMatcher {
    return new QuiErrorStateMatcher(this.formControl);
  }

  writeValue(obj: any): void {
    this.value = obj;
    this.onChanged(obj);
  }

  ngAfterContentInit(): void {
    if (this.ngControl) {
      this.formControl = this.ngControl.control as FormControl;
    }
    if (this.placeholder == "")
      this.placeholder = this.label;
  }
}