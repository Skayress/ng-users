import { Component, OnInit } from '@angular/core';
import { UserService } from './../user-service/user-service';
import { User } from './../interfaces/interfaces';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(response => {
      this.users = response.data;
    });
  }
}
