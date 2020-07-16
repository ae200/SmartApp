import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Status } from './status';

const httpOptions = {
  headers: new HttpHeaders({"Content-Type": 'application/json'})

}

@Injectable({
  providedIn: 'root'
})
export class StatusAPIService {

	private baseUrl = '/api/'

  constructor(private http: HttpClient) { }

  list():Observable<any> {
  	let apiListEndpoint = `${this.baseUrl}status/` // http://127.0.0.1:8000/api/status
    return this.http.get(apiListEndpoint) 	
  }

  get(id?: number): Observable<Status>{
  	if (!id){
  		id = 10
  	}
  	let apiDetailEndpoint = `${this.baseUrl}status/${id}/`
  	return this.http.get<Status>(apiDetailEndpoint)
  }
}
