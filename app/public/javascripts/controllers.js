var ctrls = angular.module("Ctrls", []);

ctrls.directive("scroll", function($window) {
  return function(scope, element, attrs) {
    angular.element($window).bind("scroll", function() {
      if(this.pageYOffset >= 50) {
        scope.minimizeNav = true;
      }
      else {
        scope.minimizeNav = false;
      }
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
