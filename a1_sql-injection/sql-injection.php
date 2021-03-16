<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "secure_code";

$id = $_GET['id'];
$sql = "SELECT * FROM users WHERE id = ".$_GET['id'];
//$sql = "SELECT * FROM users WHERE id = ?";

function print_table($rows) {
    echo "<table>
        <tr>
            <th>id</th>
            <th>firstname</th>
            <th>lastname</th>
            <th>password</th>
            <th>salary</th>
            <th>money</th>
        </tr>
    ";
    foreach($rows as $row) {
        echo "<tr>";
        echo "<td>{$row['id']}</td>";
        echo "<td>{$row['firstname']}</td>";
        echo "<td>{$row['lastname']}</td>";
        echo "<td>{$row['password']}</td>";
        echo "<td>{$row['salary']}</td>";
        echo "<td>{$row['money']}</td>";
        echo "</tr>";
    }
    echo "</table>";
}

// Create connection
$link = mysqli_connect($servername, $username, $password, $dbname);
$result = mysqli_query($link,$sql );
$all_result_sql_injection = [];
while ($row = mysqli_fetch_array($result,MYSQLI_ASSOC)) {
    array_push($all_result_sql_injection, $row);
}

// Create connection
//$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
//if ($conn->connect_error) {
//    die("Connection failed: " . $conn->connect_error);
//}
// $stmt = $conn->prepare($sql);
// $stmt->bind_param('i', $id);
// // prepare and bind
// $stmt->execute();
// $result = $stmt->get_result();
// $all_result_prevent_sql_injection = $result->fetch_all(MYSQLI_ASSOC);

print_table($all_result_sql_injection);

?>
<form style="margin-top: 30px" action="sql-injection-update.php" method="POST">
    New Password: <input type="password" name="password">
    <input type="submit" value="Change Password">
    <input type="hidden" name="id" value="<?=$_GET['id']?>">
</form>
