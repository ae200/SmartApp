import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeComponent } from '@src/app/home/home.component';
import { DramaRealMovieItem } from '../dramamovies/dramamovie';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer} from '@angular/platform-browser';
import {DramaThrillerMovieItem } from '../dramamovies/dramamovie';
import { DramathrillerService } from '../dramaservice/dramathriller.service';
import { DramarealService } from '../dramaservice/dramareal.service';

@Component({
  selector: 'app-drama-detail',
  templateUrl: './drama-detail.component.html',
  styleUrls: ['./drama-detail.component.css'],
  providers: [DramathrillerService, DramarealService]
})
export class DramaDetailComponent implements OnInit, OnDestroy {
    private routeSub: any;
    private req: any;
    dramathrillermovie:DramaThrillerMovieItem;
    dramarealmovie:DramaRealMovieItem;
    slug: string;
    errorStr: Boolean;
    EmbedUrl:any;
    dangerousEmbedUrl:any;

  constructor(private route: ActivatedRoute, private router: Router, private _dramathrillerservice: DramathrillerService, private _dramarealservice: DramarealService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  	this.routeSub = this.route.params.subscribe(params => {
    this.slug =  params.slug;
    this.req = this._dramathrillerservice.get(this.slug).subscribe((data: any) => {
    this.dramathrillermovie = data as DramaThrillerMovieItem;
    }, error =>{
           this.errorStr = error;
    });
    });

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
getEmbedUrl(item) {
    return 'https://www.youtube.com/embed/' + item.embed + '';
  }  
}


