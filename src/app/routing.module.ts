import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoCompleteViewComponent } from './views/auto-complete/auto-complete.component';
import { CheckboxViewComponent } from './views/checkbox/checkbox.component';
import { DatepickerViewComponent } from './views/datepicker/datepicker.component';
import { InputViewComponent } from './views/input/input.component';
import { NumberViewComponent } from './views/number/number.component';
import { PasswordComponent } from './views/password/password.component';
import { SelectViewComponent } from './views/select/select.component';
import { TextareaViewComponent } from './views/textarea/textarea.component';

const routes: Routes = [
    {path: '', component: InputViewComponent},
    {path: 'select', component: SelectViewComponent},
    {path: 'checkbox', component: CheckboxViewComponent},
    {path: 'textarea', component: TextareaViewComponent},
    {path: 'auto-complete', component: AutoCompleteViewComponent},
    {path: 'datepicker', component: DatepickerViewComponent},
    {path: 'number', component: NumberViewComponent},
    {path: 'password', component: PasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
