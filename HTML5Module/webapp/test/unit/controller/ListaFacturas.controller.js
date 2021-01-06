/*global QUnit*/

sap.ui.define([
	"com/wise/HTML5Module/controller/ListaFacturas.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ListaFacturas Controller");

	QUnit.test("I should test the ListaFacturas controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
