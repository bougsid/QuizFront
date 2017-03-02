import {Component, OnInit, Input} from '@angular/core';
import {QuizService} from "./quiz.service";
import {Question} from "../add-question/question";
import {Quiz} from "../add-quiz/quiz";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";

@Component({
    selector: 'quiz',
    templateUrl: './quiz.component.html',
    styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
    @Input()
    private quiz: Quiz;
    private result: number;
    private mode: string = 'quiz';

    private filtredQuestion: Question;

    private filtredQuestionIndex: number = 0;
    private timer: number;

    constructor(private quizService: QuizService, private route: ActivatedRoute) {

    }

    ngOnInit() {
        let id = this.route.snapshot.params['id'];
        console.log(id);
        this.quizService.getQuiz(id).subscribe(result => {
            this.quiz = result;
            this.filtredQuestion = this.quiz.questions[this.filtredQuestionIndex];
            this.timer = this.quiz.duration.seconds;
            if (this.mode == 'quiz')
                this.startTimer();
        });
    }

    nextQuestion() {
        if (this.filtredQuestionIndex + 1 >= 0 && this.filtredQuestionIndex + 1 < this.quiz.questions.length) {
            this.filtredQuestionIndex++;
            this.filtredQuestion = this.quiz.questions[this.filtredQuestionIndex];
        }
    }

    previousQuestion() {
        if (this.filtredQuestionIndex - 1 >= 0 && this.filtredQuestionIndex - 1 < this.quiz.questions.length) {
            this.filtredQuestionIndex--;
            this.filtredQuestion = this.quiz.questions[this.filtredQuestionIndex];
        }
    }

    submitQuiz() {
        this.quizService.submitQuiz(this.quiz).subscribe(result => {
            this.mode = 'result';
            this.result = result.mark;
            this.timer = 0;
            // alert("Correct Question : " + result.mark);
        });
    }

    private startTimer() {
        let timer = Observable.timer(0, 1000);
        let subscription = timer.subscribe(step => {
            this.timer -= 1;
            if (this.timer == 0) {
                this.submitResultWhenTimerEnd(subscription);
            }
        });
    }

    private submitResultWhenTimerEnd(subscription) {
        subscription.unsubscribe();
        this.submitQuiz();
        this.mode = 'result';
    }
}
