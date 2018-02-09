import {EvalUser} from '../models/EvalUser';

export class Review {

  public type:string;
  public review_name:string;
  public reviewer_name:string;
  public thumbs:boolean;
  public explanation:string;

  //public user:EvalUser;

  constructor(type:string, review_name:string, reviewer_name:string, thumbs:boolean, explanation:string) {

    this.type = type;
    this.review_name = review_name;
    this.reviewer_name = reviewer_name;
    this.thumbs = thumbs;
    this.explanation = explanation;

  }

  static createTeacherReview(teacher_name:string, thumbs, explanation) {

    return new Review("Teacher", teacher_name, "Peter"/*this.user.user_name*/, thumbs, explanation);

  }

  static createCourseReview(course_name:string, thumbs, explanation) {

    return new Review("Course", course_name, "Peter"/*this.user.user_name*/, thumbs, explanation);

  }

}
