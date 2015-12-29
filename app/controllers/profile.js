var args = arguments[0] || {};

function doEdit(){
	Alloy.Globals.Navigator.open("profile_form",{label_name:$.labelname.text,label_num:$.labelnum.text});
};

function doChangePass(){
	Alloy.Globals.Navigator.open("profile_changepass");
};

function closeWindow(){
	$.win.close();
}

Ti.App.addEventListener("edit",function(entry){
	$.labelname.text=entry.newname;
	$.labelnum.text=entry.newnum;
});
    
$.image1.addEventListener('click',function(e){ 

	Titanium.Media.openPhotoGallery({
		
		success:function(event){      
			$.image1.image = event.media;
			
			var saveimage = event.media;
			
			var dir = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,"temp");
			
			 if(!dir.exists())
			 {
			 	dir.createDirectory();
			 }

		},
	 
		cancel:function(){
			Titanium.API.info('Photo Gallery cancel');      
		},
	 
		error:function(error){
			Titanium.API.info('Photo Gallery error');        
		},
		allowImageEditing:true
	});

});