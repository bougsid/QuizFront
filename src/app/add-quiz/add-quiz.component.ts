import { Component, OnInit } from '@angular/core';
import { Quiz } from "./quiz";
import { AddQuizService } from "./add-quiz.service";
import { Question } from "../add-question/question";

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {

  private quiz = new Quiz();
  private questions = new Array<Question>();
  private duration: {
    days: number,
    hours: number,
    minutes: number
  } = {
    days: 0,
    hours: 0,
    minutes: 0
  };

  constructor(private addQuizService: AddQuizService) {
  }

  ngOnInit() {
  }

  addQuiz(event) {
    this.quiz.duration = this.durationToSeconds();
    console.log(JSON.stringify(this.quiz));
    this.addQuizService.addQuiz(this.quiz).subscribe(result => {
      this.quiz = new Quiz();
    });
  }

  addNewQuestion() {
    this.quiz.questions.push(new Question());
  }

  private durationToSeconds(): number {
    let seconds: number = 0;
    seconds += this.duration.days * 24 * 60 * 60;
    seconds += this.duration.hours * 60 * 60;
    seconds += this.duration.minutes * 60;
    return seconds;
  }

}
