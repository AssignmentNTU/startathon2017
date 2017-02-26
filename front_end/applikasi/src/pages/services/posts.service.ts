import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PostsService {
    constructor(private http: Http){
        console.log('PostsService Initialized...');
    }

    getPosts(url){
        return this.http.get(url)
            .map(res => res.json());
    }

    postRequest(url, obj) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            console.log("RESPONSES", this.responseText)
        };
        xhttp.open("POST", url, true);
        xhttp.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        // send the collected data as JSON
        xhttp.send(JSON.stringify(obj));
    }
}