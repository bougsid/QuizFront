import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import {LoginService} from "./login.service";
import {AuthGuard} from "../auth/auth-guard.service";
import {AdminGuard} from "../auth/admin-guard.service";


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [
    LoginComponent
  ],
  providers : [LoginService,AuthGuard,AdminGuard]
})
export default class LoginModule {}
