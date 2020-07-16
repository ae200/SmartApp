import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AuthAPIService} from '../auth/auth.service'; 
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-makepayments',
  templateUrl: './makepayments.component.html',
  styleUrls: ['./makepayments.component.css']
})
export class MakepaymentsComponent implements OnInit {

  constructor(private authAPI: AuthAPIService, private router: Router) { }

  ngOnInit(): void {
  }

  MakePremiumSubmit(){
    this.authAPI.makePremium().subscribe((result: any)=>{
      if(result['status'] == 'success'){
        window.open(result['data']['link'], "_blank");
        // window.location.href = ;
      }
      
    });
  }
}
