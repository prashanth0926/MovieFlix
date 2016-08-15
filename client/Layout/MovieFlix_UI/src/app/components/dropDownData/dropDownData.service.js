/**
 * Created by Prashanth Molakala on 8/4/2016.
 */

(function () {
  'use strict';

  angular
    .module('movieFlixUi')
    .service('dropDownData', dropDownData);

  /** @ngInject */
  function dropDownData() {
    var buttonTextData = [
      {buttonDefaultText: 'Select Type'},
      {buttonDefaultText: 'Select Imdb rating'},
      {buttonDefaultText: 'Select Year'},
      {buttonDefaultText: 'Select Genre'},
      {buttonDefaultText: 'Select Sort By'}
    ];
    var optionsData = {
      typeData: [
        {id: 'i', label: "All"},
        {id: 'movie', label: "Movies"},
        {id: 'series', label: "Tv series"}
      ],
      imdbData: [
        {id: 9, label: "Above 9"},
        {id: 8, label: "Above 8"},
        {id: 7, label: "Above 7"},
        {id: 6, label: "Above 6"},
        {id: 5, label: "Above 5"},
        {id: 2, label: "Above 2"}
      ],
      yearData: [
        {id: 2015, label: "2015 and above"},
        {id: 2010, label: "2010 and above"},
        {id: 2000, label: "2000 and above"},
        {id: 1990, label: "1990 and above"},
        {id: 1960, label: "1960 and above"},
        {id: 1900, label: "1900 and above"}
      ],
      genreData: [
        {id: "Action", label: "Action"},
        {id: "Adventure", label: "Adventure"},
        {id: "Animation", label: "Animation"},
        {id: "Biography", label: "Biography"},
        {id: "Comedy", label: "Comedy"},
        {id: "Crime", label: "Crime"},
        {id: "Documentary", label: "Documentary"},
        {id: "Drama", label: "Drama"},
        {id: "Fantasy", label: "Fantasy"},
        {id: "History", label: "History"},
        {id: "Horror", label: "Horror"},
        {id: "Mystery", label: "Mystery"},
        {id: "Romance", label: "Romance"},
        {id: "Sci-Fi", label: "Sci-Fi"},
        {id: "News", label: "News"},
        {id: "Talk-Show", label: "Talk-Show"},
        {id: "Thriller", label: "Thriller"},
        {id: "War", label: "War"}
      ],
      sortData: [
        {id: 'Title', label: "Name"},
        {id: '-imdbRating', label: "IMDb rating"},
        {id: '-imdbVotes', label: "IMDb votes"},
        {id: '-Year', label: "Year"}
      ],
      limitData: [
        {id: 5, label: "5 per page"},
        {id: 10, label: "10 per page"},
        {id: 25, label: "25 per page"},
        {id: 50, label: "50 per page"}
      ]
    };
    var settingsData = {
      singleSettings: {
        showUncheckAll: false,
        selectionLimit: 1,
        smartButtonMaxItems: 1,
        displayProp: 'label',
        scrollable: false
      },
      genreSettings: {
        displayProp: 'label',
        smartButtonMaxItems: 3,
        smartButtonTextConverter: function (itemText) {
          /*if (itemText == 'Adventure' || itemText == 'Biography') {
            return 'Adv';
          }*/
          return itemText;
        },
        scrollableHeight: '250px',
        scrollable: true,
        enableSearch: true,
        selectionLimit: 3,
        showUncheckAll: true
      }
    };

    this.getButtonTexts = getButtonTexts;
    this.getOptionsData = getOptionsData;
    this.getSettingsData = getSettingsData;

    function getButtonTexts() {
      return buttonTextData;
    }

    function getOptionsData() {
      return optionsData;
    }

    function getSettingsData() {
      return settingsData;
    }
  }

})();
