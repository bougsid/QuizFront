import {Component, OnInit, Input} from '@angular/core';
import {QuizService} from "./quiz.service";
import {Question} from "../add-question/question";
import {Quiz} from "../add-quiz/quiz";
import {ActivatedRoute, Router} from "@angular/router";
import { Observable } from "rxjs";
import { ScoreService } from "../score/score.service";

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

  constructor(private quizService: QuizService,
              private scoreService: ScoreService, 
              private router: Router, 
              private route: ActivatedRoute) {}

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.quizService.getQuiz(id).subscribe(result => {
      console.log(result);
      this.quiz = result;
      this.filtredQuestion = this.quiz.questions[this.filtredQuestionIndex];
      this.timer = this.quiz.duration;
      if (this.mode == 'quiz')
        this.startTimer();
    }, error => {
      console.log(error.status);
      this.router.navigate(['home']);
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
    this.scoreService.submitQuiz(this.quiz).subscribe(result => {
      console.log('score ='+result);
      this.mode = 'result';
      this.result = result;
      this.timer = 0;
      console.log(result);
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
