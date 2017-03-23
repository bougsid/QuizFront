import { Component, OnInit } from '@angular/core';
import { QuizUserAssociation } from "../information/QuizUserAssociation";
import { QuizService } from "../quiz/quiz.service";
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import { UserService } from "../users/user.service";
@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {


  private type: string;

  private users: Array<QuizUserAssociation>;
  private quizId: string;
  constructor(private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.quizId = this.activatedRoute.snapshot.params['id'];
    this.getQuizUsers(this.quizId);
  }

  getQuizUsers(quizId: string) {
    this.userService.getQuizUsers(quizId).subscribe(result => {
      console.log(result)
      this.users = result;
    });
  }

}
