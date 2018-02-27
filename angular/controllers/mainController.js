myApp.controller('mainController',['$rootScope', '$scope' , function( $rootScope , $scope){

	// function to login as Admin
	$scope.logIn = function(username,password){
		
		if( username == 'tanima' && password == 'tanimasingh' ){
			$rootScope.loggedIn = true ;
		}
			
		if(!$rootScope.loggedIn){
			alert("Incorrect username/email or password! Please check and try again.");
		}
		
	}; // end of logIn function

}]) ; // end of controller