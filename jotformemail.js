function jotformemail() {
  var d, dom, ie, ie4, ie5x, moz, mac, win, lin, old, ie5mac, ie5xwin, op;
  d = document;
  n = navigator;
  na = n.appVersion;
  nua = n.userAgent;
  var strUA = navigator.userAgent;
  if (nua.indexOf("Firefox")>-1){document.getElementById("jotformemail").innerHTML = "<iframe allowtransparency='true' src='http://www.jotform.com/form/11701647316' frameborder='0' style='width:100%; height:500px; border:none;' scrolling='no'> </iframe>"}
};
  var CD_OBJS=new Object();
  if(window.attachEvent){window.attachEvent('onload',jotformemail)}else if(window.addEventListener){window.addEventListener("load",jotformemail,false)}else {window.onload=jotformemail};