<?php
    $database_password = "password";
    
    $hashed_database_password = password_hash($database_password, PASSWORD_DEFAULT);
    echo "Database password: ". $hashed_database_password; 
    echo "<br>";
    
    $input_password = $_GET['password'];
    $hashed_input_password = password_hash($input_password, PASSWORD_DEFAULT);

    echo "New Input password: ".$hashed_input_password;

    /*******************************************************/
    /** DON'T COMPARE PASSWORD DIRECTLY WHEN USE BCRYPT!! **/
    /*******************************************************/
    // if ($hashed_database_password == $hashed_input_password)
    //     echo "<br>Password Matched!!";
    // else
    //     echo "<br>Password NOT MATCH!!";

    if (password_verify($input_password, $hashed_database_password))
        echo "<br>Password Matched!!";
    else
        echo "<br>Password NOT MATCH!!";