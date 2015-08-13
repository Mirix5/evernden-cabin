(function() {
	var app = angular.module('cabinApp', ['app-photos', 'app-calendar']);

	app.directive('news', function(){
		return {
			restrict: 'E',
			templateUrl: 'news.html'
		};
	});
})();


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

//Flip modal toggle
function modalOpen() {
	$(".heading, .thumbs, .background-image").toggleClass("modalOpen");
	$(".modal").toggleClass("visible");
}
