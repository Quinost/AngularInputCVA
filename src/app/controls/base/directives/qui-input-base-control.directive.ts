import { AfterContentInit, Directive, Input } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { QuiBaseControl } from "./qui-base-control.directive";

@Directive()

export abstract class QuiInputBaseControl<T> extends QuiBaseControl<T> implements AfterContentInit {
    @Input() hint: string = "";
    @Input() label: string = "";
    @Input() appearance: "standard" | "fill" | "outline" = "standard";
    @Input() floatLabel: "always" | "never" | "auto" = "auto";
    @Input() placeholder: string = "";

    get _required(): boolean {
        return this.formControl.hasValidator(Validators.required) || this.required;
    }

    ngAfterContentInit(): void {
        if (this.ngControl) {
            this.formControl = this.ngControl.control as FormControl;
        }
        if (this.placeholder == "")
            this.placeholder = this.label;
    }
}