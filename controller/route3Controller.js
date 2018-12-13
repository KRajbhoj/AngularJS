// var app = angular.module('Flexinics', ['ngRoute'])

app.controller('route3Controller', ['$scope', function ($scope) {
  $scope.route = 'route3'

  $scope.enableDiv = false

  $scope.setEnableFlag = function () {
    $scope.enableDiv = true
  }
}])
