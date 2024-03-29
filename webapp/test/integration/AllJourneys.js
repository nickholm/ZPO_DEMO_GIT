// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 PurchaseOrderSet in the list

sap.ui.define([
	"sap/ui/test/Opa5",
	"./arrangements/Arrangement",
	"./MasterJourney",
	"./NavigationJourney",
	"./NotFoundJourney",
	"./BusyJourney",
	"./FLPIntegrationJourney"
], function (Opa5, Arrangement) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Arrangement(),
		viewNamespace: "uk.co.abports.ZPO_DEMO.view.",
		autoWait: true
	});
});
