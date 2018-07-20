import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  // The URL where we will be post the data
  _url = '';

  constructor(private _http: HttpClient) { }

  enroll(user: User) {
    console.log("Make the POST request");
    return this._http.post<any>(this._url, user);
  }

}
