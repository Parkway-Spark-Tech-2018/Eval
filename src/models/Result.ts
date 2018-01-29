export class Result {

  public type:string;
  public name:string;

  constructor(type:string, name:string) {
    this.name = name;
    this.type = type;
  }

  static createCourseResult(name) {
    return new Result("Course", name);
  }

  static createTeacherResult(name) {
    return new Result("Teacher", name)
  }



}
