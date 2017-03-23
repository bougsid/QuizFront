import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { User } from "../login/User";

@Component({
  selector: 'user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

  @Output() selectedUsersEmitter = new EventEmitter<Array<User>>();
  @Output() changePage = new EventEmitter<Array<number>>();
  @Input() mode: string;
  @Input() private users: Array<User>;
  @Input() private totalItems;
  private selectedUsers: Array<User> = new Array<User>();
  private currentPage = 1;
  private itemsPerPage = 3;


  constructor() {
  }

  ngOnInit() {
  }

  loadPage(event) {
    let page = event.page;
    this.changePage.emit(page);
    this.currentPage = page;
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
