//A Carlos CL APP 
var self = require('sdk/self');
var toggleButton2 = require('sdk/ui/button/toggle'),
    buttons=require("sdk/ui/button/action");
var { openDialog } = require('sdk/window/utils');
var tabs = require("sdk/tabs");
var ui = require("sdk/panel");
var pageMod = require("sdk/page-mod");
var currentMode;

//App interface
var appMainUi=ui.Panel({
	      contentURL: self.data.url("./ui/app.html"),
              contentScriptFile: [
		  self.data.url("./framework/jquery.js"),
		  self.data.url("./script/channelData.js")
	      ],
              onHide: function () {
		  toggle.state('window', {checked: false});
	      }
	  });
//small window with the editor tune tools!
var pageEditorUi;

appMainUi.port.on("send-conf",function(conf){
   var colorPage={
        include: "*",
        contentScript:"var conf= "+conf.page+";",
        contentScriptFile:[     
            self.data.url("./framework/jquery.js"),
            self.data.url("./script/colorPage.js")
        ]
        
  };

  //apply to color page 
  try{      
      currentMode.destroy();
  }catch(err){}

    switch(conf.mode){
      case "all":// apply tuning to all pages
        currentMode=pageMod.PageMod(colorPage);
        tabs.activeTab.attach(colorPage);
      break;
      case "manual"://apply especific tuning for every part of a page manually
        // opening the editor of tune it!
        // require('sdk/windows').browserWindows.open('http://pornhub.com');

        
        // colorPage.contentScriptFile[1]=self.data.url("./script/manualEdition.js");
        // tabs.activeTab.attach(colorPage);
      break;
      case "stored"://apply tuning for pages that are stored in a list by user
        colorPage.include=conf.storage.pages;
        currentMode=pageMod.PageMod(colorPage);
        colorPage.contentScript='location.reload();';
        colorPage.contentScriptFile=[];
        tabs.activeTab.attach(colorPage);
      break;
      default://apply for the current site
        tabs.activeTab.attach(colorPage);   
    }

});

//app principal button
var toggle = toggleButton2.ToggleButton({
  id: "color-all",
  label: "Color All",
  icon: {
    "16": "./img/icon-16.png",
    "32": "./img/icon-32.png",
    "64": "./img/icon-64.png"
  },
  onChange: function (state) {
      if (state.checked) {
        appMainUi.show({
            position: toggle
        });
      }
  }

});



// a dummy function, to show how tests work.
// to see how to test this function, look at test/test-index.js
function dummy(text, callback) {
  callback(text);
}

exports.dummy = dummy;
