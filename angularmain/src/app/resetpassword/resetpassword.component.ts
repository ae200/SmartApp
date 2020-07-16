import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthAPIService} from '../auth/auth.service';
import { CookieService } from 'ngx-cookie-service';
import {User} from '../auth/user';
@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  resetForm = new FormGroup({
    new_password1: new FormControl(''),
    new_password2: new FormControl(''),
    old_password: new FormControl(''),
    email: new FormControl(''),
    secretquestion: new FormControl(''),
    secretanswer : new FormControl(''),
  })
  public error: any;  
  public success: any;  
  questions:  string[] = [
    'What is your child name',
    'what is the name of your pet',
     'What is the name of your best friend ',
     'What is your pet’s name ?',
     'In what year was your father born ?',
     'What is your favorite food?',
  ]
    
  // userData: User;
  userData = this.authAPI.getUserData() 
  secretnumber = this.userData['secretquestion']
  secretquestion = this.questions[this.secretnumber];
  secretanswer = this.userData['secretanswer'];
  resetPaswwordSub:any;
  
  constructor(private authAPI: AuthAPIService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private cookieService: CookieService) { }

  resetFormSubmit(){
    this.resetForm.value['old_password'] = this.userData['oldpassword'];
    this.resetForm.value['secretquestion'] = this.userData['secretquestion'];
    this.resetForm.value['email'] = this.userData['email']
    this.resetPaswwordSub = this.authAPI.resetPassword(this.resetForm.value).subscribe((result:any)=>{
     if(result['error']){
       this.error= result['error'];
       this.success = false;
     }
     else{
       this.success= result['success'];
       this.error = false;
     }
    },
    error =>console.log(error)
    );
  }

  ngOnInit(): void {

  }

}
