
import { CommonModule } from "@angular/common";
import { KeysPipe } from "./keys.pipe";
import { NgModule } from "@angular/core";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [KeysPipe],
  exports: [KeysPipe]
})
export class KeysPipeModule {
}
