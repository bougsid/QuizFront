import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input()
  private mode: string;
  @Input()
  private question: any;

  constructor() {
  }

  ngOnInit() {
  }

  onSelect(question, option) {
    if (option.selected)
      option.selected = false;
    console.log(option.selected);
  }
}
