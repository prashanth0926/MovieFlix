(function () {
  'use strict';

  angular
    .module('movieFlixUi')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(movies, dropDownData, $uibModal, $log, $timeout, auth) {
    var vm = this;

    /** navigation and login vars */
    vm.isCollapsed = true;
    if(auth.authenticated()){
      vm.logged = {text: "Logout", icon: "out", value: true};
    } else {
      vm.logged = {text: "Login", icon: "in", value: false};
    }
    vm.pleaseLogIn = true;
    vm.search = '';
    vm.username = auth.getUsername();
    vm.movies = [];
    vm.admin = auth.isAdmin();
    vm.recommended = movies.getLocalMovies();

    /** get the list of movies */
    getMovies();

    /** modals*/
    vm.openLogin = openLogin;
    vm.openDetails = openDetails;
    vm.openAddMovie = openAddMovie;

    /** drop down filters */
    vm.myFilts = dropDownData.getButtonTexts();
    vm.typeModel = {id: 'i'}, vm.imdbModel = {id: 2}, vm.yearModel = {id: 1900}, vm.genreModel = [], vm.sortModel = {id: '-imdbRating'}, vm.limitModel = {id: 10};
    var optionsData = dropDownData.getOptionsData();
    vm.typeData = optionsData.typeData;
    vm.imdbData = optionsData.imdbData;
    vm.yearData = optionsData.yearData;
    vm.genreData = optionsData.genreData;
    vm.sortData = optionsData.sortData;
    vm.limitData = optionsData.limitData;
    var settingsData = dropDownData.getSettingsData();
    vm.singleSettings = settingsData.singleSettings;
    vm.genreSettings = settingsData.genreSettings;

    /** filtering */
    vm.greaterThan = greaterThan;
    vm.selectedGenre = '';
    vm.genreEvents = {onItemSelect: genreFilter, onItemDeselect: genreFilter, onDeselectAll: function(){vm.selectedGenre = ''}};
    vm.resetFilters = resetFilters;

    /** pagination */
    vm.currentPage = 1;
    vm.itemsPerPage = 10;
    vm.maxSize = 5;

    function getMovies() {
      if (vm.logged.value) {
        movies.getApiMovies().query(
          function (res) {
            vm.movies = res;
          },
          function (err) {
            $log.error(err.status, err.statusText);
          }
        );
      } else {
        vm.movies = movies.getLocalMovies();
      }
    }

    function greaterThan(prop, val) {
      return function (item) {
        return parseInt(item[prop]) >= val;
      }
    }

    function genreFilter() {
      if (vm.genreModel.length == 1) {
        vm.selectedGenre = vm.genreModel[0].id
      } else if (vm.genreModel.length == 0) {
        vm.selectedGenre = '';
      } else if (vm.genreModel.length == 2) {
        vm.selectedGenre = vm.genreModel[0].id + '  ' + vm.genreModel[1].id;
      } else if (vm.genreModel.length == 3){
        vm.selectedGenre = vm.genreModel[0].id + '  ' + vm.genreModel[1].id + '  ' + vm.genreModel[2].id;
      } else {
        vm.selectedGenre = '';
      }
    }

    function resetFilters() {
      vm.typeModel = {id: 'i'}, vm.imdbModel = {id: 2}, vm.yearModel = {id: 1900}, vm.genreModel = [], vm.sortModel = {id: '-imdbRating'}, vm.limitModel = {id: 10};
      vm.selectedGenre = '';
    }

    function openLogin(val) {
      if (val) {
        auth.logout();
        resetFilters();
        vm.logged = {text: "Login", icon: "in", value: false};
        vm.admin = false;
        getMovies();
        $log.info('Logged out at: ' + new Date());
        resetFilters();
      } else {
        var modalInstance = $uibModal.open({
          animation: true,
          templateUrl: 'app/login/login.html',
          controller: 'LoginController',
          controllerAs: 'login',
          resolve: {
            pleaseLogin: function () {
              return vm.pleaseLogIn;
            }
          },
          windowClass: 'app-modal-login-window',
          size: "md"
        });
        modalInstance.result.then(function () {
          vm.logged = {text: 'Logout', icon: 'out', value: true};
          vm.username = '...';
          $timeout(function () {
            vm.admin = auth.isAdmin();
            getMovies();
            vm.username = auth.getUsername();
            $log.info('Logged in as ' + vm.username + ' at: ' + new Date());
            resetFilters();
          }, 500);
        }, function () {

        });
      }
    }

    function openDetails(movie) {
      if (vm.logged.value) {
        var modalInstance = $uibModal.open({
          animation: true,
          templateUrl: 'app/details/details.html',
          controller: 'DetailsController',
          controllerAs: 'detail',
          windowClass: 'app-modal-details-window',
          size: "lg",
          resolve: {
            movie: movie
          }
        });
        modalInstance.result.then(function (args) {
          if(!args.delFlag && (args.movie.Title != undefined)) {
            openAddMovie(movie, true);
          }
          getMovies();
        }, function () {

        });
      } else {
        vm.pleaseLogIn = true;
        vm.openLogin(false);
      }
    }

    function openAddMovie(movie, flag) {
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'app/add/add.html',
        controller: 'AddController',
        controllerAs: 'add',
        windowClass: 'app-modal-add-window',
        size: "lg",
        resolve: {
          movie: movie,
          editFlag: flag
        }
      });
      modalInstance.result.then(function () {
        getMovies();
      }, function () {

      });
    }

  }
})();
