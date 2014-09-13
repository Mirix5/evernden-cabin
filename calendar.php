<?php
include 'databaseDates.php';
?>
<html>
    <head>
        <link href="css/calendar.css" rel="stylesheet" type="text/css">
        <script src="js/calendar.js"></script>
    </head>
    <body>
        <header class="label">
            <h2>
                <?php
                //Check if var is set
                if (isset($_GET['sessionMonth'])) {
                    $_SESSION['sessionMonth'] = $_SESSION['sessionMonth'] + $_GET['sessionMonth'];
                }

                //Display new session var
                if ($_SESSION['sessionMonth'] != 0) {
                    $date = date('Y-m-d', mktime(0, 0, 0, date('n') + $_SESSION['sessionMonth'], 1, date('Y')));
                    $firstDay = date_create($date)
                            ->modify('first day of this month')
                            ->format('l');
                    $lastDay = date('t', mktime(0, 0, 0, date('n') + $_SESSION['sessionMonth'], 1, date('Y')));
                    $month = date('F', mktime(0, 0, 0, date('n') + $_SESSION['sessionMonth'], 1, date('Y')));
                    $monthNo = date('n', mktime(0, 0, 0, date('n') + $_SESSION['sessionMonth'], 1, date('Y')));
                    $year = date('Y', mktime(0, 0, 0, date('n') + $_SESSION['sessionMonth'], 1, date('Y')));
                    echo date('F, Y', mktime(0, 0, 0, date('n') + $_SESSION['sessionMonth'], 1, date('Y')));
                } else {
                    $date = date('Y-m-d');
                    $firstDay = date_create($date)
                            ->modify('first day of this month')
                            ->format('l');
                    $lastDay = date('t');
                    $month = date('F');
                    $monthNo = date('n');
                    $year = date('Y');
                    echo date('F, Y');

                    $_SESSION['sessionMonth'] = 0;
                }
                ?>

                <button class="left-arrow" onclick="decrementMonth();"><i class="fa fa-arrow-circle-o-left"></i></button>
                <button class="right-arrow" onclick="incrementMonth();"><i class="fa fa-arrow-circle-o-right"></i></button>
            </h2>
        </header>

        <div class="calendar">
            <div class="weekdays">
                <div>
                    <p>Sunday</p>
                </div>
                <div>
                    <p>Monday</p>
                </div>
                <div>
                    <p>Tuesday</p>
                </div>
                <div>
                    <p>Wednesday</p>
                </div>
                <div>
                    <p>Thursday</p>
                </div>
                <div>
                    <p>Friday</p>
                </div>
                <div>
                    <p>Saturday</p>
                </div>
            </div>
            <div class="dates">
                <?php
                $result = pg_query($con, "SELECT * FROM ReservedDates WHERE Month=" . $monthNo . " ORDER BY Day");
                $row = pg_fetch_row($result);
                $i = 0;
                $dayNumbers = 1;
                while ($i < 42) {
                    if ($dayNumbers > 1 && $dayNumbers <= $lastDay) {
                        if ($row[1] == $dayNumbers) {
                            echo "<div id='" . $dayNumbers . "' class='date' onclick='expandDate(this.id, \"$monthNo\", \"$month\", \"$year\", \"$row[3]\");'>";
                            echo $dayNumbers;
                            echo "<h5>" . $row[3] . "</h5>";
                            $row = pg_fetch_row($result);
                        } else {
                            echo "<div id='" . $dayNumbers . "' class='date' onclick='expandDate(this.id, \"$monthNo\", \"$month\", \"$year\");'>";
                            echo $dayNumbers;
                        }
                        $dayNumbers += 1;
                    } else {
                        switch ($i) {
                            case 0:
                                if ($firstDay === 'Sunday') {
                                    echo "<div id='" . $dayNumbers . "' class='date' onclick='expandDate(this.id, \"$monthNo\", \"$month\", \"$year\");'>";
                                    echo 1;
                                    $dayNumbers += 1;
                                } else {
                                    echo "<div id='" . $i . "' class='date''>";
                                }
                                break;
                            case 1:
                                if ($firstDay === 'Monday') {
                                    echo "<div id='" . $dayNumbers . "' class='date' onclick='expandDate(this.id, \"$monthNo\", \"$month\", \"$year\");'>";
                                    echo 1;
                                    $dayNumbers += 1;
                                } else {
                                    echo "<div id='" . $i . "' class='date''>";
                                }
                                break;
                            case 2:
                                if ($firstDay === 'Tuesday') {
                                    echo "<div id='" . $dayNumbers . "' class='date' onclick='expandDate(this.id, \"$monthNo\", \"$month\", \"$year\");'>";
                                    echo 1;
                                    $dayNumbers += 1;
                                } else {
                                    echo "<div id='" . $i . "' class='date''>";
                                }
                                break;
                            case 3:
                                if ($firstDay === 'Wednesday') {
                                    echo "<div id='" . $dayNumbers . "' class='date' onclick='expandDate(this.id, \"$monthNo\", \"$month\", \"$year\");'>";
                                    echo 1;
                                    $dayNumbers += 1;
                                } else {
                                    echo "<div id='" . $i . "' class='date''>";
                                }
                                break;
                            case 4:
                                if ($firstDay === 'Thursday') {
                                    echo "<div id='" . $dayNumbers . "' class='date' onclick='expandDate(this.id, \"$monthNo\", \"$month\", \"$year\");'>";
                                    echo 1;
                                    $dayNumbers += 1;
                                } else {
                                    echo "<div id='" . $i . "' class='date''>";
                                }
                                break;
                            case 5:
                                if ($firstDay === 'Friday') {
                                    echo "<div id='" . $dayNumbers . "' class='date' onclick='expandDate(this.id, \"$monthNo\", \"$month\", \"$year\");'>";
                                    echo 1;
                                    $dayNumbers += 1;
                                } else {
                                    echo "<div id='" . $i . "' class='date''>";
                                }
                                break;
                            case 6:
                                if ($firstDay === 'Saturday') {
                                    echo "<div id='" . $dayNumbers . "' class='date' onclick='expandDate(this.id, \"$monthNo\", \"$month\", \"$year\");'>";
                                    echo 1;
                                    $dayNumbers += 1;
                                } else {
                                    echo "<div id='" . $i . "' class='date''>";
                                }
                                break;
                            default:
                                echo "<div id='" . $i . "' class='date''>";
                        }
                    }
                    $i += 1;
                    echo "</div>";
                }
                ?>
            </div>
        </div> 

        <div class="dateModal">
            <div class="modalHeader">

            </div>
            <div class="modalClose" onclick="closeModal();"><i class="fa fa-times"></i></div>
            <div class="modalContent">
                <!-- Reservation data gets injected here after being 
                passed to jquery function by PHP -->
                <p>No reservations for this date yet.</p>\
                <p>If you want to reserve this date, leave your name below:</p>\
                <input id="input-box" type=\"text\" name=\"name\" value=\"\">\
                <button class="submit" type="submit">Submit</button>
            </div>
            <div class="modalFooter"></div>
        </div>


    </body>
</html>