// auth controller goes here
angular.module("myApp.auth", [])


.controller("AuthController", ["$scope", "Auth",
  function($scope, Auth) {
    $scope.auth = Auth;
    // any time auth status updates, add the user data to scope
    $scope.auth.$onAuth(function(authData) {
      $scope.authData = authData;
    });
  }
]);
	//add sign in functionality