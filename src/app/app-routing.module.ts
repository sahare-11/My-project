import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MultiStepFormComponent } from './multi-step-form/multi-step-form.component';
import { NestedTabsComponent } from './nested-tabs/nested-tabs.component';
import { MedicalComponent } from './medical/medical.component';



const routes: Routes = [
  {path:'form', component: MultiStepFormComponent },
  {path:'tabs', component: NestedTabsComponent },
  {path:'medical', component: MedicalComponent }
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MultiStepFormComponent, NestedTabsComponent,MedicalComponent]
