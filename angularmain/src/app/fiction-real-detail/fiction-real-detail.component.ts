import { Component, OnInit, OnDestroy } from '@angular/core';

import { HomeComponent } from '@src/app/home/home.component';

import { ActivatedRoute, Router } from '@angular/router';

import { SafePipe } from '../utility/safe.pipe';
import { DomSanitizer} from '@angular/platform-browser';

import { FictionRealMovieItem } from '../fictionmovies/fictionmovie';
import { FictionrealService } from '../fictionservice/fictionreal.service';

@Component({
  selector: 'app-fiction-real-detail',
  templateUrl: './fiction-real-detail.component.html',
  styleUrls: ['./fiction-real-detail.component.css'],
  providers: [ FictionrealService]
})
export class FictionRealDetailComponent implements OnInit,OnDestroy {
	private routeSub: any;
    private req: any;
    fictionrealmovie:FictionRealMovieItem;
    slug: string;
    errorStr: Boolean;
    EmbedUrl:any;
    dangerousEmbedUrl:any;

  constructor(private route: ActivatedRoute, private router: Router, private _fictionrealservice: FictionrealService, private sanitizer: DomSanitizer, private _safe: SafePipe) { }

  ngOnInit(): void {
  	this.routeSub = this.route.params.subscribe(params => {
    this.slug =  params.slug;
    this.req = this._fictionrealservice.get(this.slug).subscribe((data: any) => {
    this.fictionrealmovie = data as FictionRealMovieItem;
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
