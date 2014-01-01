function main() {
	var ret = 0;
	//{!#LOOP_BEGIN.R182251#1594193(1)}
		effective_date = new Date("{!R182251.Date2__c}");
		count = count_allocation("{!asian_bonds#value}") +
		count_allocation("{!asian_equity#value}") + 
		count_allocation("{!australian_new_zealand_equity#value}") + 
		count_allocation("{!cash#value}") + 
		count_allocation("{!european_bonds#value}") + 
		count_allocation("{!european_equity#value}") + 
		count_allocation("{!greater_china_bonds#value}") + 
		count_allocation("{!greater_china_equity#value}") + 
		count_allocation("{!australian_new_zealand_bonds#value}") + 
		count_allocation("{!japan_bonds#value}") + 
		count_allocation("{!japan_equity#value}") + 
		count_allocation("{!money_markets#value}") + 
		count_allocation("{!north_american_bonds#value}") + 
		count_allocation("{!north_american_equity#value}") + 
		count_allocation("{!other_bonds#value}") + 
		count_allocation("{!other_cash_equivalents#value}") + 
		count_allocation("{!other_equity#value}");
	//{!#LOOP_END.R182251}
	return count;
}

function count_allocation(value) {
	if (value == "" || value == 0) return 0;
	else return 1;
}

main();