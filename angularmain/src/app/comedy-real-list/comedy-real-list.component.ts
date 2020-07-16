import { Component, OnInit, OnDestroy } from '@angular/core';

import { ComedyRealMovieItem } from '../comedymovies/comedymovie';
import { ComedyrealService } from '../comedyservice/comedyreal.service';
import { SafePipe } from '../utility/safe.pipe';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-comedy-real-list',
  templateUrl: './comedy-real-list.component.html',
  styleUrls: ['./comedy-real-list.component.css'],
  providers: [ComedyrealService]
})
export class ComedyRealListComponent implements OnInit, OnDestroy {
	private req: any;
	title = 'Comedy Movie List';
	EmbedUrl:any;
	dangerousEmbedUrl:any;
	comedyRealMovieList: [ComedyRealMovieItem];
	homeComRealImageList:[ComedyRealMovieItem] =[] as unknown as [ComedyRealMovieItem];
	comedyListDefaultImage = '/static/ang/assets/images/movies/11.jpg'; 

  constructor(private _comedyrealservice: ComedyrealService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  	this.req = this._comedyrealservice.list().subscribe(data => {
    this.comedyRealMovieList = data as [ComedyRealMovieItem];
    });
    this.req = this._comedyrealservice.featured().subscribe((data: any) => {
    this.homeComRealImageList = data as [ComedyRealMovieItem]
   });
  }
  
  ngOnDestroy() {
this.req.unsubscribe();
}

  getEmbedUrl(item) {
    return 'https://www.youtube.com/embed/' + item.embed + '';
  } 
}
