
movies.controller('GenreController', function ($scope, $location, GenreFactory) {
    $scope.Genre = '';
    $scope.ListGenres = {};
    $scope.ListMovies = {};

    getGenreList();

    function getGenreList() {
        GenreFactory.GetGenreList(null).then(function (response) {
            $scope.ListGenres = response.genres;
        });
    }

    $scope.GetMoviesByGenreID = function (genreID) {
        GenreFactory.GetMoviesByGenreID(genreID).then(function (response) {
            $scope.ListMovies = response.results;
        });
    }
});

