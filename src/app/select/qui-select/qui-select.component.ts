import { AfterContentInit, Component, Input, Optional, Self } from '@angular/core';
import { FormControl, NgControl, Validators } from '@angular/forms';
import { ErrorStateMatcher, MatOption } from '@angular/material/core';
import { QuiErrorMessageService } from 'src/app/qui-error-message.service';
import { QuiBaseControl } from 'src/app/qui-base-control.directive';
import { QuiErrorStateMatcher } from 'src/app/QuiErrorStateMatcher';

@Component({
  selector: 'qui-select',
  templateUrl: './qui-select.component.html'
})
export class QuiSelectComponent extends QuiBaseControl<any> implements AfterContentInit {

  @Input() items!: MatOption<any>[];
  @Input() multiple: boolean = false;

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
  constructor(@Optional() @Self() public ngControl: NgControl,
    quiErrorMessageService: QuiErrorMessageService) {
    super(quiErrorMessageService);
    if (ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  writeValue(obj: any): void {
    this.value = obj;
    this.onChanged(obj);
  }

  errorState() {
    return new QuiErrorStateMatcher(this.formControl);
  }

  ngAfterContentInit(): void {
    if (this.ngControl) {
      this.formControl = this.ngControl.control as FormControl;
    }
    if (this.placeholder == "")
      this.placeholder = this.label;
  }
}
