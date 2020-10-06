import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { SessionService } from '../session.service';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})
export class TermsComponent implements OnInit {

  constructor(
    private sessionService: SessionService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.sessionService.checkAuthAndRedirect();
  }

  accept(): void {
    this.sessionService.acceptedTerms = true;
    this.sessionService.checkAuthAndRedirect();
  }

  decline(): void {
    this.sessionService.acceptedTerms = false;
    this.router.navigate(['/']);
  }

}
