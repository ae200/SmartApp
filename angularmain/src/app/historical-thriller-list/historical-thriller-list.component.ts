import { Component, OnInit } from '@angular/core';

import {HistoricalThrillerMovieItem } from '../historicalmovies/historicalmovie';
import { HistoricalthrillerService } from '../historicalservice/historicalthriller.service';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-historical-thriller-list',
  templateUrl: './historical-thriller-list.component.html',
  styleUrls: ['./historical-thriller-list.component.css'],
  providers: [HistoricalthrillerService]
})
export class HistoricalThrillerListComponent implements OnInit {
	private req: any;
	title = 'Historical Movie List';
	EmbedUrl:any;
	dangerousEmbedUrl:any;
	historicalThrillerMovieList: [HistoricalThrillerMovieItem];
	homeHisThrImageList:[HistoricalThrillerMovieItem] =[] as unknown as [HistoricalThrillerMovieItem];
	historicalListDefaultImage = '/static/ang/assets/images/movies/11.jpg';

  constructor(private _historicalthrillerservice: HistoricalthrillerService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.req = this._historicalthrillerservice.list().subscribe(data => {
    this.historicalThrillerMovieList = data as [HistoricalThrillerMovieItem];
    });
    this.req = this._historicalthrillerservice.featured().subscribe((data: any) => {
    this.homeHisThrImageList = data as [HistoricalThrillerMovieItem]
   });
  }
  ngOnDestroy() {
this.req.unsubscribe();
}

getEmbedUrl(item) {
    return 'https://www.youtube.com/embed/' + item.embed + '';
  } 
}
