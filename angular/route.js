myApp.config(['$routeProvider',function ($routeProvider) {
	
	$routeProvider
		.when('/' , {
			templateUrl    : 'views/main-view.html',
			
		})
		.when('/login' , {
			templateUrl    : 'views/login-view.html',
			controller     : 'mainController'
		})
		.when('/create' , {

			templateUrl		: 'views/admin-create-survey-view.html',
			controller 		: 'createSurveyController',
			controllerAs 	: 'createSurvey'
		})
		.when('/survey/viewAll' , {

			templateUrl 	: 'views/admin-all-survey-view.html',
			controller 		: 'allSurveyController',
			controllerAs 	: 'allSurvey'
		})
		.when('/survey/:surveyId' , {

			templateUrl		: 'views/admin-single-survey-view.html',
			controller 		: 'singleSurveyController',
			controllerAs	: 'singleSurvey'
		})
		.when('/edit/survey/viewAll' , {

			templateUrl 	: 'views/admin-edit-all-survey-view.html',
			controller 		: 'allSurveyController',
			controllerAs 	: 'allSurvey'
		})
		.when('/edit/survey/:surveyId' , {

			templateUrl		: 'views/admin-edit-single-survey-view.html',
			controller 		: 'singleSurveyController',
			controllerAs	: 'singleSurvey'
		})
		.when('/edit/:surveyId' , {

			templateUrl		: 'views/admin-edit-survey-view.html',
			controller 		: 'editSurveyController',
			controllerAs 	: 'editSurvey'
		})
		.when('/createQuestion/:surveyId',{

			templateUrl 	: 'views/admin-create-question-view.html',
			controller 		: 'createQuestionController',
			controllerAs	: 'createQuestion'
		})
		
		.when('/takeSurvey' , {

			templateUrl		: 'views/user-all-survey-view.html',
			controller 		: 'allSurveyController',
			controllerAs 	: 'allSurvey'
		})
		.when('/takeSurvey/:surveyId' , {

			templateUrl		: 'views/user-single-survey-view.html',
			controller 		: 'userSingleSurveyController',
			controllerAs 	: 'userSurvey'
		})
		 .when('/error',{

            template   : '<h1>Some error occured while connecting to backend!</h1>'

        })
		.otherwise(
            {
            	template   : '<h1>404 page not found</h1>'
            }
        );

}]);