import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
import { SafePipe } from '../utility/safe.pipe';
import { HomeComponent } from '@src/app/home/home.component';
import { HistoricalRealMovieItem } from '../historicalmovies/historicalmovie';
import {HistoricalThrillerMovieItem } from '../historicalmovies/historicalmovie';
import { HistoricalthrillerService } from '../historicalservice/historicalthriller.service';
import { HistoricalrealService } from '../historicalservice/historicalreal.service';


@Component({
  selector: 'app-historical-detail',
  templateUrl: './historical-detail.component.html',
  styleUrls: ['./historical-detail.component.css'],
  providers: [HistoricalthrillerService, HistoricalrealService]
})
export class HistoricalDetailComponent implements OnInit, OnDestroy {
    private routeSub: any;
    private req: any;
    historicalthrillermovie:HistoricalThrillerMovieItem;
    historicalrealmovie:HistoricalRealMovieItem;
    slug: string;
    errorStr: Boolean;
    EmbedUrl:any;
    dangerousEmbedUrl:any;

  constructor(private route: ActivatedRoute, private router: Router, private _historicalthrillerservice: HistoricalthrillerService, private _historicalrealservice: HistoricalrealService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
    this.slug =  params.slug;
    this.req = this._historicalthrillerservice.get(this.slug).subscribe((data: any) => {
    this.historicalthrillermovie = data as HistoricalThrillerMovieItem;
    }, error =>{
           this.errorStr = error;
    });
    });

    this.routeSub = this.route.params.subscribe(params => {
    this.slug =  params.slug;
    this.req = this._historicalrealservice.get(this.slug).subscribe((data: any) => {
    this.historicalrealmovie = data as HistoricalRealMovieItem;
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
