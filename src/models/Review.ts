import {Teacher} from './Teacher';
import {Course} from './Course';

export class Review {


  public session_id:number;
  public schedule_id:number;
  public student_id:number;

  public thumbs:boolean;
  public comment:string;

  constructor() {}


  static createEmptySessionReview(session_id:number, schedule_id:number, student_id:number){

    return <Review> {
      session_id: session_id,
      schedule_id: schedule_id,
      student_id: student_id,
      thumbs: null,
      comment: ""
    }

  }

}
