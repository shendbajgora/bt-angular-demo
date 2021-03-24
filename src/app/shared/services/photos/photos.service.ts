import { Injectable } from '@angular/core';
import { GatewayService } from '../gateway/gateway.service';
import { HttpClient } from '@angular/common/http';
import { Urls } from '../../constants/urls';

@Injectable({
  providedIn: 'root'
})
export class PhotosService extends GatewayService {

  constructor(http: HttpClient) {
    super(http);

    this.setEndpoint(Urls.photos);
  }
}
