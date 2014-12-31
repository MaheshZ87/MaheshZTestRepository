sap.ui.jsview("sampleproject.TestView", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf sampleproject.TestView
	*/ 
	getControllerName : function() {
		return "sampleproject.TestView";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf sampleproject.TestView
	*/ 
	createContent : function(oController) {
		
		
		/*var labelView = sap.m.Label("labelId",{
			
			text:"{i18n>label}"
		});
		
		var oTextView = new sap.ui.commons.TextView("textView", {
		    // bind text property of textview to firstName property in the model
		    text: "{jsonModel>/firstName}",
		    tooltip: "First Name"
		});
		var oTxt = new sap.ui.commons.TextField("txtField", {
		    // bind text property of textfield to firstName property in the model
		    value: "{jsonModel>/firstName}"
		});
		
		var oChkBx = new sap.ui.commons.CheckBox("box", {
		    // bind checked property against enabled property in the model
		    checked: "{jsonModel>/enabled}", 
		    change: oController.handleCheckBoxChange
		});
		// generic bind method bindProperty(control property, model property)
		oTxt.bindProperty("enabled", "jsonModel>/enabled");*/
		
		
		/*var tableTemplate = new sap.m.ColumnListItem("AccountsTableTemplate", {
			type: sap.m.ListType.Active,
			cells : [
				new sap.ui.commons.TextView({text : "{ACCOUNT_NAME}"}),
				new sap.ui.commons.TextView({text : "{COUNTRY}"}),
				new sap.ui.commons.TextView({text : "{STATE}"}),
				new sap.ui.commons.TextView({text : "{CITY}"}),
				new sap.ui.commons.TextView({text : "{INDUSTRY}"}),
				new sap.ui.commons.TextView({text : "{STATUS}"})
				
			],
			tap:function(evt){
				oController.openAccount(this.data("Account"));
			}
		});
		tableTemplate.data("Account", "{}");
		var oTable = new sap.m.Table({
			inset: false,
		    growing: true,              // set growing mode on
		    growingThreshold: 20,        // 5 items at a time
		    growingTriggerText: "More",
			id : "AccountsTable",
			widths: ["100px", ''],
			columns : [
	           	{header : new sap.ui.commons.Link(
           			{
			  			text: "Account",
			  			press: function(){
			  				oController.sortResults("ACCOUNT_NAME", this.getParent());
			  			}
       			}).data("name", "ACCOUNT_NAME").addStyleClass("sort-link")},
       			{header : new sap.ui.commons.Link(
           			{
			  			text: "Country",
			  			press: function(){
			  				oController.sortResults("COUNTRY", this.getParent());
			  			}
           			}).data("name", "COUNTRY").addStyleClass("sort-link")},
       			{header : new sap.ui.commons.Link(
           			{
			  			text: "State",
			  			press: function(){
			  				oController.sortResults("STATE", this.getParent());
			  			}
           			}).data("name", "STATE").addStyleClass("sort-link")},
       			{header : new sap.ui.commons.Link(
           			{
			  			text: "City",
			  			press: function(){
			  				oController.sortResults("CITY", this.getParent());
			  			}
           			}).data("name", "CITY").addStyleClass("sort-link")},
       			{header : new sap.ui.commons.Link(
           			{
			  			text: "Industry",
			  			press: function(){
			  				oController.sortResults("INDUSTRY", this.getParent());
			  			}
           			}).data("name", "INDUSTRY").addStyleClass("sort-link")},
       			{header : new sap.ui.commons.Link(
           			{
			  			text: "Status",
			  			press: function(){
			  				oController.sortResults("STATUS", this.getParent());
			  			}
           			}).data("name", "STATUS").addStyleClass("sort-link")}
			]
		});*/

//		oTable.bindItems("/accounts", tableTemplate);
		
		
		var oList = new sap.m.List('employeeList', {
			inset : false,
			showUnread : true,
			scrollToLoad : true,
			growing: true,
			growingThreshold: 100
		});
		
		/*var columnListTemplate = new sap.m.({
			type : "Navigation",
			content:[
			         new sap.m.Label({
			        	 text: "This is ID"
			         	})
			         ]
		});*/
		
		var objectListItem = new sap.m.ObjectListItem({
			title:"{empModel>EmployeeID}",
			number:"{empModel>FirstName}",
			numberUnit:"{empModel>LastName}"
		});
		
		oList.bindAggregation("items", {
			path:"empModel>/results",
			template:objectListItem
		});
		
		
		var oButton = new sap.m.Button("SolutionCurrButton",{
//            icon: sap.ui.core.IconPool.getIconURI("hint"),
            press:oController.handleButtonPress,
            text:'EUR'
		}).addStyleClass("helpButtonPadding");
		
		var currencyList=new sap.m.List("currList",{
						       
		});
		
 		return new sap.m.Page({
			title: "Employees",
			content: [oButton],
			footer: new sap.m.Bar({
				contentMiddle: new sap.ui.commons.DatePicker('datePickerId')
			})
		});
	}

})