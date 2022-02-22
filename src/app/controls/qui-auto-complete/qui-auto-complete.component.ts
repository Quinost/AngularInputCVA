import { AfterContentInit, Component, ElementRef, EventEmitter, Input, OnInit, Optional, Output, Self, ViewChild } from '@angular/core';
import { FormControl, NgControl, Validators } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { BehaviorSubject, catchError, debounceTime, distinctUntilChanged, finalize, iif, map, mergeMap, Observable, pipe, startWith, Subject, switchMap, takeUntil, takeWhile, tap } from 'rxjs';
import { QuiBaseControl } from '../base/directives/qui-base-control.directive';
import { QuiErrorMessageService } from '../base/services/qui-error-message.service';

@Component({
  selector: 'qui-auto-complete',
  templateUrl: './qui-auto-complete.component.html',
  styleUrls: ['./qui-auto-complete.component.scss']
})
export class QuiAutoCompleteComponent extends QuiBaseControl<any> implements AfterContentInit {
  constructor(@Optional() @Self() public ngControl: NgControl,
    quiErrorMessageService: QuiErrorMessageService) {
    super(quiErrorMessageService);
    if (ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  @Input() hint: string = "";
  @Input() label: string = "";
  @Input() appearance: "standard" | "fill" | "outline" = "standard";
  @Input() floatLabel: "always" | "never" | "auto" = "auto";
  @Input() placeholder: string = "";
  @Input() items!: MatOption<any>[];
  @Input() multiple: boolean = false;
  @Input() filterOptions!: ((value: any) => Observable<MatOption<any>[]>);

  inputFormControl: FormControl = new FormControl("");

  asyncItems!: Observable<MatOption<any>[]>;
  isLoading: boolean = false;

  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

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

  writeValue(obj: any): void {
    this.value = obj;
    this.onChanged(obj);
  }

  ngAfterContentInit(): void {
    if (this.items)
      this.asyncItems = new Observable(o => o.next(this.items));

    if (this.ngControl) {
      this.formControl = this.ngControl.control as FormControl;
      if (this.ngControl.valueChanges) {
        if (this.filterOptions) {
          this.asyncItems = this.ngControl.valueChanges.pipe(
            startWith(''),
            distinctUntilChanged(
              (a, b) => {
                if (typeof b == 'string')
                  return false;
                if (a == b)
                  return false;
                return true;
              }
            ),
            debounceTime(1500),
            tap(() => this.isLoading = true),
            switchMap(x => {
              return this.filterOptions(x).pipe(finalize(() => this.isLoading = false));
            }));
        }
        else {
          this.asyncItems = this.ngControl.valueChanges.pipe(
            startWith(''),
            distinctUntilChanged(
              (a, b) => {
                if (typeof b == 'string')
                  return false;
                if (a == b)
                  return false;
                return true;
              }
            ),
            map(name => this.filter(name)),
          );
        }
      }
    }

    if (this.placeholder == "")
      this.placeholder = this.label;
  }

  private filter(value: any): MatOption<any>[] {

    return this.items?.filter(x => x.viewValue.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
  }

  getViewValue(value: any) {
    if (value) {
      return this.items.find(x => x.value == value)?.viewValue;
    }
    return value;
  }
}
