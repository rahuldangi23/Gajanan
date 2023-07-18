<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<h2> Edit details</h2>
	<form action="updateOrgDetails" method="post">
		<pre>
			<input type="hidden" name="email" value="${email }"/>
			Name Of Organisation : <input type="text" name="nameOfOrganisation"  value="${nameOfOrganisation}" readonly/>
			Type of Organisation : <input type="text" name="type" value="${type}"/>
			City : <input type="text" name="city" value="${city}"/>
			State : <input type="text" name="state" value="${state}"/>
			Country : <input type="text" name="country" value="${country}"/>
			Website Link : <input type="text" name="websiteLink" value="${websiteLink}"/>
			<input type="submit" value="Update"/>
		</pre>
	</form>
</body>
</html>