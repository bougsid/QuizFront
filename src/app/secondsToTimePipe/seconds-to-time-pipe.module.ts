import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SecondsToTimePipe} from "./SecondsToTimePipe";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SecondsToTimePipe],
  exports: [SecondsToTimePipe]
})
export class SecondsToTimePipeModule {
}
