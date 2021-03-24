import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsersService } from '../../shared/services/users/users.service';
import { IUser } from '../../shared/models/user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['name', 'username', 'email', 'phone'];
  dataSource: IUser[] = [];

  btn = {
    label: 'Add user',
    url: ['create'],
    absolutePath: false
  };

  subscription: Subscription = new Subscription();

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.fetchUsers();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private fetchUsers(): void {
    this.subscription = this.usersService.readAll().subscribe(response => {
      this.dataSource = response;
    });
  }
}
