function validEmail(e){return/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(e)}function getFormData(){var e=document.getElementById("gform").elements,t=Object.keys(e).map(function(t){return void 0!==e[t].name?e[t].name:e[t].length>0?e[t].item(0).name:void 0}).filter(function(e,t,n){return n.indexOf(e)==t&&e}),n={};return t.forEach(function(t){n[t]=e[t].value;var o="";if("checkbox"===e[t].type)o=o+e[t].checked+", ",n[t]=o.slice(0,-2);else if(e[t].length)for(var a=0;a<e[t].length;a++)e[t].item(a).checked&&(o=o+e[t].item(a).value+", ",n[t]=o.slice(0,-2))}),console.log(n),n}function handleFormSubmit(e){e.preventDefault();var t=getFormData();if(!validEmail(t.email))return document.getElementById("email-invalid").style.display="block",!1;var n=e.target.action,o=new XMLHttpRequest;o.open("POST",n),o.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),o.onreadystatechange=function(){console.log(o.status,o.statusText),console.log(o.responseText),document.getElementById("gform").classList.toggle("is-active"),document.getElementById("thanks").classList.toggle("is-active")};var a=Object.keys(t).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])}).join("&");o.send(a)}function loaded(){console.log("contact form submission handler loaded successfully"),document.getElementById("gform").addEventListener("submit",handleFormSubmit,!1)}document.addEventListener("DOMContentLoaded",loaded,!1);
function initializeMap(){var e="32.0444263",o="34.78172840000002",a={scrollwheel:!1,draggable:!0,disableDefaultUI:!0,center:new google.maps.LatLng(e,34.78722840000002),zoom:16,mapTypeId:google.maps.MapTypeId.ROADMAP},g=new google.maps.Map(document.getElementById("google-map"),a),n=new google.maps.Marker({map:g,position:new google.maps.LatLng(e,o)}),l=new google.maps.InfoWindow;google.maps.event.addListener(n,"click",function(){l.open(g,n)}),l.close(g,n)}