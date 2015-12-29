var args = arguments[0] || {};
var name = args.label_name;
var number = args.label_num;

function doSave(){
	Ti.App.fireEvent("edit",{newname:$.textFieldName.value,newnum:$.textFieldNum.value});
	$.win.close();
};



function init(){
	$.textFieldName.value=name;
	$.textFieldNum.value=number;
}
init();
