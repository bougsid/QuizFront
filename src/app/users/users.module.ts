import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PaginationModule} from "ng2-bootstrap";
import {FormsModule} from "@angular/forms";
import {UserService} from "./user.service";
import { UsersComponent } from "./users.component";
import { UserTableModule } from "../user-table/user-table.module";

@NgModule({
  imports: [
    CommonModule,
    PaginationModule,
    FormsModule,
    UserTableModule
  ],
  exports :[UsersComponent],
  declarations: [UsersComponent],
  providers : [UserService]
})
export class UsersModule { }
