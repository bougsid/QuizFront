import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {UserService} from "./user.service";
import {User} from "../login/User";

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Output() selectedUsersEmitter = new EventEmitter<Array<User>>();
  @Input() mode: string;
  private users: Array<User>;
  private selectedUsers: Array<User> = new Array<User>();
  private totalItems;
  private currentPage = 1;
  private itemsPerPage = 3;


  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUsers(this.currentPage - 1, this.itemsPerPage).subscribe(result => {
      this.users = result;
      this.totalItems = this.userService.totalItems;
    });
  }

  loadPage(event) {
    let page = event.page;
    this.userService.getUsers(page - 1, this.itemsPerPage).subscribe(result => {
      this.users = result;
      this.currentPage = page;
    });
  }

  onSelect(user: User, selected: boolean) {
    if (selected) {
      this.selectedUsers.push(user);
    } else {
      let index = this.selectedUsers.indexOf(user, 0);
      if (index > -1) {
        this.selectedUsers.splice(index, 1);
      }
    }
    console.log(this.selectedUsers);
  }

  emitSelectedUsers() {
    this.selectedUsersEmitter.emit(this.selectedUsers);
  }

}
