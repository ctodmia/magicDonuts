//app module goes here!!!
angular.module("myApp", [
	"firebase",
	"ui.router",
	"myApp.messages"
])

.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/');

	$stateProvider.state("home", {
		url: "/",
		template: "<h1>Hello</h1>"
	});
});

//route manager (.config) also goes here


//.run also goes here (research that...has to do with authentication)