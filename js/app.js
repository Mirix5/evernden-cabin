var myApp = angular.module('cabinApp', []);

myApp.directive('calendar', function(){
	return {
		restrict: 'E',
		templateUrl: 'calendar.html'
	};
});

myApp.directive('news', function(){
	return {
		restrict: 'E',
		templateUrl: 'news.html'
	};
});

myApp.directive('photos', function(){
	return {
		restrict: 'E',
		templateUrl: 'photos.html'
	};
});


function navClick() {
	$(".heading").removeClass("heading-landing-pos");
	$(".heading").addClass("heading-nav-pos");
	$(".nav-content").addClass("nav-content-expand");
}

function headingClick() {
	$(".heading").addClass("heading-landing-pos");
	$(".heading").removeClass("heading-nav-pos");
	$(".nav-content").removeClass("nav-content-expand");
}
