import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { SessionService } from '../session.service';
import {Form, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  emailFormGroup: FormGroup;
  passwordFromGroup: FormGroup;

  constructor(
    private router: Router,
    private sessionService: SessionService,
    private _formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    //if authed redirect away from this page
    if(this.sessionService.authed){
      this.sessionService.checkAuthAndRedirect();
    }

    this.emailFormGroup = this._formBuilder.group({
      emailCtrl: ['', Validators.required, Validators.email]
    });

    this.passwordFromGroup = this._formBuilder.group({
      passwordCtrl: ['', Validators.required]
    });
  }

  createAccount(): void {
    //@todo - probably should do something here.
    this.sessionService.authed = true;
    this.sessionService.checkAuthAndRedirect();
  }


}
