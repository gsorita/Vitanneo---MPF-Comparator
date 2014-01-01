function main() {
	var count = 0, counter = 0, limit = 9, ret = "";
	arrName = ["","","","","","","","","","","","","","","","",""];
	arrValue = ["","","","","","","","","","","","","","","","",""];
	arrColor = ["","","","","","","","","","","","","","","","",""];
	
	while (count < arrName.length && counter <= limit) {
		ret += getHTML(arrName[count], arrValue[count], arrColor[count]);
		count++;	
	}
	
	return ret;
}

function getHTML(name, value, color) {
	if (value != "0.0") {
		return '<div class="legend-item"> <div class="color" style="background-color:#' + color + ';"></div><div class="text">' + value + '</div> </div>'; 
	} else {
		return "";	
	}
}

main();