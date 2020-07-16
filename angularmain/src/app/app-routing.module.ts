import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { PrivacyComponent } from './privacy/privacy.component';
import { StatusComponent } from './status/status.component';
import { StatusDetailComponent } from './status-detail/status-detail.component';
import { StatusCreateComponent } from './status-create/status-create.component';

import { AuthComponent } from './auth/auth.component';
import { AuthLogoutComponent } from './auth-logout/auth-logout.component';

// import {StreamAppRoutingModule} from "../../streamclient/app/app-routing.module";
import { CookiepolicyComponent } from './cookiepolicy/cookiepolicy.component';
import { TermsofuseComponent } from './termsofuse/termsofuse.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SettingsComponent } from './settings/settings.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { HelpComponent } from './help/help.component';
import { RegisterComponent } from './register/register.component';
//import { LoginComponent } from './login/login.component';
// import { LoginDetailComponent } from './login-detail/login-detail.component';
import { LanguageComponent } from './language/language.component';
import { ComicbookComponent } from './comicbook/comicbook.component';
import {ResetemailComponent} from './resetemail/resetemail.component';
import {ResetpasswordComponent} from './resetpassword/resetpassword.component';

import { HomeComponent } from './home/home.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';
import { SearchComponent } from './search/search.component';

import { ActionThrillerListComponent } from './action-thriller-list/action-thriller-list.component';
import { ActionThrillerDetailComponent } from './action-thriller-detail/action-thriller-detail.component';
import { AdventureThrillerListComponent } from './adventure-thriller-list/adventure-thriller-list.component';
import { AdventureThrillerDetailComponent } from './adventure-thriller-detail/adventure-thriller-detail.component';
import { ActionRealListComponent } from './action-real-list/action-real-list.component';
import { ActionRealDetailComponent } from './action-real-detail/action-real-detail.component';
import { AdventureRealListComponent } from './adventure-real-list/adventure-real-list.component';
import { AdventureRealDetailComponent } from './adventure-real-detail/adventure-real-detail.component';
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


import { ActionDetailComponent } from './action-detail/action-detail.component';
import { ActionListComponent } from './action-list/action-list.component';
import { AdventureListComponent } from './adventure-list/adventure-list.component';
import { AdventureDetailComponent } from './adventure-detail/adventure-detail.component';
import { ComedyListComponent } from './comedy-list/comedy-list.component';
import { ComedyDetailComponent } from './comedy-detail/comedy-detail.component';
import { DramaListComponent } from './drama-list/drama-list.component';
import { DramaDetailComponent } from './drama-detail/drama-detail.component';
import { FictionListComponent } from './fiction-list/fiction-list.component';
import { FictionDetailComponent } from './fiction-detail/fiction-detail.component';
import { HistoricalListComponent } from './historical-list/historical-list.component';
import { MakepaymentsComponent } from './makepayments/makepayments.component';
import { HistoricalDetailComponent } from './historical-detail/historical-detail.component';

import { NotFoundComponent } from './not-found/not-found.component';

// import { StreamAppComponent } from "../../streamclient/app/app.component";
// import { StreamhistoricalListComponent } from "../../streamclient/app/streamhistorical-list/streamhistorical-list.component";
// import { StreamhistoricalDetailComponent } from "../../streamclient/app/streamhistorical-detail/streamhistorical-detail.component";
// import { StreamactionListComponent } from "../../streamclient/app/streamaction-list/streamaction-list.component";
// import { StreamactionDetailComponent } from "../../streamclient/app/streamaction-detail/streamaction-detail.component";
// import { StreamadventureListComponent } from "../../streamclient/app/streamadventure-list/streamadventure-list.component";
// import { StreamadventureDetailComponent } from "../../streamclient/app/streamadventure-detail/streamadventure-detail.component";
// import { StreamcomedyListComponent } from "../../streamclient/app/streamcomedy-list/streamcomedy-list.component";
// import { StreamcomedyDetailComponent } from "../../streamclient/app/streamcomedy-detail/streamcomedy-detail.component";
// import { StreamfictionListComponent } from "../../streamclient/app/streamfiction-list/streamfiction-list.component";
// import { StreamfictionDetailComponent } from "../../streamclient/app/streamfiction-detail/streamfiction-detail.component";
// import { StreamdramaListComponent } from "../../streamclient/app/streamdrama-list/streamdrama-list.component";
// import { StreamdramaDetailComponent } from "../../streamclient/app/streamdrama-detail/streamdrama-detail.component";

// import { DashboardComponent } from "../../streamclient/app/dashboard/dashboard.component";
// import { DashboardDetailComponent } from "../../streamclient/app/dashboard-detail/dashboard-detail.component";
// import { StreamHomeComponent } from "../../streamclient/app/home/home.component";




