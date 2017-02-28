import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminComponent} from "./admin.component";
import AddQuizModule from "../add-quiz/add-quiz.module";
import AddQuestionModule from "../add-question/add-question.module";
import {RouterModule} from "@angular/router";
import {QuizzesModule} from "../quizzes/quizzes.module";
import {UsersModule} from "../users/users.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AddQuizModule,
    AddQuestionModule,
    QuizzesModule,
    UsersModule
  ],
  declarations: [AdminComponent]
})
export class AdminModule {
}
