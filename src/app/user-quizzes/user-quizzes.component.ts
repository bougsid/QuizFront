import {Component, OnInit} from '@angular/core';
import {QuizService} from "../quiz/quiz.service";
import {Quiz} from "../add-quiz/quiz";
import {QuizUserAssociation} from "../information/QuizUserAssociation";

@Component({
  selector: 'app-user-quizzes',
  templateUrl: './user-quizzes.component.html',
  styleUrls: ['./user-quizzes.component.css']
})
export class UserQuizzesComponent implements OnInit {

  private quizUserAssociations: Array<QuizUserAssociation>;
  private totalItems;
  private currentPage = 1;
  private itemsPerPage = 3;

  constructor(private quizService: QuizService) {
  }

  ngOnInit() {
    this.quizService.getQuizzesOfLoggedUser(this.currentPage - 1, this.itemsPerPage).subscribe(result => {
      this.quizUserAssociations = result;
    });
  }
  startQuiz(quiz){
    console.log('start Quiz');
  }
}
