import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { SessionService } from '../session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private sessionService: SessionService
    ) { }

  ngOnInit(): void {
    this.sessionService.checkAuthAndRedirect();
  }

  continueAsGuest(): void {
    this.sessionService.authed = true;
    //@todo logic for continue as guest, decide what that is
    this.sessionService.checkAuthAndRedirect();
  }

  loginWithFacebook(): void {
    this.sessionService.authed = true;
    //@todo logic for facebook auth (or google), decide what that is
    this.sessionService.checkAuthAndRedirect();
  }

}
