import {Course} from './Course'
import {Teacher} from './Teacher'

export class Result {

  public type:string;
  public result: Course | Teacher;

  constructor(type:string, result:Course | Teacher) {
    this.result = result;
    this.type = type;
  }

  static createCourseResult(course:Course) {
    return new Result("Course", course);
  }

  static createTeacherResult(teacher:Teacher) {
    return new Result("Teacher", teacher)
  }



}
