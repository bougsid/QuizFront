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

const routes = [
  {
    path: 'login', component: LoginComponent, canActivate: [LoggedInGuard]
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {path: '', component: InformationComponent},
      {path: 'quiz', component: QuizComponent},
    ],
    canActivate: [AuthGuard]
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {path: '', component: QuizzesComponent},
      {path: 'add-quiz', component: AddQuizComponent},
      {path: 'add-question', component: AddQuestionComponent},
      {path: 'users', component: UsersComponent}
    ],
    canActivate: [AdminGuard]
  }];

 export default RouterModule.forRoot(routes);
