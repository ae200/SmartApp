import { Component, OnInit, OnDestroy } from '@angular/core';

import { AdventureRealMovieItem } from '../adventuremovies/adventuremovie';
import { AdventurerealService } from '../adventureservice/adventurereal.service';
import { SafePipe } from '../utility/safe.pipe';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-adventure-real-list',
  templateUrl: './adventure-real-list.component.html',
  styleUrls: ['./adventure-real-list.component.css'],
  providers: [AdventurerealService]
})
export class AdventureRealListComponent implements OnInit, OnDestroy {
    private req: any;
	title = 'Adventure Movie List';
	EmbedUrl:any;
	dangerousEmbedUrl:any;
	adventureRealMovieList: [AdventureRealMovieItem];
	homeAdvRealImageList:[AdventureRealMovieItem] =[] as unknown as [AdventureRealMovieItem];
	adventureListDefaultImage = '/static/ang/assets/images/movies/11.jpg'; 

  constructor(private _adventurerealservice: AdventurerealService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  	this.req = this._adventurerealservice.list().subscribe(data => {
    this.adventureRealMovieList = data as [AdventureRealMovieItem];
    });
    this.req = this._adventurerealservice.featured().subscribe((data: any) => {
    this.homeAdvRealImageList = data as [AdventureRealMovieItem]
   });
  }
   ngOnDestroy() {
this.req.unsubscribe();
}

  getEmbedUrl(item) {
    return 'https://www.youtube.com/embed/' + item.embed + '';
  } 
}
