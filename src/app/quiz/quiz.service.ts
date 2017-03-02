/**
 * Created by bougsid.ayoub on 2/24/2017.
 */
import {Injectable} from '@angular/core';
import {Response} from "@angular/http";
import {Observable} from "rxjs";
import {AuthHttp} from 'angular2-jwt';
import {InformationService} from "../information/information.service";
import {QuizUserAssociation} from "../information/QuizUserAssociation";
@Injectable()
export class QuizService {
    public totalPages: number;
    public totalItems: number;
    private quizzesApiURL: string = "http://localhost:8080/api/quizzes";
    private quizApiURL: string = "http://localhost:8080/api/quiz";


    constructor(private http: AuthHttp, private informationService: InformationService) {
    }

    getQuizzes(page: Number, size: Number): Observable<Array<any>> {
        // let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});
        // headers.append('Authorization', 'Bearer ' + localStorage.getItem('id_token'));
        // let options = new RequestOptions({method: RequestMethod.Get, headers: headers});
        return this.http.get(this.quizzesApiURL + "?page=" + page + "&size=" + size)
            .map(res => this.extractData(res))
            .catch(this.handleError);
    }

    getQuizzesOfLoggedUser(page: Number, size: Number): Observable<any> {
        return this.http.get(this.quizApiURL + "/user-quizzes?page=" + page + "&size=" + size)
            .map(res => {
                return res.json();
            })
            .catch(this.handleError);
    }

    getQuiz(id: number) {
        return this.http.get(this.quizApiURL + "/" + id)
            .map(res => this.extractDataQuiz(res))
            .catch(this.handleError);
    }

    submitQuiz(quiz: any): Observable<any> {
        return this.http.post(this.quizApiURL + "/result", quiz)
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

    private extractDataQuiz(res: Response) {
        let body = res.json();
        return body || {};
    }

    private extractData(res: Response) {
        let body = res.json();
        this.totalPages = body.page.totalPages;
        this.totalItems = body.page.totalElements;
        return body._embedded.quizzes || {};
    }
}
