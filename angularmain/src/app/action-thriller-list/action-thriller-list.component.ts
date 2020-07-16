import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActionThrillerMovieItem } from '../actionmovies/actionmovie';
import { ActionthrillerService } from '../actionservice/actionthriller.service';
import { SafePipe } from '../utility/safe.pipe';
import { DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-action-thriller-list',
  templateUrl: './action-thriller-list.component.html',
  styleUrls: ['./action-thriller-list.component.css'],
  providers: [ActionthrillerService]
})
export class ActionThrillerListComponent implements OnInit, OnDestroy {
	private req: any;
	title = 'Action Movie List';
	EmbedUrl:any;
	dangerousEmbedUrl:any;
	actionThrillerMovieList: [ActionThrillerMovieItem];
	homeActThrImageList:[ActionThrillerMovieItem] =[] as unknown as [ActionThrillerMovieItem];
	actionListDefaultImage = '/static/ang/assets/images/movies/11.jpg'; 	

  constructor(private _actionthrillerservice: ActionthrillerService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  	this.req = this._actionthrillerservice.list().subscribe(data => {
    this.actionThrillerMovieList = data as [ActionThrillerMovieItem];
    });
    this.req = this._actionthrillerservice.featured().subscribe((data: any) => {
    this.homeActThrImageList = data as [ActionThrillerMovieItem]
   });
  }

  ngOnDestroy() {
this.req.unsubscribe();
}

getEmbedUrl(item) {
    return 'https://www.youtube.com/embed/' + item.embed + '';
  } 

}
