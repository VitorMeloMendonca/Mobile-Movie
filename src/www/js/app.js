// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var movies = angular.module('movies', ['ionic']);

movies.run(function ($ionicPlatform) {
  $ionicPlatform.ready(function () {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

  .config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

      // setup an abstract state for the tabs directive
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
      })

      // Each tab has its own nav history stack:

      .state('tab.genre', {
        url: '/genre',
        views: {
          'tab-genre': {
            templateUrl: 'templates/tab-genre.html',
            controller: 'GenreController'
          }
        }
      })

      .state('tab.popularMovies', {
        url: '/popularMovies',
        views: {
          'tab-popularMovies': {
            templateUrl: 'templates/tab-popularMovie.html',
            controller: 'PopularMoviesController',
            resolve: {
              ListPopularMovies: function (MovieFactory) {
                return MovieFactory.GetPopularMovies();
              }
            }
          }
        }
      })
      .state('tab.movies', {
        url: '/movies/:GenreID',
        views: {
          'tab-genre': {
            templateUrl: 'templates/movies.html',
            controller: 'MovieController',
            resolve: {
              ListMovies: function (GenreFactory, $stateParams) {
                return GenreFactory.GetMoviesByGenreID($stateParams);
              }
            }
          }
        }
      })

      .state('tab.people', {
        url: '/people',
        views: {
          'tab-people': {
            templateUrl: 'templates/tab-people.html',
            controller: 'PeopleController',
            resolve: {
              ListPopularPeople: function (PeopleFactory) {
                return PeopleFactory.GetPopularPeople();
              }
            }
          }
        }
      });

    $urlRouterProvider.otherwise('/tab/genre');

  });
