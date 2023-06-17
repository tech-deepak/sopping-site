import { HttpClient, HttpBackend, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { environment } from '../environments/environment';
import { CommonService } from './common.service';
import { query } from '@angular/animations';

@Injectable({
	providedIn: 'root'
})
export class ApiService {


	bashUrl = environment.bashUrl;
	headers: any

	constructor(
		private http: HttpClient,
		private handler: HttpBackend,
		private commonService: CommonService
	) {
		this.http = new HttpClient(handler);
		this.headers = new Headers();
		let token: any = localStorage.getItem('token');
		this.headers.append('Authorization', `Bearer ${JSON.parse(token)}`);
	}

	get(callback: string, queryParams: any = '', bashUrl = this.bashUrl) {
		if (!!queryParams && !!Object.keys(queryParams).length) {
			queryParams = `?${this.commonService.jsonToQueryString(queryParams)}`;
		}
		return this.http.get(bashUrl + callback + queryParams).pipe(
			map((res: any) => res),
			catchError(error => throwError(error.error || 'Server Error')));
	}

	post(callback: string, payload: any, bashUrl = this.bashUrl) {
		
		let token: any = localStorage.getItem('token');
		let requestH = { 'Authorization': `Bearer ${JSON.parse(token)}`};	
		let headers = new HttpHeaders(requestH);

		return this.http.post(bashUrl + callback, payload, { headers: headers }).pipe(
			map((res: any) => res),
			catchError(error => throwError(error.error || 'Server Error')));
	}

	put(callback: string, payload: any, bashUrl = this.bashUrl) {
		let token: any = localStorage.getItem('token');
		let requestH = { 'Authorization': `Bearer ${JSON.parse(token)}`};	
		let headers = new HttpHeaders(requestH);
		return this.http.put(bashUrl + callback, payload, { headers: headers }).pipe(
			map((res: any) => res),
			catchError(error => throwError(error.error || 'Server Error')));
	}

	patch(callback: string, payload: any, bashUrl = this.bashUrl) {
		return this.http.patch(bashUrl + callback, payload).pipe(
			map((res: any) => res),
			catchError(error => throwError(error.error || 'Server Error')));
	}

	delete(callback: string, payload?: any, bashUrl = this.bashUrl) {
		return this.http.delete(bashUrl + callback, payload).pipe(
			map((res: any) => res),
			catchError(error => throwError(error.error || 'Server Error')));
	}
}
