var args = arguments[0] || {};

function doSave(){
	Ti.App.fireEvent("add_item",{itemname:$.textFieldSerNum.value});
	$.win.close(); 
}; 
