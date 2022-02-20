import { Component, Input, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { QuiInputBaseControl } from '../base/directives/qui-input-base-control.directive';
import { QuiErrorMessageService } from '../base/services/qui-error-message.service';

@Component({
  selector: 'qui-number',
  templateUrl: './qui-number.component.html',
  styleUrls: ['./qui-number.component.scss']
})
export class QuiNumberComponent extends QuiInputBaseControl<number | null> {
  constructor(@Optional() @Self() public ngControl: NgControl,
    quiErrorMessagesService: QuiErrorMessageService) {
    super(quiErrorMessagesService);
    if (ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  @Input() showClearBtn: boolean = false;

  @Input() value: number | null = null;
  get _value() {
    return this.value;
  }
  set _value(val: number | null) {
    this.writeValue(val);
  }

  writeValue(obj: any): void {
    this.value = obj;
    this.onChanged(obj);
  }
}
