/**
 * Created by Prashanth Molakala on 8/8/2016.
 */

(function () {
  'use strict';

  angular
    .module('movieFlixUi')
    .directive('owlCarouselItem', owlCarouselItem);

  /** @ngInject */
  function owlCarouselItem() {
    return {
      restrict: 'A',
      transclude: false,
      link: function (scope, element) {
        if (scope.$last) {
          scope.initCarousel(element.parent());
        }
      }
    };
  }

})();
