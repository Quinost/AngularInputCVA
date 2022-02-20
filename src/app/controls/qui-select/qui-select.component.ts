import { AfterContentInit, Component, Input, Optional, Self } from '@angular/core';
import { FormControl, NgControl, Validators } from '@angular/forms';
import { ErrorStateMatcher, MatOption } from '@angular/material/core';
import { QuiBaseControl } from '../base/directives/qui-base-control.directive';
import { QuiErrorStateMatcher } from '../base/qui-error-state-matcher';
import { QuiErrorMessageService } from '../base/services/qui-error-message.service';

@Component({
  selector: 'qui-select',
  templateUrl: './qui-select.component.html',
  styleUrls: ['./qui-select.component.scss']
})
export class QuiSelectComponent extends QuiBaseControl<any> implements AfterContentInit {
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

  writeValue(obj: any): void {
    this.value = obj;
    this.onChanged(obj);
  }

  ngAfterContentInit(): void {
    if (this.ngControl) {
      this.formControl = this.ngControl.control as FormControl;
    }
    if (this.placeholder == "")
      this.placeholder = this.label;
  }
}
