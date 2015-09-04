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
					nextMonth = 0;

					if(month < 0){
						$scope.year = $scope.year - 1;
						$scope.month = 11;
						nextMonth = 1;
					} else if(month == 12) {
						$scope.year = $scope.year + 1;
						$scope.month = 0;
						nextMonth = 1;
					} else {
						$scope.month = month;
						nextMonth = month + 1;
						if(nextMonth == 12) nextMonth = 1
							;					}

						date = new Date($scope.year, $scope.month);

						$scope.month_strings = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
						$scope.month_string = $scope.month_strings[date.getMonth()];

						var firstDayDate = new Date($scope.year, date.getMonth(), 1);
						$scope.day_strings = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
						$scope.firstDayOfMonth = $scope.day_strings[firstDayDate.getDay()];
						$scope.numberOfDays = new Date($scope.year, nextMonth, 0).getDate();

						date_number = 0;
						days_reserved = [];

						$http.post('getDates.php').
							then(function(response) {
								$scope.days = [];

							    for(i = 0; i < 42; i++) {
							    	day = {
							    		day_id: i,
							    		date_number: i,
							    		reservee: "",
							    		day_class: "faded"
							    	}

							    	$scope.days.push(day);
							    }

							    console.log($scope.days);
							});
					};

					var date = new Date();

					$scope.day = date.getDate();
					$scope.month = date.getMonth();
					$scope.year = date.getYear() + 1900;
					$scope.constructCalendar($scope.month);
					console.log($scope.days);
	}]);
})();