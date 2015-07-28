var ctrls = angular.module("Ctrls", ["duScroll"]);

ctrls.run(function($rootScope) {
  if(!window.history || !history.replaceState) {
    return;
  }
  $rootScope.$on('duScrollspy:becameActive', function($event, $element){
    //Automaticly update location
    var hash = $element.prop('hash');
    if (hash) {
      history.replaceState(null, null, hash.replace("#", ""));
    }
  });
});

ctrls.directive("scroll", function($window) {
  return function(scope, element, attrs) {
    angular.element($window).bind("scroll", function() {
      if(this.pageYOffset >= 100) {
        scope.minimizeNav = true;
      } else {
        scope.minimizeNav = false;
        history.replaceState(null, null, '/');
      }
      scope.$apply();
    });
  };
});

ctrls.controller("AboutController", function($scope) {
});

ctrls.controller("ProductsController", function($scope, $http) {
  $http.get("/api/v1/products").success(function(data) {
    angular.extend($scope, data);
    $scope.productColumns = columnize($scope.products, 2);
  });

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

ctrls.controller("MainController", function($scope, $http) {
  var container = angular.element(document.getElementById("top"));
  var services  = angular.element(document.getElementById("products"));

  $http.get("/api/v1/companyinfo").success(function(data) {
    angular.extend($scope, data);

    $scope.cleanPhoneNr = function(phoneNr) {
      return phoneNr.replace(/\./g, "");
    };
  });

  $scope.toTheTop = function() {
    container.scrollTop(0, 5000);
  };

  $scope.toServices = function() {
    container.scrollTo(products, 0, 1000);
  };
});


ctrls.controller("NavigationController", function($scope) {
    $scope.isCollapsed = true;
});
