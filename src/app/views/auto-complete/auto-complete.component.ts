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
    <Model>{ id: 3, value: "Netherlands" },
    <Model>{ id: 4, value: "Norway" },
    <Model>{ id: 5, value: "France" },
    <Model>{ id: 6, value: "Spain" },
    <Model>{ id: 7, value: "Switzerland" },
    <Model>{ id: 8, value: "Czechia" },
    <Model>{ id: 9, value: "Denmark" },
    <Model>{ id: 10, value: "Sweden" },
    <Model>{ id: 11, value: "Luxembourg" }];

    this.items = QuiFormHelper.convertToMatOption(list, "value");
    this.itemsCopy = QuiFormHelper.convertToMatOption(list, "value");
    this.initValue = [<MatOption<Model>>{viewValue: this.items[0].viewValue, value: this.items[0].value}];
    this.ngModel = list[0];
    this.fg = new FormGroup({
      input: new FormControl(null, Validators.required),
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
    return of(this.itemsCopy.filter(x => x.viewValue.toLocaleLowerCase().includes(value.toLocaleLowerCase()))).pipe(delay(2000));
  }

  onNgSubmit(event : any){
    console.log(event);
  }
}

export class Model {
  id!: number;
  value!: string;
}
