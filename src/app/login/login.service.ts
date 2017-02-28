import {Injectable} from "@angular/core";
import {Response, Http, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs";
import {tokenNotExpired, JwtHelper} from 'angular2-jwt';

@Injectable()
export class LoginService {
  private url = 'http://localhost:8080/user/login';
  private jwtHelper: JwtHelper = new JwtHelper();

  constructor(private http: Http) {
  }

  login(username: string, password: string): Observable<any> {
    let headers = new Headers({'Content-Type': 'application/json'}); // ... Set content type to JSON
    let options = new RequestOptions({headers: headers}); // Create a request option
    console.log(username);
    console.log(password);
    return this.http.post(this.url, {username: username, password: password}, options) // ...using post request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }

  loggedIn() {
    return tokenNotExpired();
  }

  logout() {
    localStorage.removeItem('id_token');
  }

  isAdmin() {
    let token = localStorage.getItem('id_token');
    return this.jwtHelper.decodeToken(token).roles.indexOf('admin')>=0;
  }
}
