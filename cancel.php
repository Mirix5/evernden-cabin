<?php
    include 'databaseDates.php';
    pg_delete($con, 'reserveddates', $_POST);
    
    $_SESSION['calendar'] = 1;
    header( 'Location: index.php' );
?>
