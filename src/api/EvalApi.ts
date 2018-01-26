import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class EvalApi {

  constructor(private http:HttpClient) {

  }

  getTeachers() {

    let teacher_promise = new Promise((resolve, reject) => {
      this.http.get('/assets/data/teachers.json')
        .toPromise()
        .then(
          res => {
            resolve(res);
          }
        ).catch (function (error) {
          reject(error);
        })
    });

    return teacher_promise;

  }

  getCourses() {

    let courses_promise = new Promise((resolve, reject) => {
      this.http.get('/assets/data/courses.json')
        .toPromise()
        .then(
          res => {
            resolve(res);
          }
        ).catch (function (error) {
          reject(error);
        })
    });

    return courses_promise;


  }

}
