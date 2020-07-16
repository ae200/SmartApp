import { Injectable } from '@angular/core';

import { map, catchError } from 'rxjs/operators';

import { HttpClient, HttpResponse } from '@angular/common/http';

import { throwError } from 'rxjs';


//const endpoint = '/static/ang/assets/json/streammovies.json'; // http://www.yourdomain.com/api/movies/
const endpoint = '/streamapi/streammovies/'


@Injectable({
  providedIn: 'root'
})
export class StreammoviesService {

  constructor(private http: HttpClient) { }

  list() {
  return this.http.get(endpoint)
           .pipe(map((response => response)))
           catchError((this.handleError))
}

  featured() {
    return this.http.get(endpoint + "featured/")
          .pipe(map((response => response)))
          catchError((this.handleError))
}

 
  genre() {
    return this.http.get(endpoint + "genre/")
          .pipe(map((response => response)))
          catchError((this.handleError))
} 

   get(slug) {
       return this.http.get(endpoint + slug + "/")
                .pipe(map((response => response)))
                catchError((this.handleError))
    }


   search(query) {
     let queryString = `?q=${query}`
      return this.http.get(endpoint + queryString)
               .pipe(map((response => response)))
               catchError((this.handleError))

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
   //     //console.log(error, caught);
   //     if (error.status == 404) {
   //         alert("Oopps. Not found")
   //     } else {
   //       alert("Something went wrong. Please try again.") 
   //     }
   // }
}
