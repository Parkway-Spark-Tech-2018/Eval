import {StudentSchedule} from './StudentSchedule';

//Import the API
import {EvalApi} from '../api/EvalApi';

export class Student {

  id:number;
  full_name:string
  first_name:string;
  last_name:string;
  email:string;

  static getSchedule(student:Student, api:EvalApi) {

    return api.getScheduleByStudentId(student.id);

  }

}
