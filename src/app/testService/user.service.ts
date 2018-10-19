import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable(
  /* {
    providedIn: 'root'
  } */
)
export class UserService {

  rest_api_url = 'http://www.shinstudy.com/wp1/wp-json/';

  constructor(
    private http: Http
  ) { }

  getTest() {
    return 'hahaha';
  }

  get_students_of_all() {
    let url = this.rest_api_url + 'sin-study/v1/students';
    return this.http.get(url)
      .pipe(
        map(res=>res.json()),
      );
  }
}
