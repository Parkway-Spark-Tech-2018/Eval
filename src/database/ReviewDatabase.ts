import * as localForage from 'localforage';

import {Review} from "../models/Review";

export class ReviewDatabase {

  static getReviews() {

    var reviews_promise = new Promise (function (resolve, reject) {

      localForage.getItem('reviews').then (function (reviews) {

        if (reviews == null) {
          resolve([]);
        }

        resolve (reviews)

      }).catch (function (err) {
        resolve([]);
      })

    });

    return reviews_promise;

  }

  static updateReviews(reviews:Review[]) {

    var update_promise = new Promise (function (resolve, reject) {

      localForage.setItem('reviews', reviews).then (function (reviews) {
        resolve(<Review[]>reviews);
      }).catch (function (err) {
        reject(err);
      })


    })

    return update_promise;

  }

  static addReview(review:Review) {

    var add_review_promise = new Promise(function (resolve, reject) {

      ReviewDatabase.getReviews().then (function (reviews) {

        let new_reviews = <Review[]>reviews;
        new_reviews.push(review);

        return ReviewDatabase.updateReviews(new_reviews);

      }).then (function (updated_reviews) {
        resolve(<Review[]>updated_reviews);
      }).catch (function (err) {
        reject(err);
      })

    })

    return add_review_promise;

  }

}
