import { Component, OnInit } from '@angular/core';

import {Router, ActivatedRoute, ParamMap, NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public teacher_name:string;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    
  }

  leave_review() {

    let navigationExtras: NavigationExtras = {
      queryParams: {'teacherName': this.teacher_name}
    }

    this.router.navigate(['/review'], navigationExtras);

  }

}
