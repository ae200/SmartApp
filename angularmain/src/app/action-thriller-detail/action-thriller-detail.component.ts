import { Component, OnInit, OnDestroy } from '@angular/core';

import { HomeComponent } from '@src/app/home/home.component';

import { ActivatedRoute, Router } from '@angular/router';

import { SafePipe } from '../utility/safe.pipe';
import { DomSanitizer} from '@angular/platform-browser';

import { ActionThrillerMovieItem } from '../actionmovies/actionmovie';
import { ActionthrillerService } from '../actionservice/actionthriller.service';


@Component({
  selector: 'app-action-thriller-detail',
  templateUrl: './action-thriller-detail.component.html',
  styleUrls: ['./action-thriller-detail.component.css'],
  providers: [ActionthrillerService]
})
export class ActionThrillerDetailComponent implements OnInit, OnDestroy {
    private routeSub: any;
    private req: any;
    actionthrillermovie:ActionThrillerMovieItem;
    slug: string;
    errorStr: Boolean;
    EmbedUrl:any;
    dangerousEmbedUrl:any;


  constructor(private route: ActivatedRoute, private router: Router, private _actionthrillerservice: ActionthrillerService, private sanitizer: DomSanitizer, private _safe: SafePipe) { }

  ngOnInit(): void {
  	this.routeSub = this.route.params.subscribe(params => {
    this.slug =  params.slug;
    this.req = this._actionthrillerservice.get(this.slug).subscribe((data: any) => {
    this.actionthrillermovie = data as ActionThrillerMovieItem;
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
