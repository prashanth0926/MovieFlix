/**
 * Created by Prashanth Molakala on 8/11/2016.
 */



(function () {
  'use strict';

  angular
    .module('movieFlixUi')
    .service('auth', auth);

  /** @ngInject */
  function auth($http, api, $resource, storage, $log) {

    var TOKEN_KEY = 'Token';
    var isAuthenticated = false;
    var username = '';
    var authToken = undefined;
    var admin = false;

    this.login = login;
    this.register = register;
    this.logout = logout;
    this.authenticated = authenticated;
    this.getUsername = getUsername;
    this.isAdmin = isAdmin;

    loadUserCredentials();

    function login(data) {
      $resource(api + 'users/login')
        .save(data,
          function (res) {
            storeUserCredentials({username: data.username, token: res.token});
          },
          function (res) {
            isAuthenticated = false;
            $log.error('Login Failed with status code: ', res.status);
          });
    }

    function register(data) {
      $resource(api + 'users/register')
        .save(data,
          function () {
            login({username: data.username, password: data.password});
          },
          function (res) {
            $log.error('Registration failed with status code: ', res.status);
          }
        );
    }

    function logout() {
      $resource(api + "users/logout")
        .get(function () {

          },
          function () {

          });
      admin = false;
      destroyUserCredentials();
    }

    function loadUserCredentials() {
      var credentials = storage.getObject(TOKEN_KEY, '{}');
      if (credentials.username != undefined) {
        useCredentials(credentials);
      }
    }

    function storeUserCredentials(credentials) {
      storage.storeObject(TOKEN_KEY, credentials);
      useCredentials(credentials);
    }

    function useCredentials(credentials) {
      if (credentials.username == 'admin@movieflix.com') {
        admin = true;
      }
      isAuthenticated = true;
      username = credentials.username;
      authToken = credentials.token;
      $http.defaults.headers.common['x-access-token'] = authToken;
    }

    function destroyUserCredentials() {
      authToken = undefined;
      $http.defaults.headers.common['x-access-token'] = authToken;
      username = '';
      isAuthenticated = false;
      storage.remove(TOKEN_KEY);
    }

    function authenticated() {
      return isAuthenticated;
    }

    function getUsername() {
      return username;
    }

    function isAdmin() {
      return admin;
    }

  }
})();
