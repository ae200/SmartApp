import { Component, OnInit, OnDestroy } from '@angular/core';
import {ComedyThrillerMovieItem } from '../comedymovies/comedymovie';
import { ComedyRealMovieItem } from '../comedymovies/comedymovie';
import { ComedyrealService } from '../comedyservice/comedyreal.service';
import { ComedythrillerService } from '../comedyservice/comedythriller.service';
import { DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-comedy-list',
  templateUrl: './comedy-list.component.html',
  styleUrls: ['./comedy-list.component.css'],
  providers: [ComedyrealService, ComedythrillerService]
})
export class ComedyListComponent implements OnInit, OnDestroy {
  private req: any;
  title = 'Comedy Movie List';
  EmbedUrl:any;
  dangerousEmbedUrl:any;
  comedyThrillerMovieList: [ComedyThrillerMovieItem];
  homeComThrImageList:[ComedyThrillerMovieItem] =[] as unknown as [ComedyThrillerMovieItem];
  comedyRealMovieList: [ComedyRealMovieItem];
  homeComRealImageList:[ComedyRealMovieItem] =[] as unknown as [ComedyRealMovieItem];
  comedyListDefaultImage = '/static/ang/assets/images/movies/11.jpg';


  constructor(private _comedyrealservice: ComedyrealService, private _comedythrillerservice: ComedythrillerService, private sanitizer: DomSanitizer) { }

ngOnInit(): void {
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

  }

ngOnDestroy() {
this.req.unsubscribe();
}

getEmbedUrl(item) {
    return 'https://www.youtube.com/embed/' + item.embed + '';
  } 
}
