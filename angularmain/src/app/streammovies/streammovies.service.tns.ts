import { Injectable } from '@angular/core';

import { map, catchError } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';

//const endpoint = '/static/ang/assets/json/streammovies.json'; // http://www.yourdomain.com/api/movies/ 
const endpoint = '/streamapi/streammovies/'


@Injectable({
  providedIn: 'root'
})
export class StreammoviesService {

  constructor(private http: HttpClient) { }

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
               // tslint:disable-next-line: new-parens
               const data = [];
               const req = response.filter(item => {
                 const index = item.name.indexOf(query);
                 if (index >= 0) {
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
