import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient) {
  }

  getPost = () => {
    return this.http.get("https://jsonplaceholder.typicode.com/albums").toPromise()
      .then(res => res)
  }
}
