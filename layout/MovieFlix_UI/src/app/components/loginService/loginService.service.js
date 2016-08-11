/**
 * Created by Prashanth Molakala on 8/11/2016.
 */



(function () {
  'use strict';

  angular
    .module('movieFlixUi')
    .service('login', login);

  /** @ngInject */
  function login($http, api) {

    this.login = login;
    this.getApiMovies = getApiMovies;

    function login() {
      return $http(
        {
          method: 'POST',
          url: (api + 'users/login')
        })
        .then(function (res) {
          var token = res.token;
          localStorage.setItem('TOKEN', token);
          $http.defaults.headers.common({'x-access-token':token});
        }, function (res) {

        });
    }

    function getApiMovies() {
      return [];
    }

  }
})();
