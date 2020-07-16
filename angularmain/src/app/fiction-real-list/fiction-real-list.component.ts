import { Component, OnInit, OnDestroy } from '@angular/core';

import { FictionRealMovieItem } from '../fictionmovies/fictionmovie';
import { FictionrealService } from '../fictionservice/fictionreal.service';
import { SafePipe } from '../utility/safe.pipe';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-fiction-real-list',
  templateUrl: './fiction-real-list.component.html',
  styleUrls: ['./fiction-real-list.component.css'],
  providers: [FictionrealService]
})
export class FictionRealListComponent implements OnInit, OnDestroy {
	private req: any;
	title = 'Fiction Movie List';
	EmbedUrl:any;
	dangerousEmbedUrl:any;
	fictionRealMovieList: [FictionRealMovieItem];
	homeFicRealImageList:[FictionRealMovieItem] =[] as unknown as [FictionRealMovieItem];
	fictionListDefaultImage = '/static/ang/assets/images/movies/11.jpg'; 


  constructor(private _fictionrealservice: FictionrealService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  	this.req = this._fictionrealservice.list().subscribe(data => {
    this.fictionRealMovieList = data as [FictionRealMovieItem];
    });
    this.req = this._fictionrealservice.featured().subscribe((data: any) => {
    this.homeFicRealImageList = data as [FictionRealMovieItem]
   });
  }
   ngOnDestroy() {
this.req.unsubscribe();
}

  getEmbedUrl(item) {
    return 'https://www.youtube.com/embed/' + item.embed + '';
  } 
}
