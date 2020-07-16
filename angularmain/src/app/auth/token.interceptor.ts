import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';

import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
//import 'rxjs/add/operator/do';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service'; //


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private cookieService: CookieService,
    private router: Router
    ) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // let csrftoken = this.cookieService.set('csrftoken', window.csrf_token);
    // let jwttoken = this.cookieService.get('jwttoken')
    //let jwttoken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImFkZWdiZW5nYUAzc21hcnRzZmxpeCIsImV4cCI6MTU5MDcwMTQ4MiwiZW1haWwiOiJ0aHJlZXNtYXJ0c2ZsaXhAaG90bWFpbC5jb20ifQ.UynWU0aJNyvsUSdwEVNwNovKb7mGOsEkSyhg4taHkhs'
    if (jwttoken) {
       request = request.clone({
        setHeaders: {
          // This is where you can use your various tokens
          Authorization: `JWT ${jwttoken}`,
         // 'X-CSRFToken': `${csrftoken}`
        }
      });
    } 
      
    return next.handle(request).pipe(tap((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        // do stuff with response if you want
        console.log("cool it worked!")
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401 || err.status === 403) {
          const currentUrl = this.router.url
          if (currentUrl != '/login') {
          alert("Session ended. Please login again")
          this.cookieService.delete('jwttoken')
          this.router.navigate(['/login'], {queryParams: {next: currentUrl}})
          }
        }
      }
    }));
    
    }
}   