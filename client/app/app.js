//app module goes here!!!
angular.module("myApp", [
	"firebase",
	"ui.router",
	"myApp.services",
	"myApp.messages",
	"myApp.auth",
	"myApp.logout"
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
				"logOut@home": {
					templateUrl: "app/logout/logout.html",
					controller: "LogOutController"
				},
				//html and controller required for onlineUsers view
				"onlineUsers@home": { template: "online users column!!"},
				//html and controller required for chatrooms view
				"roomList@home": { templateUrl: "app/home/roomlist.html" },
				//html and controller required for userSearch view
				"userSearch@home": { template: "user search section lives here" }
			}
		})

		.state("chat", {
			url:"/chat",
			views: {
				"": { templateUrl: "app/chat/chat.html" },
				// html and controller required for onlineUsers view
				"onlineUsers@chat": { template: "online users column!!"},
		// 		//html and controller required for chatrooms view
				"codeShare@chat": { 
					templateUrl: "app/chat/codeshare.html"
				},
		// 		//html and controller required for userSearch view
				"messages@chat": { 
					template: "Yo yo Yo whats up"
					// templateUrl: "app/messages/messages.html",
					// controller: "MessagesController"  
				}
			}
		});

	$urlRouterProvider.otherwise("/login");
});

//route manager (.config) also goes here


//.run also goes here (research that...has to do with authentication)
