import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/header/menu/menu.component';
import { MenuBottomComponent } from './components/header/menu-bottom/menu-bottom.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuBottomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
