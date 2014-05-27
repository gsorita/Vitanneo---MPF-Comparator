var counter = 0, starter = 9, limit = 17;

function main() {
	var count = 0, ret = "";
	arrName = ["Greater China Equity","Asian Equity","Australian/New Zealand<br>Equity","Japan Equity","European Equity","North American Equity","Other Equity","Greater China Bonds","Asian Bonds","Hong Kong Bonds","Japan Bonds","European Bonds","North American Bonds","Other Bonds","Cash","Money Market","Other Cash Equivalents"];
	arrValue = ["{!greater_china_equity#value}","{!asian_equity#value}","{!australian_new_zealand_equity#value}","{!japan_equity#value}","{!european_equity#value}","{!north_american_equity#value}","{!other_equity#value}","{!greater_china_bonds#value}","{!asian_bonds#value}","{!australian_new_zealand_bonds#value}","{!japan_bonds#value}","{!european_bonds#value}","{!north_american_bonds#value}","{!other_bonds#value}","{!cash#value}","{!money_markets#value}","{!greater_china_equity#value}"];
	arrColor = ["990000","ff6666","ffcccc","660066","9999cc","ccccff","000099","0000ff","ccffff","336600","669900","cccc99","666633","999966","ff6600","ffcc33","663300"];
	
	if (parseFloat("{!allocation_count#value}") > counter) {
		while (count < arrName.length) {
			ret += getHTML(arrName[count], arrValue[count], arrColor[count]);
			count++;	
		}
	}
	
	return ret;
}

function getHTML(name, value, color) {
	if (value != "0.0") {
		counter++;
		if (counter > starter) {
			return '<div class="legend-item"> <div class="color" style="background-color:#' + color + ';"></div><div class="text">' + name + '</div> </div>'; 
		}
	} return "";
}

main();