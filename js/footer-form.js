function completeAndRedirect(){ 
  var form = document.forms['myform'];
text.innerHTML="Веденні вами дані: <br> І'мя : "+ form.elements.login.value + "<br> EMAIL : " + form.elements.email.value + "<br> ПОвідомлення : " + form.elements.messenger.value;
}