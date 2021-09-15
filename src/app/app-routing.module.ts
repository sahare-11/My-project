import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MultiStepFormComponent } from './multi-step-form/multi-step-form.component';
import { NestedTabsComponent } from './nested-tabs/nested-tabs.component';
import { MedicalComponent } from './medical/medical.component';
import { DentalComponent } from './dental/dental.component';
import { AlmostDoneComponent } from './almost-done/almost-done.component';
import { CompletedComponent } from './completed/completed.component';




const routes: Routes = [
  {path:'form', component: MultiStepFormComponent },
  {path:'tabs', component: NestedTabsComponent },
  {path:'medical', component: MedicalComponent },
  {path:'dental', component: DentalComponent },
  {path:'almost-done', component: AlmostDoneComponent },
  {path:'completed', component: CompletedComponent },

  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MultiStepFormComponent, NestedTabsComponent,MedicalComponent,DentalComponent,AlmostDoneComponent,CompletedComponent,]
