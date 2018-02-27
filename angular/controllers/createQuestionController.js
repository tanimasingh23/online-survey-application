myApp.controller('createQuestionController',['surveyAppService', '$location', '$routeParams', function( surveyAppService , $location , $routeParams){
	
	var main = this ;
	var surveyId = $routeParams.surveyId ;
	var data ;

	// function to create a new question
	this.newQuestion = function(){

		data = {
			questionText : main.questionText
		};
		
		surveyAppService.createQuestion(surveyId ,data)
		.then(function successCallback(response){
			alert("New question created successfully!");
			//console.log(main.response);
			$location.path('/edit/survey/'  + surveyId);

		}, function errorCallback(response){

			alert("Some error occured! Please check console.");
			console.log(response);

		});

	}; // end newQuestion
	

}]); // end of controller