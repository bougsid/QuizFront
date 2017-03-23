import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ScoreboardComponent} from "./scoreboard.component";
import {QuizService} from "../quiz/quiz.service";
import { UserService } from "../users/user.service";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ScoreboardComponent],
  providers : [UserService]
})
export class ScoreboardModule { }
