import { Component, OnInit, OnDestroy } from '@angular/core';

import {FictionThrillerMovieItem } from '../fictionmovies/fictionmovie';
import { FictionthrillerService } from '../fictionservice/fictionthriller.service';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-fiction-thriller-list',
  templateUrl: './fiction-thriller-list.component.html',
  styleUrls: ['./fiction-thriller-list.component.css'],
   providers: [FictionthrillerService]
})
export class FictionThrillerListComponent implements OnInit, OnDestroy {
	private req: any;
	title = 'Fiction Movie List';
	EmbedUrl:any;
	dangerousEmbedUrl:any;
	fictionThrillerMovieList: [FictionThrillerMovieItem];
	homeFicThrImageList:[FictionThrillerMovieItem] =[] as unknown as [FictionThrillerMovieItem];
	fictionListDefaultImage = '/static/ang/assets/images/movies/11.jpg';

  constructor(private _fictionthrillerservice: FictionthrillerService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  	this.req = this._fictionthrillerservice.list().subscribe(data => {
    this.fictionThrillerMovieList = data as [FictionThrillerMovieItem];
    });
    this.req = this._fictionthrillerservice.featured().subscribe((data: any) => {
    this.homeFicThrImageList = data as [FictionThrillerMovieItem]
   });
  }
  ngOnDestroy() {
this.req.unsubscribe();
}

getEmbedUrl(item) {
    return 'https://www.youtube.com/embed/' + item.embed + '';
  } 
}
