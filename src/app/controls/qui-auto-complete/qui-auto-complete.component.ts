import { AfterContentInit, Component, Input, Optional, Self } from '@angular/core';
import { FormControl, NgControl, Validators } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { BehaviorSubject, debounceTime, distinctUntilChanged, finalize, map, Observable, of, skip, startWith, switchMap, tap } from 'rxjs';
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
  @Input() initValue!: MatOption<any>;
  @Input() filterOptions!: ((value: any) => Observable<MatOption<any>[]>);

  asyncItems!: Observable<MatOption<any>[]>;
  isLoading: boolean = false;
  private tempValue: MatOption<any> | undefined;

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
    if (this.initValue)
      this.tempValue = this.initValue;
    if (this.items)
      this.asyncItems = new Observable(o => o.next(this.items));

    if (this.ngControl) {
      this.formControl = this.ngControl.control as FormControl;
      if (this.ngControl.valueChanges) {
        if (this.filterOptions) {
          this.asyncItems = this.ngControl.valueChanges.pipe(
            startWith(''),
            distinctUntilChanged(
              (previous, current) => {
                if (typeof current == 'string')
                  return false;
                if (previous == current)
                  return false;
                return true;
              }
            ),
            debounceTime(1500),
            tap(() => this.isLoading = true),
            switchMap(x => {
              if (x as string == '')
                return of([]).pipe(finalize(() => this.isLoading = false));
              else
                return this.filterOptions(x).pipe(finalize(() => this.isLoading = false));
            }));
        }

        else {
          this.asyncItems = this.ngControl.valueChanges.pipe(
            startWith(''),
            distinctUntilChanged(
              (previous, current) => {
                if (typeof current == 'string')
                  return false;
                if (previous == current)
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
      if (this.tempValue)
        return this.tempValue.viewValue ?? value;
      if (this.items && typeof value != 'string')
        return this.items?.find(x => x.value == value)?.viewValue ?? value;
    }
    return value;
  }
  onSelectionChange(event: any) {
    this.tempValue = event;
  }
}
