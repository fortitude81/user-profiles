angular.module('userProfiles')
.factory('friendService', function( $http ) {
  return {
    
    //This function should post to your login endpoint, sending the user object we recieved from our controller.
    login: function( user ) {
    	return $http.post('/api/login', user);
    },

    getFriends: function() {
    	return $http.get('/api/profiles').then(function( response ) {
    		return response.data;
    	});
    }
  }
});