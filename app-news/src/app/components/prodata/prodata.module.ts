import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FooterComponent } from '../footer/footer.component';
import { BodyCenterComponent } from '../body/page-body/body-center/body-center.component';
import { BodyLeftComponent } from '../body/page-body/body-left/body-left.component';
import { BodyRightComponent } from '../body/page-body/body-right/body-right.component';
import { ProductRoutingModule } from './pro-routing.module';
import { Data } from '../body/page-body/data';

@NgModule({
  declarations: [
    FooterComponent,
    BodyCenterComponent,
    BodyLeftComponent,
    BodyRightComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    HttpClient
  ],
  exports: [
    FooterComponent,
    BodyCenterComponent,
    BodyLeftComponent,
    BodyRightComponent
  ],
  providers: [
    Data
  ]
})
export class ProdataModule { }
