import { IModel } from './model';

export interface IPost extends IModel {
  userId?: number;
  title?: string;
  body?: string;
}
