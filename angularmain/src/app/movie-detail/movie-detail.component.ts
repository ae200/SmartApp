import { HomeComponent } from '@src/app/home/home.component';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SafePipe } from '../utility/safe.pipe';

import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

import { HistoricalThrillerMovieItem } from '../historicalmovies/historicalmovie';
import { HistoricalRealMovieItem } from '../historicalmovies/historicalmovie';

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


import { AdventureThrillerMovieItem } from '../adventuremovies/adventuremovie';
import { AdventureRealMovieItem } from '../adventuremovies/adventuremovie';

import { ActionThrillerMovieItem } from '../actionmovies/actionmovie';
import { ActionRealMovieItem } from '../actionmovies/actionmovie';

import { ComedyThrillerMovieItem } from '../comedymovies/comedymovie';
import { ComedyRealMovieItem } from '../comedymovies/comedymovie';

import { DramaThrillerMovieItem } from '../dramamovies/dramamovie';
import { DramaRealMovieItem } from '../dramamovies/dramamovie';

import { FictionRealMovieItem } from '../fictionmovies/fictionmovie';
import { FictionThrillerMovieItem } from '../fictionmovies/fictionmovie';



@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
  providers: [HistoricalrealService, AdventurerealService, ActionrealService, ComedyrealService, DramarealService,  FictionrealService, HistoricalthrillerService, AdventurethrillerService, ActionthrillerService, ComedythrillerService, DramathrillerService,  FictionthrillerService]
})
export class MovieDetailComponent implements OnInit, OnDestroy {
    private routeSub: any;
    private req: any;
    EmbedUrl: any;
    dangerousEmbedUrl: any;
    historicalthrillermovie:HistoricalThrillerMovieItem;
    historicalrealmovie:HistoricalRealMovieItem;
    adventurethrillermovie:AdventureThrillerMovieItem;
    adventurerealmovie:AdventureRealMovieItem;
    comedythrillermovie:ComedyThrillerMovieItem;
    comedyrealmovie:ComedyRealMovieItem;
    dramathrillermovie:DramaThrillerMovieItem;
    dramarealmovie:DramaRealMovieItem;
    actionthrillermovie:ActionThrillerMovieItem;
    actionrealmovie:ActionRealMovieItem;
    fictionthrillermovie:FictionThrillerMovieItem;
    fictionrealmovie:FictionRealMovieItem;
    slug: string;
    errorStr: Boolean;

  constructor(private route: ActivatedRoute, private router: Router, private _historicalthrillerservice: HistoricalthrillerService, private _actionthrillerservice: ActionthrillerService, private _adventurethrillerservice: AdventurethrillerService, private _comedythrillerservice: ComedythrillerService, private _dramathrillerservice: DramathrillerService, private _fictionthrillerservice: FictionthrillerService, private _historicalrealservice: HistoricalrealService, private _actionrealservice: ActionrealService, private _adventurerealservice: AdventurerealService, private _comedyrealservice: ComedyrealService, private _dramarealservice: DramarealService, private _fictionrealservice: FictionrealService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
    this.slug =  params.slug;
    this.req = this._actionthrillerservice.get(this.slug).subscribe((data: any) => {
    this.actionthrillermovie = data as ActionThrillerMovieItem;
    }, error =>{
           this.errorStr = error;
    });
    });

    this.routeSub = this.route.params.subscribe(params => {
    this.slug =  params.slug;
    this.req = this._actionrealservice.get(this.slug).subscribe((data: any) => {
    this.actionrealmovie = data as ActionRealMovieItem;
    }, error =>{
           this.errorStr = error;
    });
    });

    
    this.routeSub = this.route.params.subscribe(params => {
    this.slug =  params.slug;
    this.req = this._adventurethrillerservice.get(this.slug).subscribe((data: any) => {
    this.adventurethrillermovie = data as AdventureThrillerMovieItem;
    }, error =>{
           this.errorStr = error;
    });
    });

  this.routeSub = this.route.params.subscribe(params => {
    this.slug =  params.slug;
    this.req = this._adventurerealservice.get(this.slug).subscribe((data: any) => {
    this.adventurerealmovie = data as AdventureRealMovieItem;
    }, error =>{
           this.errorStr = error;
    });
    });


    this.routeSub = this.route.params.subscribe(params => {
    this.slug =  params.slug;
    this.req = this._comedythrillerservice.get(this.slug).subscribe((data: any) => {
    this.comedythrillermovie = data as ComedyThrillerMovieItem;
    }, error =>{
           this.errorStr = error;
    });
    });

    this.routeSub = this.route.params.subscribe(params => {
    this.slug =  params.slug;
    this.req = this._comedyrealservice.get(this.slug).subscribe((data: any) => {
    this.comedyrealmovie = data as ComedyRealMovieItem;
    }, error =>{
           this.errorStr = error;
    });
    });

   this.routeSub = this.route.params.subscribe(params => {
    this.slug =  params.slug;
    this.req = this._dramathrillerservice.get(this.slug).subscribe((data: any) => {
    this.dramathrillermovie = data as DramaThrillerMovieItem;
    }, error =>{
           this.errorStr = error;
    });
    });

    this.routeSub = this.route.params.subscribe(params => {
    this.slug =  params.slug;
    this.req = this._dramarealservice.get(this.slug).subscribe((data: any) => {
    this.dramarealmovie = data as DramaRealMovieItem;
    }, error =>{
           this.errorStr = error;
    });
    });


    this.routeSub = this.route.params.subscribe(params => {
    this.slug =  params.slug;
    this.req = this._fictionthrillerservice.get(this.slug).subscribe((data: any) => {
    this.fictionthrillermovie = data as FictionThrillerMovieItem;
    }, error =>{
           this.errorStr = error;
    });
    });

    this.routeSub = this.route.params.subscribe(params => {
    this.slug =  params.slug;
    this.req = this._fictionrealservice.get(this.slug).subscribe((data: any) => {
    this.fictionrealmovie = data as FictionRealMovieItem;
    }, error =>{
           this.errorStr = error;
    });
    });

    this.routeSub = this.route.params.subscribe(params => {
    this.slug =  params.slug;
    this.req = this._historicalthrillerservice.get(this.slug).subscribe((data: any) => {
    this.historicalthrillermovie = data as HistoricalThrillerMovieItem;
    }, error =>{
           this.errorStr = error;
    });
    });

    this.routeSub = this.route.params.subscribe(params => {
    this.slug =  params.slug;
    this.req = this._historicalrealservice.get(this.slug).subscribe((data: any) => {
    this.historicalrealmovie = data as HistoricalRealMovieItem;
    }, error =>{
           this.errorStr = error;
    });
    });     
}
  ngOnDestroy() {
       this.routeSub.unsubscribe();
       this.req.unsubscribe();
  }
getEmbedUrl(item) {
    return 'https://www.youtube.com/embed/' + item.embed + '';
  } 
}
