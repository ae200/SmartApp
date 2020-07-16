import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';

import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { NguCarouselModule } from '@ngu/carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { User } from '@src/app/auth/user';

import { CommonModule } from '@angular/common';

import { CookieService } from 'ngx-cookie-service';
//import { HTTP_INTERCEPTORS } from '@angular/common/http';
//import { TokenInterceptor } from '@src/app/auth/token.interceptor';


// import { StreamfictionmoviesService } from 'streamclient/app/streamfictionmovies/streamfictionmovies.service';
// import { StreamFictionMovieItem} from 'streamclient/app/streamfictionmovies/streamfictionmovie';
// import { StreamadventuremoviesService} from 'streamclient/app/streamadventuremovies/streamadventuremovies.service';
// import { StreamAdventureMovieItem} from 'streamclient/app/streamadventuremovies/streamadventuremovie';
// import { StreamcomedymoviesService } from 'streamclient/app/streamcomedymovies/streamcomedymovies.service';
// import { StreamComedyMovieItem} from 'streamclient/app/streamcomedymovies/streamcomedymovie';
// import { StreamdramamoviesService} from 'streamclient/app/streamdramamovies/streamdramamovies.service';
// import { StreamDramaMovieItem} from 'streamclient/app/streamdramamovies/streamdramamovie';
// import { StreamhistoricalmoviesService} from 'streamclient/app/streamhistoricalmovies/streamhistoricalmovies.service';
// import { StreamHistoricalMovieItem} from 'streamclient/app/streamhistoricalmovies/streamhistoricalmovie';
// import { StreamactionmoviesService} from 'streamclient/app/streamactionmovies/streamactionmovies.service';
// import { StreamActionMovieItem} from 'streamclient/app/streamactionmovies/streamactionmovie';



// import {StreamclientSharedModule} from 'streamclient/app/app.module';
// import { StreamAppComponent } from 'streamclient/app/app.component';
// import { StreamhistoricalListComponent } from 'streamclient/app/streamhistorical-list/streamhistorical-list.component';
// import { StreamhistoricalDetailComponent } from 'streamclient/app/streamhistorical-detail/streamhistorical-detail.component';
// import { StreamactionListComponent } from 'streamclient/app/streamaction-list/streamaction-list.component';
// import { StreamactionDetailComponent } from 'streamclient/app/streamaction-detail/streamaction-detail.component';
// import { StreamadventureListComponent } from 'streamclient/app/streamadventure-list/streamadventure-list.component';
// import { StreamadventureDetailComponent } from 'streamclient/app/streamadventure-detail/streamadventure-detail.component';
// import { StreamcomedyListComponent } from 'streamclient/app/streamcomedy-list/streamcomedy-list.component';
// import { StreamcomedyDetailComponent } from 'streamclient/app/streamcomedy-detail/streamcomedy-detail.component';
// import { StreamfictionListComponent } from 'streamclient/app/streamfiction-list/streamfiction-list.component';
// import { StreamfictionDetailComponent } from 'streamclient/app/streamfiction-detail/streamfiction-detail.component';
// import { StreamdramaListComponent } from 'streamclient/app/streamdrama-list/streamdrama-list.component';
// import { StreamdramaDetailComponent } from 'streamclient/app/streamdrama-detail/streamdrama-detail.component';

// import { DashboardComponent } from 'streamclient/app/dashboard/dashboard.component';
// import { DashboardDetailComponent } from 'streamclient/app/dashboard-detail/dashboard-detail.component';
// import { StreamHomeComponent } from 'streamclient/app/home/home.component';

import { HistoricalrealService } from '@src/app/historicalservice/historicalreal.service';
import { HistoricalthrillerService } from '@src/app/historicalservice/historicalthriller.service';
import { ActionrealService } from '@src/app/actionservice/actionreal.service';
import { ActionthrillerService } from '@src/app/actionservice/actionthriller.service';
import { AdventurerealService } from '@src/app/adventureservice/adventurereal.service';
import { AdventurethrillerService } from '@src/app/adventureservice/adventurethriller.service';
import { ComedyrealService } from '@src/app/comedyservice/comedyreal.service';
import { ComedythrillerService } from '@src/app/comedyservice/comedythriller.service';
import { FictionrealService } from '@src/app/fictionservice/fictionreal.service';
import { FictionthrillerService } from '@src/app/fictionservice/fictionthriller.service';
import { DramarealService } from '@src/app/dramaservice/dramareal.service';
import { DramathrillerService } from '@src/app/dramaservice/dramathriller.service';
import { MovieService } from '@src/app/movies/movies.service';


