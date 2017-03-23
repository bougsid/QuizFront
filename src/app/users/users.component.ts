import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { UserService } from "./user.service";
import { User } from "../login/User";

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Output() selectedUsersEmitter = new EventEmitter<Array<User>>();
  @Input() mode: string;
  private users: Array<User>;
  private totalItems;
  private itemsPerPage = 3;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUsers(0, this.itemsPerPage).subscribe(result => {
      this.users = result;
      this.totalItems = this.userService.totalItems;
    });
  }

  loadPage(event) {
    let page = event.page;
    this.userService.getUsers(page - 1, this.itemsPerPage).subscribe(result => {
      this.users = result;
    });
  }

  emitSelectedUsers(event){
    this.selectedUsersEmitter.emit(event);
  }

}
