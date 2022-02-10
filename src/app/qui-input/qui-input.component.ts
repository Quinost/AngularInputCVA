import { AfterContentInit,  Component,  Input,  Optional, Self } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroupDirective, NgControl, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MAT_INPUT_VALUE_ACCESSOR } from '@angular/material/input';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  constructor(private control: FormControl){}
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(this.control && this.control.invalid && (this.control.dirty || this.control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-qui-input',
  templateUrl: './qui-input.component.html',
  providers: [
    { provide: MAT_INPUT_VALUE_ACCESSOR, useExisting: QuiInputComponent },
  ]
})
export class QuiInputComponent implements ControlValueAccessor, AfterContentInit {
  onChanged: any = () => {};
  onTouched: any = () => {};

  formCtr: FormControl = new FormControl();

  @Input() value: any;
  get _value() {
    return this.value;
  }
  set _value(val:any){
    this.writeValue(val);
  }

  @Input()
  get required(): boolean {
    return this.formCtr.hasValidator(Validators.required);
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
    return new MyErrorStateMatcher(this.formCtr);
  }


  ngAfterContentInit(): void {
    if(this.ngControl){
      this.formCtr = this.ngControl.control as FormControl;
    }
  }

}
