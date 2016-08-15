/**
 * Created by Prashanth Molakala on 8/11/2016.
 */

(function () {
  'use strict';

  angular
    .module('movieFlixUi')
    .service('storage', storage);

  /** @ngInject */
  function storage($window) {

    this.storeValue = storeValue;
    this.getValue = getValue;
    this.storeObject = storeObject;
    this.getObject = getObject;
    this.remove = remove;

    function storeValue(key, value) {
      $window.localStorage[key] = value;
    }

    function getValue(key, defaultValue) {
      return $window.localStorage[key] || defaultValue;
    }

    function storeObject(key, value) {
      $window.localStorage[key] = angular.toJson(value);
    }

    function getObject(key, defaultValue) {
      return angular.fromJson($window.localStorage[key]) || defaultValue;
    }

    function remove(key) {
      $window.localStorage.removeItem(key);
    }

  }
})();