import { ActionThrillerMovieItem} from '@src/app/actionmovies/actionmovie';
import { ActionRealMovieItem} from '@src/app/actionmovies/actionmovie';
import { AdventureThrillerMovieItem} from '@src/app/adventuremovies/adventuremovie';
import { AdventureRealMovieItem} from '@src/app/adventuremovies/adventuremovie';
import { ComedyThrillerMovieItem} from '@src/app/comedymovies/comedymovie';
import { ComedyRealMovieItem} from '@src/app/comedymovies/comedymovie';
import { DramaThrillerMovieItem} from '@src/app/dramamovies/dramamovie';
import { DramaRealMovieItem} from '@src/app/dramamovies/dramamovie';
import { FictionThrillerMovieItem} from '@src/app/fictionmovies/fictionmovie';
import { FictionRealMovieItem} from '@src/app/fictionmovies/fictionmovie';
import { HistoricalThrillerMovieItem} from '@src/app/historicalmovies/historicalmovie';
import { HistoricalRealMovieItem} from '@src/app/historicalmovies/historicalmovie';
import { AuthLoginData} from '@src/app/auth/auth';
import { Status } from '@src/app/status/status';
import { MovieItem } from '@src/app/movies/movie';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { AboutusComponent } from '@src/app/aboutus/aboutus.component';
import { ComicbookComponent } from '@src/app/comicbook/comicbook.component';
import { CookiepolicyComponent } from '@src/app/cookiepolicy/cookiepolicy.component';
// import { DashboardComponent } from '@src/app/dashboard/dashboard.component';
import { HelpComponent } from '@src/app/help/help.component';
import { HomeComponent } from '@src/app/home/home.component';
import { LanguageComponent } from '@src/app/language/language.component';
// import { LoginComponent } from '@src/app/login/login.component';
// import { LoginDetailComponent } from '@src/app/login-detail/login-detail.component';
import { MovieListComponent } from '@src/app/movie-list/movie-list.component';
import { MovieDetailComponent } from '@src/app/movie-detail/movie-detail.component';
import { PrivacyComponent } from '@src/app/privacy/privacy.component';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from '@src/app/register/register.component';
import { SettingsComponent } from '@src/app/settings/settings.component';
import { SearchComponent } from '@src/app/search/search.component';
import { SearchDetailComponent } from '@src/app/search-detail/search-detail.component';
import { SubscriptionComponent } from '@src/app/subscription/subscription.component';
import { TermsofuseComponent } from '@src/app/termsofuse/termsofuse.component';
import { AutoGeneratedComponent } from '@src/app/auto-generated/auto-generated.component';
// import { DashboardDetailComponent } from '@src/app/dashboard-detail/dashboard-detail.component';
// import { AppLandingComponent } from '@src/app/app-landing/app-landing.component';
import { AdventureListComponent } from '@src/app/adventure-list/adventure-list.component';
import { AdventureDetailComponent } from '@src/app/adventure-detail/adventure-detail.component'; 
import { ActionListComponent } from '@src/app/action-list/action-list.component';
import { ActionDetailComponent } from '@src/app/action-detail/action-detail.component'; 
import { ComedyListComponent } from '@src/app/comedy-list/comedy-list.component';
import { ComedyDetailComponent } from '@src/app/comedy-detail/comedy-detail.component';
import { DramaListComponent } from '@src/app/drama-list/drama-list.component';
import { DramaDetailComponent } from '@src/app/drama-detail/drama-detail.component';
import { FictionListComponent } from '@src/app/fiction-list/fiction-list.component';
import { FictionDetailComponent } from '@src/app/fiction-detail/fiction-detail.component';
import { HistoricalListComponent } from '@src/app/historical-list/historical-list.component';
import { HistoricalDetailComponent } from '@src/app/historical-detail/historical-detail.component';

