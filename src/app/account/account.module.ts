import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

import { AccountComponent } from './account.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { PhotosComponent } from './photos/photos.component';
import { PhotoComponent } from './photos/photo/photo.component';


@NgModule({
  declarations: [
    AccountComponent,
    UsersComponent,
    UserComponent,
    PhotosComponent,
    PhotoComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    SharedModule,
    MatSidenavModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule
  ]
})
export class AccountModule { }
