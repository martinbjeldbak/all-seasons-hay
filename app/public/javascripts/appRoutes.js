angular.module("appRoutes", ["ngRoute", "Ctrls", "angularytics"]).config([
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
    AngularyticsProvider.setEventHandlers(["Console", "GoogleUniversal"]);
  }]).run(function(Angularytics) {
    Angularytics.init();
  });;
