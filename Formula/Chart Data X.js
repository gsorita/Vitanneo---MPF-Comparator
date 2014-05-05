ret = "";

function main () {
  ret1 = new Array();
  ret2 = new Array();
  {!#LOOP_BEGIN.R182254#636454}
	curdate = new Date("{!R182254.Date2__c}");
	ret1.push(getRet(curdate));
	ret2.push("");
  {!#LOOP_END.R182254}
  
  
  
  if (ret1.length <= 3) {
	retString = ret1.toString();
  } else {
	var xinit = 0, xmid = Math.round(ret1.length / 2), xlast = ret1.length - 1;
	ret2[xinit] = ret1[xinit];
	ret2[xmid] = ret1[xmid];
	ret2[xlast] =  ret1[xlast];	  
	retString = ret2.toString();
  }
  
  retString = retString.substring(0, retString.length - 1);
  return retString.replace(/\,/g, "|");
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