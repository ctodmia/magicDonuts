angular.module('myApp.onlineUsers', [])
	.controller("OnlineUsers", ["$scope", "Auth", function($scope, Auth){
		$scope.auth = Auth;
		$scope.usernames = [
		
		]
		// any time auth status updates, add the user data to scope
		$scope.auth.$onAuth(function(authData) {
		  $scope.authData = authData;
		  $scope.usernames.push({"name":authData.github.username});
		  console.log("this is my username", authData.github.username);
		});


	}])