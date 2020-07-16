import { Component, OnInit, OnDestroy } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
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
isLoggedin: Boolean = false;

LogoDefaultImage = 'assets/images/nature/3smartsflixlogoreduced65.png';

constructor(private route: ActivatedRoute,   private cookieService: CookieService,) {
    this.routeSub = this.route.params.subscribe(params => {
    this.query = params['q'];
       });
}



ngOnInit() {
   // console.log(window.csrf_token)
   const token =  this.cookieService.check('auth-token');
   if(token){
      this.isLoggedin = true;
   }
   else{
      this.isLoggedin = false;
   }
}
   ngOnDestroy() {
this.routeSub.unsubscribe();
   }
}

