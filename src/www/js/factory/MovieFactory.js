
movies.factory('MovieFactory', function ($http, $q, ParameterService) {
  // Might use a resource here that returns a JSON array
  var dataFactory = {};
  var apiKey = ParameterService.ApiKey;
  var apiUrl = ParameterService.ApiUrl;

  dataFactory.GetGenreMovieList = function () {
    var deferred = $q.defer();
    var url = apiUrl + 'genre/movie/list' + apiKey;

    $http.get(url).then(function (response) {
      deferred.resolve(response.data);
    }, function (response) {
      deferred.reject('Error');
    });

    return deferred.promise;
  };

  dataFactory.GetReviewByMovie = function (data) {

    var url = apiUrl + 'movie/' + data.MovieID + '/reviews' + apiKey;
    var deferred = $q.defer();

    $http.get(url).then(function (response) {
      deferred.resolve(response.data);
    }, function (response) {
      deferred.reject('Error');
    });

    return deferred.promise;
  };


  dataFactory.GetPopularMovies = function (data) {

    var url = apiUrl + 'movie/popular' + apiKey;
    var deferred = $q.defer();

    $http.get(url).then(function (response) {
      deferred.resolve(response.data);
    }, function (response) {
      deferred.reject('Error');
    });

    return deferred.promise;
  };

  dataFactory.GetMovieImageByMovieID = function (data) {
    return ParameterService.ApiImage + data.backdrop_path;
  };

  return dataFactory;
});
