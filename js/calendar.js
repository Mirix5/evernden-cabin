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
                                    <form action=\"cancel.php\" method=\"post\">\
                <input type='hidden' name=\"month\" value=\"" + monthNo + "\" />\
                <input type='hidden' name=\"day\" value=\"" + day + "\" />\
                <input type='hidden' name=\"year\" value=\"" + year + "\" />\
                <button class=\"cancel\">Cancel Reservation</button>\
                </form>\
                    </div>");
    } else {
        $(".modalContent").html("<p>No reservations for this date yet.</p>\
                <p>If you want to reserve this date, leave your name below:</p>\
                <form action=\"reserve.php\" method=\"post\">\
                <input id=\"input-box\" type=\"text\" name=\"name\" value=\"\">\
                <input type='hidden' name=\"month\" value=\"" + monthNo + "\" />\
                <input type='hidden' name=\"day\" value=\"" + day + "\" />\
                <input type='hidden' name=\"year\" value=\"" + year + "\" />\
                <button class=\"submit\" type=\"submit\">Submit</button>\
                </form>");
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