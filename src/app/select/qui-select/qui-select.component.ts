import { AfterContentInit, Component, Input, OnInit, Optional, Self } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl, Validators } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { QuiErrorStateMatcher } from 'src/app/QuiErrorStateMatcher';

@Component({
  selector: 'qui-select',
  templateUrl: './qui-select.component.html'
})
export class QuiSelectComponent implements ControlValueAccessor, AfterContentInit {
  onChanged: any = () => {};
  onTouched: any = () => {};

  formCtr: FormControl = new FormControl();

  @Input() items!: MatOption<any>[];

  @Input() value: any;
  get _value() {
    return this.value;
  }
  set _value(val:any){
    this.writeValue(val);
  }

  @Input() required: boolean = false;;
  get _required(): boolean {
    return this.formCtr.hasValidator(Validators.required) || this.required;
  }

  constructor(@Optional() @Self() private ngControl: NgControl) {
    if(ngControl){
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

  errorState(){
    return new QuiErrorStateMatcher(this.formCtr);
  }

  ngAfterContentInit(): void {
    if(this.ngControl){
      this.formCtr = this.ngControl.control as FormControl;
    }
  }
}
