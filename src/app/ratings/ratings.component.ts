import { Component, OnInit } from '@angular/core';

import {OnChanges, SimpleChanges} from '@angular/core';

import {Input} from '@angular/core';

import {Review} from '../../models/Review';

@Component({
  selector: 'app-rating',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})
export class RatingsComponent implements OnInit {

  public amnt_bad:number;
  public amnt_good:number;

  @Input() reviews:Review[];

  public good_percentage = 0;
  public bad_percentage = 0;

  constructor() {

  }

  ngOnChanges(changes:SimpleChanges) {
    this.renderRatings();
  }

  ngOnInit() {
    this.renderRatings();
  }

  renderRatings() {
    this.updateScore(this.reviews);

    this.good_percentage = this.viewPercentage(this.amnt_good, (this.amnt_good + this.amnt_bad))
    this.bad_percentage = this.viewPercentage(this.amnt_bad, (this.amnt_good + this.amnt_bad));
  }

  GoodPercentageString() {
    return this.good_percentage + "%";
  }

  BadPercentageString() {

    if (this.good_percentage == 0 && this.bad_percentage == 0) {
      return "0%";
    }else if (this.good_percentage == 0) {
      return this.bad_percentage + "%";
    }

    return (100 - this.good_percentage) + "%";
  }


  viewPercentage(amnt:number, total:number) {
    let percentage:number = Math.floor(100 * (amnt/total));
    return percentage;
  }

  updateScore(reviews: Review[]) {

    let that = this;

    this.amnt_good = 0;
    this.amnt_bad = 0;

    reviews.forEach(function (review:Review) {

      if (review.thumbs === true) {
        that.amnt_good += 1;
      }else if (review.thumbs === false) {
        that.amnt_bad += 1;
      }

    })

  }

}
