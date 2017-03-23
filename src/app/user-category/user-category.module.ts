import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from "../pagination";
import { FormsModule } from "@angular/forms";
import { UserCategoryComponent } from "./user-category.component";
import { UserService } from "../users/user.service";
import { UsersModule } from "../users/users.module";
import { UserTableModule } from "../user-table/user-table.module";

@NgModule({
  imports: [
    CommonModule,
    PaginationModule,
    FormsModule,
    UsersModule,
    UserTableModule
  ],
  exports :[UserCategoryComponent],
  declarations: [UserCategoryComponent ],
  providers : [UserService]
})
export class UserCategoryModule { }
