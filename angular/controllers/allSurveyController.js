myApp.controller('allSurveyController',['surveyAppService','$route', function(surveyAppService , $route ){

	var main = this ;
	this.surveys = [] ;

	// function to load all surveys
	this.loadAllSurveys = function(){

		surveyAppService.getAllSurvey()
		.then(function successCallback(response){

			main.surveys = response.data.data ;
			console.log(main.surveys);

		}, function errorCallback(response){

			alert("Some error occured! Please check console.");
			console.log(response);

		});

	}(); //end loadAllSurveys

    // function to delete a survey
	 this.deleteSurvey = function(surveyId,index){

      // no body parameters are needed
    var myData = {};
    console.log(index);
    
    console.log(main.surveys.length);
    surveyAppService.deleteSurvey(surveyId)
    .then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
        //console.log(response);
        alert("Survey deleted successfully");
        
        main.surveys.splice(index,1);
        console.log(main.surveys.length);
        

      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        alert("Some error occured! Please check console.");
        console.log(response);
      });

  };// end deleteSurvey
	
}]); // end of controller