<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<h2>Dash Board</h2>
	<a href="logOut"> Logout</a>
	<br>
	${updatedmsg}
	<h2> Organisation Details </h2>
	<p> Name of Organisation : ${byId.nameOfOrganisation} </p>
	<p> Type of Organisation : ${byId.type} </p>
	<p> City : ${byId.city} </p>
	<p> State : ${byId.state} </p>
	<p> Country : ${byId.country} </p>
	<p> Website : ${byId.websiteLink} </p>
	<br>
	<a href="editOrgDetails?email=${byId.email}"> Edit </a>
	<br>
	<a href="newVerification"> New Verification </a>
</body>
</html>