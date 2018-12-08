// var app = angular.module('Flexinics', ['ngRoute'])

app.controller('route1Controller', ['$scope', function ($scope, httpService) {
  $scope.route = 'route1'
  $scope.sampleData = []

  $scope.getSampleData()

  $scope.getSampleData = function () {
    httpService.getData()
      .then(function (resp) {
        $scope.sampleData = resp
      })
      .catch(function (err) {
        console.log(err)
      })
  }
}])
