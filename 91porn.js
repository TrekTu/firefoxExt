document.body.style.border = "5px solid red";
var gobutton = document.createElement("button");
gobutton.innerHTML = "download";

 document.getElementById("videodetails-content").appendChild(gobutton);
let videoURL=document.getElementsByTagName("source")[0].src;
console.log("url:"+videoURL);
 
 let downloadURL="http://127.0.0.1:8899/vid/download?videoURL="+myEscape(videoURL);




gobutton.addEventListener ("click", function() {
	 
	 

//deprecated:
 //let currentURL= window.location.href ;
// let downloadURL="https://9xbud.com/"+currentURL;
  window.open(downloadURL,'_blank');
 //window.location.assign("https://9xbud.com/"+currentURL);
});
function myEscape(myStr){
   
	myStr=myStr.replace(/&/g,"|amp|");
	myStr=myStr.replace(/\+/g,"|plus|");
	return myStr;
	
}

 