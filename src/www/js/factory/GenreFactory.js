
movies.factory('GenreFactory', function ($http, $q, ParameterService) {
    // Might use a resource here that returns a JSON array
    var dataFactory = {};
    var apiKey = ParameterService.ApiKey;
    var apiUrl = ParameterService.ApiUrl;

    dataFactory.GetGenreList = function () {
        var deferred = $q.defer();
        var url = apiUrl + 'genre/movie/list' + apiKey;

        $http.get(url).then(function (response) {
            deferred.resolve(response.data);
        }, function (response) {
            deferred.reject('Error');
        });

        return deferred.promise;
    };

    dataFactory.GetMoviesByGenreID = function (data) {
        var deferred = $q.defer();
        var url = apiUrl + 'genre/' + data.GenreID +'/movies' + apiKey;

        $http.get(url).then(function (response) {
            deferred.resolve(response.data);
        }, function (response) {
            deferred.reject('Error');
        });

        return deferred.promise;
    };


    return dataFactory;
});
