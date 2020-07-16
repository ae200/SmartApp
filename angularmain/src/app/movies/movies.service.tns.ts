import { Injectable } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';

import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';

//const endpoint = '/static/static/ang/assets/json/movies.json'; // http://www.yourdomain.com/api/movies/
const endpoint = '/api/movies/'


@Injectable({
  providedIn: 'root'
})
export class MovieService {

    constructor(private http: HttpClient) {}


  list() {
  return this.http.get(endpoint)
       .pipe(map((response => response)));
  catchError(this.handleError);

   }

   get(slug) {
       return this.http.get(endpoint)
            .pipe(map((response: any) => {
                    const data = response.filter(item => {
                      if (item.slug === slug) {
                        return item;
                      }
                   });
                    console.log(data);
                    if (data.length === 1) {
                      return data[0];
                }

                    return  {};

               }));
       catchError(this.handleError);
   }

   search(query) {
      return this.http.get(endpoint)
            .pipe(map((response: any) => {
               const data = [];
               const req = response.filter(item => {
                    if (item.name.indexof(query) > 0) {
                        data.push(item);
                      }
                    });

               return data;

            }));
      catchError(this.handleError);
     }




  private handleError(error: any, caught: any): any {
console.log(error, caught);
   }
}
