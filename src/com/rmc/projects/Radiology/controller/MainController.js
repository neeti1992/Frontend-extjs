/*
 * Copyright 2013, Raxa
 *
 * This file lists all the models, views, & stores. Also listed are methods and event handlers.
 */
Ext.define('com.rmc.projects.Radiology.controller.MainController', {
    
    // --------------------------------------
    // Properties
    // --------------------------------------
    extend: 'Ext.app.Controller',
    
    views : ['com.rmc.projects.Radiology.view.MainView', 'com.rmc.projects.Radiology.view.MainViewUI', 'com.rmc.projects.Radiology.view.Home',
     'com.rmc.projects.Radiology.view.worklist','com.rmc.projects.Radiology.view.worklistGrid', 'com.rmc.projects.Radiology.view.worklistNavBar',
     'com.rmc.projects.Radiology.view.addOrder',
    ],

    stores: ['com.rmc.projects.Radiology.store.ScheduledStatus','com.rmc.projects.Radiology.store.PerformedStatus','com.rmc.projects.Radiology.store.Modality','com.rmc.projects.Radiology.store.Priority',
    'com.rmc.projects.Radiology.store.WorklistStore','com.rmc.projects.Radiology.store.addOrder'],

    models: ['com.rmc.projects.Radiology.model.WorklistModel','com.rmc.projects.Radiology.store.Modality','com.rmc.projects.Radiology.store.ScheduledStatus',
    'com.rmc.projects.Radiology.model.PerformedStatus','com.rmc.projects.Radiology.model.Priority',,'com.rmc.projects.Radiology.model.addOrder'],
    // --------------------------------------
    // Constructor
    // --------------------------------------
    init: function()
    {
        var me = this;
        
        
        //CREATE THE UI
        var mainView = Ext.create('com.rmc.projects.Radiology.view.MainView');

        // Setup event handlers
        this.control({
             "worklistNavBar button[action=newOrder]": {
                click: this.newOrder
            },
            "addOrder button[action=submitNewOrder]": {
                click: this.submitNewOrder
            },
            "addOrder button[action=cancelNewOrder]": {
                click: this.cancelNewOrder
            },
            "addOrder button[action=resetNewOrder]": {
                click: this.resetNewOrder
            },
            // To Do: handlers for find buttons in add order 
        });    
    },
// --------------------------------------
    // Methods 
// -------------------------------------- 

    // Generate pop-up which allows user to create a new order
    newOrder : function() {
        Ext.getCmp('mainArea').getLayout().setActiveItem(1);
    },

    resetNewOrder: function(){
        Ext.getCmp('addOrder').getForm().reset();
    },
    
    cancelNewOrder : function() {
        Ext.getCmp('addOrder').getForm().reset();
        Ext.getCmp('mainArea').getLayout().setActiveItem(0);
    },
    
    submitNewOrder: function() {
            Ext.getCmp('addOrder').hide();  
        Ext.getCmp('mainArea').getLayout().setActiveItem(0);
        this.saveOrder();
    
},    

    getBasicAuthHeaders: function () {
        var headers = {
            "Authorization": "Basic " + window.btoa("admin" + ":" + "Admin123"),
            "Accept": "application/json",
            "Content-Type": "application/json"
        };
        return headers;
    },

    saveOrder: function () {

        var formp = Ext.getCmp('addOrder').saveForm();
            var addOrder = {
                name : formp.name,
                Priority : formp.Priority,
                Modality: formp.Modality,
                BodyScan: formp.BodyScan,
                StartDate: formp.StartDate,
                ExpiryDate: formp.ExpiryDate,
                ScheduledStatus: formp.ScheduledStatus,
                PerformedStatus: formp.PerformedStatus,
                RefPhyName : formp.RefPhyName,
                PerPhyName : formp.PerPhyName,
                ReadPhyName : formp.ReadPhyName,
                AddInfo: formp.AddInfo
            };
            var addOrderParam = Ext.encode(addOrder);
            Ext.Ajax.request({
                scope:this,
                url: HOST + '/ws/rest/v1/basicmodule/radiologystudy',
                method: 'POST',
                params: addOrderParam,
                disableCaching: false,
                headers: getBasicAuthHeaders(),
                success: function (response) {
                    var orderJSON = JSON.parse(response.responseText);
                    myRecord = orderJSON;
                    
                    var order = Ext.create('com.rmc.projects.Radiology.model.addOrder');

                    var OrderStore = Ext.create('com.rmc.projects.Radiology.store.addOrder');
                    OrderStore.add(order);
                    OrderStore.sync();
                    OrderStore.save();
                    OrderStore.on('write',function () {
                    Ext.Msg.alert('Order Created');
                    Ext.getCmp('addOrder').reset();
                   }
                   OrderStore.destroy();
               },
                failure: function (response) {
                    Ext.Msg.alert('Error','Unable to write to server. Please re-order');
                }
            });
    } 
});

        //     Ext.getCmp.store.getProxy();
        // Ext.getCmp.store.load({
        //     scope: this,
        //     callback: function(records, operation, success){
        //         if(success){
        //             //do the things here
        //         }
        //         else{
        //             Ext.Msg.alert("Error", Util.getMessageLoadError());
        //         }
        //     }
        // });
            /*
            Ext.Ajax.request({
            url: 
            method: 'GET',
            disableCaching: false,
            headers: getBasicAuthHeaders(),
            success: function (response) {
                var jsonResponse = Ext.decode(response.responseText);
                var j=0;
                var foundRadiologyOrderConcept = false;
                while(j<jsonResponse.results.length && !foundRadiologyOrderConcept){
                    if (jsonResponse.results[j].conceptClass.description === "RadiologyOrder"){
                        foundRadiologyOrderConcept = true;
                        this._postNewRadioloyOrder(jsonResponse.results[j].uuid);
                    }
                    j++;
                }
                if(!foundDrugConcept){
                    //concept not found so create 
                    this.postConceptForNewRadiologyOrder();
                }
            },
            failure: function() {
               Ext.Msg.alert('Error: unable to write to server.');
            },
            scope: this
        });
    },
    // REST call to create order in database
    _postNewRadiologyOrder: function(conceptUuid) {
            var newOrder = {
            concept: conceptUuid,
            patientID: Ext.getCmp('addOrderPatientID').getValue(),
            order_type: Ext.getCmp('addOrderType').getValue(),
            procedure: Ext.getCmp('addOrderProcedure').getValue(),
            scan_body_part: Ext.getCmp('addOrderBodyScan').getValue()
            priority: Ext.getCmp('addOrderPriority').getValue(),
            start_date: Ext.getCmp('addOrderPreferredDate').getValue(),
            physicianName: Ext.getCmp('addOrderPhysicianName').getValue()
        };
        var newOrderParam = Ext.encode(newOrder);
        Ext.Ajax.request({
            url: 
            method: 'POST',
            params: newOrderParam,
            disableCaching: false,
            headers: getBasicAuthHeaders(),
            success: function (response) {
                Ext.Msg.alert('Drug created successfully');
            },
            failure: function (response) {
                Ext.Msg.alert('Error: unable to write to server. Enter all fields.');
            },
            scope: this
        });*/
    
