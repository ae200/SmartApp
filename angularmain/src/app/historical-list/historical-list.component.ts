import { Component, OnInit, OnDestroy } from '@angular/core';

import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

import {HistoricalThrillerMovieItem } from '../historicalmovies/historicalmovie';
import { HistoricalthrillerService } from '../historicalservice/historicalthriller.service';
import { HistoricalrealService } from '../historicalservice/historicalreal.service';
import { HistoricalRealMovieItem } from '../historicalmovies/historicalmovie';

@Component({
  selector: 'app-historical-list',
  templateUrl: './historical-list.component.html',
  styleUrls: ['./historical-list.component.css'],
  providers: [HistoricalthrillerService, HistoricalrealService]
})
export class HistoricalListComponent implements OnInit, OnDestroy {
    private req: any;
    title = 'Historical Movie List';
    EmbedUrl:any;
    dangerousEmbedUrl:any;
    historicalThrillerMovieList: [HistoricalThrillerMovieItem];
    homeHisThrImageList:[HistoricalThrillerMovieItem] =[] as unknown as [HistoricalThrillerMovieItem];
    historicalRealMovieList: [HistoricalRealMovieItem];
    homeHisRealImageList:[HistoricalRealMovieItem] =[] as unknown as [HistoricalRealMovieItem];
    historicalListDefaultImage = '/static/ang/assets/images/movies/11.jpg';

  constructor(private _historicalthrillerservice: HistoricalthrillerService, private _historicalrealservice: HistoricalrealService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
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
