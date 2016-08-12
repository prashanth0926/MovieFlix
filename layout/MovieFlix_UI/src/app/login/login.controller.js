/**
 * Created by Prashanth Molakala on 8/4/2016.
 */

(function () {
  'use strict';

  angular
    .module('movieFlixUi')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($uibModalInstance, $uibModal, pleaseLogin, auth, $timeout) {
    var vm = this;

    vm.pleaseLogin = pleaseLogin;
    vm.credentials = {username: '', password: ''};
    vm.loginValidate = false;
    vm.cancel = cancel;
    vm.sendLogin = sendLogin;
    vm.openRegister = openRegister;

    function cancel() {
      $uibModalInstance.dismiss('cancel');
    }

    function sendLogin() {
      auth.login(vm.credentials);
      $timeout(function () {
        if(auth.authenticated()){
          $uibModalInstance.close();
        } else {
          vm.loginValidate = true;
        }
      }, 500);
    }

    function openRegister() {
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'app/register/register.html',
        controller: 'RegisterController',
        controllerAs: 'register',
        windowClass: 'app-modal-register-window',
        size: "md"
      });
      modalInstance.result.then(function () {
        /*vm.credentials.username = args.username;
        vm.credentials.password = '';*/
        vm.cancel();
      }, function () {

      });
    }

  }
})();
