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
        {id: 2015, label: "2016"},
        {id: 2010, label: "Above 2010"},
        {id: 2000, label: "Above 2000"},
        {id: 1990, label: "Above 1990"},
        {id: 1960, label: "Above 1960"},
        {id: 1900, label: "Above 1900"}
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
          /*if (itemText === 'Adventure') {
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
