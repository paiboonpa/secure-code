<html>
<head>
</head>
<body>
<h1>Test</h1>
<a href="login.php">Login</a> <a href="logout.php">Logout</a> 
<h3>This Image is from insecure-directory</h3>
<img src="insecure-directory/identity-cardno-1.jpg">
<h3>This Image is accessible only to logged in user</h3>
<img src="fake-photo-url.php?id=2"><br>

</body>
</html>