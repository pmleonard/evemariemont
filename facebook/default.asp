<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<HTML>
<HEAD>
<%@ Language=VBScript %>
<%

dim domainname
domainname = Request.ServerVariables("server_name")


If InStr(domainname, "evemariemont.com")>0 then
	Response.Write "<TITLE>Eve Marie Mont - Facebook</TITLE>"
	Response.Write "<meta http-equiv='refresh' content='0;URL=http://www.facebook.com/evemariemont'>"
elseif InStr(domainname, "evemont.com")>0 then
	Response.Write "<TITLE>Eve Marie Mont - Facebook</TITLE>"
	Response.Write "<meta http-equiv='refresh' content='0;URL=http://www.facebook.com/evemariemont'>"
elseif InStr(domainname, "abreathofeyre.com")>0 then
	Response.Write "<TITLE>Eve Marie Mont - Facebook</TITLE>"
	Response.Write "<meta http-equiv='refresh' content='0;URL=http://www.facebook.com/evemariemont'>"
else
	Response.Write "<TITLE>Back to Home</TITLE>"
	Response.Write "<meta http-equiv='refresh' content='0;URL=../'>"
end if





%>
</Head>
<Body>
	<BR><BR><font size="5"><b><center>... please wait ...<BR><BR></CENTER></font>
</body>
</HTML>

