import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputViewComponent } from './input/inputView.component';
import { SelectViewComponent } from './select/selectView.component';

const routes: Routes = [
    {path: '', component: InputViewComponent},
    {path: 'select', component: SelectViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
