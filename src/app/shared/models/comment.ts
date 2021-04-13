import {IModel} from './model';

export interface IComment extends IModel {
    postId?: number;
    name?: string;
    email?: string;
    body?: string;
}
