import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from "./home.component";
import {RouterModule} from "@angular/router";
import QuizModule from "../quiz/quiz.module";
import {InformationModule} from "../information/information.module";
import {UserQuizzesModule} from "../user-quizzes/user-quizzes.module";
import {SecondsToTimePipeModule} from "../secondsToTimePipe/seconds-to-time-pipe.module";

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    QuizModule,
    InformationModule,
    UserQuizzesModule,
    SecondsToTimePipeModule

  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule {
}
