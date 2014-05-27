ret = "";

function main() {
{!#LOOP_BEGIN.R182254#636454}
  	ret += getRet("{!R182254.Monthly_Return__c#value}")
{!#LOOP_END.R182254}
return ret.substring(0, ret.length - 1);
}

function getRet(monthly_ret) {
	var val = parseInt(parseFloat(monthly_ret) * 100000).toString();
	//var res = val.slice(0,val.length - 3);
	var res = val;
	if (res == "" || res == "-") {
    	return 0 + ",";
	} else {
    	return res + ",";  
	}
}

main();