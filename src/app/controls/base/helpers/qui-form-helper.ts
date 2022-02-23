
import { MatOption } from "@angular/material/core";
import { empty } from "rxjs";

export class QuiFormHelper {
    public static convertToMatOption<T>(array: T[], propertyName: keyof T, emptyMessage: string | null = null): MatOption<T>[] {
        let list: MatOption<T>[] = [];
        if (emptyMessage)
            list.push(<MatOption<T>>{ viewValue: emptyMessage });
        return list.concat(array.map((x) => { return <MatOption<T>>{ viewValue: x[propertyName] as unknown as string, value: x } }));
    }
}