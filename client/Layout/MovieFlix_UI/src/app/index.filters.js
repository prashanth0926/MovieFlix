/**
 * Created by Prashanth Molakala on 8/10/2016.
 */

(function () {
  'use strict';

  angular
    .module('movieFlixUi')
    .filter('startFrom', startFrom)
    .filter("genreFilter", genreFilter);

  /** @ngInject */
  function startFrom() {
    return function (input, start) {
      if (input) {
        start = +start;
        return input.slice(start);
      }
      return [];
    };
  }

  /** @ngInject */
  function genreFilter() {
    return function (input, searchText, AND_OR) {
      var returnArray = [],
        // Split on single or multi space
        splitext = searchText.toLowerCase().split(/\s+/),
        // Build Regexp with Logical AND using "look ahead assertions"
        regexp_and = "(?=.*" + splitext.join(")(?=.*") + ")",
        // Build Regexp with logicial OR
        regexp_or = searchText.toLowerCase().replace(/\s+/g, "|"),
        // Compile the regular expression
        re = new RegExp((AND_OR == "AND") ? regexp_and : regexp_or, "i");

      for (var x = 0; x < input.length; x++) {
        if (re.test(input[x]['Genre'])) returnArray.push(input[x]);
      }

      return returnArray;
    }
  }

})();
