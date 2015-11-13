//app module goes here!!!
angular.module("myApp", [
	"firebase",
	"ui.router",
	"myApp.messages"
])

.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/');

	$stateProvider.state("home", {
		controller: 'MessagesController',
		url: "/",
		templateUrl: "app/messages/messages.html"
	});
});

//route manager (.config) also goes here


//.run also goes here (research that...has to do with authentication)