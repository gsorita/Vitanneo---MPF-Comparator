function main () { 
	rbv_api.setFieldValue("funds_detail__c", parseInt('{!id}'), 'R1843405', '');
	var fund_id = parseInt("{!Pfunds_detail__c#id}");
	var effective_date_iso = '{!R182293.effective_date#iso}';
	var effect_date_5_iso = '{!R182293.effective_date__minus_5_years_#iso} 23:59:59';
	var start_date = '';
	var arr = new Array();
	
	var query = "SELECT id FROM funds_earning__c WHERE R182254 = ? AND Date2__c <= ? AND Date2__c > ?";
	
	var earning = rbv_api.selectQuery(query, 1000, fund_id, effective_date_iso, effect_date_5_iso);
	rbv_api.print(earning.length);
	
	count = 0;
	while (count < earning.length) {
		arr.push(parseInt(earning[count][0]));
		rbv_api.println(earning[count][0]);
		count++;
	}
	return arr;
} main();