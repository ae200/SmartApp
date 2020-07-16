import { Component, OnInit, OnDestroy } from '@angular/core';

import {DramaThrillerMovieItem } from '../dramamovies/dramamovie';
import { DramathrillerService } from '../dramaservice/dramathriller.service';


import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-drama-thriller-list',
  templateUrl: './drama-thriller-list.component.html',
  styleUrls: ['./drama-thriller-list.component.css'],
  providers: [DramathrillerService]
})
export class DramaThrillerListComponent implements OnInit, OnDestroy {
	private req: any;
	title = 'Drama Movie List';
	EmbedUrl:any;
	dangerousEmbedUrl:any;
	dramaThrillerMovieList: [DramaThrillerMovieItem];
	homeDraThrImageList:[DramaThrillerMovieItem] =[] as unknown as [DramaThrillerMovieItem];
	dramaListDefaultImage = '/static/ang/assets/images/movies/11.jpg';

  constructor(private _dramathrillerservice: DramathrillerService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  	this.req = this._dramathrillerservice.list().subscribe(data => {
    this.dramaThrillerMovieList = data as [DramaThrillerMovieItem];
    });
    this.req = this._dramathrillerservice.featured().subscribe((data: any) => {
    this.homeDraThrImageList = data as [DramaThrillerMovieItem]
   });
  }
  ngOnDestroy() {
this.req.unsubscribe();
}

getEmbedUrl(item) {
    return 'https://www.youtube.com/embed/' + item.embed + '';
  }  
}
