import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserTableComponent } from "./user-table.component";
import { FormsModule } from "@angular/forms";
import { PaginationModule } from "../pagination";

@NgModule({
  imports: [
    CommonModule,
    PaginationModule,
    FormsModule
  
  ],
  declarations: [UserTableComponent],
  exports : [UserTableComponent]
})
export class UserTableModule { }
