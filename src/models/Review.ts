

export class Review {

  public type:string;
  public review_amnt:number;
  public name:string;

  constructor(type:string, name:string, review_amnt:number) {

    this.type = type;
    this.name = name;
    this.review_amnt = review_amnt;

  }

  static createTeacherReview(teacher_name:string, review_amnt:number) {

    return new Review("Teacher", teacher_name, review_amnt);

  }

  static createCourseReview(course_name:string, review_amnt:number) {

    return new Review("Course", course_name, review_amnt);

  }


}
