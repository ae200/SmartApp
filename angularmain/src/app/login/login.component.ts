import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';

import { AuthAPIService } from '../auth/auth.service';
import { AuthLoginData } from '../auth/auth';
import { User } from '../auth/user';

const endpoint = '/dramaapi/dramamovies/'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   userData:User;
   username: string; 

  constructor(private authAPI: AuthAPIService) { }

  ngOnInit(): void {
    //let data = {username: "3smarts_adegbenga", password: "3Smarts3300"}
    let authLoginData = new AuthLoginData("adegbenga@3smartsflix", "3Smarts3300")
    this.doLogin(authLoginData)
   }
   doLogin(data){
    this.authAPI.login(data).subscribe(data=>{
      // let newUser = new User()
      // newUser.username = data['user']
      // newUser.token = data['token']
      // newUser.id = 123
      this.userData = data as User
   })
  }

}
