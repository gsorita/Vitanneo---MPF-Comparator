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

var bonds = parseFloat(setToZero("{!Bonds_Europe__c#value}")) + parseFloat(setToZero("{!Bonds_Europe_Gov__c#value}")) + parseFloat(setToZero("{!Bonds_Europe_Other__c#value}")) + parseFloat(setToZero("{!Bonds_Hong_Kong__c#value}")) + parseFloat(setToZero("{!Bonds_Hong_Kong_Gov__c#value}")) + parseFloat(setToZero("{!Bonds_Hong_Kong_Other__c#value}")) + parseFloat(setToZero("{!Bonds_Japan__c#value}")) + parseFloat(setToZero("{!Bonds_Japan_Gov__c#value}")) + parseFloat(setToZero("{!Bonds_Japan_Other__c#value}")) + parseFloat(setToZero("{!Bonds_Other__c#value}")) + parseFloat(setToZero("{!Bonds_Other_Gov__c#value}")) + parseFloat(setToZero("{!Bonds_Other_Other__c#value}")) + parseFloat(setToZero("{!Bonds_US__c#value}")) + parseFloat(setToZero("{!Bonds_US_Gov__c#value}")) + parseFloat(setToZero("{!Bonds_US_Other__c#value}"));

bonds = bonds.toFixed(2);
bonds = bonds.toString();

rbv_api.println("bonds: " + bonds);

/* -- CASH -- */

var cash = parseFloat(setToZero("{!Cash_Cash__c#value}")) + parseFloat(setToZero("{!Cash_Term_Deposits__c#value}"));
cash = cash.toFixed(2);
cash = cash.toString();

rbv_api.println("cash: " + cash);

/* -- EQUITY -- */

var equity = parseFloat(setToZero("{!Equity_Asia__c#value}")) + parseFloat(setToZero("{!Equity_Asia_Asia_Other__c#value}")) + parseFloat(setToZero("{!Equity_Asia_Global__c#value}")) + parseFloat(setToZero("{!Equity_Asia_Japan__c#value}")) + parseFloat(setToZero("{!Equity_Global_Europe__c#value}")) + parseFloat(setToZero("{!Equity_Global_North_America__c#value}")) + parseFloat(setToZero("{!Equity_Global_Other__c#value}")) + parseFloat(setToZero("{!Equity_Greater_China__c#value}")) + parseFloat(setToZero("{!Equity_Greater_China_China__c#value}")) + parseFloat(setToZero("{!Equity_Greater_China_Hong_Kong__c#value}")) + parseFloat(setToZero("{!Equity_Greater_China_Taiwan__c#value}"));

equity = equity.toFixed(2);
equity = equity.toString();

rbv_api.println("equity: " + equity);

rbv_api.setFieldValue(objName, objId, "Bonds__c", bonds);
rbv_api.setFieldValue(objName, objId, "Cash__c", cash);
rbv_api.setFieldValue(objName, objId, "Equity__c", equity);