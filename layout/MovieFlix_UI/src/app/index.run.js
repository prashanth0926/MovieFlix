(function() {
  'use strict';

  angular
    .module('movieFlixUi')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {
    $log.debug('runBlock end');
  }

})();
