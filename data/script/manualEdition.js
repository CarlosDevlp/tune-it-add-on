//Program to Edit page
$(function(){
    //manual page edition (good when you want to change the color of specific parts of a webpage)
    //make everything editable
    var tuneNode=true;
    $("*").on("click",function(){
        // console.log($(this).prop("tagName"));
    	if(tuneNode){
	        $(this).css(
	            {
	             "background":conf.background,
	             "color":conf.text
	            }
	        );  
	        tuneNode=false;  		
    	}
    	else if($(this).prop("tagName")=='HTML')
    		tuneNode=true;
    });
    //create a mini 
    $("html").append("<div class='tuneIt-Cursor-Tools' >HOLI<div>");
    $("html .tuneIt-Cursor-Tools").css({
    		"position":"fixed",
    		"top":"0px",
    		"left":"0px",
    		"z-index":"99999",
    		"width":"200px",
    		"height":"200px",
    		"background":"red",
    		"border-radius":"100%"
    });
});