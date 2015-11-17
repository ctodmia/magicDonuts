angular.module("myApp.messages", [])

.controller("MessagesController", ["$scope", "$firebaseArray",
  function($scope, $firebaseArray) {
    var ref = new Firebase("https://gitlytest.firebaseio.com/jquery");
    $scope.messages = $firebaseArray(ref);

    //ADD MESSAGE METHOD
    $scope.addMessage = function(e) {
      //LISTEN FOR RETURN KEY & IF MESSAGE IS NOT ""
      if (e.keyCode === 13 && $scope.msg) {
        //ALLOW CUSTOM OR ANONYMOUS USER NAMES
        var name = $scope.name || "anonymous";
        $scope.messages.$add({ user: name, userMessage: $scope.msg });
        //RESET MESSAGE
        $scope.msg = "";
      }
    };
  }
]);