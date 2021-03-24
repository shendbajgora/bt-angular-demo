import { IModel } from './model';

export interface IUser extends IModel {
  name?: string;
  surname?: string;
  username?: string;
  email?: string;
  password?: string;
  address?: {
    street?: string;
    city?: string;
    zipcode?: string;
  };
  phone?: string;
  website?: string;
  company?: {
    name?: string;
  };
}
