import { Component, OnInit, OnDestroy } from '@angular/core';

import { HomeComponent } from '@src/app/home/home.component';

import { ActivatedRoute, Router } from '@angular/router';

import {FictionThrillerMovieItem } from '../fictionmovies/fictionmovie';
import { FictionthrillerService } from '../fictionservice/fictionthriller.service';


@Component({
  selector: 'app-fiction-thriller-detail',
  templateUrl: './fiction-thriller-detail.component.html',
  styleUrls: ['./fiction-thriller-detail.component.css'],
  providers: [FictionthrillerService]
})
export class FictionThrillerDetailComponent implements OnInit, OnDestroy {
	private routeSub: any;
    private req: any;
    fictionthrillermovie:FictionThrillerMovieItem;
    slug: string;
    errorStr: Boolean;
    EmbedUrl:any;
    dangerousEmbedUrl:any;

  constructor(private route: ActivatedRoute, private router: Router, private _fictionthrillerservice: FictionthrillerService) { }

  ngOnInit(): void {
  	this.routeSub = this.route.params.subscribe(params => {
    this.slug =  params.slug;
    this.req = this._fictionthrillerservice.get(this.slug).subscribe((data: any) => {
    this.fictionthrillermovie = data as FictionThrillerMovieItem;
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
