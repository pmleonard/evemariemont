<%@ Language=VBScript %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<HTML>
<%
dim domainname, parameter
domainname = Request.ServerVariables("server_name")
parameter = Request.QueryString
'Response.Write parameter
If InStr(domainname, "abreathofeyre.com")>0 AND parameter="home" then
%>
<HEAD>
	<TITLE>Redirect to EveMarieMont.com</TITLE>
	<meta http-equiv='refresh' content='0;URL=http://www.abreathofeyre.com/index.html'>
</HEAD>
<BODY bgcolor="#ffffff">
  <img src="under-construction.gif" alt="Logo">
</BODY>
</HTML>
<%
ElseIf InStr(domainname, "evemont.com")>0 AND parameter="home" then
%>
<HEAD>
	<TITLE>Redirect to EveMarieMont.com</TITLE>
	<meta http-equiv='refresh' content='0;URL=http://www.evemont.com/index.html'>
</HEAD>
<BODY bgcolor="#ffffff">
  <img src="under-construction.gif" alt="Logo">
</BODY>
</HTML>
<%
Else
%>
<HEAD>
	<TITLE>Redirect to EveMarieMont.com</TITLE>
	<meta http-equiv='refresh' content='0;URL=http://www.evemariemont.com'>
</HEAD>
<BODY bgcolor="#ffffff">
  <img src="under-construction.gif" alt="Logo">
</BODY>
</HTML>
<% 
end if
 %>
