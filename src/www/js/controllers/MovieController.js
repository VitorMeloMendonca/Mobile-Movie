
movies.controller('MovieController', function ($scope, ListMovies, MovieFactory) {
    $scope.Movie = '';
    $scope.ListMovies = ListMovies.results;

    $scope.MovieImage = function (data) {
        return MovieFactory.GetMovieImageByMovieID(data);
    }
});

