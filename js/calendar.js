(function(){
	var app = angular.module('app-calendar', []);

	app.directive('calendar', function(){
		return {
			restrict: 'E',
			templateUrl: 'calendar.html',
			controller: function(){
				this.constructDays = function(offset) {
					var date = new Date();

					this.day = date.getDay();
					this.month_strings = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
					this.month = this.month_strings[date.getMonth()];
					this.year = date.getYear() + 1900;

					var firstDayDate = new Date(this.year, date.getMonth(), 1);
					this.day_strings = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
					this.firstDayOfMonth = this.day_strings[firstDayDate.getDay()];

					days = [];
					date_number = 0;
					for(i=0; i<35; i++){
						if(this.firstDayOfMonth == this.day_strings[i] || date_number > 0) {
							date_number++;
						}

						day = {
							day_number: i,
							day_text: date_number
						}

						days.push(day);
					}
					

					return days;
				}

				this.days = this.constructDays(0);
			},
			controllerAs: 'calendar'
		};
	});
})();