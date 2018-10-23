import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { PostService } from '../../../core/services/post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  post = {};

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) { /* EMPTY */ }

  ngOnInit() {
    this.route.params
      .pipe(
        switchMap(params => this.postService.get(params.id))
      )
      .subscribe(post => {
        this.post = post;
      });
  }
}
