ret = "";

function main () {
  //{!#LOOP_BEGIN.R182254#636454}
	curdate = new Date("{!R182254.Date2__c}");
	ret += getRet(curdate);
  //{!#LOOP_END.R182254}
  
  return ret.substring(0, ret.length - 1);
}

function getRet(myDate) {
	var curyear = myDate.getFullYear().toString();
	var yr = curyear.substring(curyear.length, 2);
	return getMonthNum(curdate.getMonth()+1) + "/" + yr + "|";
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