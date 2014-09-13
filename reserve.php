<?php
include 'databaseDates.php';

pg_insert($con, 'reserveddates', $_POST);

$_SESSION['calendar'] = 1;
header( 'Location: index.php' ) ;
?>
