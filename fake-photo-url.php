<?php

if ($_GET['id'] == 1)
    $have_access = TRUE;
else
    $have_access = FALSE;

if ($have_access) {
    $url = "forbidden/identity-cardno-".$_GET['id'].".jpg";
    if (file_exists($url)) {
        header("Content-type: image/jpeg");
        echo file_get_contents($url);
    }
    else
        echo "file not found";
} else
    echo "Access Denied!";