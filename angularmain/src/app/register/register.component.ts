import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../auth/user';
//import {AuthAPIService} from '../auth/auth.service'; 
import { UserRegisterData } from './register';
import { ComparePassword } from './validators';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: []
})
export class RegisterComponent implements OnInit {
  registerData: User;
  registerForm: FormGroup;
  tokenExists = false; 
  userRegisterSub: any;
  isSubmitted= false;
  didRegister = false;
  registerErrors: any;
  //registerMode = false; 

  
  
  constructor() { }

 // public user = new UserData(null, null, null);

  ngOnInit(): void {
  //   this.registerForm  =  this.formBuilder.group({
  //   username: ['', [Validators.required, Validators.minLength(0), Validators.maxLength(280)]],
  //   email: ['', [Validators.required, Validators.minLength(0), Validators.maxLength(280)]],
  //   password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(280)]],
  //   password2: ['', Validators.required] 
  //  },

  //  { validator: ComparePassword('password', 'password2')

  // });

  //   this.tokenExists = this.authAPI.checkToken()
}

 
//   addUser() {
//       this.isSubmitted = true;
//       if(this.registerForm.invalid){
//       return;
//     }
//     this.userRegisterSub = this.authAPI.registerUser(this.registerForm.value).subscribe(data=>{
//     this.registerData = data as User
//     let token = this.registerData.token || null
//     let date = new Date (data.expires) 
//     this.authAPI.performRegister(data)
//     this.authAPI.setUserCookie(this.registerData)
//     this.didRegister = true;    
//   }, error=> {
//     console.log(error)
//     this.registerErrors = error['error']
//   })
//   this.router.navigateByUrl('/movies')   
// }  
 //    saveForm(data) {
 //    this.isSubmitted = true;
 //    if(this.registerForm.invalid){
 //      return;
 //  } 
 //    this.registerSub = this.authAPI.registerUser(this.registerForm.value).subscribe(data=>{
 //    this.userData = data as UserData //newUser
 //    //let token = this.registerData.token || null
 //    //let date = new Date (data.expires) 
 //    //this.authAPI.completeRegistration(data)
 //    //this.userService.setUserCookie(this.registerData)
 //    this.didRegister = true;
 //    }, error=> {
 //      console.log(error)
 //     this.registerErrors = error['error']
 //    })

 //    this.router.navigateByUrl('/home')
 // } 



// register(data) {
//     this.isSubmitted = true;
//     if(this.registerForm.invalid){
//       return;
//     }
//     this.registerSub = this.registerAPI.registerUser(this.registerForm.value).subscribe(data=>{
//     this.registerData = data as User //newUser
//     let token = this.registerData.token || null
//     let date = new Date (data.expires) 
//     this.registerAPI.performRegister(data)
//     this.registerAPI.setUserCookie(this.registerData)
//     this.didRegister = true;
//     }, error=> {
//       console.log(error)
//       this.registerErrors = error['error']
//     })
//     this.router.navigateByUrl('/home')
//   }

  // ngOnDestroy(){
  //   this.register.unsubscribe();
  //   }
   

  // get formControls() {
  //   let userRegisterData = new UserRegisterData(
  //     this.registerForm.value['username'],
  //     this.registerForm.value['email'],
  //     this.registerForm.value['password'])
  //       console.log(userRegisterData) 
  //   return this.registerForm.controls;
  // }
}
