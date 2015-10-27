//Channel Script (Where you can send your data from/to the main script from/to panel)
$("#start").on("click",function (){	
	var conf={
    	mode:$(".mode").val() ,//mode of app behavior
    	storage:{
    		pages:[],
    	},
    	page:JSON.stringify({
			background:$("#backColor").val(),
			text:$("#textColor").val()    		
    	})
    };
    
    $('.stored-sites .pagesList > div').each(function(){
    	conf.storage.pages.push($(this).text());
    });    
    //sending the configuration to the add on
    self.port.emit("send-conf",conf);
});



