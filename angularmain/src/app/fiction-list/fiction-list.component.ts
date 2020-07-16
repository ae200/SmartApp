import { Component, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
import {FictionThrillerMovieItem } from '../fictionmovies/fictionmovie';
import { FictionthrillerService } from '../fictionservice/fictionthriller.service';
import { FictionrealService } from '../fictionservice/fictionreal.service';
import { FictionRealMovieItem } from '../fictionmovies/fictionmovie';

@Component({
  selector: 'app-fiction-list',
  templateUrl: './fiction-list.component.html',
  styleUrls: ['./fiction-list.component.css'],
  providers: [FictionthrillerService, FictionrealService]
})
export class FictionListComponent implements OnInit, OnDestroy {
  private req: any;
  title = 'Fiction Movie List';
  EmbedUrl:any;
  dangerousEmbedUrl:any;
  fictionThrillerMovieList: [FictionThrillerMovieItem];
  homeFicThrImageList:[FictionThrillerMovieItem] =[] as unknown as [FictionThrillerMovieItem];
  fictionRealMovieList: [FictionRealMovieItem];
  homeFicRealImageList:[FictionRealMovieItem] =[] as unknown as [FictionRealMovieItem];
  fictionListDefaultImage = '/static/ang/assets/images/movies/11.jpg';

  constructor(private _fictionrealservice: FictionrealService, private _fictionthrillerservice: FictionthrillerService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  	this.req = this._fictionthrillerservice.list().subscribe(data => {
    this.fictionThrillerMovieList = data as [FictionThrillerMovieItem];
    });
    this.req = this._fictionthrillerservice.featured().subscribe((data: any) => {
    this.homeFicThrImageList = data as [FictionThrillerMovieItem]
   });
    
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
