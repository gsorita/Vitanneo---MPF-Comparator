function setToZero(val){
	if(val == "" | val == null){
		return 0;
	}
	else{
		return val;
	}
}

var objName = "funds_asset_alloca";
var objId = "{!id}"

/* -- BONDS -- */

var bonds = parseFloat(setToZero("{!Bonds_Greater_China__c#value}")) + parseFloat(setToZero("{!Bonds_Asia__c#value}")) + parseFloat(setToZero("{!Bonds_Australia_New_Zealand__c#value}")) + parseFloat(setToZero("{!Bonds_Japan__c#value}")) + parseFloat(setToZero("{!Bonds_Europe__c#value}")) + parseFloat(setToZero("{!Bonds_North_America__c#value}")) + + parseFloat(setToZero("{!Bonds_Other__c#value}"));

bonds = bonds.toFixed(2);
bonds = bonds.toString();

rbv_api.println("bonds: " + bonds);

/* -- CASH -- */

var cash = parseFloat(setToZero("{!Cash__c#value}")) + parseFloat(setToZero("{!Money_Markets__c#value}")) + parseFloat(setToZero("{!Cash_Equivalents_Other__c#value}"));
cash = cash.toFixed(2);
cash = cash.toString();

rbv_api.println("cash: " + cash);

/* -- EQUITY -- */

var equity = parseFloat(setToZero("{!Equity_Greater_China__c#value}")) + parseFloat(setToZero("{!Equity_Asia__c#value}")) + parseFloat(setToZero("{!Equity_Australia_New_Zealand__c#value}")) + parseFloat(setToZero("{!Equity_Asia_Japan__c#value}")) + parseFloat(setToZero("{!Equity_Europe__c#value}")) + parseFloat(setToZero("{!Equity_North_America__c#value}")) + parseFloat(setToZero("{!Equity_Other__c#value}"));

equity = equity.toFixed(2);
equity = equity.toString();

rbv_api.println("equity: " + equity);

var total = (parseFloat(bonds) + parseFloat(cash) + parseFloat(equity)).toFixed(2).toString();
rbv_api.println("total: " + total);

rbv_api.setFieldValue(objName, objId, "Bonds__c", bonds);
rbv_api.setFieldValue(objName, objId, "Cash_and_Equivalents__c", cash);
rbv_api.setFieldValue(objName, objId, "Equity__c", equity);
rbv_api.setFieldValue(objName, objId, "Total_Fund__c", total);