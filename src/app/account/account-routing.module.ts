import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { PhotosComponent } from './photos/photos.component';
import { PostsComponent } from '../shared/components/posts/posts.component';
import { PostComponent } from '../shared/components/posts/post/post.component';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'users/:id',
        component: UserComponent
      },
      {
        path: 'posts',
        component: PostsComponent
      },
      {
        path: 'posts/:id',
        component: PostComponent
      },
      {
        path: 'photos',
        component: PhotosComponent
      },
      {
        path: '',
        redirectTo: 'users'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
