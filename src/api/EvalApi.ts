import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import {Teacher} from '../models/Teacher';
import {Course} from '../models/Course';
import {Department} from '../models/Department';

import endpoint from './Endpoint';

@Injectable()
export class EvalApi {

  constructor(private http:HttpClient) {

  }

  getTeachers() {
    let teacher_promise = new Promise((resolve, reject) => {
      this.http.get(endpoint + '/showTeachers')
        .toPromise()
        .then(
          res => {

            let teachers:Teacher[] = (<any[]>res).filter(function (item) {

              if (item["Staff_Id"] == "1") {
                return false;
              }else {
                return true;
              }

            }).map(function (item){
                return <Teacher>{name: item["First_Name"] + " " + item["Last_Name"],
                                 description: null,
                                 prefix: item["Prefix"],
                                 is_admin: <number>item["Is_Admin"],
                                 image: item["Image"],
                                 department_id: <number>item["Department_Id"],
                                 email: item["Email"],
                                 id: item["Staff_Id"] };
            })

            console.log(teachers)
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
      this.http.get(endpoint + '/showCourses')
        .toPromise()
        .then(
          res => {
            let courses:Course[] = (<any[]>res).map(function (item) {
              return <Course>{name: item["Course_Name"], description: null}
            })

            resolve(courses);
          }
        ).catch (function (error) {
          reject(error);
        })
    });

    return courses_promise;


  }

  getDepartments() {

    let departments_promise = new Promise((resolve, reject) => {
      this.http.get(endpoint + '/showDepartments')
        .toPromise()
        .then (
          res => {
            let departments:Department[] = (<any>res).map (function (item) {
              return <Department>{id: item.Department_Id, name: item.Department_Name, description: item.Department_Description}
            })
          }
        )
    })

  }

}
