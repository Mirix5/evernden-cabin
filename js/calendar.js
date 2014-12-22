/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function expandDate(day, monthNo, month, year, reservation) {
    $(".modalHeader").html(month + ' ' + day + ', ' + year);
    $(".dateModal").toggleClass("active");
    $(".dates").toggleClass("inactive");

    if (reservation) {
        $(".modalContent").html("<h3>" + reservation + " has reserved this date.</h3>\
                                <div>\
                <input type='hidden' name=\"month\" value=\"" + monthNo + "\" />\
                <input type='hidden' name=\"day\" value=\"" + day + "\" />\
                <input type='hidden' name=\"year\" value=\"" + year + "\" />\
                <button class=\"cancel\" onclick=\"cancel()\">Cancel Reservation</button>\
                </div>");
    } else {
        $(".modalContent").html("<p>No reservations for this date yet.</p>\
                <p>If you want to reserve this date, leave your name below:</p>\
                <input id=\"input-box\" type=\"text\" name=\"name\" value=\"\">\
                <input type='hidden' name=\"month\" value=\"" + monthNo + "\" />\
                <input type='hidden' name=\"day\" value=\"" + day + "\" />\
                <input type='hidden' name=\"year\" value=\"" + year + "\" />\
                <button class=\"submit\" onclick=\"reserve()\">Submit</button>");
        $("#input-box").focus();
    }
}

function closeModal() {
    $(".dateModal").toggleClass("active");
    $(".dates").toggleClass("inactive");
}

function incrementMonth() {
    $('.calendar').animate({
        opacity: 0
    });
    $('#content').load('calendar.php?sessionMonth=1', function() {
    });
}

function decrementMonth() {
    $('.calendar').animate({
        opacity: 0
    });
    $('#content').load('calendar.php?sessionMonth=-1', function() {
    });
}

function reserve() {
    $month = $("input[name='month']").val();
    $day = $("input[name='day']").val();
    $year = $("input[name='year']").val();
    $name = $("input[name='name']").val();

    $.ajax({
        type: 'POST',
        url: 'reserve.php',
        data: {name: $name, month: $month, day: $day, year: $year}
    }).done(function() {
        $(".dateModal").toggleClass("active");
        $(".dates").toggleClass("inactive");
        $(".calendar-wrapper").load("calendar.php .calendar");
  });
}

function cancel() {
    $month = $("input[name='month']").val();
    $day = $("input[name='day']").val();
    $year = $("input[name='year']").val();

    $.ajax({
        type: 'POST',
        url: 'cancel.php',
        data: {month: $month, day: $day, year: $year}
    }).done(function() {
        $(".dateModal").toggleClass("active");
        $(".dates").toggleClass("inactive");
        $(".calendar-wrapper").load("calendar.php .calendar");
  });
}