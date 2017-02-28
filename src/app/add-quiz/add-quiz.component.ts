import {Component, OnInit} from '@angular/core';
import {Quiz} from "./quiz";
import {AddQuizService} from "./add-quiz.service";
import {Question} from "../add-question/question";

@Component({
    selector: 'app-add-quiz',
    templateUrl: './add-quiz.component.html',
    styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {

    private quiz = new Quiz();
    private questions = new Array<Question>();

    constructor(private addQuizService: AddQuizService) {
    }

    ngOnInit() {
    }

    addQuiz(event) {
      console.log(JSON.stringify(this.quiz));
        // console.log(event);
        this.addQuizService.addQuiz(this.quiz).subscribe(result => console.log(result));
    }

    addNewQuestion() {
        this.quiz.questions.push(new Question());
    }

}
