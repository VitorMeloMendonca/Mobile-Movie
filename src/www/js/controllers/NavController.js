movies.controller('NavController', function ($scope, $ionicHistory) {
    $scope.GoBack = function () {
        $ionicHistory.goBack();
    };
});