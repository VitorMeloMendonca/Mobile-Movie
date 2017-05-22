
movies.factory('PeopleFactory', function ($http, $q, ParameterService) {

    var dataFactory = {};
    var apiKey = ParameterService.ApiKey;
    var apiUrl = ParameterService.ApiUrl;
    var apiImage = ParameterService.ApiImage;

    dataFactory.GetPopularPeople = function () {
        var deferred = $q.defer();
        var url = apiUrl + 'person/popular' + apiKey;

        $http.get(url).then(function (response) {
            deferred.resolve(response.data);
        }, function (response) {
            deferred.reject('Error');
        });

        return deferred.promise;
    };

    dataFactory.GetPeopleImage = function (data) {
        return apiImage + data.profile_path;
    };

    return dataFactory;
});
