angular.module("appRoutes", ["ngRoute", "Ctrls", "angularytics", "ui.bootstrap"
]).config([
  "$routeProvider",
  "$locationProvider",
  "AngularyticsProvider",
  function($routeProvider, $locationProvider, AngularyticsProvider) {
    $routeProvider
    .when("/", {
      templateUrl: "views/index.jade",
      controller: "MainController"
    });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

    AngularyticsProvider.setEventHandlers(["GoogleUniversal"]);

  }]).run(function(Angularytics) {
    Angularytics.init();
  });
