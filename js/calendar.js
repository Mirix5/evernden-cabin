/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function expandDate(caller, month, year, reservation) {
    $(".modalHeader").html(month + ' ' + caller + ', ' + year);
    $(".dateModal").toggleClass("active");
    $(".dates").toggleClass("inactive");

    if (reservation) {
        $("#reservation").html(reservation);
    } else {
        $(".modalContent").html("<p>No reservations for this date yet.</p>\
                <p>If you want to reserve this date, leave your name below:</p>\
                <input type=\"text\" name=\"name\" value=\"\">\
                <button type=\"submit\">Submit</button>");
    }
}

function closeModal() {
    $(".dateModal").toggleClass("active");
    $(".dates").toggleClass("inactive");
}

