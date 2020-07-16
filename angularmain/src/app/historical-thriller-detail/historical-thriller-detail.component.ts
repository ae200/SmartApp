import { Component, OnInit, OnDestroy } from '@angular/core';

import { HomeComponent } from '@src/app/home/home.component';

import { ActivatedRoute, Router } from '@angular/router';

import {HistoricalThrillerMovieItem } from '../historicalmovies/historicalmovie';
import { HistoricalthrillerService } from '../historicalservice/historicalthriller.service';


@Component({
  selector: 'app-historical-thriller-detail',
  templateUrl: './historical-thriller-detail.component.html',
  styleUrls: ['./historical-thriller-detail.component.css'],
  providers: [HistoricalthrillerService]
})
export class HistoricalThrillerDetailComponent implements OnInit, OnDestroy {
	private routeSub: any;
    private req: any;
    historicalthrillermovie:HistoricalThrillerMovieItem;
    slug: string;
    errorStr: Boolean;
    EmbedUrl:any;
    dangerousEmbedUrl:any;

  constructor(private route: ActivatedRoute, private router: Router, private _historicalthrillerservice: HistoricalthrillerService) { }

  ngOnInit(): void {
  	this.routeSub = this.route.params.subscribe(params => {
    this.slug =  params.slug;
    this.req = this._historicalthrillerservice.get(this.slug).subscribe((data: any) => {
    this.historicalthrillermovie = data as HistoricalThrillerMovieItem;
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
