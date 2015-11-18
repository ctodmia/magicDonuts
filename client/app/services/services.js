// factories live here
angular.module("myApp.services", [])


.factory("Auth", function($firebaseAuth, $location) {
    var ref = new Firebase("https://gitlytest.firebaseio.com", "example3");
    //the following code redirects users to our homepage at login success.
 

    ref.authWithOAuthPopup('github', function () {
      console.log('User is currently being logged in.');
      $location.path('/home');
    });
    return $firebaseAuth(ref);
  });
	

	//factory for server requests
		//post and get request to database

	//factory for user authentication


    // $scope.auth = Auth;
    // $scope.usernames = [
      
    // ]
    // // any time auth status updates, add the user data to scope
    // $scope.auth.$onAuth(function(authData) {
    //   $scope.authData = authData;
    //   $scope.usernames.push({"name":authData.github.username});
    //   console.log("this is my username", authData.github.username);
    // });

    // $scope.authorize = function(github) {
    //   Auth.$authWithOAuthPopup('github')
    //   $state.go('home')
    // }