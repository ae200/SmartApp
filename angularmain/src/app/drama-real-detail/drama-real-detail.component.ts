import { Component, OnInit, OnDestroy } from '@angular/core';

import { HomeComponent } from '@src/app/home/home.component';

import { ActivatedRoute, Router } from '@angular/router';

import { SafePipe } from '../utility/safe.pipe';
import { DomSanitizer} from '@angular/platform-browser';

import { DramaRealMovieItem } from '../dramamovies/dramamovie';
import { DramarealService } from '../dramaservice/dramareal.service';

@Component({
  selector: 'app-drama-real-detail',
  templateUrl: './drama-real-detail.component.html',
  styleUrls: ['./drama-real-detail.component.css'],
  providers: [DramarealService]
})
export class DramaRealDetailComponent implements OnInit, OnDestroy {
	private routeSub: any;
    private req: any;
    dramarealmovie:DramaRealMovieItem;
    slug: string;
    errorStr: Boolean;
    EmbedUrl:any;
    dangerousEmbedUrl:any;

  constructor(private route: ActivatedRoute, private _dramarealservice: DramarealService, private sanitizer: DomSanitizer, private _safe: SafePipe) { }

  ngOnInit(): void {
  	this.routeSub = this.route.params.subscribe(params => {
    this.slug =  params.slug;
    this.req = this._dramarealservice.get(this.slug).subscribe((data: any) => {
    this.dramarealmovie = data as DramaRealMovieItem;
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
