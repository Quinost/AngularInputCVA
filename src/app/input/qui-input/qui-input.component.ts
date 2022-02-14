import { AfterContentInit, Component, Input, Optional, Self } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl, Validators } from '@angular/forms';
import { QuiErrorStateMatcher } from 'src/app/QuiErrorStateMatcher';

@Component({
  selector: 'qui-input',
  templateUrl: './qui-input.component.html'
})
export class QuiInputComponent implements ControlValueAccessor, AfterContentInit {
  onChanged: any = () => { };
  onTouched: any = () => { };

  formCtr: FormControl = new FormControl();

  @Input() value: any;
  get _value() {
    return this.value;
  }
  set _value(val: any) {
    this.writeValue(val);
  }

  @Input()
  get required(): boolean {
    return this.formCtr.hasValidator(Validators.required);
  }

  constructor(@Optional() @Self() private ngControl: NgControl) {
    if (ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  writeValue(obj: any): void {
    this.value = obj;
    this.onChanged(obj);
  }
  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  errorState() {
    return new QuiErrorStateMatcher(this.formCtr);
  }

  ngAfterContentInit(): void {
    if (this.ngControl) {
      this.formCtr = this.ngControl.control as FormControl;
    }
  }
}
