<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "secure_code";

$sql = "UPDATE users SET password='".$_POST['password']."' WHERE id = ".$_POST['id'];

// Create connection
$link = mysqli_connect($servername, $username, $password, $dbname);
$result = mysqli_query($link,$sql);
$all_result_sql_injection = [];

echo "Password changed!";