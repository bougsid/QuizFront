import { Component, OnInit } from '@angular/core';
import { QuizService } from "../quiz/quiz.service";
import { Quiz } from "../add-quiz/quiz";
import { User } from "../login/User";
import { QuizUserAssociation } from "../information/QuizUserAssociation";
import { UserService } from "../users/user.service";

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {

  private quizzes: Array<Quiz>;
  private totalItems;
  private currentPage = 1;
  private itemsPerPage = 1;
  private quiz: Quiz;


  constructor(private quizService: QuizService, private userService: UserService) {

  }

  ngOnInit() {
    this.quizService.getQuizzes(this.currentPage - 1, this.itemsPerPage).subscribe(result => {
      this.quizzes = result;
      this.totalItems = this.quizService.totalItems;
      console.log(this.quizzes);
    });
  }

  selectCandidates(quiz: Quiz) {
    this.quiz = quiz;
  }

  affectQuizToUsers($event) {
    let selectedUsers: Array<User> = $event;
    this.quiz.active = true;
    /*selectedUsers.forEach(user => {
      if (user.quizzes == null) user.quizzes = new Array<Quiz>();
      user.quizzes.push(this.quiz);
    });*/
    let selectedUsersIds = selectedUsers.map(u => u.id);
    console.log("ID");
    console.log(selectedUsersIds);
    this.quizService.affectQuizToUsers(selectedUsersIds, this.quiz).subscribe(result => {
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
