import { HomeComponent } from '@src/app/home/home.component';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SafePipe } from '../utility/safe.pipe';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
import { AdventureRealMovieItem } from '../adventuremovies/adventuremovie';
import { AdventureThrillerMovieItem } from '../adventuremovies/adventuremovie';
import { AdventurethrillerService } from '../adventureservice/adventurethriller.service';
import { AdventurerealService } from '../adventureservice/adventurereal.service';


@Component({
  selector: 'app-adventure-detail',
  templateUrl: './adventure-detail.component.html',
  styleUrls: ['./adventure-detail.component.css'],
  providers: [AdventurerealService, AdventurethrillerService]
  
})
export class AdventureDetailComponent implements OnInit, OnDestroy {
  private routeSub: any;
    private req: any;
    adventurethrillermovie:AdventureThrillerMovieItem;
    adventurerealmovie:AdventureRealMovieItem;
    slug: string;
    errorStr: Boolean;
    EmbedUrl:any;
    dangerousEmbedUrl:any;

  constructor(private route: ActivatedRoute, private router: Router, private _adventurethrillerservice: AdventurethrillerService, private _adventurerealservice: AdventurerealService, private sanitizer: DomSanitizer, private _safe: SafePipe) { }

ngOnInit(): void {
  this.routeSub = this.route.params.subscribe(params => {
    this.slug =  params.slug;
    this.req = this._adventurethrillerservice.get(this.slug).subscribe((data: any) => {
    this.adventurethrillermovie = data as AdventureThrillerMovieItem;
    }, error =>{
           this.errorStr = error;
    });
    });

  this.routeSub = this.route.params.subscribe(params => {
    this.slug =  params.slug;
    this.req = this._adventurerealservice.get(this.slug).subscribe((data: any) => {
    this.adventurerealmovie = data as AdventureRealMovieItem;
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
