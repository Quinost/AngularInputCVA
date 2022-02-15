import { Directive, EventEmitter, Input, Output } from "@angular/core";
import { ControlValueAccessor, FormControl, NgControl } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { QuiErrorMessageService } from "./qui-error-message.service";

@Directive()

export abstract class QuiBaseControl<T> implements ControlValueAccessor {
    constructor(private quiErrorMessagesService: QuiErrorMessageService) {}

    @Input() required: boolean = false;
    @Input() placeholder: string = "";
    @Input() disabled: boolean = false;
    @Input() readonly: boolean = false;
    @Input() hint: string = "";
    @Input() appearance: "standard" | "fill" | "outline" = "standard";
    @Input() floatLabel: "always" | "never" | "auto" = "auto";
    @Input() label: string = "";
    @Input() hidden: boolean = false;

    formControl = new FormControl();
    abstract value: T;
    abstract ngControl: NgControl | null;
    abstract get errorStateMatcher(): ErrorStateMatcher;

    onChanged: any = () => { };
    onTouched: any = () => { };

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
                if (this.quiErrorMessagesService.translateMethod)
                    return this.quiErrorMessagesService.translateMethod(item.translationKey);
                else
                    return item.defaultMessage;
        }
        return "No message";
    }
}