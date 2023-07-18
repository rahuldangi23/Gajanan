<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	${EmptyField }
	<form action="newPasswordCheckAndUpdate" method="post">
		Enter new Password : <input type="text" name="password"/>
		ReEnter new Password : <input type="text" name="newPassword"/>
		<input type="hidden" name="EmailForPasswordUpdate" value="${EmailForPasswordUpdate }"/>
		<input type="submit" value="Submit"/>
	</form>
</body>
</html>