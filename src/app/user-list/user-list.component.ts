import { Component, OnInit } from '@angular/core';
import { UserService } from './../user-service/user-service';
import { User, Users } from './../interfaces/interfaces';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(response => {
		const data: Users[] = response;
		console.log(data);
		
      this.users = data.data;
    });
  }
}
