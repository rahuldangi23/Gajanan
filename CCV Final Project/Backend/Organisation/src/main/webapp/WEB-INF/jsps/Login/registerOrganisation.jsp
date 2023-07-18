<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<h2> Registration Page for Oragnisation </h2>
	<a href="loginAdmin"> Login As Admin </a>
	<a href="loginOrganisation">Login As Organisation</a>
	<form action="completeOrganisation" method="post">
		<pre>
			Email Id : <input type="text" name="email"/>
			Password : <input type="password" name="password"/>
			Name Of Organisation :  <input type="text" name="nameOfOrganisation"/>
			Type of Organisation : <input type="text" name="type"/>
			City : <input type="text" name="city"/>
			State : <input type="text" name="state"/>
			Country : <input type="text" name="country"/>
			Website Link : <input type="text" name="websiteLink"/>
			<input type="submit" value="Register"/>
		</pre>
	</form>
	<br>
	<a href="forgotPassword">Forgot Password</a>
</body>
</html>