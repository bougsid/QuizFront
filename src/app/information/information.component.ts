import {Component, OnInit} from '@angular/core';
import {InformationService} from "./information.service";
import {QuizUserAssociation} from "./QuizUserAssociation";
import {QuizService} from "../quiz/quiz.service";

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  private informations: Array<QuizUserAssociation>;

  constructor(private quizService : QuizService) {
  }

  ngOnInit() {
    // this.quizService.getQuizzesOfLoggedUser().subscribe(result => {
    //   this.informations = result;
    //   console.log(this.informations);
    // });
  }

}
