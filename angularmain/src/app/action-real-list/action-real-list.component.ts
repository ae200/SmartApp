import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActionRealMovieItem } from '../actionmovies/actionmovie';
import { ActionrealService } from '../actionservice/actionreal.service';
import { SafePipe } from '../utility/safe.pipe';
import { DomSanitizer} from '@angular/platform-browser';



@Component({
  selector: 'app-action-real-list',
  templateUrl: './action-real-list.component.html',
  styleUrls: ['./action-real-list.component.css'],
  providers: [ActionrealService]
})
export class ActionRealListComponent implements OnInit, OnDestroy {
	private req: any;
	title = 'Action Movie List';
	EmbedUrl:any;
	dangerousEmbedUrl:any;
	actionRealMovieList: [ActionRealMovieItem];
	homeActRealImageList:[ActionRealMovieItem] =[] as unknown as [ActionRealMovieItem];
	actionListDefaultImage = '/static/ang/assets/images/movies/11.jpg'; 

  constructor(private _actionrealservice: ActionrealService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  	this.req = this._actionrealservice.list().subscribe(data => {
    this.actionRealMovieList = data as [ActionRealMovieItem];
    });
    this.req = this._actionrealservice.featured().subscribe((data: any) => {
    this.homeActRealImageList = data as [ActionRealMovieItem]
   });
  }
  ngOnDestroy() {
this.req.unsubscribe();
}

  getEmbedUrl(item) {
    return 'https://www.youtube.com/embed/' + item.embed + '';
  } 
}
