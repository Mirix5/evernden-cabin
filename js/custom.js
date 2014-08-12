$(document).ready(function() {
    $("#background").ready(function() {
        $("#background").fadeIn(1000);
    });
});

function navigate(caller) {
    $("#pictures").addClass("shrinking");
    $("#pictures").css("background-color", "#fff");
    $("#news").addClass("shrinking");
    $("#news").css("background-color", "#fff");
    $("#calendar").addClass("shrinking");
    $("#calendar").css("background-color", "#fff");

    $(".buttonGroup").addClass("falling");
    $("#heading").addClass("rising");

    setTimeout(function() {
        $("#pictures").html("<i class='fa fa-camera'></i>");
        $("#news").html("<i class='fa fa-rss'></i>");
        $("#calendar").html("<i class='fa fa-calendar'></i>");
    }, 500);

    $(".shrinking").hover(function() {
        $(this).html("<span> " + this.id + "</span>");
    }, function() {
        if(this.id === 'pictures'){
            $(this).html("<i class='fa fa-camera'></i>");
        } else if (this.id === 'news') {
            $(this).html("<i class='fa fa-rss'></i>");
        } else if (this.id === 'calendar') {
            $(this).html("<i class='fa fa-calendar'></i>");
        }
    });

    if (caller === 'pictures') {
        $("#content").fadeOut(500);
        setTimeout(function() {
            $("#content").load("pictures.php");
            $("#content").fadeIn(500);
        }, 1000);
    } else if (caller === 'calendar') {
        $("#content").fadeOut(500);
        setTimeout(function() {
            $("#content").load("calendar.php");
            $("#content").fadeIn(500);
        }, 1000);
    } else if (caller === 'news') {
        $("#content").fadeOut(500);
        setTimeout(function() {
            $("#content").load("news.php");
            $("#content").fadeIn(500);
        }, 1000);
    }
}