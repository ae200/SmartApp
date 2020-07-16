import { Component, OnInit, OnDestroy } from '@angular/core';

import { HomeComponent } from '@src/app/home/home.component';

import { ActivatedRoute, Router } from '@angular/router';

import {DramaThrillerMovieItem } from '../dramamovies/dramamovie';
import { DramathrillerService } from '../dramaservice/dramathriller.service';


@Component({
  selector: 'app-drama-thriller-detail',
  templateUrl: './drama-thriller-detail.component.html',
  styleUrls: ['./drama-thriller-detail.component.css'],
  providers: [DramathrillerService]
})
export class DramaThrillerDetailComponent implements OnInit, OnDestroy {
	private routeSub: any;
    private req: any;
    dramathrillermovie:DramaThrillerMovieItem;
    slug: string;
    errorStr: Boolean;
    EmbedUrl:any;
    dangerousEmbedUrl:any;

  constructor(private route: ActivatedRoute, private router: Router, private _dramathrillerservice: DramathrillerService) { }

  ngOnInit(): void {
  	this.routeSub = this.route.params.subscribe(params => {
    this.slug =  params.slug;
    this.req = this._dramathrillerservice.get(this.slug).subscribe((data: any) => {
    this.dramathrillermovie = data as DramaThrillerMovieItem;
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
