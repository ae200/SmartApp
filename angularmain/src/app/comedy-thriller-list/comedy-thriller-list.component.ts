import { Component, OnInit, OnDestroy } from '@angular/core';
import {ComedyThrillerMovieItem } from '../comedymovies/comedymovie';
import {ComedythrillerService } from '../comedyservice/comedythriller.service';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-comedy-thriller-list',
  templateUrl: './comedy-thriller-list.component.html',
  styleUrls: ['./comedy-thriller-list.component.css'],
  providers: [ComedythrillerService]
})
export class ComedyThrillerListComponent implements OnInit, OnDestroy {
	private req: any;
	title = 'Comedy Movie List';
	EmbedUrl:any;
	dangerousEmbedUrl:any;
	comedyThrillerMovieList: [ComedyThrillerMovieItem];
	homeComThrImageList:[ComedyThrillerMovieItem] =[] as unknown as [ComedyThrillerMovieItem];
	comedyListDefaultImage = '/static/ang/assets/images/movies/11.jpg'; 

  constructor(private _comedythrillerservice: ComedythrillerService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  	this.req = this._comedythrillerservice.list().subscribe(data => {
    this.comedyThrillerMovieList = data as [ComedyThrillerMovieItem];
    });
    this.req = this._comedythrillerservice.featured().subscribe((data: any) => {
    this.homeComThrImageList = data as [ComedyThrillerMovieItem]
   });
  }
  ngOnDestroy() {
this.req.unsubscribe();
}

getEmbedUrl(item) {
    return 'https://www.youtube.com/embed/' + item.embed + '';
  } 
}
