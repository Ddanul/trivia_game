import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";
import "rxjs";

import { User } from './user';

const HEADERS = new Headers({ "Content-Type": "application/json" })
const OPTIONS = new RequestOptions({ headers: HEADERS })

@Injectable()
export class LoginService {

  constructor(private _http:Http) { }

  login(user: User){
      console.log("user service", user)
      return this._http.post("/login", user, OPTIONS)
      .toPromise()
    }

  check_status(){
    return this._http.get('/login_status')
    .map(data => data.json())
    .toPromise()
  }

  logout(){
    return this._http.get("/logout")
    .toPromise()
  }



}
