import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  selector: 'app-search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.css'],
  providers: [HistoricalrealService, AdventurerealService, ActionrealService, ComedyrealService, DramarealService,  FictionrealService, HistoricalthrillerService, AdventurethrillerService, ActionthrillerService, ComedythrillerService, DramathrillerService,  FictionthrillerService]

})
export class SearchDetailComponent implements OnInit, OnDestroy {
private routeSub: any;
private req: any;
query: string;
EmbedUrl: any;
dangerousEmbedUrl: any;

actionThrillerMovieList: [ActionThrillerMovieItem];
actionRealMovieList: [ActionRealMovieItem];
dramaThrillerMovieList: [DramaThrillerMovieItem];
dramaRealMovieList: [DramaRealMovieItem];
adventureThrillerMovieList: [AdventureThrillerMovieItem];
adventureRealMovieList: [AdventureRealMovieItem];
comedyThrillerMovieList: [ComedyThrillerMovieItem];
comedyRealMovieList: [ComedyRealMovieItem];
fictionThrillerMovieList: [FictionThrillerMovieItem];
fictionRealMovieList: [FictionRealMovieItem];
historicalThrillerMovieList: [HistoricalThrillerMovieItem];
historicalRealMovieList: [HistoricalRealMovieItem];


  constructor(private route: ActivatedRoute, private _historicalthrillerservice: HistoricalthrillerService, private _actionthrillerservice: ActionthrillerService, private _adventurethrillerservice: AdventurethrillerService, private _comedythrillerservice: ComedythrillerService, private _dramathrillerservice: DramathrillerService, private _fictionthrillerservice: FictionthrillerService, private _historicalrealservice: HistoricalrealService, private _actionrealservice: ActionrealService, private _adventurerealservice: AdventurerealService, private _comedyrealservice: ComedyrealService, private _dramarealservice: DramarealService, private _fictionrealservice: FictionrealService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
this.routeSub = this.route.params.subscribe(params => {
this.query = params['q'];
this.req = this._adventurethrillerservice.search(this.query).subscribe(data => {
this.adventureThrillerMovieList = data as [AdventureThrillerMovieItem];
  });
});

this.routeSub = this.route.params.subscribe(params => {
this.query = params['q'];
this.req = this._adventurerealservice.search(this.query).subscribe(data => {
this.adventureRealMovieList = data as [AdventureRealMovieItem];
  });
});


this.routeSub = this.route.params.subscribe(params => {
this.query = params['q'];
this.req = this._actionthrillerservice.search(this.query).subscribe(data => {
this.actionThrillerMovieList = data as [ActionThrillerMovieItem];
  });
});

this.routeSub = this.route.params.subscribe(params => {
this.query = params['q'];
this.req = this._actionrealservice.search(this.query).subscribe(data => {
this.actionRealMovieList = data as [ActionRealMovieItem];
  });
});



this.routeSub = this.route.params.subscribe(params => {
this.query = params['q'];
this.req = this._dramathrillerservice.search(this.query).subscribe(data => {
this.dramaThrillerMovieList = data as [DramaThrillerMovieItem];
  });
});

this.routeSub = this.route.params.subscribe(params => {
this.query = params['q'];
this.req = this._dramarealservice.search(this.query).subscribe(data => {
this.dramaRealMovieList = data as [DramaRealMovieItem];
  });
});



this.routeSub = this.route.params.subscribe(params => {
this.query = params['q'];
this.req = this._comedyrealservice.search(this.query).subscribe(data => {
this.comedyRealMovieList = data as [ComedyRealMovieItem];
  });
});
this.routeSub = this.route.params.subscribe(params => {
this.query = params['q'];
this.req = this._comedythrillerservice.search(this.query).subscribe(data => {
this.comedyThrillerMovieList = data as [ComedyThrillerMovieItem];
  });
});



this.routeSub = this.route.params.subscribe(params => {
this.query = params['q'];
this.req = this._fictionthrillerservice.search(this.query).subscribe(data => {
this.fictionThrillerMovieList = data as [FictionThrillerMovieItem];
  });
});
this.routeSub = this.route.params.subscribe(params => {
this.query = params['q'];
this.req = this._fictionrealservice.search(this.query).subscribe(data => {
this.fictionRealMovieList = data as [FictionRealMovieItem];
  });
});




this.routeSub = this.route.params.subscribe(params => {
this.query = params['q'];
this.req = this._historicalthrillerservice.search(this.query).subscribe(data => {
this.historicalThrillerMovieList = data as [HistoricalThrillerMovieItem];
  });
});
this.routeSub = this.route.params.subscribe(params => {
this.query = params['q'];
this.req = this._historicalrealservice.search(this.query).subscribe(data => {
this.historicalRealMovieList = data as [HistoricalRealMovieItem];
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
