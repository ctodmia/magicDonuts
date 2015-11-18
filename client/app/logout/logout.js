angular.module("myApp.logout", [])
	.controller("LogOutController", ["$scope", "Auth", "$state", function($scope, Auth, $state){

		
	    $scope.logOut = function() {
	      // Auth.$unauth();
	      Auth.$unauth();
	      $state.go('login');
	      // console.log('this works');
	    };

	}]);