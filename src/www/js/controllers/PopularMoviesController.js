movies.controller('PopularMoviesController', function ($scope, ListPopularMovies, MovieFactory) {
    $scope.ListPopularMovies = ListPopularMovies.results;
    $scope.Movie = '';

    $scope.MovieImage = function (data) {
        return MovieFactory.GetMovieImageByMovieID(data);
    }
});