sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller) {
	"use strict";

	return Controller.extend("com.flash.myapp.controller.App", {

		onShowHello : function () {
			// show a native JavaScript alert
			MessageToast.show("Hello openSAP");
		}
	});
});