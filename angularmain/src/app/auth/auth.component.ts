import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthLoginData } from './auth';
import { authRegisterData} from './authregister';
import { AuthAPIService} from './auth.service'; 
import { User } from './user';
// import { userInfo } from 'os';


interface TokenObj {
  token: string;
}
interface userInfoObj {
  id: number,
  email : string,
  firstname: string,
  lastname: string,
  isPremium: boolean,
  secretquestion: number,
  secretanswer: string,
  displayname: string
}
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent implements OnInit {
    
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  
    // userData: User;
  didLogin = false;
  isSubmitted = false;
  tokenExists = false;
  authLoginSub: any;
  registerMode = false;
  registerLoginSub: any;
  error:any;

  constructor(
    private authAPI: AuthAPIService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private cookieService: CookieService) { }

  ngOnInit(): void {

    this.tokenExists = this.authAPI.checkToken();
    if(this.tokenExists){
      this.authAPI.logoutUser().subscribe((result: any)=>{
        if(result){
          this.authAPI.performLogout();
        }
      });
    }


    
  } 


  saveForm() {

    this.isSubmitted = true;
    if(this.loginForm.invalid){
      return;
    }
    this.authLoginSub = this.authAPI.loginUser(this.loginForm.value).subscribe(
    (result: any) => {
      var email = this.loginForm.value['email']
      this.authAPI.performLogin(result['key'], this.loginForm.value);
      this.didLogin = true;
      
    }, 
    error =>   this.error = error['error']['non_field_errors'][0]); 
  }
   
  get formControls() {
    let authLoginData = new AuthLoginData(
      this.loginForm.value['email'],
      this.loginForm.value['password'])
      return this.loginForm.controls;
     //console.log(authLoginData) 
   }
   
  performLogout(msg?:string){
   this.cookieService.delete('auth-token', '/')
   this.cookieService.delete('user-info', '/')
   this.router.navigate(['/'])
   //console.log(msg)
  } 

  ngOnDestroy(){
    if (this.authLoginSub){
      this.authLoginSub.unsubscribe()
    }
  } 
}