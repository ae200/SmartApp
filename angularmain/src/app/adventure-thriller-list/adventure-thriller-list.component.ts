import { Component, OnInit, OnDestroy } from '@angular/core';

import { AdventureThrillerMovieItem } from '../adventuremovies/adventuremovie';
import {AdventurethrillerService } from '../adventureservice/adventurethriller.service';
import { SafePipe } from '../utility/safe.pipe';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-adventure-thriller-list',
  templateUrl: './adventure-thriller-list.component.html',
  styleUrls: ['./adventure-thriller-list.component.css'],
  providers: [AdventurethrillerService]
})
export class AdventureThrillerListComponent implements OnInit, OnDestroy {
	private req: any;
	title = 'Adventure Movie List';
	EmbedUrl:any;
	dangerousEmbedUrl:any;
	adventureThrillerMovieList: [AdventureThrillerMovieItem];
	homeAdvThrImageList:[AdventureThrillerMovieItem] =[] as unknown as [AdventureThrillerMovieItem];
	adventureListDefaultImage = '/static/ang/assets/images/movies/11.jpg'; 

  constructor(private _adventurethrillerservice: AdventurethrillerService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  	this.req = this._adventurethrillerservice.list().subscribe(data => {
    this.adventureThrillerMovieList = data as [AdventureThrillerMovieItem];
    });
    this.req = this._adventurethrillerservice.featured().subscribe((data: any) => {
    this.homeAdvThrImageList = data as [AdventureThrillerMovieItem]
   });
  }
   ngOnDestroy() {
this.req.unsubscribe();
}

getEmbedUrl(item) {
    return 'https://www.youtube.com/embed/' + item.embed + '';
  } 
}
