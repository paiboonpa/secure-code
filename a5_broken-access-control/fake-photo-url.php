<?php
session_start();

// จงเขียน code เพื่อเช็คว่าเป็น user ที่ login แล้วหรือไม่จากตัวแปร $_SESSION['user_id'] ว่ามีค่าเป็น 1 หรือไม่

$url = "forbidden/identity-cardno-".$_GET['id'].".jpg";
if (file_exists($url)) {
    header("Content-type: image/jpeg");
    echo file_get_contents($url);
}
else
    echo "file not found";
