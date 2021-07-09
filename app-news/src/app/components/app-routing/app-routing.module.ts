import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Routes } from '@angular/router';
import { LastNewReadingsComponent } from '../last-new-readings/last-new-readings.component';
import { PageBodyComponent } from '../body/page-body/page-body.component';
import { RouterModule } from '@angular/router';

const routers: Routes = [
  {
    path: '', component: PageBodyComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule, RouterModule.forRoot(routers)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
