// auth controller goes here
angular.module("myApp.auth", [])


.controller("AuthController", function($scope, $location, Auth) {
    $scope.auth = Auth;
    // any time auth status updates, add the user data to scope
    $scope.auth.$onAuth(function(authData) {
      $scope.authData = authData;
    });
    // $location.path('/messages');
  });
	//add sign in functionality