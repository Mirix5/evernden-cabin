/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function expandDate(caller, month, year){
    $(".modalHeader").html(month+' '+caller+', '+year);
    $(".dateModal").toggleClass("active");
    $(".dates").toggleClass("inactive");
}

function closeModal() {
    $(".dateModal").toggleClass("active");
    $(".dates").toggleClass("inactive");
}

