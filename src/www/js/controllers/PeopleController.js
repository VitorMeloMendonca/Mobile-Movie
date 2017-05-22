movies.controller('PeopleController', function ($scope, PeopleFactory, ListPopularPeople) {
    $scope.People = '';
    $scope.ListPopularPeople = ListPopularPeople.results;

    $scope.PeopleImage = function (data) {
        return PeopleFactory.GetPeopleImage(data);
    }
});