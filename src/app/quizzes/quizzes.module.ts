import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QuizzesComponent} from "./quizzes.component";
import {PaginationModule} from "ng2-bootstrap";
import {FormsModule} from "@angular/forms";
import {UsersComponent} from "../users/users.component";
import {UsersModule} from "../users/users.module";
import {UserService} from "../users/user.service";

@NgModule({
  imports: [
    UsersModule,
    CommonModule,
    PaginationModule,
    FormsModule,
  ],
  declarations: [QuizzesComponent],
  providers: [UserService]
})
export class QuizzesModule {
}
