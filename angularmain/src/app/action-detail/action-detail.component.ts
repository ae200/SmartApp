import { HomeComponent } from '@src/app/home/home.component';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SafePipe } from '../utility/safe.pipe';
import { DomSanitizer} from '@angular/platform-browser';
import { ActionRealMovieItem } from '../actionmovies/actionmovie';
import { ActionThrillerMovieItem } from '../actionmovies/actionmovie';
import { ActionthrillerService } from '../actionservice/actionthriller.service';
import { ActionrealService } from '../actionservice/actionreal.service';


@Component({
  selector: 'app-action-detail',
  templateUrl: './action-detail.component.html',
  styleUrls: ['./action-detail.component.css'],
  providers: [ActionrealService, ActionthrillerService]
})
export class ActionDetailComponent implements OnInit, OnDestroy {
	  private routeSub: any;
    private req: any;
    actionthrillermovie:ActionThrillerMovieItem;
    actionrealmovie:ActionRealMovieItem;
    slug: string;
    errorStr: Boolean;
    EmbedUrl:any;
    dangerousEmbedUrl:any;

  constructor(private route: ActivatedRoute, private router: Router, private _actionrealservice: ActionrealService, private _actionthrillerservice: ActionthrillerService, private sanitizer: DomSanitizer, private _safe: SafePipe) { }

	ngOnInit(): void {
	 	this.routeSub = this.route.params.subscribe(params => {
    this.slug =  params.slug;
    this.req = this._actionthrillerservice.get(this.slug).subscribe((data: any) => {
    this.actionthrillermovie = data as ActionThrillerMovieItem;
    }, error =>{
           this.errorStr = error;
    });
    });

    this.routeSub = this.route.params.subscribe(params => {
    this.slug =  params.slug;
    this.req = this._actionrealservice.get(this.slug).subscribe((data: any) => {
    this.actionrealmovie = data as ActionRealMovieItem;
    }, error =>{
           this.errorStr = error;
    });
    });
	}
    ngOnDestroy() {
       this.routeSub.unsubscribe();
       this.req.unsubscribe();
    }
  //   getEmbedUrl(item) {
  //   return 'https://www.youtube.com/embed/' + item.embed + '';
  // } 

getEmbedUrl(item) {
    return 'https://www.youtube.com/embed/' + item.embed + '';
  } 
}
