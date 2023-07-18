<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	${MailId }
	<h2>Forgot Password</h2>
	<form action="forgotPasswordEmail" method="post">
		Email : <input type="text" name="email"/>
		<input type="submit" value="Send OTP"/>
	</form>
</body>
</html>