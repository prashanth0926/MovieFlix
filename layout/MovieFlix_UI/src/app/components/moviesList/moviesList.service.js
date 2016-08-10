/**
 * Created by Prashanth Molakala on 8/3/2016.
 */

(function () {
  'use strict';

  angular
    .module('movieFlixUi')
    .service('movies', movies);

  /** @ngInject */
  function movies() {
    var data = [
      {
        "Title": "Avengers: Age of Ultron",
        "Year": "2015",
        "Rated": "PG-13",
        "Released": "01 May 2015",
        "Runtime": "141 min",
        "Genre": "Action, Adventure, Sci-Fi",
        "Director": "Joss Whedon",
        "Writer": "Joss Whedon, Stan Lee (Marvel comics), Jack Kirby (Marvel comics)",
        "Actors": "Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans",
        "Plot": "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's Mightiest Heroes to stop the villainous Ultron from enacting his terrible plans.",
        "Language": "English",
        "Country": "USA",
        "Awards": "1 win & 12 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTU4MDU3NDQ5Ml5BMl5BanBnXkFtZTgwOTU5MDUxNTE@._V1_SX300.jpg",
        "Metascore": "66",
        "imdbRating": "7.6",
        "imdbVotes": "370,909",
        "imdbID": "tt2395427",
        "Type": "movie"
      },
      {
        "Title": "The Avengers",
        "Year": "2012",
        "Rated": "PG-13",
        "Released": "04 May 2012",
        "Runtime": "143 min",
        "Genre": "Action, Sci-Fi, Thriller",
        "Director": "Joss Whedon",
        "Writer": "Joss Whedon (screenplay), Zak Penn (story), Joss Whedon (story)",
        "Actors": "Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth",
        "Plot": "Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.",
        "Language": "English, Russian",
        "Country": "USA",
        "Awards": "Nominated for 1 Oscar. Another 35 wins & 76 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTk2NTI1MTU4N15BMl5BanBnXkFtZTcwODg0OTY0Nw@@._V1_SX300.jpg",
        "Metascore": "69",
        "imdbRating": "8.1",
        "imdbVotes": "920,458",
        "imdbID": "tt0848228",
        "Type": "movie"
      },
      {
        "Title": "The Shawshank Redemption",
        "Year": "1994",
        "Rated": "R",
        "Released": "14 Oct 1994",
        "Runtime": "142 min",
        "Genre": "Crime, Drama",
        "Director": "Frank Darabont",
        "Writer": "Stephen King (short story \"Rita Hayworth and Shawshank Redemption\"), Frank Darabont (screenplay)",
        "Actors": "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler",
        "Plot": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        "Language": "English",
        "Country": "USA",
        "Awards": "Nominated for 7 Oscars. Another 14 wins & 20 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SX300.jpg",
        "Metascore": "80",
        "imdbRating": "9.3",
        "imdbVotes": "1,590,699",
        "imdbID": "tt0111161",
        "Type": "movie"
      },
      {
        "Title": "Batman Begins",
        "Year": "2005",
        "Rated": "PG-13",
        "Released": "15 Jun 2005",
        "Runtime": "140 min",
        "Genre": "Action, Adventure",
        "Director": "Christopher Nolan",
        "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
        "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
        "Plot": "After training with his mentor, Batman begins his war on crime to free the crime-ridden Gotham City from corruption that the Scarecrow and the League of Shadows have cast upon it.",
        "Language": "English, Urdu, Mandarin",
        "Country": "USA, UK",
        "Awards": "Nominated for 1 Oscar. Another 16 wins & 63 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
        "Metascore": "70",
        "imdbRating": "8.3",
        "imdbVotes": "906,246",
        "imdbID": "tt0372784",
        "Type": "movie"
      },
      {
        "Title": "The Big Bang Theory",
        "Year": "2007â€“",
        "Rated": "TV-14",
        "Released": "24 Sep 2007",
        "Runtime": "22 min",
        "Genre": "Comedy",
        "Director": "N/A",
        "Writer": "Chuck Lorre, Bill Prady",
        "Actors": "Johnny Galecki, Jim Parsons, Kaley Cuoco, Simon Helberg",
        "Plot": "A woman who moves into an apartment across the hall from two brilliant but socially awkward physicists shows them how little they know about life outside of the laboratory.",
        "Language": "English, Hindi, Italian, Russian, Mandarin, Klingon",
        "Country": "USA",
        "Awards": "Won 1 Golden Globe. Another 49 wins & 161 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjI1Mzc4MDUwNl5BMl5BanBnXkFtZTgwMDAzOTIxMjE@._V1_SX300.jpg",
        "Metascore": "N/A",
        "imdbRating": "8.4",
        "imdbVotes": "496,762",
        "imdbID": "tt0898266",
        "Type": "series"
      },
      {
        "Title": "Sherlock",
        "Year": "2010â€“",
        "Rated": "TV-14",
        "Released": "24 Oct 2010",
        "Runtime": "88 min",
        "Genre": "Crime, Drama, Mystery",
        "Director": "N/A",
        "Writer": "Mark Gatiss, Steven Moffat",
        "Actors": "Benedict Cumberbatch, Martin Freeman, Una Stubbs, Rupert Graves",
        "Plot": "A modern update finds the famous sleuth and his doctor partner solving crime in 21st century London.",
        "Language": "English",
        "Country": "UK, USA",
        "Awards": "Nominated for 1 Golden Globe. Another 70 wins & 103 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BNTA2MTE1NDI5OV5BMl5BanBnXkFtZTcwNzM2MzU3Nw@@._V1_SX300.jpg",
        "Metascore": "N/A",
        "imdbRating": "9.3",
        "imdbVotes": "454,123",
        "imdbID": "tt1475582",
        "Type": "series"
      },
      {
        "Title": "Breaking Bad",
        "Year": "2008â€“2013",
        "Rated": "TV-14",
        "Released": "20 Jan 2008",
        "Runtime": "47 min",
        "Genre": "Crime, Drama, Thriller",
        "Director": "N/A",
        "Writer": "Vince Gilligan",
        "Actors": "Bryan Cranston, Anna Gunn, Aaron Paul, Dean Norris",
        "Plot": "A chemistry teacher diagnosed with terminal lung cancer teams up with his former student to cook and sell crystal meth.",
        "Language": "English, Spanish",
        "Country": "USA",
        "Awards": "Won 2 Golden Globes. Another 118 wins & 197 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTQ0ODYzODc0OV5BMl5BanBnXkFtZTgwMDk3OTcyMDE@._V1_SX300.jpg",
        "Metascore": "N/A",
        "imdbRating": "9.5",
        "imdbVotes": "790,356",
        "imdbID": "tt0903747",
        "Type": "series"
      },
      {
        "Title": "The Vampire Diaries",
        "Year": "2009â€“",
        "Rated": "TV-14",
        "Released": "10 Sep 2009",
        "Runtime": "43 min",
        "Genre": "Drama, Fantasy, Horror",
        "Director": "N/A",
        "Writer": "Julie Plec, Kevin Williamson",
        "Actors": "Paul Wesley, Ian Somerhalder, Kat Graham, Candice King",
        "Plot": "A teenage girl is torn between two vampire brothers.",
        "Language": "English",
        "Country": "USA",
        "Awards": "35 wins & 48 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTgzMzg3NDMxOF5BMl5BanBnXkFtZTgwNjUwMjQyNzE@._V1_SX300.jpg",
        "Metascore": "N/A",
        "imdbRating": "7.9",
        "imdbVotes": "206,717",
        "imdbID": "tt1405406",
        "Type": "series"
      }
    ];

    this.getLocalMovies = getLocalMovies;
    this.getApiMovies = getApiMovies;

    function getLocalMovies() {
      return data;
    }

    function getApiMovies() {
      return [];
    }

  }
})();
