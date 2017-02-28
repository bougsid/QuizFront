import {Component, OnInit, Input} from '@angular/core';
import {AddQuestionService} from "./add-question.service";
import {Question} from "./question";
import {Option} from "./Option";

@Component({
  selector: 'add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  @Input()
  private question: Question = new Question();


  constructor(private addQuestionService: AddQuestionService) {
  }

  ngOnInit() {
  }

  addQuestion(event) {
    console.log(event);
    this.addQuestionService.addQuestion(this.question).subscribe(result => console.log(result));
  }

  addNewOption() {
    this.question.options.push(new Option());
  }

  removeQuestion(index) {
    this.question.options.splice(index, 1);
  }

}
