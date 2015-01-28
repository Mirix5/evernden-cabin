<!DOCTYPE html>
<?php include 'databaseDates.php'; ?>
<html>
    <head>
        <title>The Cabin</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link href="css/custom.css" rel="stylesheet" type="text/css">
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
        <script src="js/custom.js"></script>
        <link href='http://fonts.googleapis.com/css?family=Lato:300' rel='stylesheet' type='text/css'>
        <link href='http://fonts.googleapis.com/css?family=Sacramento' rel='stylesheet' type='text/css'>
        <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
    </head>

    <body>
        <img id="background" src="images/cabin.jpg" />
        <div id="bgoverlay">
        </div>
        <header id="heading" class="heading">
            <h1>The Evernden Cabin</h1>
        </header>

        <div class="buttonGroup">
            <div style="width: 33%; float: left">
                <button id="pictures" onclick="navigate(this.id);">Pictures</button>
            </div>
            <div style="width: 33%; float: left">
                <button id="info" onclick="navigate(this.id);">Info</button>
            </div>
            <div style="width: 33%; float: left">
                <button id="calendar" onclick="navigate(this.id);">Calendar</button>
            </div>
        </div>

        <div id="content">
        </div>

    </body>
</html>