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
                    echo "<div>";
                    if ($dayNumbers > 1 && $dayNumbers <= $lastDay) {
                        echo $dayNumbers;
                        $dayNumbers += 1;
                    }
                    switch ($i) {
                        case 0:
                            if ($firstDay === 'Sunday') {
                                echo 1;
                                $dayNumbers += 1;
                            }
                            break;
                        case 5:
                            if ($firstDay === 'Friday') {
                                echo 1;
                                $dayNumbers += 1;
                            }
                            break;
                    }
                    $i += 1;
                    echo "</div>";
                }
                ?>
            </div>
        </div> 



    </body>
</html>