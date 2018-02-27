myApp.controller('singleSurveyController',['surveyAppService','$routeParams','$route','$location', function (surveyAppService, $routeParams, $route, $location){
	
	var surveyId = $routeParams.surveyId ;
	var main = this;

  this.showQuestionInput = [] ;

	// function to load single survey
	this.loadSingleSurvey = function(){

		surveyAppService.getSingleSurvey(surveyId)
		.then( function successCallback(response){
			
			console.log('Single survey loaded.');
			//console.log(response.data.data);
			main.singleSurvey = response.data.data ;

		}, function errorCallback(response){
			// called asynchronously if an error occurs
      // or server returns response with an error status.
			alert("Some error occured. Please check console.");
			console.log(response);

		});

	}(); // end loadSingleSurvey



	// function to load questions of a survey
	this.loadQuestions = function(){

		surveyAppService.getAllQuestions(surveyId)
		.then(function(response){

			console.log('Questions Loaded.');
			//console.log	(response.data.data);
			main.singleSurveyQuestions = response.data.data ;
			
		}, function(response){
      // called asynchronously if an error occurs
      // or server returns response with an error status.
			alert("Some error occured. Please check console.");
			console.log(response);
		}) ;

	} ();// end loadQuestions


  // function to delete a survey
	this.deleteSurvey = function(surveyId){

      // no body parameters are needed  
    surveyAppService.deleteSurvey(surveyId)
    .then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
        //console.log(response);
        alert("Survey deleted successfully!");
        
        $location.path('/survey/viewAll');
        

      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        alert("Some error occured! Please check console.");
        console.log(response);
      });

  };// end deleteSurvey


  // function to delete a question of a survey
  this.deleteQuestion = function(questionId, id){

      // no body parameters are needed 
    surveyAppService.deleteQuestion(questionId)
    .then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
        //console.log(response);
        alert("Question deleted successfully!");
        
        $route.reload();        

      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        alert("Some error occured! Please check console.");
        console.log(response);
      });

  }; //end deleteQuestion


  // function to delete all the options of a question
  this.deleteOptions = function(questionId, id){

      // no body parameters are needed 
    surveyAppService.deleteOptions(questionId)
    .then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
        //console.log(response);
        alert("All options deleted successfully!");
        
        $route.reload();      

      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        alert("Some error occured! Please check console.");
        console.log(response);
      });

  }; // end deleteOptions
  

  // function to delete answers provided by user
  this.deleteAnswers = function(questionId, id){

      // no body parameters are needed
    surveyAppService.deleteAnswers(questionId)
    .then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
        //console.log(response);
        alert("Answers deleted successfully!");
        
        $route.reload();     

      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        alert("Some error occured! Please check console.");
        console.log(response);
      });

  }; // end deleteAnswers


  // function to create an option of a question
  this.createOption = function(questionId , id){

    data = { optionText : main.option[id] };

    surveyAppService.createOption(data,questionId)
    .then( function(response){

      console.log('New option created');
      $route.reload(); 

    }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        alert("Some error occured! Please check console.");
        console.log(response);
      });

  }; // end createOption

  // function to update a question
  this.updateQuestion = function(questionId, question, id){

     var data = { 
      questionText : question
      };

    surveyAppService.editQuestion(questionId , data)
    .then(function(response){

      console.log('Question updated');
      $route.reload();

    }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        alert("Some error occured! Please check console.");
        console.log(response);
      });

  } // end of update question request


  //function to show input box to edit a question
  this.showQuestionForm = function(questionId, question, id){

    main.showQuestionInput[id] = true ;
    
  } // end of showQuestionForm function

}]); // end of controller