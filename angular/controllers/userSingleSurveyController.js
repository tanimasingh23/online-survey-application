myApp.controller('userSingleSurveyController',['surveyAppService','$routeParams', function (surveyAppService, $routeParams) {
	
	var surveyId = $routeParams.surveyId ;
	var main = this ;
	var i = 0 ;
	var data;
	this.buttonValue = 'Next' ;
	this.startButton = true ;

	this.enableNext ; 

	//function to load a single survey
	this.loadSingleSurvey = function(){

		surveyAppService.getSingleSurvey(surveyId)
		.then( function successCallback(response){
			console.log('Single survey loaded');
			main.singleSurvey = response.data.data ;
		}, function errorCallback(response){			
			alert("Some error occured. Please check console.");
			console.log(response);
		});

	}(); // end loadSingleSurvey


	// function to start a survey on clicking the start survey button
	this.startSurvey = function(){

		main.loadNextQuestion();
		main.startButton = false;
		main.showSurvey = true ;
	} //end startSurvey


	// function to skip a question by user
	this.skipQuestion = function(questionId){
		main.answer = -1 ; 
		main.loadNextQuestion(questionId) ;
	};//end skipQuestion


	// function to create an answer.
	this.createAnswer = function(questionId , answer){

		data = { 
			selectedOptionNumber : answer 
		};
		surveyAppService.createAnswer(questionId,data)
		.then( function(response){

			console.log('new answer created');
			console.log(response);

		}, function errorCallback(response){
			
			alert("Some error occured. Please check console.");
			console.log(response);
		});
	} // end createAnswer	
	


	// function to enable/disable next button
	this.changeNextValue = function(){
		main.enableNext = false ;
	} ; // end changeDisabledValue 


	// function to load all the questions
	this.loadQuestions = function(){

		surveyAppService.getAllQuestions(surveyId)
		.then( function (response){

			main.allQuestions = response.data.data ;
			console.log(main.questionData);

		} , function errorCallback(response){	
			alert("Some error occured. Please check console.");
			console.log(response);
		});

	}(); // end of loadQuestions function
	

	// function to load next question
	this.loadNextQuestion = function(questionId){

		main.answer++ ;

		// questionId is undefined when this function is called first time
		if( questionId !== undefined && questionId !== null){  
			main.createAnswer(questionId , main.answer);

		} // end of if block

		main.question = main.allQuestions[i];

		// change buttonValue variable value for last question
		if( i == main.allQuestions.length-1 ){
			main.buttonValue = 'Finish';
		}
			i++ ;
			
			main.answer = undefined ;
			//disable next button
			main.enableNext = true ;			
			
	} ; // end loadNextQuestion

}]); // end of controller
