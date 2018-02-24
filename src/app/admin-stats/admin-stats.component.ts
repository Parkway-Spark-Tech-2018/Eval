import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

/** Auth **/
import {AuthService} from '../providers/auth.service';
import {AngularFireAuth} from 'angularfire2/auth';

/** API **/
import {EvalApi} from '../../api/EvalApi';

/** Models **/
import {Teacher} from '../../models/Teacher';
import {Department} from '../../models/Department';
import {Review} from '../../models/Review';
import {Session} from '../../models/Session';
import {Course} from '../../models/Course';
import {EvalUser} from '../../models/EvalUser';
import {Student} from '../../models/Student';


@Component({
  selector: 'app-admin-stats',
  templateUrl: './admin-stats.component.html',
  styleUrls: ['./admin-stats.component.css'],
  providers: [EvalApi, AuthService,AngularFireAuth]
})
export class AdminStatsComponent implements OnInit {


  /** Chart stuff **/
  public pieChartLabels:string[] = ['Would Not Reccomend', 'Would Reccomend' ];
  public pieChartData:number[] = [0, 0];
  public pieChartType:string = 'pie';
  public pieChartColors= [
    {
      backgroundColor:["#d85252", "#83cc63"]
    }];
  public chartOptions = {
    responsive: true
  }

  /** Stat Params **/
  public reviews: Review[] = [];

  public subject_type:string;
  public subject: Course | Teacher;

  public teachers:Teacher[] = [];
  public courses:Course[] = [];
  public sessions:Session[] = [];
  public students:Student[] = [];

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private api: EvalApi,
      private auth: AuthService
    ) {

  }

  ngOnInit() {

    var sid:number = null;

    let that = this;

    //this.checkAdmin();

    that.api.getStudents().then (function (students:Student[]) {
      that.students = students;
    }).catch (function (err) {
      console.log(err);
    })


    that.getSubjectId().then (function (id:number) { // Get the Course/Teacher id
      sid = id;
      return that.getSubjectType();
    }).then (function (type:string) { // Get the type (i.e Course or Teacher)
      that.subject_type = type;
      return that.getSubject(that.subject_type, sid); // Get the Course/Teacher Object
    }).then (function (subject: Course | Teacher) {
      that.subject = subject
      return that.getSessions(that.subject_type, that.subject);

    }).then (function (sessions: Session[]){

      console.log(sessions);

      that.sessions = sessions;

      that.api.getCoursesFromSessions(sessions).then (function (courses:Course[]) {
        that.courses = courses;
      })

      that.api.getTeachersFromSessions(sessions).then (function (teachers:Teacher[]) {
        that.teachers = teachers;
      })

      return that.api.getReviewsBySessions(sessions);

    }).then (function (reviews: Review[]) {
      that.reviews = reviews;
      console.log(reviews);
      that.renderChart(that.reviews);


    })

  }

  sortBySessionHour(sessions:Session[]) {

    var sessions_sorted:Session[] = sessions.sort(function (session_a:Session, session_b:Session) {
      return session_a.hour - session_b.hour;
    })

    return sessions_sorted;

  }

  renderSessionByReview(review:Review) {
    return this.sessions.find (function (session:Session) {

      return review.session_id == session.id;

    })
  }

  getSessions(subject_type:string, subject: Course | Teacher) {

    let that = this;

    var sessions_promise = new Promise(function (resolve, reject) {

      var sessions_filter_promise = null;

      switch (subject_type) {
        case "course":
          sessions_filter_promise = that.api.getSessionsByCourse((<Course>subject).id);
          break;
        case "teacher":
          sessions_filter_promise = that.api.getSessionsByTeacher((<Teacher>subject).id);
          break;
        default:
          resolve([]);
      }

      sessions_filter_promise.then (function (sessions: Session[]) {
        resolve(sessions)
      }).catch (function (err) {
        reject (err);
      })

    })

    return sessions_promise;

  }

  getStudent(student_id) {

    return this.students.find(function (student:Student) {
      return student.id == student_id;
    })

  }

  checkAdmin() {

    this.auth.getUser().then (function (user: EvalUser) {
      if (user.type != 3) {
        alert("This user is not an admin!");
      }
    })

  }

  renderChart(reviews: Review[]) {
    var likes:number = 0;
    var dislikes:number = 0;

    reviews.forEach(function (review:Review) {
      switch (review.thumbs.toString()) {
        case "true":
          likes += 1;
          break;
        case "false":
          dislikes += 1;
          break;
        default:
          break;
      }
    })

    this.pieChartData = [dislikes, likes]

  }

  getSubjectType() { // Get the type (i.e Course or Teacher)
    var that = this;

    let query_promise = new Promise (function (resolve, reject) {
      that.route
      .queryParams
      .subscribe(params => {
        let subject_type = params["subject_type"] || null;
        resolve(subject_type);
      })
    });

    return query_promise;
  }

  getSubjectId() {
    var that = this;

    var that = this;

    let query_promise = new Promise (function (resolve, reject) {
      that.route
      .queryParams
      .subscribe(params => {
        let subject_id = params["subject_id"] || null;
        resolve(subject_id);
      })
    });

    return query_promise;
  }

  getCourseBySession(session_id:number) {
    let that = this;

    return this.courses.find (function (course:Course) {
      var session:Session = that.sessions.find(function (session:Session) {
        return session.id == session_id;
      })

      return course.id == session.course_id;
    })
  }

  getTeacherBySession(session_id:number) {

    let that = this;

    return this.teachers.find (function (teacher:Teacher) {

      var session:Session = that.sessions.find(function (session:Session) {
        return session.id == session_id;
      })

      return teacher.id == session.staff_id;

    })


  }

  getSubject(subject_type:string, subject_id:number) {

    let that = this;

    var subject_promise = new Promise(function (resolve, reject) {

      var s_promise = null;

      switch (subject_type) {
        case "course":
          s_promise = that.api.getCourseById(subject_id);
          break;
        case "teacher":
          s_promise = that.api.getTeacherById(subject_id);
          break;
        default:
          reject("Bad!")
      }

      s_promise.then (function (subject) {
        resolve(subject);
      }).catch (function (err) {
        reject(err);
      })

    });

    return subject_promise;

  }

}
