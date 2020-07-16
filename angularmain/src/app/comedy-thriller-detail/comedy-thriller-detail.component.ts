import { Component, OnInit, OnDestroy } from '@angular/core';

import { HomeComponent } from '@src/app/home/home.component';

import { ActivatedRoute, Router } from '@angular/router';

import { ComedyThrillerMovieItem } from '../comedymovies/comedymovie';
import { ComedythrillerService } from '../comedyservice/comedythriller.service';

@Component({
  selector: 'app-comedy-thriller-detail',
  templateUrl: './comedy-thriller-detail.component.html',
  styleUrls: ['./comedy-thriller-detail.component.css'],
  providers: [ComedythrillerService]
})
export class ComedyThrillerDetailComponent implements OnInit, OnDestroy {
	private routeSub: any;
    private req: any;
    comedythrillermovie:ComedyThrillerMovieItem;
    slug: string;
    errorStr: Boolean;
    EmbedUrl:any;
    dangerousEmbedUrl:any;

  constructor(private route: ActivatedRoute, private router: Router, private _comedythrillerservice: ComedythrillerService) { }

  ngOnInit(): void {
  	this.routeSub = this.route.params.subscribe(params => {
    this.slug =  params.slug;
    this.req = this._comedythrillerservice.get(this.slug).subscribe((data: any) => {
    this.comedythrillermovie = data as ComedyThrillerMovieItem;
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
