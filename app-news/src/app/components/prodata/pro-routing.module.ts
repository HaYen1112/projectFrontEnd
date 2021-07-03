import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LastNewReadingsComponent } from '../last-new-readings/last-new-readings.component';
import { PageBodyComponent } from '../body/page-body/page-body.component';
const routes: Routes = [
  {path: 'home', component: PageBodyComponent},
  {path: 'lastnew', component: LastNewReadingsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
