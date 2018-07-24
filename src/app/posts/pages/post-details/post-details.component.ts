import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../core/services/post.service';
import { ActivatedRoute } from '@angular/router';
import 'rxjs-compat/add/operator/mergeMap';

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
	) {}

	ngOnInit() {
		this.route.params
			.mergeMap(params => this.postService.get(params.id))
			.subscribe(post => {
				this.post = post;
			});
	}
}
