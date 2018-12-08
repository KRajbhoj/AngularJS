var app = angular.module('Flexinics', ['ngRoute'])

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'main.html',
    controller: 'mainController'
  })

  $routeProvider.when('/route1', {
    templateUrl: 'route1.html',
    controller: 'route1Controller'
  })

  $routeProvider.when('/route2', {
    templateUrl: 'route2.html',
    controller: 'route2Controller'
  })

  $routeProvider.when('/route3', {
    templateUrl: 'route3.html',
    controller: 'route3Controller'
  })
}])