const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'movies', component: MovieListComponent},
  {path: 'login', component: AuthComponent},
  {path: 'resetpassword', component: ResetpasswordComponent},
  {path: 'resetemail', component: ResetemailComponent},
  {path: 'users/:makepremium', component: MakepaymentsComponent},
  {path: 'register', component: AuthComponent},
  {path: 'logout', component: AuthLogoutComponent},
  {path: 'status', component: StatusComponent},
  {path: 'status/:id', component: StatusDetailComponent},
  {path: 'status/:create', component: StatusCreateComponent},
  {path: '3comic book',	component: ComicbookComponent},
  {path: 'language', component: LanguageComponent},
  {path: 'search', component: SearchDetailComponent},
  //{path: 'register', component: RegisterComponent},
  {path: 'about us', component: AboutusComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'subscription', component: SubscriptionComponent},
  {path: 'help', component: HelpComponent},
  {path: 'privacy', component: PrivacyComponent},
  {path: 'cookiepolicy', component: CookiepolicyComponent},
  {path: 'termsofuse', component: TermsofuseComponent},
  {path: 'movies/:slug', component: MovieDetailComponent},
  {path: 'actionmovies', component: ActionListComponent},
  {path: 'actionthrillers', component: ActionThrillerListComponent},
  {path: 'actionthrillers/:slug', component: ActionThrillerDetailComponent}, 
  {path: 'actionreals', component: ActionRealListComponent},
  {path: 'actionreals/:slug', component: ActionRealDetailComponent}, 
  {path: 'actionmovies/:slug', component: ActionDetailComponent},
  {path: 'adventuremovies', component: AdventureListComponent},
  {path: 'adventuremovies/:slug', component: AdventureDetailComponent},
  {path: 'adventurethrillers', component: AdventureThrillerListComponent},
  {path: 'adventurethrillers/:slug', component: AdventureThrillerDetailComponent},
  {path: 'adventurereals', component: AdventureRealListComponent},
  {path: 'adventurereals/:slug', component: AdventureRealDetailComponent},
  {path: 'comedymovies', component: ComedyListComponent},
  {path: 'comedymovies/:slug', component: ComedyDetailComponent},
  {path: 'comedythrillers', component: ComedyThrillerListComponent},
  {path: 'comedythrillers/:slug', component: ComedyThrillerDetailComponent},
  {path: 'comedyreals', component: ComedyRealListComponent},
  {path: 'comedyreals/:slug', component: ComedyRealDetailComponent},
  {path: 'dramamovies', component: DramaListComponent},
  {path: 'dramamovies/:slug', component: DramaDetailComponent},
  {path: 'dramathrillers', component: DramaThrillerListComponent},
  {path: 'dramathrillers/:slug', component: DramaThrillerDetailComponent},
  {path: 'dramareals', component: DramaRealListComponent},
  {path: 'dramareals/:slug', component: DramaRealDetailComponent},
  {path: 'fictionmovies', component: FictionListComponent},
  {path: 'fictionmovies/:slug', component: FictionDetailComponent},
  {path: 'fictionthrillers', component: FictionThrillerListComponent},
  {path: 'fictionthrillers/:slug', component: FictionThrillerDetailComponent},
  {path: 'fictionreals', component: FictionRealListComponent},
  {path: 'fictionreals/:slug', component: FictionRealDetailComponent},
  {path: 'historicalmovies', component: HistoricalListComponent},
  {path: 'historicalmovies:slug', component: HistoricalDetailComponent},
  {path: 'historicalthrillers', component: HistoricalThrillerListComponent},
  {path: 'historicalthrillers:slug', component: HistoricalThrillerDetailComponent},
  {path: 'historicalreals', component: HistoricalRealListComponent},
  {path: 'historicalreals:slug', component: HistoricalRealDetailComponent},

  // {path: 'home', component: StreamHomeComponent, pathMatch: 'full'},
  // //{path: 'home', component: HomeComponent },
  // {path: 'dashmovies', component: DashboardComponent},
  // {path: 'dashmovies/:slug', component: DashboardDetailComponent},
  // {path: 'streamactionmovies', component: StreamactionListComponent},
  // {path: 'streamactionmovies/:slug', component: StreamactionDetailComponent},
  // {path: 'streamadventuremovies', component: StreamadventureListComponent},
  // {path: 'streamadventuremovies/:slug', component: StreamadventureDetailComponent},
  // {path: 'streamcomedymovies', component: StreamcomedyListComponent},
  // {path: 'streamcomedymovies/:slug', component: StreamcomedyDetailComponent},
  // {path: 'streamdramamovies', component: StreamdramaListComponent},
  // {path: 'streamdramamovies/:slug', component: StreamdramaDetailComponent},
  // {path: 'streamfictionmovies', component: StreamfictionListComponent},
  // {path: 'streamfictionmovies/:slug', component: StreamfictionDetailComponent},
  // {path: 'streamhistoricalmovies', component: StreamhistoricalListComponent},
  // {path: 'streamhistoricalmovies:slug', component: StreamhistoricalDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
