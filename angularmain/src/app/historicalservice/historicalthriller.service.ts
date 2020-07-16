import { Injectable } from '@angular/core';

import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { HttpResponse } from '@angular/common/http';

import { throwError } from 'rxjs';

const endpoint = '/historicalthrillerapi/historicalthriller/'

@Injectable({
  providedIn: 'root'
})
export class HistoricalthrillerService {

  constructor(private http: HttpClient,  private cookieService: CookieService) { }

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
        errMsg = `${error.status} - ${error.statusText || ''}`;
    } else {
          errMsg = "Oops not free."; 
        }
        //console.error(errMsg);
    return throwError(errMsg);
   }
}
