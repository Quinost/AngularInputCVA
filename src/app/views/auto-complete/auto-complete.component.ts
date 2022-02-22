import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { delay, Observable, of } from 'rxjs';
import { QuiFormHelper } from 'src/app/controls/base/helpers/qui-form-helper';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss']
})
export class AutoCompleteViewComponent {
  constructor() {
    let list = [<Model>{ id: 1, value: "Poland" },
    <Model>{ id: 2, value: "Germany" },
    <Model>{ id: 2, value: "Netherlands" },
    <Model>{ id: 2, value: "Norway" },
    <Model>{ id: 2, value: "France" },
    <Model>{ id: 2, value: "Spain" },
    <Model>{ id: 2, value: "Switzerland" },
    <Model>{ id: 2, value: "Czechia" },
    <Model>{ id: 2, value: "Denmark" },
    <Model>{ id: 2, value: "Sweden" },
    <Model>{ id: 2, value: "Luxembourg" }];

    this.items = QuiFormHelper.convertToMatOption(list, "value");
    this.itemsCopy = QuiFormHelper.convertToMatOption(list, "value");
    this.initValue = [<MatOption<Model>>{viewValue: this.items[0].viewValue, value: this.items[0].value}];
    this.ngModel = list[0];
    this.fg = new FormGroup({
      input: new FormControl(this.items[0].value, Validators.required),
      input2: new FormControl(this.items[1].value, Validators.required)
    });
  }

  fg = new FormGroup({
    input: new FormControl(null)
  });

  items: MatOption<Model>[];
  itemsCopy: MatOption<Model>[];
  initValue: MatOption<Model>[];

  ngModel: Model;

  filterOption(value: any): Observable<MatOption<Model>[]> {
    console.log(value);
    return of(this.itemsCopy.filter(x => x.viewValue.toLocaleLowerCase().includes(value.toLocaleLowerCase()))).pipe(delay(2000));
  }
}

export class Model {
  id!: number;
  value!: string;
}
