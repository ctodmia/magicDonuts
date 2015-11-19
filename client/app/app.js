//app module goes here!!!
angular.module("myApp", [
	"firebase",
	"ui.router",
	"myApp.services",
	"myApp.user",
	"myApp.logout",
	"myApp.search",
	"myApp.cssMessenger",
	"myApp.jqueryMessenger",
	"myApp.angularMessenger",
	"myApp.html5Messenger",
	"myApp.swiftMessenger",
	"myApp.nodeMessenger",
	"myApp.pythonMessenger",
	"myApp.rubyMessenger",
	"myApp.auth"
])

.config(function($stateProvider, $urlRouterProvider){


	$stateProvider
		.state("login", {
			controller: "AuthController",
			url: "/login",
			templateUrl: "app/auth/loginAuth.html"
		})
		//messages
		// .state("messages", {
		// 	controller: "MessagesController",
		// 	url: "/messages",
		// 	templateUrl: "app/messages/messages.html"
		// })
		//need this for later, in order to have multiple views in one window
		// https://scotch.io/tutorials/angular-routing-using-ui-router
		.state("home", {
			url:"/home",
			views: {
				"": { templateUrl: "app/home/home.html" },
				// "logOut@home": {
				// 	templateUrl: "app/logout/logout.html",
				// 	controller: "LogOutController"
				// },
				//html and controller required for onlineUsers view
				"onlineUsers@home": { 
					templateUrl: "app/home/registereduser/registereduser.html",
					controller: "User"
					},
				//html and controller required for chatrooms view
				"roomList@home": { templateUrl: "app/home/roomlist.html" },
				//html and controller required for userSearch view
				"userSearch@home": { 
					templateUrl: "app/home/search/search.html",
					controller: "SearchController"
				 }
			}
		})

		.state("jqueryChatroom", {
			url:"/jqueryGathering",
			views: {
				"": { templateUrl: "app/chatrooms/jquery/chatroom.html" },
				// html and controller required for onlineUsers view
				"onlineUsers@jqueryChatroom": { template: "online users column!!"},
		// 		//html and controller required for chatrooms view
				"codeShare@jqueryChatroom": { 
					templateUrl: "app/chatrooms/jquery/codeshare.html"
				},
		// 		//html and controller required for userSearch view
				"messages@jqueryChatroom": { 
					templateUrl: "app/chatrooms/jquery/messenger/messenger.html",
					controller: "JqueryMsgController"
				}
			}
		})

		.state("nodeChatroom", {
			url:"/nodeGathering",
			views: {
				"": { templateUrl: "app/chatrooms/nodejs/chatroom.html" },
				// html and controller required for onlineUsers view
				"onlineUsers@nodeChatroom": { template: "online users column!!"},
		// 		//html and controller required for chatrooms view
				"codeShare@nodeChatroom": { 
					templateUrl: "app/chatrooms/nodejs/codeshare.html"
				},
		// 		//html and controller required for userSearch view
				"messages@nodeChatroom": { 
					templateUrl: "app/chatrooms/nodejs/messenger/messenger.html",
					controller: "NodeMsgController"  
				}
			}
		})

		.state("angularChatroom", {
			url:"/angularGathering",
			views: {
				"": { templateUrl: "app/chatrooms/angularjs/chatroom.html" },
				// html and controller required for onlineUsers view
				"onlineUsers@angularChatroom": { template: "online users column!!"},
		// 		//html and controller required for chatrooms view
				"codeShare@angularChatroom": { 
					templateUrl: "app/chatrooms/angularjs/codeshare.html"
				},
		// 		//html and controller required for userSearch view
				"messages@angularChatroom": { 
					templateUrl: "app/chatrooms/angularjs/messenger/messenger.html",
					controller: "AngularMsgController" 
				}
			}
		})

		.state("pythonChatroom", {
			url:"/pythonGathering",
			views: {
				"": { templateUrl: "app/chatrooms/python/chatroom.html" },
				// html and controller required for onlineUsers view
				"onlineUsers@pythonChatroom": { template: "online users column!!"},
		// 		//html and controller required for chatrooms view
				"codeShare@pythonChatroom": { 
					templateUrl: "app/chatrooms/python/codeshare.html"
				},
		// 		//html and controller required for userSearch view
				"messages@pythonChatroom": { 
					templateUrl: "app/chatrooms/python/messenger/messenger.html",
					controller: "PythonMsgController"  
				}
			}
		})

		.state("swiftChatroom", {
			url:"/swiftGathering",
			views: {
				"": { templateUrl: "app/chatrooms/swift/chatroom.html" },
				// html and controller required for onlineUsers view
				"onlineUsers@swiftChatroom": { template: "online users column!!"},
		// 		//html and controller required for chatrooms view
				"codeShare@swiftChatroom": { 
					templateUrl: "app/chatrooms/swift/codeshare.html"
				},
		// 		//html and controller required for userSearch view
				"messages@swiftChatroom": { 
					templateUrl: "app/chatrooms/swift/messenger/messenger.html",
					controller: "SwiftMsgController" 
				}
			}
		})

		.state("rubyOnRailsChatroom", {
			url:"/rubyOnRailsGathering",
			views: {
				"": { templateUrl: "app/chatrooms/rubyOnRails/chatroom.html" },
				// html and controller required for onlineUsers view
				"onlineUsers@rubyOnRailsChatroom": { template: "online users column!!"},
		// 		//html and controller required for chatrooms view
				"codeShare@rubyOnRailsChatroom": { 
					templateUrl: "app/chatrooms/rubyOnRails/codeshare.html"
				},
		// 		//html and controller required for userSearch view
				"messages@rubyOnRailsChatroom": { 
					templateUrl: "app/chatrooms/rubyOnRails/messenger/messenger.html",
					controller: "RubyMsgController" 
				}
			}
		})

		.state("Html5Chatroom", {
			url:"/HTML5Gathering",
			views: {
				"": { templateUrl: "app/chatrooms/HTML5/chatroom.html" },
				// html and controller required for onlineUsers view
				"onlineUsers@Html5Chatroom": { template: "online users column!!"},
		// 		//html and controller required for chatrooms view
				"codeShare@Html5Chatroom": { 
					templateUrl: "app/chatrooms/HTML5/codeshare.html"
				},
		// 		//html and controller required for userSearch view
				"messages@Html5Chatroom": { 
					templateUrl: "app/chatrooms/HTML5/messenger/messenger.html",
					controller: "Html5MsgController"  
				}
			}
		})

		.state("CssChatroom", {
			url:"/CSSGathering",
			views: {
				"": { templateUrl: "app/chatrooms/CSS/chatroom.html" },
				// html and controller required for onlineUsers view
				"onlineUsers@CssChatroom": { template: "online users column!!"},
		// 		//html and controller required for chatrooms view
				"codeShare@CssChatroom": { 
					templateUrl: "app/chatrooms/CSS/codeshare.html"
				},
		// 		//html and controller required for userSearch view
				"messages@CssChatroom": { 
					templateUrl: "app/chatrooms/CSS/messenger/messenger.html",
					controller: "CssMsgController"  
				}
			}
		});

	$urlRouterProvider.otherwise("/login");
})
	.constant("FirebaseUrl", "https://gitlytest.firebaseio.com/")

//route manager (.config) also goes here


//.run also goes here (research that...has to do with authentication)
