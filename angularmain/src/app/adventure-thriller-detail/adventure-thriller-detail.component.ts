import { Component, OnInit, OnDestroy } from '@angular/core';

import { HomeComponent } from '@src/app/home/home.component';

import { ActivatedRoute, Router } from '@angular/router';

import { SafePipe } from '../utility/safe.pipe';
import { DomSanitizer} from '@angular/platform-browser';

import { AdventureThrillerMovieItem } from '../adventuremovies/adventuremovie';
import { AdventurethrillerService } from '../adventureservice/adventurethriller.service';


@Component({
  selector: 'app-adventure-thriller-detail',
  templateUrl: './adventure-thriller-detail.component.html',
  styleUrls: ['./adventure-thriller-detail.component.css'],
  providers: [AdventurethrillerService]
})
export class AdventureThrillerDetailComponent implements OnInit, OnDestroy {
	private routeSub: any;
    private req: any;
    adventurethrillermovie:AdventureThrillerMovieItem;
    slug: string;
    errorStr: Boolean;
    EmbedUrl:any;
    dangerousEmbedUrl:any;

  constructor(private route: ActivatedRoute, private router: Router, private _adventurethrillerservice: AdventurethrillerService, private sanitizer: DomSanitizer, private _safe: SafePipe) { }

  ngOnInit(): void {
  	this.routeSub = this.route.params.subscribe(params => {
    this.slug =  params.slug;
    this.req = this._adventurethrillerservice.get(this.slug).subscribe((data: any) => {
    this.adventurethrillermovie = data as AdventureThrillerMovieItem;
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
