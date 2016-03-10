angular.module('userProfiles', ['ui.router'])

.config(function( $stateProvider, $urlRouterProvider ) {

	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: './views/home.html',
		controller: 'mainCtrl'
	})
	.state('profile', {
		url: '/profile',
		'templateUrl': './views/profile.html',
		controller: 'profileCtrl',
		resolve: {									//This resolve should return the result of our friendService.getFriends
			userInfo: function( friendService ) {   //method sending a 'GET' request to our /api/profiles endpoint.
				return friendService.getFriends();	
			}		
		}
	});

	$urlRouterProvider.otherwise('/');

});