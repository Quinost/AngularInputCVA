import { AfterContentInit, Component, Input, OnInit, Optional, Self } from '@angular/core';
import { FormControl, NgControl, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { QuiBaseControl } from '../base/directives/qui-base-control.directive';
import { QuiErrorStateMatcher } from '../base/qui-error-state-matcher';
import { QuiErrorMessageService } from '../base/services/qui-error-message.service';

@Component({
  selector: 'qui-number',
  templateUrl: './qui-number.component.html',
  styleUrls: ['./qui-number.component.scss']
})
export class QuiNumberComponent extends QuiBaseControl<number | null> implements AfterContentInit {
  constructor(@Optional() @Self() public ngControl: NgControl,
    quiErrorMessagesService: QuiErrorMessageService) {
    super(quiErrorMessagesService);
    if (ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  @Input() hint: string = "";
  @Input() label: string = "";
  @Input() appearance: "standard" | "fill" | "outline" = "standard";
  @Input() floatLabel: "always" | "never" | "auto" = "auto";
  @Input() placeholder: string = "";
  @Input() showClearBtn: boolean = false;

  @Input() value: number | null = null;
  get _value() {
    return this.value;
  }
  set _value(val: number | null) {
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
