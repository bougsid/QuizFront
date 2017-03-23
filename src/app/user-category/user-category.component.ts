import { Component, OnInit } from '@angular/core';
import { UserCategory } from "./user-category";
import { UserService } from "../users/user.service";
import { User } from "../login/User";

@Component({
  selector: 'app-user-category',
  templateUrl: './user-category.component.html',
  styleUrls: ['./user-category.component.css']
})
export class UserCategoryComponent implements OnInit {

  private categories: Array<UserCategory>;
  private totalItems;
  private currentPage = 1;
  private itemsPerPage = 3;
  private userCategory: UserCategory;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getCategories(this.currentPage - 1, this.itemsPerPage).subscribe(result => {
      this.categories = result.content;
      console.log(result);
      this.totalItems = result.totalElements;
    });
  }

  loadPage(event) {
    let page = event.page;
    this.userService.getCategories(page - 1, this.itemsPerPage).subscribe(result => {
      this.categories = result;
      this.currentPage = page;
    });
  }

  setCurrentCategory(userCategory: UserCategory) {
    this.userCategory = userCategory;
  }
  getUsersOfCategory(userCategory: UserCategory) {
    this.setCurrentCategory(userCategory);
    
  }
  addUsersToCategory($event) {
    let selectedUsers: Array<User> = $event;
    if (this.userCategory.users == null) this.userCategory.users = new Array<string>();
    selectedUsers.forEach(user => {
      console.log(this.userCategory.users.indexOf(user.id));
      if (!(this.userCategory.users.indexOf(user.id) > -1))
        this.userCategory.users.push(user.id);
    });
    console.log(this.userCategory);
    this.userService.updateCategory(this.userCategory).subscribe(result => {
      console.log(result);
    });
  }
}
