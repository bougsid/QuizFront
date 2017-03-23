import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoreComponent } from "./score.component";
import { ScoreService } from "./score.service";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ScoreComponent],
  providers : [ScoreService]
})
export class ScoreModule { }
