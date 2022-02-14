import { Directive, Input } from "@angular/core";
import { ControlValueAccessor, NgControl } from "@angular/forms";

@Directive()

export abstract class QuiBaseControl<T> implements ControlValueAccessor {
    static nextId = 0;
    constructor(){
    }

    @Input('aria-describedby') userAriaDescribedBy: string | undefined;

    @Input() required: boolean = false;
    @Input() placeholder: string = "";
    @Input() disabled: boolean = false;
    @Input() readonly: boolean = false;
    @Input() hint: string = "";


    abstract id: string;
    abstract value: T;
    abstract ngControl: NgControl | null;
    abstract get errorStateMatcher(): boolean;

    onChanged: any = () => { };
    onTouched: any = () => { };

    abstract writeValue(obj: any): void;
    registerOnChange(fn: any): void {
        this.onChanged = fn;
    }
    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }
}