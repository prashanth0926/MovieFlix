/**
 * Created by Prashanth Molakala on 8/4/2016.
 */

(function () {
  'use strict';

  angular
    .module('movieFlixUi')
    .controller('DetailsController', DetailsController);

  /** @ngInject */
  function DetailsController($uibModalInstance, movie, $log, movies, auth, $timeout, ngDialog) {
    var vm = this;

    vm.admin = auth.isAdmin();
    vm.username = auth.getUsername();
    vm.movie = movie;
    vm.srtText = '-date';
    vm.myReview = {rating: 5, comment: ''};
    vm.submitReview = submitReview;
    vm.cancel = cancel;
    vm.hover = false;
    vm.hoverText = '';
    vm.hoveringOver = hoveringOver;
    vm.tmpRating = 3;
    vm.clickText = 'Excellent!';
    vm.rtngText = rtngText;
    vm.myAnimation = 'rubberBand';
    vm.averageRating = averageRating();
    vm.editItem = editItem;
    vm.deleteItem = deleteItem;

    function averageRating() {
      var tRating = 0;
      for (var x = 0; x < vm.movie.Reviews.length; x++) {
        tRating += vm.movie.Reviews[x].rating;
      }
      return Number((tRating / vm.movie.Reviews.length).toFixed(0));
    }

    function editItem() {
      $timeout(function () {
        $uibModalInstance.close({movie: vm.movie, delFlag:false});
      }, 100);
    }

    function deleteItem() {
      ngDialog.openConfirm({
        template:'\
                <p>Confirm delete?</p>\
                <div class="ngdialog-buttons">\
                    <button type="button" class="ngdialog-button ngdialog-button-secondary btn btn-default" ng-click="closeThisDialog(0)">No</button>\
                    <button type="button" class="ngdialog-button ngdialog-button-danger btn btn-danger" ng-click="confirm(1)">Yes</button>\
                </div>',
        plain: true
      }).then(function () {
        $timeout(function () {
          movies.getApiMovies().delete({id: vm.movie._id}, function () {
            $log.debug(vm.movie.Title + ' deleted');
          }, function () {
            $log.error('error deleting '+vm.movie.Title);
          });
          $uibModalInstance.close({movie: vm.movie, delFlag:true});
        }, 500);
      }, function () {

      });
    }

    function submitReview() {
      movies.getReviews()
        .save({id: movie._id}, vm.myReview,
          function () {
            vm.myReview = {rating: 5, comment: ''};
            $uibModalInstance.close({movie: {}, delFlag:true});
          }, function () {
            $log.error('Review submission failed');
          });
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
