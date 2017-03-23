import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserQuizzesComponent} from "./user-quizzes.component";
import {QuizService} from "../quiz/quiz.service";
import {PaginationModule} from "../pagination";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {SecondsToTimePipeModule} from "../secondsToTimePipe/seconds-to-time-pipe.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PaginationModule,
    RouterModule,
    SecondsToTimePipeModule
  ],
  declarations: [UserQuizzesComponent],
  providers: [QuizService]
})
export class UserQuizzesModule {
}
