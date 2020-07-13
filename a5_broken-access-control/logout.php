<?php
    session_start();
    session_destroy();
    header( "location: http://localhost/secure-code/a5_broken-access-control/index.php" );