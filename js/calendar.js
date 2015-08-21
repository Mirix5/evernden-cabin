(function(){
	var app = angular.module('app-calendar', []);

	app.directive('calendar', function(){
		return {
			restrict: 'E',
			templateUrl: 'calendar.html',
			controller: function(){
				this.constructCalendar = function(month) {

					nextMonth = 0;

					if(month < 0){
						this.year = this.year - 1;
						this.month = 11;
						nextMonth = 1;
					} else if(month == 12) {
						this.year = this.year + 1;
						this.month = 0;
						nextMonth = 1;
					} else {
						this.month = month;
						nextMonth = month + 1;
						if(nextMonth == 12) nextMonth = 1;
					}

					date = new Date(this.year, this.month);

					this.month_strings = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
					this.month_string = this.month_strings[date.getMonth()];

					var firstDayDate = new Date(this.year, date.getMonth(), 1);
					this.day_strings = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
					this.firstDayOfMonth = this.day_strings[firstDayDate.getDay()];
					this.numberOfDays = new Date(this.year, nextMonth, 0).getDate();

					this.days = [];
					date_number = 0;


					for(i=0; i<42; i++){
						reservee = "blank";
						day_class = "";
						day = {
							day_id: i,
							date_number: null,
							day_class: "faded",
							reservee: null
						}

						if(date_number == this.numberOfDays) {
							this.days.push(day);
							continue;
						}


						if(this.firstDayOfMonth == this.day_strings[i] || date_number > 0) {
							date_number++;
							day.day_class = null;
							day.date_number = date_number;
						}
						if(date_number == 13 || date_number == 14 || date_number == 15) {
							day.reservee = "Jake";
							if(day.day_class != "today") {
								day.day_class = "reserved";
							}
						}

						this.days.push(day);
					}
				}

				var date = new Date();

				this.day = date.getDate();
				this.month = date.getMonth();
				this.year = date.getYear() + 1900;
				this.constructCalendar(this.month);
			},
			controllerAs: 'calendar'
		};
	});
})();