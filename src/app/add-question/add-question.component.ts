import { Component, OnInit, Input } from '@angular/core';
import { AddQuestionService } from "./add-question.service";
import { Question } from "./question";
import { Option } from "./Option";
import { Subject } from "./subject";

@Component({
  selector: 'add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  @Input()
  private question: Question = new Question();
  private subjects: Array<Subject>;
  private levels: Array<{ level: string, name: string }> = new Array(
    { level: "BASIC", name: "Basic" },
    { level: "INTERMIDIATE", name: "Intermidiate" },
    { level: "ADVANCED", name: "Advanced" }
  );
  constructor(private addQuestionService: AddQuestionService) {

  }

  ngOnInit() {
    this.addQuestionService.getSubjects().subscribe(result => {
      console.log(result);
      this.subjects = result;
    });
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
