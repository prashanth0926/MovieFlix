/**
 * Created by Prashanth Molakala on 8/10/2016.
 */

(function () {
  'use strict';

  angular
    .module('movieFlixUi')
    .controller('AddController', AddController);

  /** @ngInject */
  function AddController($uibModalInstance, movie, $log) {
    var vm = this;

    vm.movieItem = movie;
    vm.movieItem.Year = releaseDate;
    vm.movieItem.Released = new Date(2016, 7, 11);
    vm.cancel = cancel;
    vm.addItem = addItem;
    vm.dateOptions = {
      formatYear: 'yyyy',
      maxDate: new Date(),
      minDate: new Date(1900, 1, 1),
      startingDay: 1,
      showWeeks: false
    };

    var releaseDate = new Date(), custDate = new Date();

    function cancel() {
      releaseDate = new Date(vm.movieItem.Released);
      custDate = releaseDate.toDateString();
      var dts = custDate.split(' ');
      var myDt = dts[2]+' '+dts[1]+' '+dts[3];
      $log.debug('releasedDate: ', myDt);
      $uibModalInstance.dismiss('cancel');
    }

    function addItem() {
      $uibModalInstance.close(vm.userinfo);
    }

  }
})();
