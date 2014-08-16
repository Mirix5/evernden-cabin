<html>
    <head>
        <link href="css/pictures.css" rel="stylesheet" type="text/css">
        <script src="js/pictures.js"></script>
    </head>
    <div class="photo-slideshow">

        <!-- Close Button -->
        <div class="album-close-button">
            <i class="fa fa-times"></i>
        </div>

        <!-- Slideshow Control Panel -->
        <div class="playback-control-panel">
            <button class="previous-btn" onclick='previous();'>
                <i class="fa fa-step-backward"></i>
            </button>

            <!-- Slideshow autoplay functionality not yet ready.
            <button class="play-btn">
                <i class="fa fa-play"></i>
            </button>
            -->
            <button class="next-btn" onclick='next();'>
                <i class="fa fa-step-forward"></i>
            </button>
        </div>

        <!-- Slides -->
        <div class="photo-slide">
            <?php
            //Code to dynamically load images from the Uploaded Photos Directory
            $dir = 'images/Uploaded Photos';
            $photos = scandir($dir);
            $length = count($photos);
            $i = 3;

            echo "<img src='images/Uploaded Photos/$photos[2]' class='slide active'>";

            for ($i; $i < $length; $i++) {
                echo "<img src='images/Uploaded Photos/$photos[$i]' class='slide inactive'>";
                ?>
                <?php
            }
            ?>
        </div>
    </div>
</html>