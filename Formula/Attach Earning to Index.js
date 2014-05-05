function main () { 
	var fund_id = parseInt('{!id}');
	rbv_api.setFieldValue("funds_detail__c", fund_id, 'R1843405', '');
	
	var arr = new Array(),
		effective_date_iso = '{!R182293.effective_date#iso}',
		effective_date_5_iso = '{!R182293.effective_date__minus_5_years_#iso} 23:59:59',
		strMinDate = "#CALC_MIN.R182263( date3__c | date3__c )",
		minDate = new Date(strMinDate.substr(0,4), strMinDate.substr(5,2), strMinDate.substr(8,2)),
		effective_date_5 = new Date("{!R182293.effective_date__minus_5_years_}");
	var query = "SELECT id FROM funds_earning__c WHERE R182254 = ? AND Date2__c <= ? AND Date2__c > ?";
	rbv_api.println(minDate +"::"+ effective_date_5); 
	
	var earning = rbv_api.selectQuery(query, 1000, fund_id, effective_date_iso, effect_date_5_iso);
	rbv_api.print(earning.length);
	
	if (minDate < effective_date_5) {
		earning = rbv_api.selectQuery(query, 1000, fund_id, effective_date_iso, effective_date_5_iso);
	} else {
		earning = rbv_api.selectQuery(query, 1000, fund_id, effective_date_iso, strMinDate);
	}
	
	rbv_api.println("length:" + earning.length);
	
	count = 0;
	while (count < earning.length) {
		arr.push(parseInt(earning[count][0]));
		rbv_api.println(earning[count][0]);
		count++;
	}
	return arr;
} main();