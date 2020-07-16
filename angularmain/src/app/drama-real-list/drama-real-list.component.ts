import { Component, OnInit, OnDestroy  } from '@angular/core';

import { DramaRealMovieItem } from '../dramamovies/dramamovie';
import { DramarealService } from '../dramaservice/dramareal.service';
import { SafePipe } from '../utility/safe.pipe';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-drama-real-list',
  templateUrl: './drama-real-list.component.html',
  styleUrls: ['./drama-real-list.component.css'],
  providers: [DramarealService]
})
export class DramaRealListComponent implements OnInit, OnDestroy {
	private req: any;
	title = 'Drama Movie List';
	EmbedUrl:any;
	dangerousEmbedUrl:any;
	dramaRealMovieList: [DramaRealMovieItem];
	homeDraRealImageList:[DramaRealMovieItem] =[] as unknown as [DramaRealMovieItem];
	dramaListDefaultImage = '/static/ang/assets/images/movies/11.jpg'; 

  constructor(private _dramarealservice: DramarealService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
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
