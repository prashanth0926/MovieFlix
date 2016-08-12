(function() {
  'use strict';

  angular
    .module('movieFlixUi')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {
    $log.info('Visited MovieFlix on: ' + new Date());
  }

})();
