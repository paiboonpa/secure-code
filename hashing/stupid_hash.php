<?php
    $database_password = "password";
    function stupid_hash($password) {
        return $password."123";
    }
    $hashed_database_password = stupid_hash($database_password);
    echo "Database password: ". $hashed_database_password; // password123
    echo "<br>";
    
    $input_password = $_GET['password'];
    $hashed_input_password = stupid_hash($input_password);

    echo "New Input password: ".$hashed_input_password;

    if ($hashed_database_password == $hashed_input_password)
        echo "<br>Password Matched!!";
    else
        echo "<br>Password NOT MATCH!!";