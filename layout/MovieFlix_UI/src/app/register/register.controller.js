/**
 * Created by Prashanth Molakala on 8/4/2016.
 */

(function () {
  'use strict';

  angular
    .module('movieFlixUi')
    .controller('RegisterController', RegisterController);

  /** @ngInject */
  function RegisterController($uibModalInstance) {
    var vm = this;

    vm.userinfo = {firstname: '', lastname: '', username: '', password: ''};
    vm.cancel = cancel;
    vm.sendRegister = sendRegister;

    function cancel() {
      $uibModalInstance.dismiss('cancel');
    }

    function sendRegister() {
      $uibModalInstance.close(vm.userinfo);
    }

  }
})();

