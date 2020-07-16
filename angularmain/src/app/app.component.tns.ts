import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {
  title = '3SMARTSFLIX TV';
  description = 'The Home of 3D Animated Movies';
  private routeSub: any;
  query: string;

  constructor(private route: ActivatedRoute) {
      this.routeSub = this.route.params.subscribe(params => {
       console.log(params);
       this.query = params.q;
         });
  }

  ngOnInit() {
      // console.log('ngonit . . . ');
     }
     ngOnDestroy() {
  this.routeSub.unsubscribe();
     }
  }
