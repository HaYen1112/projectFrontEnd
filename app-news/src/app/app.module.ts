import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';

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
import { NewsComponent } from './components/body/page-body/body-center/news/news.component';
import { TopicComponent } from './components/body/page-body/body-center/news/topic/topic.component';
import { FooterComponent } from './components/footer/footer.component';
import { TechNewsComponent } from './components/body/page-body/body-center/under-the-ad/under-the-ad-left/tech-news/tech-news.component';
import { LastNewReadingsComponent } from './components/last-new-readings/last-new-readings.component';
import { LastnewMenuComponent } from './components/last-new-readings/lastnew-menu/lastnew-menu.component';
import { LastnewBodyReadingComponent } from './components/last-new-readings/lastnew-body-reading/lastnew-body-reading.component';
import { HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes} from '@angular/router';
import { LastnewBodyReadingLeftComponent } from './components/last-new-readings/lastnew-body-reading/lastnew-body-reading-left/lastnew-body-reading-left.component';
import { LastnewBodyReadingRightComponent } from './components/last-new-readings/lastnew-body-reading/lastnew-body-reading-right/lastnew-body-reading-right.component';
import { PostsComponent } from './components/last-new-readings/lastnew-body-reading/lastnew-body-reading-left/posts/posts.component';
import { NewsReadMoreComponent } from './components/last-new-readings/lastnew-body-reading/lastnew-body-reading-left/news-read-more/news-read-more.component';
import { CommentComponent } from './components/last-new-readings/lastnew-body-reading/lastnew-body-reading-left/comment/comment.component';
import { ReadingsMoreComponent } from './components/last-new-readings/lastnew-body-reading/lastnew-body-reading-left/readings-more/readings-more.component';
import { MaybeYouAreInterestedComponent } from './components/last-new-readings/lastnew-body-reading/lastnew-body-reading-left/maybe-you-are-interested/maybe-you-are-interested.component';
import { NewsForYouComponent } from './components/last-new-readings/lastnew-body-reading/lastnew-body-reading-left/news-for-you/news-for-you.component';
import { AppRoutingModule } from './components/app-routing/app-routing.module';
import { YouNeedKnowComponent } from './components/you-need-know/you-need-know.component';
import { UnderLeftComponent } from './components/you-need-know/under-left/under-left.component';
import { UnderRightComponent } from './components/you-need-know/under-right/under-right.component';
import { LoginComponent } from './components/login/login.component';
import { FormLoginComponent } from './components/login/form-login/form-login.component';
import { CateListComponent } from './components/you-need-know/under-left/cate-list/cate-list.component';
import { HotNewComponent } from './components/you-need-know/under-left/hot-new/hot-new.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const route: Routes = [
  { path: 'last-new-readings', component: LastNewReadingsComponent },
  { path: '', component: PageBodyComponent},
  { path: 'bancanbiet', component: YouNeedKnowComponent},
  { path: 'dangnhap', component: LoginComponent}
];
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
    NewsComponent,
    TopicComponent,
    FooterComponent,
    TechNewsComponent,
    LastNewReadingsComponent,
    LastnewMenuComponent,
    LastnewBodyReadingComponent,
    LastnewBodyReadingLeftComponent,
    LastnewBodyReadingRightComponent,
    PostsComponent,
    NewsReadMoreComponent,
    CommentComponent,
    ReadingsMoreComponent,
    MaybeYouAreInterestedComponent,
    NewsForYouComponent,
    YouNeedKnowComponent,
    UnderLeftComponent,
    UnderRightComponent,
    LoginComponent,
    FormLoginComponent,
    CateListComponent,
    HotNewComponent,


  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule, AppRoutingModule,
     RouterModule.forRoot(route), HttpClientJsonpModule, NgbModule, BrowserAnimationsModule


  ],
  providers: [
    RouterModule
  ],
  bootstrap: [AppComponent],
  exports: [HttpClientModule, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
