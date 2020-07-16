import { HomeComponent } from '@src/app/home/home.component';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FictionThrillerMovieItem } from '../fictionmovies/fictionmovie';
import { FictionthrillerService } from '../fictionservice/fictionthriller.service';
import { FictionrealService } from '../fictionservice/fictionreal.service';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
import { SafePipe } from '../utility/safe.pipe';
import { FictionRealMovieItem } from '../fictionmovies/fictionmovie';


@Component({
  selector: 'app-fiction-detail',
  templateUrl: './fiction-detail.component.html',
  styleUrls: ['./fiction-detail.component.css'],
  providers: [FictionrealService, FictionthrillerService]
})
export class FictionDetailComponent implements OnInit, OnDestroy {
    private routeSub: any;
    private req: any;
    fictionthrillermovie:FictionThrillerMovieItem;
    fictionrealmovie:FictionRealMovieItem;
    slug: string;
    errorStr: Boolean;
    EmbedUrl:any;
    dangerousEmbedUrl:any;

  constructor(private route: ActivatedRoute, private router: Router, private _fictionthrillerservice: FictionthrillerService, private _fictionrealservice: FictionrealService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  	this.routeSub = this.route.params.subscribe(params => {
    this.slug =  params.slug;
    this.req = this._fictionthrillerservice.get(this.slug).subscribe((data: any) => {
    this.fictionthrillermovie = data as FictionThrillerMovieItem;
    }, error =>{
           this.errorStr = error;
    });
    });

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
getEmbedUrl(item) {
    return 'https://www.youtube.com/embed/' + item.embed + '';
  }
}
