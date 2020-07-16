import { Component, OnInit, OnDestroy } from '@angular/core';

import { MovieItem } from '@src/app/movies/movie';
import { MovieService } from '@src/app/movies/movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  providers: [MovieService]
})
export class MovieListComponent implements OnInit, OnDestroy {
private req: any;
    title = 'Movie List';
    movieList: [MovieItem];

    constructor(private movieservice: MovieService) {}

  ngOnInit(): void {
// this.todayDate = new Date()
this.req = this.movieservice.search('Welcome').subscribe(data => {
this.movieList = data as [MovieItem];
}); // GET METHOD
  }

  ngOnDestroy() {
this.req.unsubscribe();
  }

  getEmbedUrl(item) {
return 'https://www.youtube.com/embed/' + item.embed + '';
  }
}
