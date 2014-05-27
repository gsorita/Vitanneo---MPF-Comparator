var counter = 0, others = 0;
var top8 = [], arrHierarchy;

function main() {
	var count = 0, limit = 7, ret = "";
	
	var arr = [
    {name: "Greater China Equity", 				value: getNumber("{!greater_china_equity#value}"),				color: "990000",	index: 0},
    {name: "Asian Equity", 						value: getNumber("{!asian_equity#value}"), 						color: "ff6666",	index: 1},
	{name: "Australian/New <br>Zealand Equity", 	value: getNumber("{!australian_new_zealand_equity#value}"), 	color: "ffcccc",	index: 2},
	{name: "Japan Equity", 						value: getNumber("{!japan_equity#value}"), 						color: "660066",	index: 3},
	{name: "European Equity", 					value: getNumber("{!european_equity#value}"), 					color: "9999cc",	index: 4},
	{name: "North American Equity", 			value: getNumber("{!north_american_equity#value}"), 			color: "ccccff",	index: 5},
	{name: "Other Equity", 						value: getNumber("{!other_equity#value}"), 						color: "000099",	index: 6},
	{name: "Greater China Bonds", 				value: getNumber("{!greater_china_bonds#value}"), 				color: "0000ff",	index: 7},
	{name: "Asian Bonds", 						value: getNumber("{!asian_bonds#value}"), 						color: "ccffff",	index: 8},
	{name: "Australian/New <br>Zealand Bonds", 	value: getNumber("{!australian_new_zealand_bonds#value}"), 		color: "336600",	index: 9},
	{name: "Japan Bonds", 						value: getNumber("{!japan_bonds#value}"), 						color: "669900",	index: 10},
	{name: "European Bonds", 					value: getNumber("{!european_bonds#value}"), 					color: "cccc99",	index: 11},
	{name: "North American Bonds", 				value: getNumber("{!north_american_bonds#value}"), 				color: "666633",	index: 12},
	{name: "Other Bonds", 						value: getNumber("{!other_bonds#value}"), 						color: "999966",	index: 13},
	{name: "Cash", 								value: getNumber("{!cash#value}"), 								color: "ff6600",	index: 14},
	{name: "Money Market", 						value: getNumber("{!money_markets#value}"), 					color: "ffcc33",	index: 15},
	{name: "Other Cash Equivalents", 			value: getNumber("{!other_cash_equivalents#value}"), 			color: "663300",	index: 16}
];
	
	arrHierarchy = [
		{name: "Greater China Equity", 				value: getNumber("{!greater_china_equity#value}"),				color: "990000",	index: 0},
		{name: "Asian Equity", 						value: getNumber("{!asian_equity#value}"), 						color: "ff6666",	index: 1},
		{name: "Australian/New <br>Zealand Equity", 	value: getNumber("{!australian_new_zealand_equity#value}"), 	color: "ffcccc",	index: 2},
		{name: "Japan Equity", 						value: getNumber("{!japan_equity#value}"), 						color: "660066",	index: 3},
		{name: "European Equity", 					value: getNumber("{!european_equity#value}"), 					color: "9999cc",	index: 4},
		{name: "North American Equity", 			value: getNumber("{!north_american_equity#value}"), 			color: "ccccff",	index: 5},
		{name: "Other Equity", 						value: getNumber("{!other_equity#value}"), 						color: "000099",	index: 6},
		{name: "Greater China Bonds", 				value: getNumber("{!greater_china_bonds#value}"), 				color: "0000ff",	index: 7},
		{name: "Asian Bonds", 						value: getNumber("{!asian_bonds#value}"), 						color: "ccffff",	index: 8},
		{name: "Australian/New <br>Zealand Bonds", 	value: getNumber("{!australian_new_zealand_bonds#value}"), 		color: "336600",	index: 9},
		{name: "Japan Bonds", 						value: getNumber("{!japan_bonds#value}"), 						color: "669900",	index: 10},
		{name: "European Bonds", 					value: getNumber("{!european_bonds#value}"), 					color: "cccc99",	index: 11},
		{name: "North American Bonds", 				value: getNumber("{!north_american_bonds#value}"), 				color: "666633",	index: 12},
		{name: "Other Bonds", 						value: getNumber("{!other_bonds#value}"), 						color: "999966",	index: 13},
		{name: "Cash", 								value: getNumber("{!cash#value}"), 								color: "ff6600",	index: 14},
		{name: "Money Market", 						value: getNumber("{!money_markets#value}"), 					color: "ffcc33",	index: 15},
		{name: "Other Cash Equivalents", 			value: getNumber("{!other_cash_equivalents#value}"), 			color: "663300",	index: 16}
	];	
	
	arr.sort(function(a,b) {
      return b.value - a.value;
    });

	while (count < limit && arr[count]['value'] != 0) {
		top8.push(arr[count]['index']);	
		count++;
	} count = 0;
	
	while (count < arrHierarchy.length) {
			ret += getHTML(arrHierarchy[count]['name'], arrHierarchy[count]['value'], arrHierarchy[count]['color'], arrHierarchy[count]['index']);
	 	count++;
	}
	
	if (others > 0) ret += getHTML('Others', others, "000000", 17);
	return ret;
}

function getNumber (myNum){
	return (isNaN(parseFloat(myNum)) ? 0 : parseFloat(myNum));
}

function getHTML(name, value, color, index) {
	if (top8.indexOf(index) >= 0 || index == 17) {
		rbv_api.println("===>Top 8:" + name + "," + value + "," + color + "," + index);
		counter++;
		return '<div class="legend-item"> <div class="color" style="background-color:#' + color + ';"></div><div class="text">' + name + '</div> </div>'; 
	} else {
		others += arrHierarchy[index]['value']; rbv_api.println('others:' + others);
		rbv_api.println("Other:" + name + "," + value + "," + color + "," + index);
		return "";	
	}
}

main();