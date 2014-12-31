
function getSolutionCurrencies(){
	
	var sServiceUrl = "https://pgtmain.wdf.sap.corp/sap/opu/odata/sap/ZAPM_MOBILE_SRV";
	var oDataModel = new sap.ui.model.odata.ODataModel(sServiceUrl);

	var url = "/APMAccountCurrencyListSet";
	oDataModel.read(
		url,
		"",
		["$filter=IV_OBJECT eq 'ACCT_CURR' and IV_MODE eq '' and ACCOUNT_ID eq '0000031781'"],
		false,
		function(oData, response) {
			return oData.results;
		},
		function(oError) {
			return [];
		}
	);
	
}
