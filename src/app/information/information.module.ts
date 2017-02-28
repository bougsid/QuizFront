import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InformationComponent} from "./information.component";
import {InformationService} from "./information.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InformationComponent],
  providers : [InformationService]
})
export class InformationModule {
}
