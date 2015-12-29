var args = arguments[0] || {};

function appendRowToTableViewRow(entry){
	var row = Ti.UI.createTableViewRow({
		width: Ti.UI.FILL,
		height: Ti.UI.SIZE,
		layout: "horizontal",
	});
	
	var image = Ti.UI.createImageView({
  		image:'/images/icons/icon_take_photo_nobg.png',
  		width: 70,
  		height: 70,
  		left: 20
		});
	
	var label = Ti.UI.createLabel({
		width: "auto",
		height: 80,
		left: 15,
		textAlign: Titanium.UI.TEXT_ALIGNMENT_LEFT,
		text:entry.productname
	});
	
		row.add(image,label);
		$.table_view.appendRow(row);
	
		row.addEventListener("click",function(e){
		Alloy.Globals.Navigator.open("item",{label_name:label.text});
		
	});
}

function navToProduct_form(){
	Alloy.Globals.Navigator.open("product_form");
};

function closeWindow(){
	$.win.close();
};

Ti.App.addEventListener("add1",function(entry){
	appendRowToTableViewRow(entry);
});