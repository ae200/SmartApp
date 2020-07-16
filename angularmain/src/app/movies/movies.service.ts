import { Injectable } from '@angular/core';

import { map, catchError } from 'rxjs/operators';

import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

import { throwError } from 'rxjs';



//const endpoint = '/static/ang/assets/json/movies.json'; // http://www.yourdomain.com/api/movies/    assets/json/movies.json
const endpoint = '/api/movies/'


@Injectable({
  providedIn: 'root'
})
export class MovieService {

    constructor(private http: HttpClient,   private cookieService: CookieService) {}


  list() {
  return this.http.get(endpoint)
        .pipe(map((response => response)))
        .pipe(catchError((this.handleError)))

}

  featured() {
  return this.http.get(endpoint + "featured/", {headers: this.getAuth2Headers()})
        .pipe(map((response => response)))
        .pipe(catchError((this.handleError)))
}

 
genre() {
  return this.http.get(endpoint + "genre/", {headers: this.getAuth2Headers()})
        .pipe(map((response => response)))
        .pipe(catchError((this.handleError)))
}
   get(slug) {
       return this.http.get(endpoint + slug + "/", {headers: this.getAuth2Headers()})
                  .pipe(map((response => response)))
                  .pipe(catchError((this.handleError)))

       
      }


   search(query) {
     let queryString = `?q=${query}`
      return this.http.get(endpoint + queryString)
                 .pipe(map((response => response)))
                 .pipe(catchError((this.handleError)))

     
}
getAuth2Headers(){
  const token= this.cookieService.get('auth-token');
  return new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Token ${token}`,
  });  
  }
      private handleError (error: Response | any){
        let errMsg: string;
        if (error instanceof Response) {
          const body = error.json() || '';
          errMsg = `${error.status} - ${error.statusText || ''} ${error}`;
        } else {
          errMsg = error.message ? error.message : error.toString(); 
        }
        console.error(errMsg);
        return throwError(errMsg);
      }


   //   private handleError(error: any, caught: any): any {
   //     //console.log(error, caught)
   //     if (error.status == 404) {
   //         alert("Oopps. Not found")
   //     } else {
   //       alert("Something went wrong. Please try again.") 
   //     }
   // }
}
