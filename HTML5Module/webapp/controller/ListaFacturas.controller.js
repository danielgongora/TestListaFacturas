sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/m/MessageBox",
        "sap/ui/model/odata/v2/ODataModel"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller, MessageBox, ODataModel) {
		"use strict";

		return Controller.extend("com.wise.HTML5Module.controller.ListaFacturas", {
			onInit: function () {

                var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/wi08/GWLISTFAC_SRV/");
                oModel.metadataLoaded(true).then(
                    function (onSuccess) {
                        console.log("MetadataLoaded success");
                        oModel.callFunction("/f_ListInvoice", {
                            method: "GET",
                            urlParameters: {
                                Bukrs:"5510",
                                Kunnr:"100000005",
                                Fecha_Ini:"20180101",
                                Fecha_Fin:"20200801"

                            },
                            success: function (oData, response) {
                                new sap.m.MessageBox.information("Success", oData);
                            },
                            error: function (oError) {
                                console.log(oError);
                                new sap.m.MessageBox("Error calling function");
                            }
                        });

                    },
                    function (onError) {
                        console.log("Fail to load metadata");
                        new sap.m.MessageBox.error("Error");
                    }
                )

			}
		});
	});
