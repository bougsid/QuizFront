/**
 * Created by bougsid.ayoub on 2/24/2017.
 */
import { Injectable } from '@angular/core';
import { Response, Http, Headers, RequestOptions, RequestMethod } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Subject } from "./subject";
import { AuthHttp } from "angular2-jwt/angular2-jwt";
@Injectable()
export class AddQuestionService {
  private totalPages: number;
  private questionsApiURL: string = "http://localhost:8080/api/question";

  constructor(private http: AuthHttp) {
  }

  addQuestion(question: any): Observable<any> {
    console.log(JSON.stringify(question));
    //let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    //let options       = new RequestOptions({ headers: headers });
    return this.http.post(this.questionsApiURL, JSON.stringify(question))
      .map(res => {
        return res.json();
      })
      .catch(this.handleError);
  }

  getSubjects(): Observable<Array<Subject>> {
    return this.http.get(this.questionsApiURL + "/subjects")
      .map(res => {
        return res.json();
      })
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  private extractData(res: Response) {
    let body = res.json();
    //this.totalPages = body.totalPages;
    return body.content || {};
  }
}
