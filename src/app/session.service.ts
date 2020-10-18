import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private router: Router) { }

  // authed: boolean = true;
  // acceptedTerms: boolean = true;
  email: string = "testemail@test.com";

  authed: boolean = false;
  acceptedTerms: boolean = false;

  checkAuthAndRedirect(stayOnRoute = false): void {
    if(this.authed){
      if(this.acceptedTerms){
        if(!stayOnRoute){
          this.router.navigate(['/tax-return']);
        }
      }else{
        this.router.navigate(['/terms']);
      }
    }else{
      this.router.navigate(['/login']);
    }
  }

  getEmail(): string{
    return this.email;
  }
}
