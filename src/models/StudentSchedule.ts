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

  getSessionIdList() {

    return [
            this.session_id1,
            this.session_id2,
            this.session_id3,
            this.session_id4,
            this.session_id5,
            this.session_id6,
            this.session_id7,
            this.session_id8
          ]

  }

  //TODO
  getSessions() {

  }

}
