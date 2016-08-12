/**
 * Created by Prashanth Molakala on 8/4/2016.
 */

(function () {
  'use strict';

  angular
    .module('movieFlixUi')
    .controller('DetailsController', DetailsController);

  /** @ngInject */
  function DetailsController($uibModalInstance, movie, $log, movies) {
    var vm = this;

    vm.movie = movie;
    vm.srtText = 'date';
    vm.myReview = {rating: 5, comment: ''};
    vm.submitReview = submitReview;
    vm.cancel = cancel;
    vm.hover = false;
    vm.hoverText = '';
    vm.hoveringOver = hoveringOver;
    vm.tmpRating = 3;
    vm.clickText = 'Excellent!';
    vm.rtngText = rtngText;

    function submitReview() {
      movies.getReviews()
        .save({id: movie._id}, vm.myReview,
        function () {
          $log.debug('Review submitted');
        }, function () {
            $log.error('Review submission failed');
          });
      $log.info("Review: ", vm.myReview);
      vm.myReview = {rating: 5, comment: ''};
    }

    function cancel() {
      $uibModalInstance.dismiss('cancel');
    }

    function hoveringOver(value) {
      vm.hover = true;
      vm.tmpRating = value;
      switch (value) {
        case 1:
          vm.hoverText = 'Bad';
          break;
        case 2:
          vm.hoverText = 'Average';
          break;
        case 3:
          vm.hoverText = 'Good';
          break;
        case 4:
          vm.hoverText = 'Amazing!';
          break;
        case 5:
          vm.hoverText = 'Excellent!';
          break;
        default:
          vm.hoverText = '';
      }
    }

    function rtngText(rating) {
      switch (rating) {
        case 1:
          return 'Bad';
        case 2:
          return 'Average';
        case 3:
          return 'Good';
        case 4:
          return 'Amazing!';
        case 5:
          return 'Excellent!';
        default:
          return 'Excellent!';
      }
    }

  }
})();
