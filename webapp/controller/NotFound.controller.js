sap.ui.define([
	"uk/co/abports/ZPO_DEMO/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("uk.co.abports.ZPO_DEMO.controller.NotFound", {

			onInit: function () {
				this.getRouter().getTarget("notFound").attachDisplay(this._onNotFoundDisplayed, this);
			},

			_onNotFoundDisplayed : function () {
					this.getModel("appView").setProperty("/layout", "OneColumn");
			}
		});
	}
);