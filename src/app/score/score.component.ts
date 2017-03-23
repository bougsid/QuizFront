import { Component, OnInit } from '@angular/core';
import { ScoreService } from "./score.service";
import { ActivatedRoute } from "@angular/router";
import { Score } from "../scoreboard/score";

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  constructor(private scoreService: ScoreService, private activatedRoute: ActivatedRoute) { }
  private score: Score;
  ngOnInit() {
    let quizId = this.activatedRoute.snapshot.params['quiz'];
    let userId = this.activatedRoute.snapshot.params['user'];
    this.scoreService.getScoreOfUserOnQuiz(userId,quizId).subscribe(result => {
      this.score = result;
      console.log(this.score);
      console.log(this.score.scoreBySubject);
    });
  }
}
