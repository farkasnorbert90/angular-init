import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable()
export class PostService {

	constructor(
		private apiService: ApiService
	) {}

	getAll(): Observable<any> {
		return this.apiService.get('https://jsonplaceholder.typicode.com/posts');
	}

	get(id: number|string): Observable<any> {
		return this.apiService.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
	}

}
