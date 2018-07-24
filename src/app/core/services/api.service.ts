import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
	providedIn: 'root'
})
export class ApiService {

	constructor(
		private http: HttpClient
	) { }

	getUrl(path: string): string {
		if (path[0] === '/') {
			return environment.apiUrl + path;
		} else {
			return path;
		}
	}

	get(path: string): Observable<any> {
		return this.http.get(this.getUrl(path));
	}

	put(path: string, data: any): Observable<any> {
		return this.http.put(this.getUrl(path), data);
	}

	post(path: string, data: any): Observable<any> {
		return this.http.post(this.getUrl(path), data);
	}

	patch(path: string, data: any): Observable<any> {
		return this.http.patch(this.getUrl(path), data);
	}

	delete(path: string): Observable<any> {
		return this.http.delete(this.getUrl(path));
	}

}
