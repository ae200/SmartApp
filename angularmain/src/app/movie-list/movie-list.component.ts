import { Component, OnInit, OnDestroy } from '@angular/core';

import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

import { HistoricalThrillerMovieItem } from '../historicalmovies/historicalmovie';
import { HistoricalRealMovieItem } from '../historicalmovies/historicalmovie';

import { AdventureThrillerMovieItem } from '../adventuremovies/adventuremovie';
import { AdventureRealMovieItem } from '../adventuremovies/adventuremovie';

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
import { ActionThrillerMovieItem } from '../actionmovies/actionmovie';
import { ActionRealMovieItem } from '../actionmovies/actionmovie';

import { DramarealService } from '@src/app/dramaservice/dramareal.service';
import { DramathrillerService } from '@src/app/dramaservice/dramathriller.service';

import { ComedyThrillerMovieItem } from '../comedymovies/comedymovie';
import { ComedyRealMovieItem } from '../comedymovies/comedymovie';

import { DramaThrillerMovieItem } from '../dramamovies/dramamovie';
import { DramaRealMovieItem } from '../dramamovies/dramamovie';

import { FictionRealMovieItem } from '../fictionmovies/fictionmovie';
import { FictionThrillerMovieItem } from '../fictionmovies/fictionmovie';




@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  providers: [HistoricalrealService, AdventurerealService, ActionrealService, ComedyrealService, DramarealService,  FictionrealService, HistoricalthrillerService, AdventurethrillerService, ActionthrillerService, ComedythrillerService, DramathrillerService,  FictionthrillerService]
})
export class MovieListComponent implements OnInit, OnDestroy {
private req: any;
EmbedUrl: any;
dangerousEmbedUrl: any;
title = 'Movie List';

  dramaThrillerMovieList: [DramaThrillerMovieItem];
  homeDraThrImageList:[DramaThrillerMovieItem] =[] as unknown as [DramaThrillerMovieItem];
  dramaRealMovieList: [DramaRealMovieItem];
  homeDraRealImageList:[DramaRealMovieItem] =[] as unknown as [DramaRealMovieItem];
  //dramaListDefaultImage = '/static/ang/assets/images/movies/11.jpg'; 

  adventureThrillerMovieList: [AdventureThrillerMovieItem];
  homeAdvThrImageList:[AdventureThrillerMovieItem] =[] as unknown as [AdventureThrillerMovieItem];
  adventureRealMovieList: [AdventureRealMovieItem];
  homeAdvRealImageList:[AdventureRealMovieItem] =[] as unknown as [AdventureRealMovieItem];
  movieListDefaultImage = '/static/ang/assets/images/movies/11.jpg';

  comedyThrillerMovieList: [ComedyThrillerMovieItem];
  homeComThrImageList:[ComedyThrillerMovieItem] =[] as unknown as [ComedyThrillerMovieItem];
  comedyRealMovieList: [ComedyRealMovieItem];
  homeComRealImageList:[ComedyRealMovieItem] =[] as unknown as [ComedyRealMovieItem];
  //comedyListDefaultImage = '/static/ang/assets/images/movies/11.jpg';

  fictionThrillerMovieList: [FictionThrillerMovieItem];
  homeFicThrImageList:[FictionThrillerMovieItem] =[] as unknown as [FictionThrillerMovieItem];
  fictionRealMovieList: [FictionRealMovieItem];
  homeFicRealImageList:[FictionRealMovieItem] =[] as unknown as [FictionRealMovieItem];
  //fictionListDefaultImage = '/static/ang/assets/images/movies/11.jpg';

  actionThrillerMovieList: [ActionThrillerMovieItem];
  homeActThrImageList:[ActionThrillerMovieItem] =[] as unknown as [ActionThrillerMovieItem];
  actionRealMovieList: [ActionRealMovieItem];
  homeActRealImageList:[ActionRealMovieItem] =[] as unknown as [ActionRealMovieItem];
  actionListDefaultImage = '/static/ang/assets/images/movies/11.jpg'

  historicalThrillerMovieList: [HistoricalThrillerMovieItem];
  homeHisThrImageList:[HistoricalThrillerMovieItem] =[] as unknown as [HistoricalThrillerMovieItem];
  historicalRealMovieList: [HistoricalRealMovieItem];
  homeHisRealImageList:[HistoricalRealMovieItem] =[] as unknown as [HistoricalRealMovieItem];
  //historicalListDefaultImage = '/static/ang/assets/images/movies/11.jpg';


