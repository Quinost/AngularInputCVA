import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckboxViewComponent } from './checkbox/checkboxView.component';
import { InputViewComponent } from './input/inputView.component';
import { SelectViewComponent } from './select/selectView.component';

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
