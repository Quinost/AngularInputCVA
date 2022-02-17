import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckboxViewComponent } from './inputs/checkbox/checkboxView.component';
import { InputViewComponent } from './inputs/input_textarea/inputView.component';
import { SelectViewComponent } from './inputs/select/selectView.component';

const routes: Routes = [
    {path: '', component: InputViewComponent},
    {path: 'select', component: SelectViewComponent},
    {path: 'checkbox', component: CheckboxViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
