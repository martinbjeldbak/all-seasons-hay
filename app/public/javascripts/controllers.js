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
  $scope.products = "products";
  $scope.about = "about us";
  $scope.photos = "photos";
  $scope.contact = "contact us";

  var services = angular.element(document.getElementById('services'));

  $scope.toTheTop = function() {
    container.scrollTop(0, 5000);
  };

  $scope.toServices = function() {
    container.scrollTo(services, 0, 1000);
  };
});


ctrls.controller("NavigationController", function($scope) {
});
