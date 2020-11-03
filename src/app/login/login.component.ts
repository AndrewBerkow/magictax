import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { SessionService } from '../session.service';
import {Form, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailFormGroup: FormGroup;
  passwordFromGroup: FormGroup;

  constructor(
    private router: Router,
    private sessionService: SessionService,
    private _formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.sessionService.checkAuthAndRedirect();

    this.emailFormGroup = this._formBuilder.group({
      emailCtrl: ['', Validators.required, Validators.email]
    });

    this.passwordFromGroup = this._formBuilder.group({
      passwordCtrl: ['', Validators.required]
    });
  }

  login(): void {
    //@todo - validate this even though login will not be truly functional
    this.sessionService.authed = true;
    this.sessionService.acceptedTerms = true; //If logged in then agreed to T&C when created account.
    this.sessionService.checkAuthAndRedirect();
  }

  continueAsGuest(): void {
    this.sessionService.authed = true;
    //@todo logic for continue as guest, decide what that is
    this.sessionService.checkAuthAndRedirect();
  }

  createAccount(): void {
    this.router.navigate(['/create-account']);
  }

}
