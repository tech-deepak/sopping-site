import { Injectable } from '@angular/core';
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor,
	HttpHeaders
} from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {
	private defaultHeaders = {
		'Content-Type': 'application/json',
		'Accept': 'application/json',
	}
	constructor() { }

	buildRequestHeaders(): HttpHeaders {
		const headers: any = this.defaultHeaders;
		let token = localStorage.getItem('token');
		if (!!token) {
			headers['Authorization'] = `Bearer ${JSON.parse(token)}`;
		}
		return new HttpHeaders(headers);
	}

	intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		const headers = this.buildRequestHeaders();

		const authReq = request.clone({ headers });
		return next.handle(authReq).pipe(map((event: HttpEvent<any>) => {
			return event;
		}))
	}
}
