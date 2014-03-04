var yArr = new Array(),
counter = 100;
function main() {
	//{!#LOOP_BEGIN.R1831314#636454}
	  	counter += getRet("{!R1831314.Monthly_Return__c#value}");
		yArr.push(counter);
	//{!#LOOP_END.R1831314}
	rbv_api.printArr(yArr);
	return Math.max.apply( Math, yArr);
}

function getRet(monthly_ret) {
	var dec_ret = parseFloat(Math.round(monthly_ret * 100) / 100).toFixed(2);
	rbv_api.println(parseFloat(dec_ret));
	
	var str_ret = dec_ret.toString(); 
	
	if (str_ret == "" || str_ret == "-") {
    	return 0;
	} else {
    	return parseFloat(dec_ret);
	}
}

main();