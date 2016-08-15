/**
 * Created by Prashanth Molakala on 8/4/2016.
 */

(function () {
  'use strict';

  angular
    .module('movieFlixUi')
    .controller('RegisterController', RegisterController);

  /** @ngInject */
  function RegisterController($uibModalInstance, auth, $timeout) {
    var vm = this;

    vm.userinfo = {firstname: '', lastname: '', username: '', password: ''};
    vm.cancel = cancel;
    vm.sendRegister = sendRegister;
    vm.invalidate=false;

    function cancel() {
      $uibModalInstance.dismiss('cancel');
    }

    function sendRegister() {
      auth.register(vm.userinfo);
      $timeout(function () {
        if (auth.authenticated()){
          $uibModalInstance.close(vm.userinfo);
        } else {
          vm.userinfo = {firstname: '', lastname: '', username: '', password: ''};
          vm.invalidate = true;
        }
      }, 750);
    }

  }
})();

