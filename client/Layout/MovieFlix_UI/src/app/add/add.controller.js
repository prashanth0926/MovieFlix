/**
 * Created by Prashanth Molakala on 8/10/2016.
 */

(function () {
  'use strict';

  angular
    .module('movieFlixUi')
    .controller('AddController', AddController);

  /** @ngInject */
  function AddController($uibModalInstance, movie, $log, movies, $timeout, editFlag) {
    var vm = this;

    vm.movieItem = movie;
    vm.editFlag = editFlag;
    vm.releasedDate = new Date();
    vm.runTime = 0;
    vm.modalTitle = '';
    if (vm.editFlag) {
      vm.modalTitle = 'Edit ' + vm.movieItem.Type + ' ' + vm.movieItem.Title;
      loadInputs();
    } else {
      vm.modalTitle = 'Add Movie / TV Series'
    }
    vm.releaseDateChange = releaseDateChange;
    vm.cancel = cancel;
    vm.addItem = addItem;
    vm.saveItem = saveItem;
    vm.dateOptions = {
      formatYear: 'yyyy',
      maxDate: new Date(),
      minDate: new Date(1900, 1, 1),
      startingDay: 1,
      showWeeks: false
    };

    function loadInputs() {
      var cDt1 = (vm.movieItem.Released).split(' ');
      vm.releasedDate.setDate(cDt1[0]);
      vm.releasedDate.setFullYear(cDt1[2]);
      vm.releasedDate.setMonth(getMonth(cDt1[1]));
      vm.runTime = parseInt(vm.movieItem.Runtime);
    }

    function getMonth(mnth) {
      switch (mnth) {
        case 'Jan':
          return 0;
        case 'Feb':
          return 1;
        case 'Mar':
          return 2;
        case 'Apr':
          return 3;
        case 'May':
          return 4;
        case 'Jun':
          return 5;
        case 'Jul':
          return 6;
        case 'Aug':
          return 7;
        case 'Sep':
          return 8;
        case 'Oct':
          return 9;
        case 'Nov':
          return 10;
        case 'Dec':
          return 11;
        default:
          return 8;
      }
    }

    function releaseDateChange() {
      vm.movieItem.Year = vm.releasedDate.getFullYear();
      var cDt = vm.releasedDate.toDateString().split(' ');
      vm.movieItem.Released = cDt[2] + ' ' + cDt[1] + ' ' + cDt[3];
    }

    function cancel() {
      $uibModalInstance.dismiss('cancel');
    }

    function addItem() {
      movies.getApiMovies().save(vm.movieItem, function () {
        $log.info('added ' + vm.movieItem.Type + ' ' + vm.movieItem.Title);
      }, function () {
        $log.error('Unable to add movie');
      });
      $timeout(function () {
        $uibModalInstance.close(vm.movieItem);
      }, 750);
    }

    function saveItem() {
      movies.getApiMovies().update({id: vm.movieItem._id}, vm.movieItem, function () {
        $log.info(vm.movieItem.Type + ' ' + vm.movieItem.Title + ' has been saved');
      }, function () {
        $log.error('Unable to update movie');
      });
      $timeout(function () {
        $uibModalInstance.close(vm.movieItem);
      }, 750);
    }

  }
})();
