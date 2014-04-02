function main () { 
	var fund_id = parseInt("{!Pfunds_detail__c#id}");
	rbv_api.setFieldValue("funds_detail__c", parseInt('{!id}'), 'R1843405', '');
	
	var arr = new Array(),
		startDate_iso = '{!Date_Opened__c#iso}',
		effective_date_iso = '{!R182293.effective_date#iso}',
		effective_date_5_iso = '{!R182293.effective_date__minus_5_years_#iso} 23:59:59',
		startDate = new Date('{!Date_Opened__c}'),
		strMinDate = "#CALC_MIN.R182263( date3__c | date3__c )",
		minDate = new Date(strMinDate.substr(0,4), strMinDate.substr(5,2), strMinDate.substr(8,2)),
		effective_date_5 = new Date("{!R182293.effective_date__minus_5_years_}");
	var query = "SELECT id FROM funds_earning__c WHERE R182254 = ? AND Date2__c <= ? AND Date2__c > ?";
	rbv_api.println(minDate +"::"+ effective_date_5); 
	
	if (startDate < effective_date_5) {
		rbv_api.println(startDate + "<" + effective_date_5);
		earning = rbv_api.selectQuery(query, 1000, fund_id, effective_date_iso, effective_date_5_iso);
	} else {
		rbv_api.println(effective_date_5 + "<" + startDate);
		earning = rbv_api.selectQuery(query, 1000, fund_id, effective_date_iso, startDate_iso);
	}	
	rbv_api.print("length:" + earning.length);
	
	count = 0;
	while (count < earning.length) {
		arr.push(parseInt(earning[count][0]));
		rbv_api.println(earning[count][0]);
		count++;
	}
	return arr;
} main();