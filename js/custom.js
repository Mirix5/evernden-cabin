$(document).ready(function() {
    $("#background").ready(function() {
        $("#background").fadeIn(1000);
    });
});


//The most disgusting method ever written
function navigate(caller) {
    $("#pictures").removeClass("growing");
    $("#pictures").addClass("shrinking");
    $("#info").removeClass("growing");
    $("#info").addClass("shrinking");
    $("#calendar").removeClass("growing");
    $("#calendar").addClass("shrinking");
    $(".buttonGroup").addClass("falling small");
    $(".buttonGroup").removeClass("buttonsRise");
    $("#heading").addClass("rising");
    $("#heading").removeClass("headingFall");
    $("#heading").css("pointer-events", "auto");


    $("#heading").click(function() {
        /*Heading*/
        $("#content").fadeOut(100);
        $("#heading").removeClass("rising");
        $("#heading").addClass("headingFall");
        $(".buttonGroup").removeClass("small");

        /*Buttons*/
        $("#pictures").removeClass("shrinking");
        $("#info").removeClass("shrinking");
        $("#calendar").removeClass("shrinking");
        $(".buttonGroup").removeClass("falling");
        $(".buttonGroup").addClass("buttonsRise");
        $("#pictures").addClass("growing");
        $("#info").addClass("growing");
        $("#calendar").addClass("growing");
        $("#pictures").html("Pictures");
        $("#info").html("Info");
        $("#calendar").html("Calendar");

        setTimeout(function() {
            $("#pictures").removeClass("growing");
            $("#info").removeClass("growing");
            $("#calendar").removeClass("growing");
        }, 1000);
    });

    setTimeout(function() {
        $("#pictures").html("<i class='fa fa-camera'></i>");
        $("#info").html("<i class='fa fa-rss'></i>");
        $("#calendar").html("<i class='fa fa-calendar'></i>");
    }, 500);

    $(".shrinking").hover(function() {
        if ($(".buttonGroup").hasClass("small")) {
            $(this).html("<span> " + this.id + "</span>");
        }
    }, function() {
        if ($(".buttonGroup").hasClass("small")) {
            if (this.id === 'pictures') {
                $(this).html("<i class='fa fa-camera'></i>");
            } else if (this.id === 'info') {
                $(this).html("<i class='fa fa-rss'></i>");
            } else if (this.id === 'calendar') {
                $(this).html("<i class='fa fa-calendar'></i>");
            }
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
    } else if (caller === 'info') {
        $("#content").fadeOut(500);
        setTimeout(function() {
            $("#content").load("news.php");
            $("#content").fadeIn(500);
        }, 1000);
    }
}