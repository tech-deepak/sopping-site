import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class CommonService {

	constructor() { }
	jsonToQueryString = (params: any) => {
		return Object.keys(params).map((key) => {
			return key + '=' + params[key];
		}).join('&');
	}

	queryStringToJson = (params: string) => {

		if (!params) { return; }

		return JSON.parse('{"' + decodeURI(params).replace('?', '').replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
	}
}
