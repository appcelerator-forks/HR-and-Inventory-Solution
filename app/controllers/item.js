var args = arguments[0] || {};
var item_text = args.label_name;
var data = [];

function insertDatatoRow(){
	var item_data= generate_RowToTableViewRow();
		$.table_view.setData(item_data);
		$.qty_num.text=$.table_view.data[0].rowCount;

}

function generate_RowToTableViewRow(){
	
	var tbl_view_row=[];
	
	for (i=0; i < data.length; i++){	
		
	var row = Ti.UI.createTableViewRow({
		width: Ti.UI.FILL,
		height: Ti.UI.SIZE,
	});
	
	var label = Ti.UI.createLabel({
		width: "auto",
		height: 80,
		text:data[i]
	});
	
		row.add(label);
		tbl_view_row.push(row);
		
}

return tbl_view_row;

}

function doAdd(){
	Alloy.Globals.Navigator.open("item_form");
};

function init(){
	$.item_name.text=item_text;
};

init();

function closeWindow(){
	$.close.win();
}

Ti.App.addEventListener("add_item",function(entry){
	data.push(entry.itemname);
	insertDatatoRow();
});
