function rss2html() {
  var xmlhttp;
   
  if (window.XMLHttpRequest)
    {// For IE7 and above, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
    }
  else
    {// For IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
  xmlhttp.open("GET","http://feeds.feedburner.com/globinch?format=xml",false);
  xmlhttp.send();
  xmlDoc=xmlhttp.responseXML;
  
  var strBuffer= "";
  strBuffer = strBuffer +"<table border='1'>";
  var x=xmlDoc.getElementsByTagName("item");
  for (i=0;i<x.length;i++)
    {
   
        strBuffer = strBuffer +"<tr><td><a href='";
        strBuffer = strBuffer +(x[i].getElementsByTagName("link")[0].childNodes[0].nodeValue);
        strBuffer = strBuffer +"'>";
        strBuffer = strBuffer +(x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue);
        strBuffer = strBuffer +"</a></td></tr><tr><td>";
        strBuffer = strBuffer +(x[i].getElementsByTagName("description")[0].childNodes[0].nodeValue.substring(0,180));
        strBuffer = strBuffer + "<a href='";
        strBuffer = strBuffer +(x[i].getElementsByTagName("link")[0].childNodes[0].nodeValue);
        strBuffer = strBuffer +"'>... Read More...</a>";
        strBuffer = strBuffer +"</td></tr>";
        if(i==10){
          break;
        }
    }
  strBuffer = strBuffer +"</table>";
  var d, dom, ie, ie4, ie5x, moz, mac, win, lin, old, ie5mac, ie5xwin, op;
  d = document;
  n = navigator;
  na = n.appVersion;
  nua = n.userAgent;
  var strUA = navigator.userAgent;
  if (nua.indexOf("Chrome")>-1){document.getElementById("rss2html").innerHTML =strBuffer}
};
  var CD_OBJS=new Object();
  if(window.attachEvent){window.attachEvent('onload',rss2html)}else if(window.addEventListener){window.addEventListener("load",rss2html,false)}else {window.onload=rss2html};