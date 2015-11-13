// auth controller goes here
angular.module("myApp.auth", [])

//This controller adds firebase's OAuth-based sign-in functionality
.controller("AuthController", function($scope, $location, Auth) {
    $scope.auth = Auth;
    // any time auth status updates, add the user data to scope
    $scope.auth.$onAuth(function(authData) {
      $scope.authData = authData;
    });
  });


//Brainstorming the available objects:
  // $scope.authData.username = username;
  // $scope.authData.avimage = userImage;
  // $scope.authData.cachedUserProfile.followers
  // $scope.authData.cachedUserProfile.following
  // $scope.authData.cachedUserProfile.location