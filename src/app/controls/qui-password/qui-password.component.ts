import { Component, Input, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { QuiInputBaseControl } from '../base/directives/qui-input-base-control.directive';
import { QuiErrorMessageService } from '../base/services/qui-error-message.service';

@Component({
    selector: 'qui-password',
    templateUrl: './qui-password.component.html',
    styleUrls: ['./qui-password.component.scss']
})
export class QuiPasswordComponent extends QuiInputBaseControl<string | null>{
    constructor(@Optional() @Self() public ngControl: NgControl,
        quiErrorMessagesService: QuiErrorMessageService) {
        super(quiErrorMessagesService);
        if (ngControl) {
            this.ngControl.valueAccessor = this;
        }
    }

    @Input() showClearBtn: boolean = false;

    type: 'text' | 'password' = 'password';

    @Input() value!: string | null;
    get _value() {
        return this.value;
    }
    set _value(val: string | null) {
        this.writeValue(val);
    }

    writeValue(obj: any): void {
        this.value = obj;
        this.onChanged(obj);
    }

    onVisibilityChanged() {
        if (this.type == 'password')
            this.type = 'text';
        else
            this.type = 'password';
    }
}
