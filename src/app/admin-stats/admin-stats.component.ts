import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-stats',
  templateUrl: './admin-stats.component.html',
  styleUrls: ['./admin-stats.component.css']
})
export class AdminStatsComponent implements OnInit {

  public pieChartLabels:string[] = ['Likes', 'Dislikes'];
  public pieChartData:number[] = [300, 500];
  public pieChartType:string = 'pie';
  public chartOptions = {
    responsive: true
  }

  constructor() { }

  ngOnInit() {
  }

}
