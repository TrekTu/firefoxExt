document.body.style.border = "5px solid red";
var button = document.createElement("button");
button.innerHTML = "!!Go To Download!!";
var body = document.getElementsByClassName("clear")[0];
body.appendChild(button);
button.addEventListener ("click", function() {
 let currentURL= window.location.href ;
 let downloadURL="https://9xbud.com/"+currentURL;
 window.open(downloadURL,'_blank');
 //window.location.assign("https://9xbud.com/"+currentURL);
});