var app = angular.module('Flexinics', ['ngRoute'])

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  // $locationProvider.hashPrefix('')

  $routeProvider.when('/', {
    templateUrl: 'view/main.html',
    controller: 'mainController'
  })
    .when('/route1', {
      templateUrl: 'view/route1.html',
      controller: 'route1Controller'
    })
    .when('/route2', {
      templateUrl: 'view/route2.html',
      controller: 'route2Controller'
    })
    .when('/route3', {
      templateUrl: 'view/route3.html',
      controller: 'route3Controller'
    })
    .otherwise({ redirectTo: '/' })
}])
