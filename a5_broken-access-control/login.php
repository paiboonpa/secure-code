<?php
    session_start();
    $_SESSION['user_id'] = 1;
    header( "location: http://localhost/secure-code/a5_broken-access-control/index.php" );