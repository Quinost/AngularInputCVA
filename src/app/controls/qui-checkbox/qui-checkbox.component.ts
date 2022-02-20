import { AfterContentInit, Component, Input, Optional, Self } from '@angular/core';
import { FormControl, NgControl, Validators } from '@angular/forms';
import { QuiBaseControl } from '../base/directives/qui-base-control.directive';
import { QuiErrorMessageService } from '../base/services/qui-error-message.service';

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
  @Input() labelPosition: 'after' | 'before' = 'after';
  @Input() color: 'primary' | 'warn' | 'accent' = 'primary';

  @Input() value: boolean = false;
  get _value() {
    return this.value;
  }
  set _value(val: boolean) {
    this.writeValue(val);
  }

  get _required(): boolean {
    return this.formControl.hasValidator(Validators.requiredTrue) || this.required;
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
