sap.ui.controller("sampleproject.TestView", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf sampleproject.TestView
*/
	onInit: function() {

		var sServiceUrl = "http://services.odata.org/V3/Northwind/Northwind.svc";
		var oDataModel = new sap.ui.model.odata.ODataModel(sServiceUrl);
		var oModel = new sap.ui.model.json.JSONModel();
		oDataModel.read("/Employees",null, null , false,
				function(oData, response){
			oModel.setData(oData);

		});		
		
		this.getView().setModel(oModel,"empModel");
//		this.getView().setModel(oModel);
		
		/*var data =[ {
				"IV_OBJECT": "ACCOUNTS",
				"IV_KEY": "",
				"IV_MODE": "",
				"IV_USER": "",
				"ACCOUNT_ID": "0004678206",
				"ACCOUNT_NAME": "Panjiva, Inc.",
				"COUNTRY": "",
				"STATE": "NY",
				"CITY": "New York",
				"INDUSTRY": "8748",
				"STATUS": ""
			},
			{
				"IV_OBJECT": "ACCOUNTS",
				"IV_KEY": "",
				"IV_MODE": "",
				"IV_USER": "",
				"ACCOUNT_ID": "0004778875",
				"ACCOUNT_NAME": "137 testing Orgname 24 Company, Inc.",
				"COUNTRY": "",
				"STATE": "NY",
				"CITY": "NEW YORK",
				"INDUSTRY": "9999",
				"STATUS": ""
			},
			{
				"IV_OBJECT": "ACCOUNTS",
				"IV_KEY": "",
				"IV_MODE": "",
				"IV_USER": "",
				"ACCOUNT_ID": "0000163162",
				"ACCOUNT_NAME": "Coca Cola.",
				"COUNTRY": "",
				"STATE": "NY",
				"CITY": "NEW YORK",
				"INDUSTRY": "9999",
				"STATUS": ""
			}];*/
		
		
		/*var data =[ {
			'firstName':'Mahesh',
			'enabled': 'true'
		},
		{
			firstName:'Mahesh',
			enabled: true
		},{
			firstName:'Mahesh',
			enabled: true
		},{
			firstName:'Mahesh',
			enabled: false
		}];*/
		/*
		var oModel = new sap.ui.model.json.JSONModel();
		// set the data for the model
		oModel.setData(data);
		oModel.setData({
			accounts: data
		});
		// set the model to the core
		sap.ui.getCore().setModel(oModel,"jsonModel");
//		sap.ui.getCore().setModel(oModel);
*/		
		var resModel = new sap.ui.model.resource.ResourceModel({
			bundleUrl: "sampleproject/i18n/i18n.properties",
			bundleLocale: sap.ui.getCore().getConfiguration().getLanguage()
		});

		// attach the resource model with the symbolic name "i18n"
		sap.ui.getCore().setModel(resModel, "i18n");
		
	},
	
	handleButtonPress:function(){
		
//		alert('inside handle Button press function..');
		var jsonModel = new sap.ui.model.json.JSONModel();
			
		if(sap.ui.getCore().byId("currencyDialog")){
			sap.ui.getCore().byId("currencyDialog").open();
		}else{
			var currDialog = new sap.ui.commons.Dialog("currencyDialog",{
				modal: true,
				width:"200px"
			});
			currDialog.setTitle("Currencies");
			sap.ui.getCore().byId("currencyDialog").addButton(new sap.ui.commons.Button({
				text: "OK", 
				press:function(){
					var selectedCurrency = sap.ui.getCore().byId("currList").getSelectedItem().mAggregations.content[0].getText();
					sap.ui.getCore().byId("SolutionCurrButton").setText(selectedCurrency);
					sap.ui.getCore().byId("currencyDialog").close();
//					byId("SolutionsView").getController().changeCurrencies(selectedCurrency);
				}}));
			sap.ui.getCore().byId("currencyDialog").open();
		}
		
		var sServiceUrl = "https://pgtmain.wdf.sap.corp/sap/opu/odata/sap/ZAPM_MOBILE_SRV";
		var oDataModel = new sap.ui.model.odata.ODataModel(sServiceUrl);

		var url = "/APMAccountCurrencyListSet";
		oDataModel.read(url,"",	["$filter=IV_OBJECT eq 'ACCT_CURR' and IV_MODE eq '' and ACCOUNT_ID eq '0000031781'"],true,function(oData, response) {
				var data = oData.results;
				jsonModel.setData(data);				
				sap.ui.getCore().byId("currencyDialog").destroyContent();
				
				var currencyList = sap.ui.getCore().byId('currList');
				currencyList.setMode(sap.m.ListMode.SingleSelect);
				var currentCurreny = sap.ui.getCore().byId("SolutionCurrButton").getText().toLowerCase();
				
				for(var i=0;i<data.length;i++){
					currencyList.addItem(new sap.m.CustomListItem({
						selected: (currentCurreny == data[i].CURRENCY.toLowerCase() ? true : false),
						content: [
						         new sap.m.Label({text: data[i].CURRENCY })]					
					}));
				}					
				sap.ui.getCore().byId("currencyDialog").addContent(currencyList);
				currencyList.setMode(jsonModel);
			},
			function(oError) {
				return [];
			}
		);

		
		
		
													
		
		
		
		
		
	},
	
	handleCheckBoxChange : function (oEvent){
	    var bEnabled = oEvent.getParameter("checked");
	    // modify the enabled property value in the model to reflect changes
	    sap.ui.getCore().getModel("jsonModel").setData({enabled: bEnabled}, true); // true means merge the data instead of replacing
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf sampleproject.TestView
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf sampleproject.TestView
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf sampleproject.TestView
*/
//	onExit: function() {
//
//	}

});