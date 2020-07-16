import { Component, OnInit, OnDestroy } from '@angular/core';

import { HistoricalRealMovieItem } from '../historicalmovies/historicalmovie';
import { HistoricalrealService } from '../historicalservice/historicalreal.service';
import { SafePipe } from '../utility/safe.pipe';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-historical-real-list',
  templateUrl: './historical-real-list.component.html',
  styleUrls: ['./historical-real-list.component.css'],
  providers: [HistoricalrealService]
})
export class HistoricalRealListComponent implements OnInit {
	private req: any;
	title = 'Historical Movie List';
	EmbedUrl:any;
	dangerousEmbedUrl:any;
	historicalRealMovieList: [HistoricalRealMovieItem];
	homeHisRealImageList:[HistoricalRealMovieItem] =[] as unknown as [HistoricalRealMovieItem];
	historicalListDefaultImage = '/static/ang/assets/images/movies/11.jpg'; 

  constructor(private _historicalrealservice: HistoricalrealService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
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
