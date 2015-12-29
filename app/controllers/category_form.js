var args = arguments[0] || {};

function doAdd(){
	Ti.App.fireEvent("add",{categoryname:$.textField.value});
	$.win.close();
};

function closeWindow(){
	$.win.close();
}
