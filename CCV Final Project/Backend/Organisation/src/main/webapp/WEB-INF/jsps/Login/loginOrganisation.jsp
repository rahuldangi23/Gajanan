<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<h2>Login Organisation</h2>
	${registrationSuccessful }
	${error}
	<form action="verifyLogin" method="post">
		<pre>
			Email Id : <input type="text" name="email"/>
			Password : <input type="text" name="password"/>
			<input type="submit" value="Login"/>
		</pre>
	</form>
</body>
</html>