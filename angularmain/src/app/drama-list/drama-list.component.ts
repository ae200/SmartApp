import { Component, OnInit, OnDestroy } from '@angular/core';

import {DramaThrillerMovieItem } from '../dramamovies/dramamovie';
import { DramathrillerService } from '../dramaservice/dramathriller.service';
import { DramarealService } from '../dramaservice/dramareal.service';
import { DomSanitizer} from '@angular/platform-browser';
import { DramaRealMovieItem } from '../dramamovies/dramamovie';


@Component({
  selector: 'app-drama-list',
  templateUrl: './drama-list.component.html',
  styleUrls: ['./drama-list.component.css'],
  providers: [DramathrillerService, DramarealService]
})
export class DramaListComponent implements OnInit, OnDestroy {
  private req: any;
  title = 'Drama Movie List';
  EmbedUrl:any;
  dangerousEmbedUrl:any;
  dramaThrillerMovieList: [DramaThrillerMovieItem];
  homeDraThrImageList:[DramaThrillerMovieItem] =[] as unknown as [DramaThrillerMovieItem];
  dramaRealMovieList: [DramaRealMovieItem];
  homeDraRealImageList:[DramaRealMovieItem] =[] as unknown as [DramaRealMovieItem];
  dramaListDefaultImage = '/static/ang/assets/images/movies/11.jpg';

  constructor(private _dramarealservice: DramarealService, private _dramathrillerservice: DramathrillerService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  	this.req = this._dramathrillerservice.list().subscribe(data => {
    this.dramaThrillerMovieList = data as [DramaThrillerMovieItem];
    });
    this.req = this._dramathrillerservice.featured().subscribe((data: any) => {
    this.homeDraThrImageList = data as [DramaThrillerMovieItem]
   });
    
    this.req = this._dramarealservice.list().subscribe(data => {
    this.dramaRealMovieList = data as [DramaRealMovieItem];
    });
    this.req = this._dramarealservice.featured().subscribe((data: any) => {
    this.homeDraRealImageList = data as [DramaRealMovieItem]
   });

  }
ngOnDestroy() {
this.req.unsubscribe();
}

getEmbedUrl(item) {
    return 'https://www.youtube.com/embed/' + item.embed + '';
  }
}
