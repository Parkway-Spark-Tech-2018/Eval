import { Component, OnInit } from '@angular/core';

import {Router, ActivatedRoute, ParamMap, NavigationExtras} from '@angular/router';
import { Observable }         from 'rxjs/Observable';

/** Import Data api **/
import {EvalApi} from '../../api/EvalApi';

/** Import models **/
import {Result} from '../../models/Result';

import {Course} from '../../models/Course';
import {Teacher} from '../../models/Teacher';
import {Department} from '../../models/Department';

import * as fuzzysearch from 'fuzzysearch';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-search',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
  providers: [EvalApi],
})
export class DirectoryComponent implements OnInit {

  //I just added this code as well
  public teacherchecked: boolean = true;
  public courseschecked: boolean = true;
  //End of added code

  public show:boolean[] = [];

  public search_query:string;

  public courses:Course[] = [];

  public teachers:Teacher[] = [];

  public filter_mode:string = "all";

  public results:Result[] = [];

  public course_results:Result[] = [];
  public teacher_results:Result[] = [];

  public selected_results:Result[] = [];

  public departments:Department[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private eval_api: EvalApi) {

  }

  search(search_string) { //Search algorithm

    let search_results:Result[] = [];

    for (var course_idx in this.courses) {

      var course:Course = <Course>this.courses[course_idx]

      if (fuzzysearch(search_string.toLowerCase(), course.name.toLowerCase()) == true) {

        var course_result:Result = Result.createCourseResult(course);
        search_results.push(course_result);
      }

    }

    for (var teacher_idx in this.teachers) {
      var teacher:Teacher = <Teacher>this.teachers[teacher_idx]

      if (fuzzysearch(search_string.toLowerCase(), teacher.name.toLowerCase()) == true) {
        var teacher_result:Result = Result.createTeacherResult(teacher);
        search_results.push(teacher_result);
      }
    }

    return search_results;

  }

  viewCourse(id:number) {

    let navigationExtras: NavigationExtras = {
      queryParams: {'course_id': id}
    }

    this.router.navigate(['/course'], navigationExtras)
    window.location.reload();

  }

  viewTeacher(id:number) {

    let navigationExtras: NavigationExtras = {
      queryParams: {'teacher_id': id}
    }

    this.router.navigate(['/profile'], navigationExtras)
    window.location.reload();

  }
  view(type: string, id:number) {
    if (type === 'Teacher')
    {
      this.viewTeacher(id);
    }
    if (type === 'Course')
    {
      this.viewCourse(id);
    }
  }

  performSearch() { //Perform the search query
    let query_promise = this.route
      .queryParams
      .subscribe(params => {
        this.search_query = params['search_query'] || "";
        this.results = this.search(this.search_query);

        console.log(this.results);

        /** Teacher Filters **/
        this.teacher_results = this.results.filter(function (item) {
          return item.type == "Teacher";
        })

        /** Courses Filter **/

        this.course_results = this.results.filter(function (item) {
          return item.type == "Course";
        })

        /** Selected Results **/

        this.selected_results = this.results;


      })
  }

  /** Filtering results **/
  resetFilter() {
    /*this.filter_mode = "all"
    this.updateFilter();*/
    this.filterCourses();
  }

  filterCourses() {
    this.filter_mode = "courses";
    this.updateFilter();
  }

  filterTeachers() {
    this.filter_mode = "teachers";
    this.updateFilter();
  }

  //PETER ADDED THIS CODE

  filterAddTeachers() {
    if (this.filter_mode === "courses")
    {
      this.filter_mode = "all";
    }
    else
    {
      this.filter_mode = "teachers";
    }
    this.updateFilter();
  }
  filterRemoveTeachers() {
    if (this.filter_mode === "all")
    {
      this.filter_mode = "courses";
    }
    else
    {
      this.filter_mode = "none";
    }
    this.updateFilter();
  }

  filterAddCourses() {
    if (this.filter_mode === "teachers")
    {
      this.filter_mode = "all";
    }
    else
    {
      this.filter_mode = "courses";
    }
    this.updateFilter();
  }
  filterRemoveCourses() {
    if (this.filter_mode === "all")
    {
      this.filter_mode = "teachers";
    }
    else
    {
      this.filter_mode = "none";
    }
    this.updateFilter();
  }
  updateTeacher()
  {
    this.teacherchecked = !this.teacherchecked;
    if (this.teacherchecked === true)
    {
      this.filterAddTeachers();
    }
    else
    {
      this.filterRemoveTeachers();
      if (this.courseschecked == false)
      {
        this.updateCourses();
      }
    }
  }
  alternateTC()
  {
    console.log('Hello');
    if (this.filter_mode === "teachers")
    {
      this.filterCourses();
    }
    else //if (this.filter_mode === "courses")
    {
      this.filterTeachers();
    }
  }
  updateCourses()
  {
    this.courseschecked = !this.courseschecked;
    if (this.courseschecked === true)
    {
      this.filterAddCourses();
    }
    else
    {
      this.filterRemoveCourses();
      if (this.teacherchecked == false)
      {
        this.updateTeacher();
      }
    }
  }
  //END OF ADDED CODE
  /** Updating the results **/
  updateFilter() {

    switch(this.filter_mode) {
      case "all":
        this.selected_results = this.results;
        break;
      case "teachers":
        this.selected_results = this.teacher_results;
        break;
      case "courses":
        this.selected_results = this.course_results;
        break;
      case "none":
        this.selected_results = [];
    }

  }

  getDepartment(department_id:number) {

    var department = this.departments.find(function (department:Department) {
      return department.id == department_id;
    })

    return department.name;
  }

  ngOnInit() {

    let that = this;

    //Get the teacher and courses
    this.eval_api.getTeachers().then (function (data) {
      that.teachers = <Teacher[]> data;
      return that.eval_api.getCourses()
    }).then (function (data) {
      that.courses = <Course[]> data;
    }).then (function () {
      that.performSearch(); //Perform the search;
    })


    this.eval_api.getDepartments().then (function (departments:Department[]) {
      that.departments = departments
    })

    for (const dep of this.departments)
    {
      this.show.push(true);
    }

    this.filterCourses();

  }
}
