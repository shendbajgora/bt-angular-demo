import {Component, Input, OnInit} from '@angular/core';
import {IComment} from '../../../models/comment';

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.scss']
})
export class PostCommentComponent implements OnInit {

  @Input() comments: IComment[];

  constructor() { }

  ngOnInit(): void {
  }

}
