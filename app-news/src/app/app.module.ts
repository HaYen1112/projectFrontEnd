import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/header/menu/menu.component';
import { MenuBottomComponent } from './components/header/menu-bottom/menu-bottom.component';
import { PageBodyComponent } from './components/body/page-body/page-body.component';
import { BodyLeftComponent } from './components/body/page-body/body-left/body-left.component';
import { BodyCenterComponent } from './components/body/page-body/body-center/body-center.component';
import { BodyRightComponent } from './components/body/page-body/body-right/body-right.component';
import { HotNewsComponent } from './components/body/page-body/body-center/hot-news/hot-news.component';
import { AdvertisementComponent } from './components/body/page-body/body-center/advertisement/advertisement.component';
import { UnderTheAdComponent } from './components/body/page-body/body-center/under-the-ad/under-the-ad.component';
import { UnderTheAdLeftComponent } from './components/body/page-body/body-center/under-the-ad/under-the-ad-left/under-the-ad-left.component';
import { UnderTheAdRightComponent } from './components/body/page-body/body-center/under-the-ad/under-the-ad-right/under-the-ad-right.component';
import { WordsAdLeftComponent } from './components/body/page-body/body-center/under-the-ad/under-the-ad-left/words-ad-left/words-ad-left.component';
import { ImgAdLeftComponent } from './components/body/page-body/body-center/under-the-ad/under-the-ad-left/img-ad-left/img-ad-left.component';
import { TabsComponent } from './components/body/page-body/body-center/under-the-ad/under-the-ad-right/tabs/tabs.component';
import { FeatureComponent } from './components/body/page-body/body-center/under-the-ad/under-the-ad-left/feature/feature.component';
import { EditorPickComponent } from './components/body/page-body/body-center/under-the-ad/under-the-ad-left/editor-pick/editor-pick.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuBottomComponent,
    PageBodyComponent,
    BodyLeftComponent,
    BodyCenterComponent,
    BodyRightComponent,
    HotNewsComponent,
    AdvertisementComponent,
    UnderTheAdComponent,
    UnderTheAdLeftComponent,
    UnderTheAdRightComponent,
    WordsAdLeftComponent,
    ImgAdLeftComponent,
    TabsComponent,
    FeatureComponent,
    EditorPickComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
