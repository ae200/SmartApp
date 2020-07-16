
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthAPIService} from '../auth/auth.service';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-resetemail',
  templateUrl: './resetemail.component.html',
  styleUrls: ['./resetemail.component.css']
})
export class ResetemailComponent implements OnInit {
  resetEmailForm = new FormGroup({
    email: new FormControl(''),
  })
    resetEmailSub:any;
    error: any;
  constructor(private authAPI: AuthAPIService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private cookieService: CookieService) { }
  resetEmailFormSubmit(){
    if(this.resetEmailForm.value['email'] == ""){
      this.error = "Email is required";
    }
    else{
      this.cookieService.delete('user-info');
      this.resetEmailSub = this.authAPI.setUserData(this.resetEmailForm.value).subscribe((result:any)=>{
        this.cookieService.set('user-info', JSON.stringify(result));
        if(result['email']){
          this.authAPI.loginUser({'email': result['email'], 'password': result['oldpassword']}).subscribe((logged: any)=>{
            this.authAPI.performLogin(logged['key'])     
            this.router.navigate(['/resetpassword'])
          });
        }
        else{
          this.error = result['error'];
        }
        
      }); 
    }
     
  }
  ngOnInit(): void {
  }

}
