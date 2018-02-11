import {Teacher} from './Teacher';
import {Course} from './Course';

export class Review {

  public type:string;
  public subject: Teacher | Course;

  public thumbs:boolean;
  public comment:string;

  constructor() {}

  static createTeacherReview(subject:Teacher, thumbs: boolean, comment:string) {

    return <Review> {
      type: "Teacher",
      subject: subject,
      thumbs: thumbs,
      comment: comment
    };

  }

  static createCourseReview(subject: Course, thumbs:boolean, comment:string) {

    return <Review> {
      type: "Course",
      subject: subject,
      thumbs: thumbs,
      comment: comment
    };

  }

}
