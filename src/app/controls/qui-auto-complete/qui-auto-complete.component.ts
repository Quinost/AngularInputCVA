import { AfterContentInit, Component, ElementRef, EventEmitter, Input, OnInit, Optional, Output, Self, ViewChild } from '@angular/core';
import { FormControl, NgControl, Validators } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { concat, concatMap, debounceTime, defaultIfEmpty, distinctUntilChanged, filter, map, merge, observable, Observable, pipe, startWith, switchMap, tap } from 'rxjs';
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
  @Input() filterOptions: ((value: any) => Observable<MatOption<any>[]>) | null = null;

  inputFormControl: FormControl = new FormControl("");

  asyncItems!: Observable<MatOption<any>[]>;
  loading: boolean = false;

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
      if (this.filterOptions != null) {
        if (this.ngControl.valueChanges)
          this.ngControl.valueChanges.pipe(
            startWith(''),
            tap(t => this.loading = true),
            distinctUntilChanged(),
            debounceTime(2000),
            tap(t => this.asyncItems = new Observable()),
            map((x: any) => {
              if (this.filterOptions)
                this.filterOptions(x).subscribe({
                  next: (v) => {
                    console.log(v);
                    this.asyncItems = new Observable(o => o.next(v));
                    this.loading = false
                  },
                  error: () => {
                    console.log("error");
                    this.loading = false
                  }
                })
            }),
          ).subscribe();
      }
    }

    if (this.placeholder == "")
      this.placeholder = this.label;
  }
  getViewValue(value: any) {
    if (value) {
      return this.items.find(x => x.value == value)?.viewValue;
    }
    return value;
  }
}
