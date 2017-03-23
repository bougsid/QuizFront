import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { AddQuizComponent } from "./add-quiz.component";
import { AddQuizService } from "./add-quiz.service";
import { AddQuestionComponent } from "../add-question/add-question.component";
import AddQuestionModule from "../add-question/add-question.module";
import { ComboBoxModule } from "ng2-combobox";
/**
 * Created by bougsid.ayoub on 2/24/2017.
 */
@NgModule({
    declarations: [
        AddQuizComponent,
        AddQuestionComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        AddQuestionModule,
        ComboBoxModule
    ],
    providers: [AddQuizService]
})

export default class AddQuizModule {
}

