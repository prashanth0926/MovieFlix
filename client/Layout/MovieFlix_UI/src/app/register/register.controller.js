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
    vm.loading = false;

    function cancel() {
      $uibModalInstance.dismiss('cancel');
    }

    function sendRegister() {
      auth.register(vm.userinfo);
      vm.loading = true;
      $timeout(function () {
        vm.loading = false;
        if (auth.authenticated()){
          $uibModalInstance.close(vm.userinfo);
        } else {
          vm.loading = false;
          vm.userinfo = {firstname: '', lastname: '', username: vm.userinfo.username, password: ''};
          vm.invalidate = true;
        }
      }, 1750);
    }

  }
})();

