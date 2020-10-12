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
  maritalStatus: FormGroup;
  salaryFormGroup: FormGroup;

  constructor(
    private sessionService: SessionService,
    private router: Router,
    private _formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    // this.sessionService.checkAuthAndRedirect(true); //un commented for now but put back later.
    this.maritalStatus = this._formBuilder.group({
      maritalStatusCtrl: ['', Validators.required]
    });

    this.salaryFormGroup = this._formBuilder.group({
      salaryCtrl: ['', Validators.required]
    });

  }

}
