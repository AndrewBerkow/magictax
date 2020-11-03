import { Injectable } from '@angular/core';
import { Subject, fromEventPattern } from 'rxjs';
import { HttpClient } from "@angular/common/http"
import { Router } from "@angular/router";

// import { Record } from "./record.model";

import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaxService {

  taxReturnId: null;
  taxReturnValue: number = 0;
  returnSubmitted: boolean = false;
  m_status: string = "";
  income: number = 0;
  tax_paid: number = 0;
  backendApiEndpoint: string = "http://localhost:3000/api";

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  saveRecord(email: string, m_status: string, income, tax_paid) {
    const record = {
      email,
      m_status,
      income,
      tax_paid
    };

    return this.http
      .post<{ message }>(`${this.backendApiEndpoint}/records`, record)
      .subscribe(responseData => {
        const msg = responseData.message;
        this.taxReturnId = responseData.message._id;
        this.taxReturnValue = responseData.message.tax_return;
        this.returnSubmitted = true;
        this.router.navigate(['/refund']);
      });
  }

  //NEED TO USE EMAIL STRING IN QUERY BELOW & undo comments
  loadRecord(email: string) {
    return this.http
      .get<any>("http://localhost:3000/api/records/?email=k@tr.com")
      .subscribe(responseData => {
        // this.taxReturnId = responseData.foundRecord._id;
        this.m_status = responseData.foundRecord.m_status;
        // this.income = responseData.foundRecord.income;
        // this.tax_paid = responseData.foundRecord.tax_paid;
        // this.taxReturnValue = responseData.foundRecord.tax_return;
        this.returnSubmitted = true;
        this.router.navigate(['/tax-return']);
      });
  }



}

