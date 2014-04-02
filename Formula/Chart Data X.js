var end_date = new Date('{!R182293.effective_date}'),
	start_date = new Date('{!Date_Opened__c}');

ret = "";
ret1 = new Array();
ret2 = new Array();
function main () {
	var strMinDate = "#CALC_MIN.R182263( date3__c | date3__c )",
		minDate = new Date(strMinDate.substr(0,4), strMinDate.substr(5,2), strMinDate.substr(8,2)),
		effective_date_5 = new Date("{!R182293.effective_date__minus_5_years_}");
  
	"{!#LOOP_BEGIN.R1831314#636454}"
	p("{!R182254.Date2__c}");
	"{!#LOOP_END.R1831314}"
	
	var xinit = 0;
			
	if (ret1.length == 0) {
		retString = ret1.toString();
	} else {
		rbv_api.println("length:" + ret2.length);
		if (start_date < effective_date_5) {
			rbv_api.println("start date:" + effective_date_5);
			ret2[xinit] = getRet(effective_date_5);
		} else {
			rbv_api.println("start date:" + start_date);
			ret2[xinit] = getRet(start_date);
		}

		if (ret1.length == 1) {
			var xlast = ret1.length;
		} else {
			var xlast = ret1.length;
			var xmid = Math.round(ret1.length / 2); 
			rbv_api.println("xmid:" + xmid);
			ret2[xmid] = ret1[xmid];
		}
		rbv_api.println("xlast:" + xlast);
		ret2[xlast] = getRet(end_date);
	}
	 
	retString = ret2.toString();
	
	retString = retString.substring(0, retString.length - 1);
	return retString.replace(/\,/g, "|");
}

function p(myDate) {
	ret1.push(getRet(myDate));
	ret2.push("");
}

function getRet(myDate) {
	myDate = new Date(myDate);
	var curyear = myDate.getFullYear().toString();
	var yr = curyear.substring(curyear.length, 2);
	return getMonthNum(myDate.getMonth()+1) + "/" + yr + "|";
}

function getMonthNum (month) {
	if (month<10) {
		return "0" + month 	;
	} return month;
}

function getMonth(month) {
  switch (month) {
    case 0: return "Jan";
    case 1: return "Feb";
    case 2: return "Mar";
    case 3: return "Apr";
    case 4: return "May";
    case 5: return "Jun";
    case 6: return "Jul";
    case 7: return "Aug";
    case 8: return "Sep";
    case 9: return "Oct";
    case 10: return "Nov";
    case 11: return "Dec";
  }
}

main();