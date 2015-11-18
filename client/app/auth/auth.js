// auth controller goes here
angular.module("myApp.auth", [])

//This controller adds firebase's OAuth-based sign-in functionality
.controller("AuthController", function($scope, $state, $location, Auth) {
    $scope.auth = Auth;
    // any time auth status updates, add the user data to scope
    $scope.auth.$onAuth(function(authData) {
      $scope.authData = authData;
    });

    $scope.authorize = function(github) {
      Auth.$authWithOAuthPopup('github')
      $state.go('home')
    }
  });


//Brainstorming the available objects:
  // $scope.authData.username = username;
  // $scope.authData.avimage = userImage;
  // $scope.authData.cachedUserProfile.followers
  // $scope.authData.cachedUserProfile.following
  // $scope.authData.cachedUserProfile.location