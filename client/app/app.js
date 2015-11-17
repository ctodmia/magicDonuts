//app module goes here!!!
angular.module("myApp", [
	"firebase",
	"ui.router",
	"myApp.services",
	"myApp.messages",
	"myApp.auth"
])

.config(function($stateProvider, $urlRouterProvider){


	$stateProvider
		.state("login", {
			controller: "AuthController",
			url: "/login",
			templateUrl: "app/auth/loginAuth.html"
		})
		.state("messages", {
			controller: "MessagesController",
			url: "/messages",
			templateUrl: "app/messages/messages.html"
		})
		//need this for later, in order to have multiple views in one window
		// https://scotch.io/tutorials/angular-routing-using-ui-router
		.state("home", {
			url:"/home",
			views: {
				"": { templateUrl: "app/home/home.html" },
				//html and controller required for onlineUsers view
				"onlineUsers@home": { template: "online users column!!"},
				//html and controller required for chatrooms view
				"chatrooms@home": { templateUrl: "app/home/chatrooms.html" },
				//html and controller required for userSearch view
				"userSearch@home": { template: "user search section lives here" }
			}
		});

		// .state("chat", {
		// 	url:"/chat",
		// 	views: {
		// 		"": { templateUrl: "app/chat/chat.html" },
		// 		//html and controller required for onlineUsers view
		// 		"onlineUsers@chat": { template: "online users column!!"},
		// 		//html and controller required for chatrooms view
		// 		"codeshare@chat": { 
		// 			templateUrl: "app/messages/messages.html",
		// 			controller: "MessagesController" },
		// 		//html and controller required for userSearch view
		// 		"messages@chat": { 
		// 			templateUrl: "app/messages/messages.html",
		// 			controller: "MessagesController"  }
		// 	}
		// });

	$urlRouterProvider.otherwise("/login");
});

//route manager (.config) also goes here


//.run also goes here (research that...has to do with authentication)
