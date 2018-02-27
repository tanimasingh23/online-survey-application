// using factory method

// Factory method uses the returned value of the function,
// it returns the values
//of the function returned after the execution
// 

myApp.service('surveyAppService',['$http', function($http){
	// this method first 
	
	var baseUrl = "https://projectsapi.edwisor.com/api/surveys/" ;

	this.getAllSurvey = function(){

		return $http({	
			method : 'GET' , 
			url : baseUrl 
		});
	} // end getAllSurvey

	this.getSingleSurvey = function(surveyId){

		return $http({	
			method : 'GET' ,
			url : baseUrl + surveyId 	
		});
	} // end getSingleSurvey


	this.getAllQuestions = function(surveyId){

		return $http({	
			method : 'GET' , 
			url : baseUrl + surveyId +'/questions/all' 
		});
	} // end getAllQuestions


	this.createNewSurvey = function(data){

		return $http({

			method  : 'POST',
			url 	:  baseUrl + '/create' ,
			data 	: data
		});

	} // end createNewSurvey

	

	this.deleteSurvey = function(surveyId){

		return $http({ 
			method : 'POST' , 
			url : baseUrl + surveyId + '/delete' 
		});

	} // end deleteSurvey

	this.deleteQuestion = function(questionId){

		return $http({ 
			method : 'POST', 
			url : baseUrl + 'questions/'+ questionId +'/delete' 
		});
	} // end deleteQuestion



	this.deleteOptions = function(questionId){

		return $http({ 
			method : 'POST', 
			url : baseUrl + 'questions/'+ questionId +'/options/delete'  
		}) ;
	} // end deleteOptions 

	this.deleteAnswers = function(questionId){

		return $http({ 
			method : 'POST', 
			url : baseUrl + 'questions/' + questionId +'/answers/delete' 
		}) ;
	} // end deleteAnswers


	this.editSurvey = function(surveyId , data){

		return $http({

			method : 'PUT' ,
			url    : baseUrl + surveyId + '/edit' ,
			data   : data 
		});
	} // end editSurvey


	this.editQuestion = function(questionId , data){

		return $http({ 
			method : 'PUT' , 
			url : baseUrl + 'questions/' + questionId +'/edit', 
			data : data 
		});
	} // end editQuestion


	this.createQuestion = function(surveyId , data){

		return $http({

			method : 'POST',
			url : baseUrl + surveyId + '/question/create',
			data : data
		}) ;
	} // end createQuestion

	this.createOption = function(data , questionId){

		return $http({

			method : 'POST',
			url : baseUrl +'questions/' + questionId + '/options/create' ,
			data : data
		});
	} // end createOption


	this.createAnswer = function( questionId , answer){

		return $http({

			method 	: 'POST' ,
			url 	: baseUrl + "questions/" + questionId + "/answer/create" ,
			data 	: answer  
		});

	} ;

}]); // end surveyAppService
