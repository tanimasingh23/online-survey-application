myApp.controller('createSurveyController',['surveyAppService','$location', function(surveyAppService , $location ){

	var main = this ;
	var data;
	
	//function to create new survey
	this.newSurvey = function(){

		var data = {
			surveyTitle : main.title,
			surveySubtitle : main.subtitle,
			instructions : main.instructions
		}
	

		surveyAppService.createNewSurvey(data)
		.then(function successCallback(response){
			alert("New survey created successfully!");
			console.log(main.response);
			$location.path('/edit/survey/viewAll')

		}, function errorCallback(response){

			alert("Some error occured! Please check console.");
			console.log(response);

		});

	}; //end newSurvey
	

}]); // end of controller