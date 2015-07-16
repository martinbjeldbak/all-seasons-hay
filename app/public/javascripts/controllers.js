var ctrls = angular.module("Ctrls", []);

ctrls.directive("scroll", function($window) {
  return function(scope, element, attrs) {
    angular.element($window).bind("scroll", function() {
      scope.minimizeNav = this.pageYOffset >= 50;
      scope.$apply();
    });
  };
});

ctrls.controller("MainController", function($scope) {
  $scope.tagline = "To the moon and back!";
  $scope.appName = "All Seasons Hay";
});

ctrls.controller("NavigationController", function($scope) {
  $scope.services = "Services";
});
