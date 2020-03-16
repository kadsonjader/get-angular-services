import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: Http) { }

  getComments(): Observable<Comment []>{
    return this.http.get('https://jsonplaceholder.typicode.com/comments')
          .map(response => response.json());
  }
}
