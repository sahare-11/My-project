import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MultiFormComponent } from './multi-form/multi-form.component';

const routes: Routes = [
 {
   path: 'form', component: MultiFormComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
