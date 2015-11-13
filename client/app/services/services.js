// factories live here
angular.module("myApp.services", [])

.factory("Auth", ["$firebaseAuth",
  function($firebaseAuth) {
    var ref = new Firebase("https://gitlytest.firebaseio.com", "example3");
    return $firebaseAuth(ref);
  }
]);
	
	//factory for server requests
		//post and get request to database

	//factory for user authentication
