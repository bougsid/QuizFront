import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InformationComponent} from "./information.component";
import {InformationService} from "./information.service";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [InformationComponent],
  providers : [InformationService]
})
export class InformationModule {
}
