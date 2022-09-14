<?php
    session_start();
    //header("Access-Control-Allow-Origin: http://localhost:3000");
    //header("Access-Control-Allow-Credentials: true");
    if (!empty($_SESSION['views'])) {
        $_SESSION['views']++;
        echo '<p>views: ' . $_SESSION['views'] . '</p>';
    } else {
        $_SESSION['views'] = 1;
        echo 'welcome to the session demo. refresh!';
    }
?>
