import {Component, OnInit} from '@angular/core';
import {InformationService} from "./information.service";
import {QuizUserAssociation} from "./QuizUserAssociation";

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  private informations: Array<QuizUserAssociation>;

  constructor(private informationService: InformationService) {
  }

  ngOnInit() {
    this.informationService.getInformation().subscribe(result => {
      this.informations = result;
      console.log(this.informations);
    });
  }

}
