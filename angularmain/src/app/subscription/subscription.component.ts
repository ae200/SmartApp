import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import  * as intlTelInput from '../auth/intlTelInput.js'
// import * as IntelUtl from '../auth/'

import { AuthAPIService} from '../auth/auth.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {
  registerForm = new FormGroup({
    email: new FormControl(''),
    password1: new FormControl(''),
    password2: new FormControl(''),
    secretquestion: new FormControl(''),
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    secretanswer: new FormControl(''),
    displayname: new FormControl(''),
    phoneNo: new FormControl(''),
    phone_number: new FormControl(''),
    oldpassword: new FormControl(''),
  });

  constructor(
    private authAPI: AuthAPIService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private cookieService: CookieService)
     { }

  questions:  string[] = [
    'What is your child name',
    'what is the name of your pet',
     'What is the name of your best friend ',
     'What is your pet’s name ?',
     'In what year was your father born ?',
     'What is your favorite food?',
  ]

  didLogin = false;
  isSubmitted = false;
  tokenExists = false;
  authLoginSub: any;
  registerMode = false;
  registerLoginSub: any;
  error:any;
  iti:any;
  ngOnInit(): void {
    var input = document.querySelector("#phone");
      this.iti =  intlTelInput(input, {
        utilsScript: "/static/ang/assets/intel/build/js/utils.js",
        allowDropdown: true,
        separateDialCode: true,
        preferredCountries : [
        'ng'
        ],
        hiddenInput: "full",
        nationalMode: false,
        autoPlaceholder: "aggressive",
      })

  }
  registerFormSubmit(){
    this.isSubmitted = true;
    this.registerForm.value['phoneNo'] =  this.iti.getNumber();
    this.registerForm.value['displayname'] =  this.registerForm.value['firstname'] + " " + this.registerForm.value['lastname'];
    this.registerForm.value['oldpassword'] =  this.registerForm.value['password1'];
    this.registerLoginSub = this.authAPI.registerUser(this.registerForm.value).subscribe(
      (result: any) => {

       this.authAPI.performLogin(result['key'], this.registerForm.value);
      this.didLogin = true;

        
   
    }, 
    error => console.log(error) 
    );
  }

}
