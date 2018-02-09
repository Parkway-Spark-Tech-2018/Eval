import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public type:string;
  public review_name:string;
  public thumbs:boolean;
  public explanation:string;

  constructor() { }

  ngOnInit() {
  }

}
