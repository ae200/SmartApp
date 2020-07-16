import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { MovieItem } from '../movies/movie';
import { MovieService } from '../movies/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MovieService]

})
export class HomeComponent implements OnInit, OnDestroy {
private req: any;
homeImageList:[MovieItem] =[] as unknown as [MovieItem];
movieListDefaultImage = '/static/ang/assets/images/movies/11.jpg';
  constructor(private http: HttpClient, private router: Router,
              private movieservice: MovieService) {}

ngOnInit(): void {
        this.req = this.movieservice.list().subscribe((data: any) => {
        data.filter(item => {
          if (item.featured) {
        this.homeImageList.push(item);
      }
    });
 });
}

ngOnDestroy() {
// this.req.unsubscribe()
}

      preventNormal(event: MouseEvent, image: any) {
      if (!image.prevented) {
      event.preventDefault();
      this.router.navigate(['./movies']);
    }
  }
}
