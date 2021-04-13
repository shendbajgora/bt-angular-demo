import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PageHeadlineComponent } from './components/page-headline/page-headline.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostCardComponent } from './components/posts/post-card/post-card.component';
import { PostComponent } from './components/posts/post/post.component';
import { PostCommentComponent } from './components/posts/post-comment/post-comment.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    NotFoundComponent,
    PageHeadlineComponent,
    PostsComponent,
    PostCardComponent,
    PostComponent,
    PostCommentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule,
    MatCardModule,
    MatListModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    NotFoundComponent,
    PageHeadlineComponent,
    PostsComponent,
    PostComponent
  ]
})
export class SharedModule { }
