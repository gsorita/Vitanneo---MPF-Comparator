function main() {
	var max_fund = getNumber('#CALC_SUM.R1831314( Monthly_Return__c | true )');
	rbv_api.println('Max Fund:' + max_fund);
	var max_index = getNumber('#CALC_SUM.R1843405( Monthly_Return__c | true )');
	rbv_api.println('Max Index:' + max_index);
	
	return (max_fund > max_index) ? max_fund : max_index;
} main();

function getNumber (strNumber) {
	if (strNumber == '') 
		return parseFloat('0') + 100;	
	return parseFloat(strNumber) + 100;
}
