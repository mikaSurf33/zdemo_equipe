/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
	"use strict";

	sap.ui.require([
		"com/demoEquipe/zdemo_equipe/test/integration/PhoneJourneys"
	], function() {
		QUnit.start();
	});
});