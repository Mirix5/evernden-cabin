<html>
    <body>
        <header class="label">
            <h2>
                <?php
                $date = date('Y-m-d');
                $firstDay = date_create($date)
                        ->modify('first day of this month')
                        ->format('l');
                $lastDay = date('t');
                $month = date('F');
                $year = date('Y');
                echo date('F, Y');
                ?>
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
                $i = 0;
                $dayNumbers = 1;
                while ($i < 42) {
                    if ($dayNumbers > 1 && $dayNumbers <= $lastDay) {
                        echo "<div id='".$dayNumbers."' class='date' onclick='expandDate(this.id, \"$month\", \"$year\");'>";
                        echo $dayNumbers;
                        $dayNumbers += 1;
                    } else {
                        switch ($i) {
                            case 0:
                                if ($firstDay === 'Sunday') {
                                    echo "<div id='".$dayNumbers."' class='date' onclick='expandDate(this.id, \"$month\", \"$year\");'>";
                                    echo 1;
                                    $dayNumbers += 1;
                                } else {
                                    echo "<div id='".$i."' class='date' onclick='expandDate(this.id, \"$month\", \"$year\");'>";
                                }
                                break;
                            case 5:
                                if ($firstDay === 'Friday') {
                                    echo "<div id='".$dayNumbers."' class='date' onclick='expandDate(this.id, \"$month\", \"$year\");'>";
                                    echo 1;
                                    $dayNumbers += 1;
                                } else {
                                    echo "<div id='".$i."' class='date' onclick='expandDate(this.id, \"$month\", \"$year\");'>";
                                }
                                break;
                            default:
                                echo "<div id='".$i."' class='date' onclick='expandDate(this.id, \"$month\", \"$year\");'>";
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
        </div>


    </body>
</html>