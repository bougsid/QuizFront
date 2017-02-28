import {Component, OnInit, Input} from '@angular/core';
import {QuizService} from "./quiz.service";
import {Question} from "../add-question/question";
import {Quiz} from "../add-quiz/quiz";

@Component({
  selector: 'quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  private quizzes: Array<any>;
  @Input()
  private quiz: Quiz;

  private mode: string = 'quiz';

  private filtredQuestion: Question;

  private filtredQuestionIndex: number = 0;

  constructor(private quizService: QuizService) {

  }

  ngOnInit() {
    this.quizService.getQuizzes(0, 2).subscribe(result => {
      this.quizzes = result;
      this.quiz = this.quizzes[0];//To change
      this.filtredQuestion = this.quiz.questions[this.filtredQuestionIndex];
      console.log(this.quizzes);
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
      alert("Correct Question : " + result.mark);
    });
  }
}
