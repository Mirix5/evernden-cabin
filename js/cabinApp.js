var myApp = angular.module('myApp', []);

myApp.directive('calendar', function(){
	return {
		restrict: 'E',
		templateUrl: 'calendar.html'
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
