import { Component, OnInit } from '@angular/core';
import { IPost } from '../../shared/models/post';
import { PostsService } from '../../shared/services/posts/posts.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  posts: Observable<IPost[]>;

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.fetchPosts();
  }

  private fetchPosts(): void {
    this.posts = this.postsService.readAll();
  }
}
