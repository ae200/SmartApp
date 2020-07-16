import { Component, OnInit } from '@angular/core';

import { HomeComponent } from '@src/app/home/home.component';

import { ActivatedRoute, Router } from '@angular/router';

import { SafePipe } from '../utility/safe.pipe';
import { DomSanitizer} from '@angular/platform-browser';

import { AdventureRealMovieItem } from '../adventuremovies/adventuremovie';
import { AdventurerealService } from '../adventureservice/adventurereal.service';

@Component({
  selector: 'app-adventure-real-detail',
  templateUrl: './adventure-real-detail.component.html',
  styleUrls: ['./adventure-real-detail.component.css'],
  providers: [AdventurerealService]
})
export class AdventureRealDetailComponent implements OnInit {
    private routeSub: any;
    private req: any;
    adventurerealmovie:AdventureRealMovieItem;
    slug: string;
    errorStr: Boolean;
    EmbedUrl:any;
    dangerousEmbedUrl:any;

  constructor(private route: ActivatedRoute, private router: Router, private _adventurerealservice: AdventurerealService, private sanitizer: DomSanitizer, private _safe: SafePipe) { }

  ngOnInit(): void {
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
  //   getEmbedUrl(item) {
  //   return 'https://www.youtube.com/embed/' + item.embed + '';
  // } 

  getEmbedUrl(item) {
    return 'https://www.youtube.com/embed/' + item.embed + '';
   }
}
