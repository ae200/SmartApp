import { Injectable } from '@angular/core';

import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import { AuthAPIService } from '../auth/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { throwError } from 'rxjs';

const endpoint = '/actionrealapi/actionreal/'
const newpoint = '/actionthrillerapi/actionthriller/'
@Injectable({
  providedIn: 'root'
})
export class ActionrealService {
   
   Unauthorized = false;
   

  constructor(private http: HttpClient, private authAPI: AuthAPIService, private cookieService: CookieService,) { }



list() {
    return this.http.get(endpoint, {headers: this.getAuth2Headers()})
        .pipe((map((response => response))))
        .pipe(catchError((this.handleError)))
    }
//, {headers: this.authAPI.getAuthHeaders()}
featured() {
    return this.http.get(endpoint + "featured/", {headers: this.getAuth2Headers()})
        .pipe(map((response => response)))
        .pipe(catchError((this.handleError)))
        
}

 
get(slug) {
    console.log(slug)
    this.http.get(endpoint + slug + "/", {headers: this.getAuth2Headers()}).subscribe((result: any)=>{
        console.log(result);
    })
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

