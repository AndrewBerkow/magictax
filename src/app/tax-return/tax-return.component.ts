import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { SessionService } from '../session.service';
import { TaxService} from '../tax.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-tax-return',
  templateUrl: './tax-return.component.html',
  styleUrls: ['./tax-return.component.css']
})
export class TaxReturnComponent implements OnInit {

  maritalStatus: null;
  salary: null;
  taxesPaid: null;

  maritalStatusFormGroup: FormGroup;
  salaryFormGroup: FormGroup;
  taxesPaidFormGroup: FormGroup;

  constructor(
    private sessionService: SessionService,
    public taxService: TaxService,
    private router: Router,
    private _formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    this.sessionService.checkAuthAndRedirect(true);
    this.maritalStatusFormGroup = this._formBuilder.group({
      maritalStatusCtrl: ['', Validators.required]
    });

    this.salaryFormGroup = this._formBuilder.group({
      salaryCtrl: ['', Validators.required]
    });

    this.taxesPaidFormGroup = this._formBuilder.group({
      taxesPaidCtrl: ['', Validators.required]
    });

  }

  submit(): void {
    const reponse = this.taxService.saveRecord(
      this.sessionService.getEmail(), this.maritalStatus, this.salary, this.taxesPaid
    );
  }

}
