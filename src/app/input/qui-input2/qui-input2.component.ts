import { AfterContentInit, Component, EventEmitter, Inject, Input, OnDestroy, OnInit, Optional, Output, Self } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl, Validators } from '@angular/forms';
import { MatFormField, MatFormFieldControl, MAT_FORM_FIELD } from '@angular/material/form-field';
import { Subject } from 'rxjs';
import { QuiErrorStateMatcher } from 'src/app/QuiErrorStateMatcher';

@Component({
  selector: 'qui-input2',
  templateUrl: './qui-input2.component.html',
  providers: [{provide: MatFormFieldControl, useExisting: QuiInput2Component}],
})
export class QuiInput2Component implements ControlValueAccessor, AfterContentInit, MatFormFieldControl<string>, OnDestroy {

  constructor(@Optional() @Self() public ngControl: NgControl,
              @Optional() @Inject(MAT_FORM_FIELD) public _formField: MatFormField) {
    if(ngControl){
      this.ngControl.valueAccessor = this;
    }
  }
  static nextId = 0;

  afterContentInit: EventEmitter<void> = new EventEmitter<void>();
  formCtr: FormControl = new FormControl();
  id = `qui-input2'-${QuiInput2Component.nextId++}`;

  @Input() disabled!: boolean;
  @Input('aria-describedby') userAriaDescribedBy!: string;



  @Input() value!: string;
  get _value() {
    return this.value;
  }
  set _value(val:string){
    this.writeValue(val);
  }

  @Input()
  get required(): boolean {
    return this.formCtr.hasValidator(Validators.required);
  }

  get errorState(): boolean {
    return this.formCtr.invalid;
  }

  onChanged: any = () => {};
  onTouched: any = () => {};

  writeValue(obj: any): void {
    this.value = obj;
    this.onChanged(obj);
  }
  registerOnChange(fn: any): void { this.onChanged = fn; }
  registerOnTouched(fn: any): void { this.onTouched = fn; }

  get errorStateMatcher(){
    return new QuiErrorStateMatcher(this.formCtr);
  }

  ngAfterContentInit(): void {
    if(this.ngControl){
      this.formCtr = this.ngControl.control as FormControl;
    }
    this.afterContentInit.emit();
  }


  ngOnDestroy(): void {
    //error with routing
    //this.stateChanges.complete();
    //this.afterContentInit.complete();
  }
  stateChanges!: Subject<void>;
  placeholder!: string;
  focused!: boolean;
  empty!: boolean;
  shouldLabelFloat!: boolean;
  controlType?: string | undefined;
  autofilled?: boolean | undefined;
  setDescribedByIds(ids: string[]): void {
    throw new Error('Method not implemented.');
  }
  onContainerClick(event: MouseEvent): void {
    throw new Error('Method not implemented.');
  }
}
