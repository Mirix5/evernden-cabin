(function(){
	var app = angular.module('app-photos', []);

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
})();