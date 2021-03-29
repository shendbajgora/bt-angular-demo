import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { UsersService } from '../../shared/services/users/users.service';
import { MatTable } from '@angular/material/table'
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
  showAddUser: boolean = false;
  @ViewChild(MatTable) table: MatTable<any>;

  btn = {
    label: '+ Add users',
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

  public toggleAddUser(): void {
    this.showAddUser = !this.showAddUser;
    this.btn.label = this.showAddUser ? '- Add users' : '+ Add users';
  }

  public addUser(user: IUser): void {
    this.dataSource.push(user);
    this.table.renderRows();
  }
}
