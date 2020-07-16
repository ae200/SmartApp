import { Component, OnInit, OnDestroy } from '@angular/core';

import { HomeComponent } from '@src/app/home/home.component';

import { ActivatedRoute, Router } from '@angular/router';

import { ComedyThrillerMovieItem } from '../comedymovies/comedymovie';
import { ComedyRealMovieItem } from '../comedymovies/comedymovie';
import { ComedyrealService } from '../comedyservice/comedyreal.service';
import { ComedythrillerService } from '../comedyservice/comedythriller.service';



@Component({
  selector: 'app-comedy-detail',
  templateUrl: './comedy-detail.component.html',
  styleUrls: ['./comedy-detail.component.css'],
  providers: [ComedyrealService, ComedythrillerService]
})
export class ComedyDetailComponent implements OnInit, OnDestroy {
    private routeSub: any;
    private req: any;
    comedythrillermovie:ComedyThrillerMovieItem;
    comedyrealmovie:ComedyRealMovieItem;
    slug: string;
    errorStr: Boolean;
    EmbedUrl:any;
    dangerousEmbedUrl:any;

  constructor(private route: ActivatedRoute, private router: Router, private _comedyrealservice: ComedyrealService, private _comedythrillerservice: ComedythrillerService) { }

  ngOnInit(): void {
  	this.routeSub = this.route.params.subscribe(params => {
    this.slug =  params.slug;
    this.req = this._comedythrillerservice.get(this.slug).subscribe((data: any) => {
    this.comedythrillermovie = data as ComedyThrillerMovieItem;
    }, error =>{
           this.errorStr = error;
    });
    });

    this.routeSub = this.route.params.subscribe(params => {
    this.slug =  params.slug;
    this.req = this._comedyrealservice.get(this.slug).subscribe((data: any) => {
    this.comedyrealmovie = data as ComedyRealMovieItem;
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
