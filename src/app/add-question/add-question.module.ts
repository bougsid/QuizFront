import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {NgModule} from "@angular/core";
import {AddQuestionComponent} from "./add-question.component";
import {AddQuestionService} from "./add-question.service";
/**
 * Created by bougsid.ayoub on 2/24/2017.
 */
@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [AddQuestionService]
})

export default class AddQuestionModule {
}

