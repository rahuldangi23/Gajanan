<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	${MailSent}
	${wrongOTP }
	<form action="checkOTP" method="post">
		<pre>
			Enter Your OTP : <input type="text" name="OTP"/>
			<input type="hidden" name="EmailForPasswordUpdate" value="${EmailForPasswordUpdate}"/>
			<input type="submit" value="Submit">
		</pre>
	</form> 
</body>
</html>