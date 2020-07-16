import { Component, OnInit, OnDestroy } from '@angular/core';

import { AdventureThrillerMovieItem } from '../adventuremovies/adventuremovie';
import { AdventurethrillerService } from '../adventureservice/adventurethriller.service';
import { AdventurerealService } from '../adventureservice/adventurereal.service';
import { AdventureRealMovieItem } from '../adventuremovies/adventuremovie';
import { SafePipe } from '../utility/safe.pipe';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-adventure-list',
  templateUrl: './adventure-list.component.html',
  styleUrls: ['./adventure-list.component.css'],
  providers: [AdventurerealService, AdventurethrillerService]
})
export class AdventureListComponent implements OnInit, OnDestroy {
    private req: any;
    title = 'Adventure Movie List';
    EmbedUrl:any;
    dangerousEmbedUrl:any;
    adventureThrillerMovieList: [AdventureThrillerMovieItem];
    homeAdvThrImageList:[AdventureThrillerMovieItem] =[] as unknown as [AdventureThrillerMovieItem];
    adventureRealMovieList: [AdventureRealMovieItem];
    homeAdvRealImageList:[AdventureRealMovieItem] =[] as unknown as [AdventureRealMovieItem];
    adventureListDefaultImage = '/static/ang/assets/images/movies/11.jpg'; 

constructor(private _adventurethrillerservice: AdventurethrillerService, private _adventurerealservice: AdventurerealService, private sanitizer:DomSanitizer) {}

ngOnInit(): void {
  	this.req = this._adventurethrillerservice.list().subscribe(data => {
    this.adventureThrillerMovieList = data as [AdventureThrillerMovieItem];
    });
    this.req = this._adventurethrillerservice.featured().subscribe((data: any) => {
    this.homeAdvThrImageList = data as [AdventureThrillerMovieItem]
   });

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