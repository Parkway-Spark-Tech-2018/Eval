//Import sessions
import {Session} from './Session';

//Import the API
import {EvalApi} from '../api/EvalApi';

export class StudentSchedule {
  id:number;
  session_id1:number;
  session_id2:number;
  session_id3:number;
  session_id4:number;
  session_id5:number;
  session_id6:number;
  session_id7:number;
  session_id8:number;
  student_id:number;

  constructor() {

  }

  static getSessionIdList (schedule:StudentSchedule) {


    return [
            schedule.session_id1,
            schedule.session_id2,
            schedule.session_id3,
            schedule.session_id4,
            schedule.session_id5,
            schedule.session_id6,
            schedule.session_id7,
            schedule.session_id8
          ]

  }

  //TODO
  static getSessions(schedule:StudentSchedule, api: EvalApi) {

    var session_id_list:Number[] = StudentSchedule.getSessionIdList(schedule);

    var sessions_promise = new Promise (function (resolve, reject) {

      api.getSessions().then (function (sessions:Session[]) {
        var filtered_sessions = sessions.filter (function (session:Session) {
          return session_id_list.includes(Number(session.id));
        })

        resolve(filtered_sessions);
      }).catch (function (err) {
        reject (err);
      })

    })

    return sessions_promise;

  }

}
