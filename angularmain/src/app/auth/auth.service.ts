import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

//import { Observable } from 'rxjs';
//import { of } from 'rxjs';
import { catchError, map, tap, last } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import { AuthLoginData } from './auth';
import { User } from './user';
import { Observable } from 'tns-core-modules/ui/page';
//import {UserRegisterData } from '../register/register';


//import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//import {SafePipe} from '../utility/safe.pipe';

// const httpOptions = {
//   headers: new HttpHeaders({"Content-Type": 'application/json'})
// }


@Injectable()
export class AuthAPIService {

  private baseUrl = '/rest-auth';
  private basePasswordUrl = '/users';
  private mainBaseUrl = '/';
  private nextUrl;
  private headers = new HttpHeaders({
  'Content-Type': 'application/json',
});   
constructor(
  private http: HttpClient,
  private router: Router,
  private cookieService: CookieService,
  private route: ActivatedRoute
  ) { }

 
checkToken(){
    return this.cookieService.check("auth-token")
    
}


performLogout(msg?:string){
  this.cookieService.delete('auth-token', '/')
  if(this.cookieService.check('user-info')){
    this.cookieService.delete('user-info', '/')
  }
  if(this.cookieService.check('sessionid')){
    this.cookieService.delete('sessionid', '/')
  }
  if(this.cookieService.check('messages')){
    this.cookieService.delete('messages', '/')
  }
  this.router.navigate(['/'])
  // console.log(msg)
}

getNextUrl(){
  this.route.queryParams.subscribe(params=>{
    if (params['next']) {
      this.nextUrl = params['next']
      switch (this.nextUrl) {
        case "/account/delete":
          this.nextUrl = null
          break;
        
        default:
          // code...
          break;
      }
    }
  })
  return this.nextUrl
}

setUserCookie(user:User) {
  this.cookieService.set('username', user.username)
  this.cookieService.set('email', user.email)
}

getUsername(): string{
  return this.cookieService.get('username') || null
}

getEmail(): string{
   
  return this.cookieService.get('email') || null
}

makePremium(){
  let endpoint= `${this.mainBaseUrl}users/premiumpay/`
  return this.http.post(endpoint, {}, {headers: this.getAuth2Headers()});
}

performLogin(token, email?){
  this.cookieService.set('auth-token', token);
  if(email){
    this.setUserData(email).subscribe((result: any)=>{
      
      this.cookieService.set('user-info', JSON.stringify(result));
    })
  }
  const nextUrl = this.getNextUrl()
  if (nextUrl) {
    this.router.navigate([nextUrl])
  } else {
    this.router.navigate(['users/makepremium'])
  }
}


// performRegister(token, expires?:Date, msg?:string){
//   let expiryDate = null
//   if (expires) {
//     expiryDate =  expires 
//   }
//   this.cookieService.set('jwttoken', token, expiryDate, "/");
//   const nextUrl = this.getNextUrl()
//   if (nextUrl) {
//     this.router.navigate([nextUrl])
//   } else {
//     this.router.navigate(['/login'])
//   }
// }


getTokenData(authData){
  const body = JSON.stringify(authData); 
  let apiLoginpoint = `${this.mainBaseUrl}api/token/`
  return this.http.post(apiLoginpoint, body, {headers: this.headers})
}
loginUser(authData) {
  const body = JSON.stringify(authData); 
  let apiLoginEndpoint = `http://localhost:8000${this.baseUrl}/login/`
   return  this.http.post(apiLoginEndpoint, body, {headers: this.getAuthHeaders()}) //httpOptions
}

registerUser(authData) {
  const body = JSON.stringify(authData);
  let apiLoginEndpoint = `http://localhost:8000${this.baseUrl}/registration/`
   return  this.http.post(apiLoginEndpoint, body, {headers: this.getAuthHeaders()}) //httpOptions
  }
resetPassword(authData){
    const body = JSON.stringify(authData);
    let apiLoginEndpoint = `http://localhost:8000${this.basePasswordUrl}/resetpassword/`;
    return this.http.post(apiLoginEndpoint, body, {headers: this.getAuth2Headers()});
  }
setUserData(email){

  let endpoint= `http://localhost:8000${this.mainBaseUrl}users/details/`
  return this.http.post(endpoint, JSON.stringify(email), {headers: this.getAuth2Headers()});
}
getUserData(){
    const token= this.cookieService.get('user-info');
    
    return JSON.parse(token); 
}
getAuthHeaders(){
  const token= this.cookieService.get('auth-token');
  let csrf = this.cookieService.get("csrftoken");
  // console.log(csrf);
  return new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
    // 'X-CSRFToken': csrf
  });  
  }
  getAuth2Headers(){
    const token= this.cookieService.get('auth-token');
    let csrf = this.cookieService.get("csrftoken");
    // console.log(csrf)
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`,
      'X-CSRFToken': csrf
    });  
    }
    logoutUser(){
      let apiLoginEndpoint = `${this.baseUrl}/logout/`
       return  this.http.post(apiLoginEndpoint, {headers: this.getAuthHeaders()}); 
    }
}
