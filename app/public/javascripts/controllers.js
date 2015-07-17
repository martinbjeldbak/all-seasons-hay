var ctrls = angular.module("Ctrls", ["duScroll"]);

ctrls.directive("scroll", function($window) {
  return function(scope, element, attrs) {
    angular.element($window).bind("scroll", function() {
      scope.minimizeNav = this.pageYOffset >= 100;
      scope.$apply();
    });
  };
});

ctrls.controller("AboutController", function($scope) {
  $scope.heading = "About Us";
});

ctrls.controller("ProductsController", function($scope) {
  $scope.products = ["Hay", "Equine Feed", "Grains", "Livestock feed", "Supplements", "Dog", "Cat", "Poultry/game bird", "Bird seed", "Small pet", "Fish", "Bedding/Shavings", "Corrals and Gates", "Fencing", "Tanks and Feeders", "Carts", "Coops and Cages", "Stall mats", "Tack", "Pest control", "Grooming"];

  $scope.productColumns = columnize($scope.products, 2);
  function columnize(input, cols) {
    var arr = [];
    for(i = 0; i < input.length; i++) {
      var colIdx = i % cols;
      arr[colIdx] = arr[colIdx] || [];
      arr[colIdx].push(input[i]);
    }
    return arr;
  }
});

ctrls.controller("MainController", function($scope) {

  $scope.tagline = "Family owned and operated since 1982.";
  $scope.appName = "All Seasons Hay Co.";
  $scope.products = "products";
  $scope.about = "about us";
  $scope.photos = "photos";
  $scope.contact = "contact us";
  $scope.email = "allseasonshay@gmail.com";
  $scope.phone1 = "909.795.2921";
  $scope.phone2 = "909.795.2245";
  $scope.fax = "909.795.2252";

  $scope.addressStreet = "621 West Avenue L";
  $scope.addressCity = "Calimesa";
  $scope.addressState = "CA";
  $scope.addressZip = "92320";

  $scope.addressGmaps = "https://www.google.com/maps/place/621+E+Avenue+L,+Calimesa,+CA+92320/@33.999369,-117.020488,704m/data=!3m2!1e3!4b1!4m2!3m1!1s0x80db5079fd7a457f:0x14d12cd2a82a8d02";

  $scope.cleanPhoneNr = function(phoneNr) {
    return phoneNr.replace(/\./g, '');
  };


  var container = angular.element(document.getElementById('top'));
  var services = angular.element(document.getElementById('products'));

  $scope.toTheTop = function() {
    container.scrollTop(0, 5000);
  };

  $scope.toServices = function() {
    container.scrollTo(products, 0, 1000);
  };
});


ctrls.controller("NavigationController", function($scope) {
});
