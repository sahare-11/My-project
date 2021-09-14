import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MultiStepFormComponent } from './multi-step-form/multi-step-form.component';
import { NestedTabsComponent } from './nested-tabs/nested-tabs.component';



const routes: Routes = [
  {path:'form', component: MultiStepFormComponent },
  {path:'tabs', component: NestedTabsComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MultiStepFormComponent, NestedTabsComponent]
