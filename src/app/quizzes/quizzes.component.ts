import {Component, OnInit} from '@angular/core';
import {QuizService} from "../quiz/quiz.service";
import {Quiz} from "../add-quiz/quiz";
import {User} from "../login/User";
import {QuizUserAssociation} from "../information/QuizUserAssociation";
import {UserService} from "../users/user.service";

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {

  private quizzes: Array<Quiz>;
  private totalItems;
  private currentPage = 1;
  private itemsPerPage = 3;
  private quiz: Quiz;


  constructor(private quizService: QuizService, private userService: UserService) {

  }

  ngOnInit() {
    this.quizService.getQuizzes(this.currentPage - 1, this.itemsPerPage).subscribe(result => {
      this.quizzes = result;
      this.totalItems = this.quizService.totalItems;
    });
  }

  selectCandidates(quiz: Quiz) {
    this.quiz = quiz;
  }

  affectQuizToUsers($event) {
    let selectedUsers: Array<User> = $event;
    let quizUserAssociations: Array<QuizUserAssociation> = [];
    selectedUsers.forEach(user => {
      let quizUserAssociation = new QuizUserAssociation();
      quizUserAssociation.quiz = this.quiz;
      quizUserAssociation.quizId = this.quiz.id;
      quizUserAssociation.user = user;
      quizUserAssociation.userId = user.id;
      quizUserAssociations.push(quizUserAssociation);
      // if(!user.quizzes) user.quizzes = new Array<QuizUserAssociation>();
      // user.quizzes.push(quizUserAssociation);
    });
    this.userService.saveUsers(quizUserAssociations).subscribe(result => {
      console.log(result);
    });
  }

  loadPage(event) {
    let page = event.page;
    this.quizService.getQuizzes(page - 1, this.itemsPerPage).subscribe(result => {
      this.quizzes = result;
      this.currentPage = page;
    });
  }

}
