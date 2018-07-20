import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from './user';

import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  // The URL where we will be post the data
  _url = 'http://localhost:3000/enroll';

  constructor(private _http: HttpClient) { }

  enroll(user: User) {
    console.log("Make the POST request");
    return this._http.post<any>(this._url, user)
      .pipe(catchError(this.errorHandler))
    
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }

}