    constructor(private _historicalthrillerservice: HistoricalthrillerService, private _actionthrillerservice: ActionthrillerService, private _adventurethrillerservice: AdventurethrillerService, private _comedythrillerservice: ComedythrillerService, private _dramathrillerservice: DramathrillerService, private _fictionthrillerservice: FictionthrillerService, private _historicalrealservice: HistoricalrealService, private _actionrealservice: ActionrealService, private _adventurerealservice: AdventurerealService, private _comedyrealservice: ComedyrealService, private _dramarealservice: DramarealService, private _fictionrealservice: FictionrealService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
// this.todayDate = new Date()
    this.req = this._actionthrillerservice.list().subscribe(data => {
      console.log(data);
    this.actionThrillerMovieList = data as [ActionThrillerMovieItem];
    });
    this.req = this._actionthrillerservice.featured().subscribe((data: any) => {
    this.homeActThrImageList = data as [ActionThrillerMovieItem]
   });
   this.req = this._actionrealservice.list().subscribe(data => {
    this.actionRealMovieList = data as [ActionRealMovieItem];
    });
    this.req = this._actionrealservice.featured().subscribe((data: any) => {
    this.homeActRealImageList = data as [ActionRealMovieItem]
   });  

    // GET METHOD
    this.req = this._adventurethrillerservice.list().subscribe(data => {
    this.adventureThrillerMovieList = data as [AdventureThrillerMovieItem];
    });
    this.req = this._adventurethrillerservice.featured().subscribe((data: any) => {
    this.homeAdvThrImageList = data as [AdventureThrillerMovieItem]
   });

   this.req = this._adventurerealservice.list().subscribe(data => {
    this.adventureRealMovieList = data as [AdventureRealMovieItem];
    });
    this.req = this._adventurerealservice.featured().subscribe((data: any) => {
    this.homeAdvRealImageList = data as [AdventureRealMovieItem]
   }); 
  
  this.req = this._dramathrillerservice.list().subscribe(data => {
    this.dramaThrillerMovieList = data as [DramaThrillerMovieItem];
    });
    this.req = this._dramathrillerservice.featured().subscribe((data: any) => {
    this.homeDraThrImageList = data as [DramaThrillerMovieItem]
   });
    
    this.req = this._dramarealservice.list().subscribe(data => {
    this.dramaRealMovieList = data as [DramaRealMovieItem];
    });
    this.req = this._dramarealservice.featured().subscribe((data: any) => {
    this.homeDraRealImageList = data as [DramaRealMovieItem]
   });

  this.req = this._comedythrillerservice.list().subscribe(data => {
    this.comedyThrillerMovieList = data as [ComedyThrillerMovieItem];
    });
    this.req = this._comedythrillerservice.featured().subscribe((data: any) => {
    this.homeComThrImageList = data as [ComedyThrillerMovieItem]
   });
   
   this.req = this._comedyrealservice.list().subscribe(data => {
    this.comedyRealMovieList = data as [ComedyRealMovieItem];
    });
    this.req = this._comedyrealservice.featured().subscribe((data: any) => {
    this.homeComRealImageList = data as [ComedyRealMovieItem]
   }); 

  
  this.req = this._fictionthrillerservice.list().subscribe(data => {
    this.fictionThrillerMovieList = data as [FictionThrillerMovieItem];
    });
    this.req = this._fictionthrillerservice.featured().subscribe((data: any) => {
    this.homeFicThrImageList = data as [FictionThrillerMovieItem]
   });
    
    this.req = this._fictionrealservice.list().subscribe(data => {
    this.fictionRealMovieList = data as [FictionRealMovieItem];
    });
    this.req = this._fictionrealservice.featured().subscribe((data: any) => {
    this.homeFicRealImageList = data as [FictionRealMovieItem]
   });


   this.req = this._historicalthrillerservice.list().subscribe(data => {
    this.historicalThrillerMovieList = data as [HistoricalThrillerMovieItem];
    });
    this.req = this._historicalthrillerservice.featured().subscribe((data: any) => {
    this.homeHisThrImageList = data as [HistoricalThrillerMovieItem]
   });

    this.req = this._historicalrealservice.list().subscribe(data => {
    this.historicalRealMovieList = data as [HistoricalRealMovieItem];
    });
    this.req = this._historicalrealservice.featured().subscribe((data: any) => {
    this.homeHisRealImageList = data as [HistoricalRealMovieItem]
   });
}

  ngOnDestroy() {
this.req.unsubscribe();
  }

getEmbedUrl(item) {
    return 'https://www.youtube.com/embed/' + item.embed + '';
  }  
}

