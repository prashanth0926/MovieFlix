(function() {
  'use strict';

  describe('Main controller', function(){
    var vm;

    beforeEach(module('movieFlixUi'));
    beforeEach(inject(function(_$controller_, _movies_) {
      spyOn(_movies_, 'getLocalMovies').and.returnValue([{}, {}, {}, {}, {}]);

      vm = _$controller_('MainController');

    }));

    it('should show 5 movies / tv series', function() {
      expect(angular.isArray(vm.movies)).toBeTruthy();
      expect(vm.movies.length === 5).toBeTruthy();
    });
  });
})();
