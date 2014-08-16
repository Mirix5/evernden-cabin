/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var $index = 1;

function next() {
    var photoQ = document.getElementsByClassName("slide");
    
    if ($index === 0) {
        $(photoQ[photoQ.length - 1]).toggleClass("active");
        $(photoQ[photoQ.length - 1]).toggleClass("inactive");
        $(photoQ[$index]).toggleClass("inactive");
        $(photoQ[$index]).toggleClass("active");
    } else {
        $(photoQ[$index - 1]).toggleClass("active");
        $(photoQ[$index - 1]).toggleClass("inactive");
        $(photoQ[$index]).toggleClass("inactive");
        $(photoQ[$index]).toggleClass("active");
    }
    $index++;
    if ($index === photoQ.length) {
        $index = 0;
    }
}

function previous() {
    var photoQ = document.getElementsByClassName("slide");
    
    if($index === 0){
        $(photoQ[photoQ.length - 1]).toggleClass("active");
        $(photoQ[photoQ.length - 1]).toggleClass("inactive");
        $(photoQ[photoQ.length - 2]).toggleClass("inactive");
        $(photoQ[photoQ.length - 2]).toggleClass("active");
    } else if ($index === 1) {
        $(photoQ[0]).toggleClass("active");
        $(photoQ[0]).toggleClass("inactive");
        $(photoQ[photoQ.length - 1]).toggleClass("inactive");
        $(photoQ[photoQ.length - 1]).toggleClass("active");
    } else {
        $(photoQ[$index-1]).toggleClass("active");
        $(photoQ[$index-1]).toggleClass("inactive");
        $(photoQ[$index-2]).toggleClass("inactive");
        $(photoQ[$index-2]).toggleClass("active");
    }
    
    if($index === 0){
        $index = photoQ.length-1;
    } else {
        $index--;
    }
}
