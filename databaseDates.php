<?php

session_start();

$con = pg_connect("host=ec2-54-225-243-113.compute-1.amazonaws.com
                        port=5432 
                        dbname=df9otqc8opdvrc
                        user=jwoebhlypnarmf
                        password=kyHGisoBER8UV-3pvAZbCF-1A0");

//while ($row = pg_fetch_row($result)) {
//    echo "Month: $row[0]";
//    echo "<br />\n";
//    echo "Day: $row[1]";
//    echo "<br />\n";
//    echo "Year: $row[2]";
//    echo "<br />\n";
//    echo "Name: $row[3]";
//    echo "<br />\n";
//}
?>