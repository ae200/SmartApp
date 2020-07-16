import { Component, OnInit, OnDestroy } from '@angular/core';

import { ActionThrillerMovieItem } from '../actionmovies/actionmovie';
import { ActionRealMovieItem } from '../actionmovies/actionmovie';
import { ActionthrillerService } from '../actionservice/actionthriller.service';
import { ActionrealService } from '../actionservice/actionreal.service';
import { SafePipe } from '../utility/safe.pipe';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-action-list',
  templateUrl: './action-list.component.html',
  styleUrls: ['./action-list.component.css'],
  providers: [ActionthrillerService, ActionrealService]
})
export class ActionListComponent implements OnInit, OnDestroy {
  private req: any;
  title = 'Action Movie List';
  EmbedUrl:any;
  dangerousEmbedUrl:any;
  actionThrillerMovieList: [ActionThrillerMovieItem];
  homeActThrImageList:[ActionThrillerMovieItem] =[] as unknown as [ActionThrillerMovieItem];
  actionRealMovieList: [ActionRealMovieItem];
  homeActRealImageList:[ActionRealMovieItem] =[] as unknown as [ActionRealMovieItem];
  actionListDefaultImage = '/static/ang/assets/images/movies/11.jpg'

  


  constructor(private _actionrealservice: ActionrealService, private _actionthrillerservice: ActionthrillerService, private sanitizer: DomSanitizer) { }

ngOnInit(): void {
  	this.req = this._actionthrillerservice.list().subscribe(data => {
    this.actionThrillerMovieList = data as [ActionThrillerMovieItem];
    });
    this.req = this._actionthrillerservice.featured().subscribe((data: any) => {
    this.homeActThrImageList = data as [ActionThrillerMovieItem]
   });
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

