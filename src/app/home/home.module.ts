import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from "./home.component";
import {RouterModule} from "@angular/router";
import QuizModule from "../quiz/quiz.module";
import {InformationModule} from "../information/information.module";

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    QuizModule,
    InformationModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule {
}
