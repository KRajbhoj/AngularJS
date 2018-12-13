// var app = angular.module('Flexinics', ['ngRoute'])

app.controller('route1Controller', ['$scope', 'httpService', function ($scope, httpService) {
  $scope.route = 'route1'
  $scope.sampleData = []

  $scope.getSampleData = function () {
    httpService.getData()
      .then(function (resp) {
        $scope.sampleData = resp
      })
      .catch(function (err) {
        console.log(err)
      })
  }

  $scope.getSampleData()
}])
