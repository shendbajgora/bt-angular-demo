import { IModel } from './model';

export interface IPhoto extends IModel {
  id?: number;
  albumId?: number;
  title?: string;
  url?: string;
  thumbnailUrl?: string;
  img?: string;
}
