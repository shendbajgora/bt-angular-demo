import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostsService } from '../../../services/posts/posts.service';
import { ActivatedRoute, Params } from '@angular/router';
import { IPost } from '../../../models/post';
import { Observable, Subscription } from 'rxjs';
import {IComment} from '../../../models/comment';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnDestroy {

  post: IPost;
  comments: IComment[] = [];

  btn = {
    label: 'Back',
    absolutePath: false,
    url: ['..']
  };

  subscription: Subscription = new Subscription();

  constructor(private postsService: PostsService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      if (params.id) {
        this.fetchPost(params.id);
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private fetchPost(id): void {
    this.subscription.add(this.postsService.read({ path: '/' + id}).subscribe(response => {
      this.post = response;
      this.fetchComments();
    }));
  }

  private fetchComments(): void {
    const request = {
      path: '/' + this.post.id + '/comments'
    };

    this.subscription.add(
        this.postsService.readAll(request).subscribe(response => {
          this.comments = response;
        })
    );
  }
}
