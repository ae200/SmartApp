import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '@src/app/home/home.component';

import { ActivatedRoute, Router } from '@angular/router';

import { SafePipe } from '../utility/safe.pipe';
import { DomSanitizer} from '@angular/platform-browser';

import { ActionRealMovieItem } from '../actionmovies/actionmovie';
import { ActionrealService } from '../actionservice/actionreal.service';

@Component({
  selector: 'app-action-real-detail',
  templateUrl: './action-real-detail.component.html',
  styleUrls: ['./action-real-detail.component.css'],
  providers: [ActionrealService]
})
export class ActionRealDetailComponent implements OnInit {
    private routeSub: any;
    private req: any;
    actionrealmovie:ActionRealMovieItem;
    slug: string;
    errorStr: Boolean;
    EmbedUrl:any;
    dangerousEmbedUrl:any;

  constructor(private route: ActivatedRoute, private router: Router, private _actionrealservice: ActionrealService, private sanitizer: DomSanitizer, private _safe: SafePipe) { }

  ngOnInit(): void {
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
