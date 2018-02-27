myApp.controller('editSurveyController',['surveyAppService','$routeParams','$location', function(surveyAppService ,$routeParams, $location ){

	var main = this ;
	var data ;
	this.surveyId = $routeParams.surveyId ;
	
	// function to load single survey
	this.loadSingleSurvey = function(){

		surveyAppService.getSingleSurvey(main.surveyId)
		.then( function successCallback(response){
			
			console.log('single survey loaded');
			
			main.title = response.data.data.surveyTitle ;
			main.subtitle = response.data.data.surveySubtitle ;
			main.instructions = response.data.data.instructions ;

		}, function errorCallback(response){
			
			alert("Some error occured. Please check console.");
			console.log(response);

		});

	}(); // end loadSingleSurvey

	// function to edit a survey (title, subtitle, instructions)
	this.edit = function(){

		var data = {

			surveyTitle : main.title,
			surveySubtitle : main.subtitle,
			instructions : main.instructions
		}

		console.log(data);
		surveyAppService.editSurvey(main.surveyId , data)
		.then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          //console.log(response);
          alert("Survey edited successfully!");
         // console.log(response.data);
          $location.path('/edit/survey/viewAll');

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("Some error occurred. Please check console.");
          console.log(response);
        });

	}; // end edit

}]); // end of controller