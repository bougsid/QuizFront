/**
 * Created by bougsid.ayoub on 2/23/2017.
 */
import {RouterModule} from '@angular/router';
import {QuizComponent} from "./quiz/quiz.component";
import {QuestionComponent} from "./question/question.component";
import {AddQuizComponent} from "./add-quiz/add-quiz.component";
import {AddQuestionComponent} from "./add-question/add-question.component";
import {HomeComponent} from "./home/home.component";
import {AdminComponent} from "./admin/admin.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./auth/auth-guard.service";
import {AdminGuard} from "./auth/admin-guard.service";
import {InformationComponent} from "./information/information.component";
import {QuizzesComponent} from "./quizzes/quizzes.component";
import {UsersComponent} from "./users/users.component";
import {LoggedInGuard} from "./auth/loggedin-guard.service";
import {UserQuizzesComponent} from "./user-quizzes/user-quizzes.component";
import { ScoreboardComponent } from "./scoreboard/scoreboard.component";
import { UserCategoryComponent } from "./user-category/user-category.component";
import { ScoreComponent } from "./score/score.component";

const routes = [
  {path: 'login', component: LoginComponent, canActivate: [LoggedInGuard]},
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {path: '', redirectTo: 'quizzes/all', pathMatch: 'full',},
      {path: 'quizzes', redirectTo: 'quizzes/all', pathMatch: 'full', name: 'AllQuizzes'},
      {path: 'quizzes/:type', component: UserQuizzesComponent, name: 'ActiveQuizzes'},
      {path: 'quiz/:id', component: QuizComponent},
      {path: 'scoreboard/:id', component: ScoreboardComponent},
    ],
    canActivate: [AuthGuard]
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {path: '', redirectTo: 'quizzes', pathMatch: 'full'},
      {path: 'quizzes', component: QuizzesComponent},
      {path: 'add-quiz', component: AddQuizComponent},
      {path: 'add-question', component: AddQuestionComponent},
      {path: 'users', component: UsersComponent},
      {path: 'scoreboard/:id', component: ScoreboardComponent},
      {path: 'categories', component: UserCategoryComponent},
      {path: 'score/:user/:quiz', component: ScoreComponent},
    ],
    canActivate: [AdminGuard]
  }];

export default RouterModule.forRoot(routes);
