import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import {Teacher} from '../models/Teacher';
import {Course} from '../models/Course';

import endpoint from './Endpoint';

@Injectable()
export class EvalApi {

  constructor(private http:HttpClient) {

  }

  getTeachers() {
    let teacher_promise = new Promise((resolve, reject) => {
      this.http.get('/assets/data/getTeachers')
        .toPromise()
        .then(
          res => {
            console.log(res);
            let teachers:Teacher[] = (<any[]>res).map(function (item){
              return <Teacher>{name: item, description: null};
            })

            resolve(teachers);
          }
        ).catch (function (error) {
          reject(error);
        })
    });

    return teacher_promise;

  }

  getCourses() {

    let courses_promise = new Promise((resolve, reject) => {
      this.http.get('/assets/data/getCourses')
        .toPromise()
        .then(
          res => {
            console.log(res);

            let courses:Course[] = (<any[]>res).map(function (item) {
              return <Course>{name: item, description: null}
            })

            resolve(courses);
          }
        ).catch (function (error) {
          reject(error);
        })
    });

    return courses_promise;


  }

}
