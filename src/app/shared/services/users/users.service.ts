import { Injectable } from '@angular/core';
import { GatewayService } from '../gateway/gateway.service';
import { HttpClient } from '@angular/common/http';
import { Urls } from '../../constants/urls';
import { IUser } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends GatewayService<IUser> {

  constructor(http: HttpClient) {
    super(http);

    this.setEndpoint(Urls.users);
  }
}
