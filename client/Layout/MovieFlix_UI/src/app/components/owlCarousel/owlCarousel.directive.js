/**
 * Created by Prashanth Molakala on 8/8/2016.
 */

(function () {
  'use strict';

  angular
    .module('movieFlixUi')
    .directive('owlCarousel', owlCarousel);

  /** @ngInject */
  function owlCarousel() {
    return {
      restrict: 'E',
      transclude: false,
      link: function (scope) {
        scope.destroyCarousel = function (element) {
          var owl = angular.element(element);
          //destroy carousel
          //owl.owlCarousel();
          owl.data('owlCarousel').destroy();
        };
        scope.reinitCarousel = function (element) {
          var owl = angular.element(element);
          //reinit carousel
          //owl.owlCarousel();
          owl.data('owlCarousel').reinitCarousel(element);
        };
        scope.initCarousel = function (element) {
          // provide any default options you want
          var defaultOptions = {
            items: 6,
            lazyLoad: true,
            autoplay: true,
            autoplayHoverPause: true,
            autoplaySpeed: 4000,
            loop: false,
            responsiveClass: true,
            responsive: {
              0: {
                items: 1
              },
              600: {
                items: 3
              },
              1000: {
                items: 4
              },
              1300: {
                items: 6
              }
            }
          };
          var customOptions = scope.$eval(angular.element(element).attr('data-options'));
          // combine the two options objects
          for (var key in customOptions) {
            defaultOptions[key] = customOptions[key];
          }
          // init carousel
          var owl = angular.element(element);
          owl.owlCarousel(defaultOptions);

          angular.element(".prev").click(function () {
            owl.trigger('prev.owl.carousel', [500]);
          });
          angular.element(".next").click(function () {
            owl.trigger('next.owl.carousel',[500]);
          });

          owl.on('changed.owl.carousel',function (event) {
            angular.element('.next').removeClass('disabled');
            angular.element('.prev').removeClass('disabled');
            if (event.item.index == 0){
              angular.element('.prev').addClass('disabled');
            }
            if (event.page.index == (event.page.count-1)){
              angular.element('.next').addClass('disabled');
            }
          });

        };
      }
    };
  }

})();
