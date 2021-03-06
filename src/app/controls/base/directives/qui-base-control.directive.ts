import { Directive, Input } from "@angular/core";
import { ControlValueAccessor, FormControl, NgControl } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { QuiErrorStateMatcher } from "../qui-error-state-matcher";
import { QuiErrorMessageService } from "../services/qui-error-message.service";

@Directive()

export abstract class QuiBaseControl<T> implements ControlValueAccessor {
    constructor(private quiErrorMessagesService: QuiErrorMessageService) { }

    @Input() required: boolean = false;
    @Input() disabled: boolean = false;
    @Input() readonly: boolean = false;

    formControl = new FormControl();
    abstract value: T;
    abstract ngControl: NgControl | null;

    onChanged: any = () => { };
    onTouched: any = () => { };

    get errorStateMatcher(): ErrorStateMatcher {
        return new QuiErrorStateMatcher(this.formControl);
    }

    abstract writeValue(obj: any): void;
    registerOnChange(fn: any): void {
        this.onChanged = fn;
    }
    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    getErrorMessage(): string {
        for (const item of this.quiErrorMessagesService.getErrorMessages) {
            if (this.formControl.hasError(item.forValidator))
                if (this.quiErrorMessagesService.translateMethod && item.translationKey != "")
                    return this.quiErrorMessagesService.translateMethod(item.translationKey);
                else
                    return item.defaultMessage;
        }
        return "No message";
    }

    setDisabledState?(isDisabled: boolean) {
        this.disabled = isDisabled;
    }
}