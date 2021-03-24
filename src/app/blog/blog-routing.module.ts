import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog.component';
import { NewsComponent } from './news/news.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PostComponent } from '../shared/components/posts/post/post.component';

const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
    children: [
      {
        path: 'news',
        component: NewsComponent
      },
      {
        path: 'news/:id',
        component: PostComponent
      },
      {
        path: 'about-us',
        component: AboutUsComponent
      },
      {
        path: '',
        redirectTo: 'news'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
