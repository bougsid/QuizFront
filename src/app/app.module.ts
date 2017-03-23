import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import appRoutes from './app.routes';
import {RouterModule} from "@angular/router";
import {AlertModule, PaginationConfig} from 'ng2-bootstrap';
import QuizModule from "./quiz/quiz.module";
import {AddQuizComponent} from './add-quiz/add-quiz.component';
import {AddQuestionComponent} from './add-question/add-question.component';
import AddQuestionModule from "./add-question/add-question.module";
import AddQuizModule from "./add-quiz/add-quiz.module";
import {HomeComponent} from './home/home.component';
import {AdminComponent} from './admin/admin.component';
import {AdminModule} from "./admin/admin.module";
import {HomeModule} from "./home/home.module";
import {LoginComponent} from './login/login.component';
import LoginModule from "./login/login.module";
import {AuthModule} from "./auth/auth.module";
import {AdminGuard} from "./auth/admin-guard.service";
import {InformationComponent} from './information/information.component';
import {QuizzesComponent} from './quizzes/quizzes.component';
import {UsersModule} from "./users/users.module";
import {UserQuizzesComponent} from './user-quizzes/user-quizzes.component';
import {SecondsToTimePipe} from "./secondsToTimePipe/SecondsToTimePipe";
import {SecondsToTimePipeModule} from "./secondsToTimePipe/seconds-to-time-pipe.module";
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { UserCategoryComponent } from './user-category/user-category.component';
import { UserTableComponent } from './user-table/user-table.component';
import { ComboBoxModule } from "ng2-combobox";
import { ScoreComponent } from './score/score.component';
import { KeysPipeModule } from "./score/keys-pipe.module";
@NgModule({
  declarations: [
    AppComponent,
    ScoreComponent,
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    AuthModule,
    LoginModule,
    ComboBoxModule,

    AdminModule,
    HomeModule,
    SecondsToTimePipeModule,
    KeysPipeModule,
    appRoutes
  ],
  providers: [PaginationConfig],
  bootstrap: [AppComponent]
})
export class AppModule {
}
