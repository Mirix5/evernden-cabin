(function(){
	var app = angular.module('app-calendar', []);
	app.directive('calendar', function(){
		return {
			restrict: 'E',
			templateUrl: 'calendar.html',
		};
	});

	app.controller('calendarCtrlr', ['$scope', '$http', function($scope, $http) {
		$scope.constructCalendar = function(month) {
			$scope.determineMonth(month);

			date = new Date($scope.year, $scope.month);

			$scope.month_strings = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
			$scope.month_string = $scope.month_strings[date.getMonth()];

			var firstDayDate = new Date($scope.year, date.getMonth(), 1);
			$scope.day_strings = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
			$scope.firstDayOfMonth = firstDayDate.getDay();
			$scope.numberOfDays = new Date($scope.year, $scope.nextMonth, 0).getDate();

			date_number = 0;
			$scope.days = [];
			days_reserved = [];

			$http.post('getDates.php', {month: $scope.month, year: $scope.year}).
			then(function(response) {
				$scope.constructDays(response);
			});
		};

		$scope.determineMonth = function(month) {
			$scope.nextMonth = 0;

			if(month < 0){
				$scope.year = $scope.year - 1;
				$scope.month = 11;
				$scope.nextMonth = 1;
			} else if(month == 12) {
				$scope.year = $scope.year + 1;
				$scope.month = 0;
				$scope.nextMonth = 1;
			} else {
				$scope.month = month;
				$scope.nextMonth = month + 1;
				if($scope.nextMonth == 12) $scope.nextMonth = 1;
			}
		};

		$scope.constructDays = function(response) {
			days_reserved = response.data;
			console.log(days_reserved);
		    for(i = 0; i < 42; i++) {
		    	day = {
		    		day_id: i,
		    		date_number: null,
		    		reservee: "",
		    		day_class: "faded"
		    	}
		    	if(i == $scope.firstDayOfMonth || date_number > 0 && date_number < $scope.numberOfDays) {
		    		date_number++;
		    		day.date_number = date_number;
		    		day.day_class = null;
		    	}
		    	$scope.days.push(day);
		    }
		};

		var date = new Date();
		$scope.day = date.getDate();
		$scope.month = date.getMonth();
		$scope.year = date.getYear() + 1900;
		$scope.constructCalendar($scope.month);
		console.log($scope.days);
	}]);
})();