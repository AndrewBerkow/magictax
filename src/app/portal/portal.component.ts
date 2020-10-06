import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  getStarted(): void {
    //@todo - make these variables from a session service.
    //@todo - put this function in the session service as well to avoid going to to these pages without auth and accepting terms
    const authed = true;
    // const authed = false;
    const acceptedTerms = true;
    // const acceptedTerms = false;
    if(authed){
      if(acceptedTerms){
        this.router.navigate(['/tax-return']);
      }else{
        this.router.navigate(['/terms']);
      }
    }else{
      this.router.navigate(['/login']);
    }
  }

}
