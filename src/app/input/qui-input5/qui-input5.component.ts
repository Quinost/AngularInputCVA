import { AfterContentInit, Component, Input, Optional, Self } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl, Validators } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { QuiErrorStateMatcher } from 'src/app/QuiErrorStateMatcher';
import { MyFormErrorMessage } from 'src/app/QuiFormHelper';

@Component({
  selector: 'qui-input5',
  templateUrl: './qui-input5.component.html'
})
export class QuiInput5Component implements ControlValueAccessor, AfterContentInit {

  @Input() appearance: MatFormFieldAppearance = "standard"

  @Input() hint: string = "";
  @Input() label: string = "";
  @Input() placeholder: string = "";
  @Input() disabled: boolean = false;
  @Input() readonly: boolean = false;
  @Input() showClearBtn: boolean = false;


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
    this.placeholder = this.placeholder == "" ? this.label : this.placeholder;
  }

  get errorMessage(): string {
    console.log(this.formCtr.errors);

    for(const message of MyFormErrorMessage){
      if(this.formCtr.hasError(message.forValidator)){
        return message.text;
      }
    }
    return "No error message";
  }
}