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
        var myFlag = false;
        scope.getFlag = function () {
          return myFlag;
        };
        scope.destroyCarousel = function (element) {
          var owl = angular.element(element);
          //destroy carousel
          //owl.owlCarousel();
          //owl.data('owlCarousel').destroy();
          //owl.owlCarousel();
          owl.data('owlCarousel').destroy();
        };
        scope.reinitCarousel = function (element) {
          var owl = angular.element(element);
          //reinit carousel
          //owl.owlCarousel();
          owl.owlCarousel();
        };
        scope.initCarousel = function (element) {
          myFlag = true;
          // provide any default options you want
          var defaultOptions = {
            items: 6,
            autoPlay: 6000,
            lazyLoad: true,
            stopOnHover: true,
            afterAction: function () {
              if
              (this.itemsAmount > this.visibleItems.length) {
                angular.element('.next').show();
                angular.element('.prev').show();

                angular.element('.next').removeClass('disabled');
                angular.element('.prev').removeClass('disabled');
                if (this.currentItem == 0) {
                  angular.element('.prev').addClass('disabled');
                }
                if (this.currentItem == this.maximumItem) {
                  angular.element('.next').addClass('disabled');
                  if ((angular.element('#loginButton').text().trim() === "Login") && !(angular.element('.app-modal-login-window').hasClass('in'))) {
                    angular.element("#loginButton1").trigger('click');
                  }
                }

              } else {
                angular.element('.next').hide();
                angular.element('.prev').hide();
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
          owl.owlCarousel();
          //owl.data('owlCarousel').destroy();
          owl.owlCarousel(defaultOptions);
          //owl.data('owlCarousel').reinit();

          //angular.element('.dropdown-menu-form')
          angular.element(".prev").click(function () {
            owl.trigger('owl.prev');
          });
          angular.element(".next").click(function () {
            owl.trigger('owl.next');
          });
        };
      }
    };
  }

})();
