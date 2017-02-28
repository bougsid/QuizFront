import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {QuizService} from "./quiz.service";
import {QuizComponent} from "./quiz.component";
import QuestionModule from "../question/question.module";
import {QuestionComponent} from "../question/question.component";
import {FormsModule} from "@angular/forms";
import {AuthGuard} from "../auth/auth-guard.service";
/**
 * Created by bougsid.ayoub on 2/24/2017.
 */
@NgModule({
  declarations: [
    QuizComponent,
    QuestionComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    QuizService,
  ]
})

export default class QuizModule {}

