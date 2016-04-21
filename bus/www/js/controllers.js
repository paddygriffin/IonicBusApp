angular.module('app.controllers', [])
  
.controller('homePageCtrl', function($scope) {

})
   
.controller('timeTablePageCtrl', function($scope) {

})
   
.controller('cloudTabDefaultPageCtrl', function($scope) {

})
      
.controller('401Ctrl', function($scope, $http) {
	$scope.newTask = function() {
        $http({
            method: 'GET',
            url: 'http://paddygriffin.cloudapp.net/ionic.php',
        }).success(function(data) {
            $scope.categories = data;
        })
          .error(function(data) {
            $scope.categories = "No categories found by that name";
        })
    };

})
   
.controller('402Ctrl', function($scope, $http) {
		$scope.newTask = function() {
        $http({
            method: 'GET',
            url: 'http://paddygriffin.cloudapp.net/ionic402.php',
        }).success(function(data) {
            $scope.categories = data;
        })
          .error(function(data) {
            $scope.categories = "No categories found by that name";
        })
    };


})
   
.controller('403Ctrl', function($scope, $http) {
		$scope.newTask = function() {
        $http({
            method: 'GET',
            url: 'http://paddygriffin.cloudapp.net/ionic403.php',
        }).success(function(data) {
            $scope.categories = data;
        })
          .error(function(data) {
            $scope.categories = "No categories found by that name";
        })
    };

})
   
.controller('404Ctrl', function($scope, $http) {
	$scope.newTask = function() {
        $http({
            method: 'GET',
            url: 'http://paddygriffin.cloudapp.net/ionic404.php',
        }).success(function(data) {
            $scope.categories = data;
        })
          .error(function(data) {
            $scope.categories = "No categories found by that name";
        })
    };

})
   
.controller('405Ctrl', function($scope, $http) {
$scope.newTask = function() {
        $http({
            method: 'GET',
            url: 'http://paddygriffin.cloudapp.net/ionic405.php',
        }).success(function(data) {
            $scope.categories = data;
        })
          .error(function(data) {
            $scope.categories = "No categories found by that name";
        })
    };

})
   
.controller('407Ctrl', function($scope, $http) {
$scope.newTask = function() {
        $http({
            method: 'GET',
            url: 'http://paddygriffin.cloudapp.net/ionic407.php',
        }).success(function(data) {
            $scope.categories = data;
        })
          .error(function(data) {
            $scope.categories = "No categories found by that name";
        })
    };

})
   
.controller('409Ctrl', function($scope, $http) {

$scope.newTask = function() {
        $http({
            method: 'GET',
            url: 'http://paddygriffin.cloudapp.net/ionic409.php',
        }).success(function(data) {
            $scope.categories = data;
        })
          .error(function(data) {
            $scope.categories = "No categories found by that name";
        })
    };

})
   
.controller('410Ctrl', function($scope, $http) {

$scope.newTask = function() {
        $http({
            method: 'GET',
            url: 'http://paddygriffin.cloudapp.net/ionic410.php',
        }).success(function(data) {
            $scope.categories = data;
        })
          .error(function(data) {
            $scope.categories = "No categories found by that name";
        })
    };

})
 