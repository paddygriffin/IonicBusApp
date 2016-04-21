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
   
.controller('403Ctrl', function($scope) {

})
   
.controller('404Ctrl', function($scope) {

})
   
.controller('405Ctrl', function($scope) {

})
   
.controller('407Ctrl', function($scope) {

})
   
.controller('409Ctrl', function($scope) {

})
   
.controller('410Ctrl', function($scope) {

})
 