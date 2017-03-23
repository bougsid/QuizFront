/**
 * Created by bougsid.ayoub on 2/24/2017.
 */
import { Injectable } from '@angular/core';
import { Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs";
import { AuthHttp } from 'angular2-jwt';
import { InformationService } from "../information/information.service";
import { QuizUserAssociation } from "../information/QuizUserAssociation";
import { Quiz } from "../add-quiz/quiz";
import { User } from "../login/User";
import { Score } from "../scoreboard/score";
@Injectable()
export class ScoreService {
    private scoreApiURL: string = "http://localhost:8080/api/score";


    constructor(private http: AuthHttp) {
    }

    submitQuiz(quiz: any): Observable<any> {
        return this.http.post(this.scoreApiURL, quiz)
            .map(res => {
                return res.json();
            })
            .catch(this.handleError);
    }

    getScoreOfUserOnQuiz(user: string, quiz: string): Observable<Score> {
        return this.http.get(this.scoreApiURL + "/" + user + "/" + quiz)
            .map(res => res.json())
            .catch(this.handleError);
    }

    private handleError(error: Response | any) {
        console.log(error);
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
        return Observable.throw(new Error(error.status));
    }

}