import { NotFoundComponent } from '@src/app/not-found/not-found.component';
import { StatusComponent } from '@src/app/status/status.component';
import { AuthComponent } from '@src/app/auth/auth.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { SafePipeModule } from 'safe-pipe';
import { StatusAPIService } from '@src/app/status/status.service';
import { SafePipe } from '@src/app/utility/safe.pipe';
import { StatusDetailComponent } from '@src/app/status-detail/status-detail.component';
import { StatusCreateComponent } from '@src/app/status-create/status-create.component';
import { AuthAPIService } from '@src/app/auth/auth.service';
import { UserRegisterData } from '@src/app/register/register';
import { AuthLogoutComponent } from '@src/app/auth-logout/auth-logout.component';
import { ActionThrillerListComponent } from '@src/app/action-thriller-list/action-thriller-list.component';
import { ActionThrillerDetailComponent } from '@src/app/action-thriller-detail/action-thriller-detail.component';
import { AdventureThrillerListComponent } from '@src/app/adventure-thriller-list/adventure-thriller-list.component';
import { AdventureThrillerDetailComponent } from '@src/app/adventure-thriller-detail/adventure-thriller-detail.component';
import { ActionRealListComponent } from '@src/app/action-real-list/action-real-list.component';
import { ActionRealDetailComponent } from '@src/app/action-real-detail/action-real-detail.component';
import { AdventureRealListComponent } from '@src/app/adventure-real-list/adventure-real-list.component';
import { AdventureRealDetailComponent } from '@src/app/adventure-real-detail/adventure-real-detail.component';
import { ComedyThrillerListComponent } from '@src/app/comedy-thriller-list/comedy-thriller-list.component';
import { ComedyThrillerDetailComponent } from '@src/app/comedy-thriller-detail/comedy-thriller-detail.component';
import { ComedyRealListComponent } from '@src/app/comedy-real-list/comedy-real-list.component';
import { ComedyRealDetailComponent } from '@src/app/comedy-real-detail/comedy-real-detail.component';
import { DramaThrillerListComponent } from '@src/app/drama-thriller-list/drama-thriller-list.component';
import { DramaThrillerDetailComponent } from '@src/app/drama-thriller-detail/drama-thriller-detail.component';
import { DramaRealListComponent } from '@src/app/drama-real-list/drama-real-list.component';
import { DramaRealDetailComponent } from '@src/app/drama-real-detail/drama-real-detail.component';
import { FictionThrillerListComponent } from '@src/app/fiction-thriller-list/fiction-thriller-list.component';
import { FictionThrillerDetailComponent } from '@src/app/fiction-thriller-detail/fiction-thriller-detail.component';
import { FictionRealListComponent } from '@src/app/fiction-real-list/fiction-real-list.component';
import { FictionRealDetailComponent } from '@src/app/fiction-real-detail/fiction-real-detail.component';
import { HistoricalThrillerListComponent } from '@src/app/historical-thriller-list/historical-thriller-list.component';
import { HistoricalThrillerDetailComponent } from '@src/app/historical-thriller-detail/historical-thriller-detail.component';
import { HistoricalRealListComponent } from '@src/app/historical-real-list/historical-real-list.component';
import { HistoricalRealDetailComponent } from '@src/app/historical-real-detail/historical-real-detail.component';
import { ResetpasswordComponent } from '@src/app/resetpassword/resetpassword.component';
import { ResetemailComponent } from '@src/app/resetemail/resetemail.component';
import { MakepaymentsComponent } from '@src/app/makepayments/makepayments.component';
 
//import {RegisterAPIService } from '@src/app/register/register.service';



const routes: Routes = [
     {path: 'movies/:slug', component: MovieListComponent},
     {path: 'movies/:slug', component: MovieDetailComponent},
     {path: 'movies/:slug', redirectTo: 'movies/:slug', pathMatch: 'full'},
     {path: 'language', component: LanguageComponent},
     {path: 'home', component: HomeComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieDetailComponent,
    SafePipe,
    HomeComponent,
    // DashboardComponent,
    ComicbookComponent,
    LanguageComponent,
    // LoginComponent,
    // LoginDetailComponent,
    RegisterComponent,
    AboutusComponent,
    SettingsComponent,
    SubscriptionComponent,
    HelpComponent,
    PrivacyComponent,
    CookiepolicyComponent,
    TermsofuseComponent,
    SearchComponent,
    SearchDetailComponent,
    // LoginDetailComponent,
    AutoGeneratedComponent,
    // DashboardDetailComponent,
    // AppLandingComponent,
    AdventureListComponent,
    AdventureDetailComponent,
    ActionListComponent,
    ActionDetailComponent,
    ComedyListComponent,
    ComedyDetailComponent,
    DramaListComponent,
    DramaDetailComponent,
    FictionListComponent,
    FictionDetailComponent,
    HistoricalListComponent,
    HistoricalDetailComponent,
    NotFoundComponent,
    StatusComponent,
    AuthComponent,
    StatusDetailComponent,
    StatusCreateComponent,
    AuthLogoutComponent,
    ActionThrillerListComponent,
    ActionThrillerDetailComponent,
    AdventureThrillerListComponent,
    AdventureThrillerDetailComponent,
    ActionRealListComponent,
    ActionRealDetailComponent,
    AdventureRealListComponent,
    AdventureRealDetailComponent,
    ComedyThrillerListComponent,
    ComedyThrillerDetailComponent,
    ComedyRealListComponent,
    ComedyRealDetailComponent,
    DramaThrillerListComponent,
    DramaThrillerDetailComponent,
    DramaRealListComponent,
    DramaRealDetailComponent,
    FictionThrillerListComponent,
    FictionThrillerDetailComponent,
    FictionRealListComponent,
    FictionRealDetailComponent,
    HistoricalThrillerListComponent,
    HistoricalThrillerDetailComponent,
    HistoricalRealListComponent,
    HistoricalRealDetailComponent,
    ResetpasswordComponent,
    ResetemailComponent,
    MakepaymentsComponent,
    ],
  imports: [
    // ngx-bootstrap
    BrowserAnimationsModule,
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NguCarouselModule,
    NgbModule,
    SafePipeModule,
    // HttpClientXsrfModule.withOptions({ cookieName: 'csrftoken', headerName: 'X-CSRFToken' }),
  ],
  providers: [HistoricalrealService, CookieService, HistoricalthrillerService, MovieService, SafePipe, AdventurerealService, AdventurethrillerService, AuthAPIService, StatusAPIService, ActionrealService, ActionthrillerService, ComedyrealService, ComedythrillerService, DramarealService, DramathrillerService, FictionrealService, FictionthrillerService,],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: RouterModule) {
  }
}
