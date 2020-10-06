import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private router: Router) { }

  authed: boolean = false;
  acceptedTerms: boolean = false;

  checkAuthAndRedirect(): void {
    if(this.authed){
      if(this.acceptedTerms){
        this.router.navigate(['/tax-return']);
      }else{
        this.router.navigate(['/terms']);
      }
    }else{
      this.router.navigate(['/login']);
    }
  }
}
