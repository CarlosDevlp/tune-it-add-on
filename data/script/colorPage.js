//Program to color page
$(function(){
    //creating an own theme for whole page or pages    
    var colorPage=function(){
    	$("body, div").css(
    	    {
      	     "background":conf.background,
    	     "color":conf.text
    	    }
    	);
    };            
        colorPage();

    //interesting effect
    // setInterval(colorPage,100);
    
});
