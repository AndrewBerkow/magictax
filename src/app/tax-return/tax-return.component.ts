import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { SessionService } from '../session.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-tax-return',
  templateUrl: './tax-return.component.html',
  styleUrls: ['./tax-return.component.css']
})
export class TaxReturnComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(
    private sessionService: SessionService,
    private router: Router,
    private _formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    this.sessionService.checkAuthAndRedirect(true);
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

}
