angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/index.jade',
    controller: 'MainController'
  });

  $locationProvider.html5Mode(true);
}]);
