import { Injectable } from '@angular/core';
import { GatewayService } from '../gateway/gateway.service';
import { HttpClient } from '@angular/common/http';
import { Urls } from '../../constants/urls';
import { IPost } from '../../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService extends GatewayService<IPost> {

  constructor(http: HttpClient) {
    super(http);

    this.setEndpoint(Urls.posts);
  }
}
