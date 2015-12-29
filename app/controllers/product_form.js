var args = arguments[0] || {};

function doAdd(){
	Ti.App.fireEvent("add1",{productname:$.textField.value});
	$.win.close();
};

function closeWindow(){
	$.win.close();
}

function init(){
};

init();
