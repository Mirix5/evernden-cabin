<?php
	session_start();
	$con = pg_connect("	host=ec2-54-225-243-113.compute-1.amazonaws.com
	                   	port=5432 
	                    dbname=df9otqc8opdvrc
	                   	user=jwoebhlypnarmf
	                    password=kyHGisoBER8UV-3pvAZbCF-1A0
	                    sslmode=require");
	
	// De-serialize json encoded post request to php.
	$postdata = file_get_contents("php://input");
	$request = json_decode($postdata);
	$month = $request->month;
	$year = $request->year;
	$day = $request->day;
	$reservee = $request->reservee;

	pg_query($con, "INSERT INTO ReservedDates(month, day, year, name) VALUES('$month', '$day', '$year', '$reservee')");

	pg_close($con);
?>