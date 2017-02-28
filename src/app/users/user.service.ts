/**
 * Created by bougsid.ayoub on 2/24/2017.
 */
import {Injectable} from '@angular/core';
import {Response, RequestOptions, Headers} from "@angular/http";
import {Observable} from "rxjs";
import {AuthHttp} from 'angular2-jwt';
import {User} from "../login/User";
import {QuizUserAssociation} from "../information/QuizUserAssociation";
@Injectable()
export class UserService {
  public totalPages: number;
  public totalItems: number;
  private usersApiURL: string = "http://localhost:8080/api/users";

  constructor(private http: AuthHttp) {
  }

  getUsers(page: Number, size: Number): Observable<Array<any>> {
    // let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});
    // headers.append('Authorization', 'Bearer ' + localStorage.getItem('id_token'));
    // let options = new RequestOptions({method: RequestMethod.Get, headers: headers});
    return this.http.get(this.usersApiURL + "?page=" + page + "&size=" + size)
      .map(res => this.extractData(res))
      .catch(this.handleError);
  }

  saveUsers(quizUserAssociations: Array<QuizUserAssociation>) {
    console.log(quizUserAssociations);
    var cache = [];
    let headers = new Headers({'Content-Type': 'application/json'}); // ... Set content type to JSON
    let options = new RequestOptions({headers: headers}); // Create a request option
    return this.http.post("http://localhost:8080/api/user/affect-quiz", JSON.stringify(quizUserAssociations, function (key, value) {
      if (typeof value === 'object' && value !== null) {
        if (cache.indexOf(value) !== -1) {
          // Circular reference found, discard key
          return;
        }
        // Store value in our collection
        cache.push(value);
      }
      return value;
    }), options)
      .map(res => this.extractData(res))
      .catch(this.handleError);
  }

  // submitQuiz(quiz: any): Observable<any> {
  //   return this.http.post(this.quizzesApiURL + "/result", quiz)
  //     .map(res => {
  //       return res.json();
  //     })
  //     .catch(this.handleError);
  // }

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

  // private extractData(res: Response) {
  //   let body = res.json();
  //   this.totalPages = body.totalPages;
  //   return body.content || {};
  // }

  private extractData(res: Response) {
    let body = res.json();
    this.totalPages = body.page.totalPages;
    this.totalItems = body.page.totalElements;
    return body._embedded.users || {};
  }
}
