import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";
import "rxjs";

import { Question } from './question';

const HEADERS = new Headers({ "Content-Type": "application/json" })
const OPTIONS = new RequestOptions({ headers: HEADERS })

@Injectable()
export class QuestionService {

  public scope: Array<any> | boolean = false;

  constructor(private _http: Http) { }

  add_question(question: Question){
    return this._http.post("/add_question", question, OPTIONS)
    .toPromise()
  }

  get_all_questions(){
    return this._http.get("/all_questions", OPTIONS)
    .map(data => data.json())
    .toPromise()
  }

  logout(){
    return this._http.get("/logout")
    .toPromise()
  }

  check_status(){
    return this._http.get('/login_status')
    .map(data => data.json())
    .toPromise()
  }

  getScope(): Array<any> | boolean {
       return this.scope;
  }

  setScope(scope: any): void {
       this.scope = scope;
  }

}
