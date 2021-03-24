import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { IRequest } from '../../models/request';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GatewayService<T = any> {

  private endpoint: string = environment.gateway;
  private initialRequest: IRequest = {
    path: '',
    body: {},
    queryParams: []
  };

  constructor(private http: HttpClient) {
  }

  public setEndpoint(endpoint: string): void {
    if (endpoint && endpoint.trim().length) {
      this.endpoint = `${this.endpoint}/${endpoint}`;
    }
  }

  public getEndpoint(): string {
    return this.endpoint;
  }

  public get gateway(): string {
    return environment.gateway;
  }

  create({path, body, queryParams}: IRequest = this.initialRequest, options?: any): Observable<T | any> {
    const endpoint = this.appendQueryParams(`${this.endpoint}${path}`, queryParams);
    return this.http.post<T>(endpoint, body, options);
  }

  public read({path, queryParams}: IRequest = this.initialRequest, options?: any): Observable<T | any> {
    const endpoint = this.appendQueryParams(`${this.endpoint}${path}`, queryParams);
    return this.http.get<T>(endpoint, options);
  }

  public readAll({path, queryParams}: IRequest = this.initialRequest, options?: any): Observable<T | any> {
    const endpoint = this.appendQueryParams(`${this.endpoint}${path}`, queryParams);
    return this.http.get<T[]>(endpoint, options);
  }

  public update({path, body, queryParams}: IRequest = this.initialRequest, options?: any): Observable<T | any> {
    const endpoint = this.appendQueryParams(`${this.endpoint}${path}`, queryParams);
    return this.http.put<T>(endpoint, body, options);
  }

  public delete({path, queryParams}: IRequest = this.initialRequest, options?: any): Observable<T | any> {
    const endpoint = this.appendQueryParams(`${this.endpoint}${path}`, queryParams);
    return this.http.delete<T>(endpoint, options);
  }

  public request(method: string, endpoint: string, options?: any): Observable<T | any> {
    return this.http.request(method, endpoint, options);
  }

  public appendQueryParams(url: string, queryParams: string[] = []): string {
    if (!queryParams.length) {
      return url;
    }
    return url + '?' + queryParams.join('&');
  }
}
