import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MovieService } from '@src/app/movies/movies.service';
import { MovieItem } from '@src/app/movies/movie';

@Component({
  selector: 'app-search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.css'],
  providers: [MovieService]
})
export class SearchDetailComponent implements OnInit, OnDestroy {
private routeSub: any;
private req: any;
query: string;
movieList: [MovieItem];

  constructor(private route: ActivatedRoute, private movieservice: MovieService) { }

  ngOnInit(): void {
this.routeSub = this.route.params.subscribe(params => {
this.query = params.q;
this.req = this.movieservice.search('this.query').subscribe(data => {
this.movieList = data as [MovieItem];
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
