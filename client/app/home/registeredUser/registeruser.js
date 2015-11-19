angular.module("myApp.user", [])
	.controller("User", ["$scope", "Auth", "$firebaseAuth", "FirebaseUrl", function($scope, Auth, $firebaseAuth, FirebaseUrl){

		var ref  = new Firebase(FirebaseUrl);
		var auth = $firebaseAuth(ref);
		$scope.auth = Auth;
		// any time auth status updates, add the user data to scope
		$scope.auth.$onAuth(function(authData) {
		  $scope.authData = authData;
		  console.log('this is authdata', authData.github)
		  $scope.user.push({"name": authData.github.username, "img": authData.github.profileImageURL });
			console.log('my name', authData.github.username, authData.github.profileImageURL)
		});

		$scope.user = []

	}]);