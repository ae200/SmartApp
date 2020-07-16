import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { MovieItem } from '@src/app/movies/movie';
import { MovieService } from '@src/app/movies/movies.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
  providers: [MovieService]
})
export class MovieDetailComponent implements OnInit, OnDestroy {
    private routeSub: any;
    private req: any;
    movie: MovieItem;
    // data:any;
    slug: string;
  constructor(private route: ActivatedRoute, private movieservice: MovieService) { }

  ngOnInit(): void {
this.routeSub = this.route.params.subscribe(params => {
      this.slug = params.slug;
      this.req = this.movieservice.get(this.slug).subscribe((data: any) => {
      this.movie = data as MovieItem;

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
