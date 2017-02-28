import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {NgModule} from "@angular/core";
import {QuestionComponent} from "./question.component";
/**
 * Created by bougsid.ayoub on 2/24/2017.
 */
@NgModule({
  declarations: [
    QuestionComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [QuestionComponent],
  providers: []
})

export default class QuestionModule {
}

