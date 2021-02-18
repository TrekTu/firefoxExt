
		
		   
   function mySubmit(){
       $.post({
            url: "https://gozephie.top:8891/hello/englishAdd",
            data: {"word": $("#Word").val(), "definition": $("#Definition").val()},
            success: function (data) {
                if (data.message.indexOf("ok") > 0) {
                   alert("ok");
                } else if (data.message.indexOf("fail") > 0) {
                    alert("fail");
                } else
                    alert("didn't match");
            },
			error:function(data){
			 alert("ok");
			}

        });
   
   };
   
        let myHtml=
  "<input type='text' name='word' hidden id='Word'>"
  +"<input type='text' name='definition' id='Definition'>"
  +"<input type='button'   value='submit' id='myButton'>";
 
 
        $(".headword").append(myHtml);
		let wholeWord=$(".headword").html();
		let myIndex=wholeWord.indexOf("<");
        let realWord=wholeWord.slice(0,myIndex);
		$("#Word").val( realWord);
		$("#myButton").on("click",function(){ mySubmit();});
 