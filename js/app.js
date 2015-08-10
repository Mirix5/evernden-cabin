var app = angular.module('cabinApp', []);

app.directive('calendar', function(){
	return {
		restrict: 'E',
		templateUrl: 'calendar.html'
	};
});

app.directive('news', function(){
	return {
		restrict: 'E',
		templateUrl: 'news.html'
	};
});

app.directive('photos', function(){
	return {
		restrict: 'E',
		templateUrl: 'photos.html',
		controller: function(){
			this.photos =  ['images/Uploaded_Photos/Northspur_Sign.jpg', 'images/Uploaded_Photos/tracks.jpg', 'images/Uploaded_Photos/Tree.jpg',
							'images/Uploaded_Photos/Kings Hole 1.jpg', 'images/Uploaded_Photos/Kings Hole 2.jpg', 'images/Uploaded_Photos/Kings Hole 3.jpg',
							'images/Uploaded_Photos/Kings Hole 4.jpg', 'images/Uploaded_Photos/Kings Hole Sign.jpg', 'images/Uploaded_Photos/River.jpg',
							'images/tree.jpg'];
			this.current = 0;
		},
		controllerAs: 'album'
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

//Flip modal toggle
function modalOpen() {
	$(".heading, .thumbs, .background-image").toggleClass("modalOpen");
	$(".modal").toggleClass("visible");
}
