angular
  .module('myApp.search', [])
  .controller('SearchController', function($scope, $http){

    function fetchApi(){
      $http.get("https://api.github.com/users/" + $scope.search)
        .success(function(response) {
          $scope.userDetails = response;
          console.log("$scope.userDetails", $scope.userDetails)
        });
    }

    $scope.change = function(){
      console.log('change?');
      setTimeout(fetchApi, 800)
    }


    $scope.fetchReposCtrl = function(){
      console.log("$scope.search", $scope.search)
      $http.get("https://api.github.com/users/" + $scope.search + "/repos")
        .success(function(response) {
          $scope.userRepos = response;
          console.log("$scope.userRepos",$scope.userRepos)
        });
    }

    $scope.fetchFollowersCtrl = function(){
      console.log("$scope.search", $scope.search)
      $http.get("https://api.github.com/users/" + $scope.search + "/followers")
        .success(function(response) {
          $scope.userFollowers = response;
          console.log('$scope.userFollowers',$scope.userFollowers)
        });
    }


    $scope.fetchFollowingCtrl = function(){
      console.log("$scope.search --->", $scope.search)
      $http.get("https://api.github.com/users/" + $scope.search + "/following")
        .success(function(response) {
          $scope.userFollowing = response;
          console.log('$scope.userFollowing', $scope.userFollowing)
        });
    }
    console.log('$scope.userRepos', $scope.userRepos)
})

//iterate over repos
// for(var key in repo){
//   if(key === 'name'){
//     reponame = repo[key]
//   }
// }

// //iterate over followers
// for(var key in followers){
//   if(key === 'avatar_url'){
//     followingPic = following[key]
//   }
//   if(key === 'login'){
//     followingName = following[key]
//   }
// }


// //iterate over following
// for(var key in following){
//   if(key === 'avatar_url'){
//     followerPic = following[key]
//   }
//   if(key === 'login'){
//     followName = following[key]
//   }
// }






