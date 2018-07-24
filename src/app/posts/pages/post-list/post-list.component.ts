import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../core/services/post.service';

@Component({
	selector: 'app-post-list',
	templateUrl: './post-list.component.html',
	styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
	posts = [];

	constructor(
		private postService: PostService
	) {}

	ngOnInit() {
		this.postService.getAll()
			.subscribe(posts => {
				this.posts = posts;
			});
	}
}
