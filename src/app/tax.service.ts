import { Injectable } from '@angular/core';
import { Subject, fromEventPattern } from 'rxjs';
import { HttpClient } from "@angular/common/http"
// import { Record } from "./record.model";

import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaxService {

  taxReturnId: null;
  backendApiEndpoint: string = "http://localhost:3000/api";

  constructor(private http: HttpClient) {}

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
      });
  }
}



// //CODE TO RECOVER DATA DOES NOT WORK YET

//  getRecordUpdateListener() {
//     return this.recordsUpdated.asObservable();
//   }
//   private records : Record[];
//   private recordsUpdated = new Subject<Record[]>(); // creates rxjs object holding an array of blogs
//   getRecord() {
//     this.getRecordFromServer()
//     .subscribe((data:any) => {
//       console.log(data);
//       this.records = data.data;
//     });
//   }

//   getRecordFromServer() {
//     return this.http.get("http://localhost:3000/api/records/?email=jw@t.org")
//         .pipe(
//            map((data: Record[]) => {
//              return data;
//            }), catchError( error => {
//              return throwError( 'Something went wrong!' );
//            })

//         )
//     }
