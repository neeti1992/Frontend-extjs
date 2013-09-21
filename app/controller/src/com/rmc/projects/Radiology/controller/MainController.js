/*
 * Copyright 2013, Raxa
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
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

    stores: ['com.rmc.projects.Radiology.store.MessageStore','com.rmc.projects.Radiology.store.WorklistStore'],

    models: ['com.rmc.projects.Radiology.model.WorklistModel'],

    // --------------------------------------
    // Constructor
    // --------------------------------------
    init: function()
    {
        var me = this;
        
        //DO A LOOKUP ON THE 'viewport', WAIT FOR RENDER
        this.control({
            'viewport': {
                render: me.onViewPortRendered
            }
        });
        
        //CREATE THE UI
        var mainView = Ext.create('com.rmc.projects.Radiology.view.MainView', {
            renderTo: Ext.getBody()
        });
        mainView.show();
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
            // To Do: handlers for find buttons in add order 
        });    
    },
// --------------------------------------
    // Methods 
// -------------------------------------- 

    // Generate pop-up which allows user to create a new order
    newOrder : function() {
        Ext.getCmp('addOrder').show();
    },
    // cancel order
    cancelNewOrder : function() {
        Ext.getCmp('addOrder').hide();
    },
    
    submitNewOrder: function() {
            Ext.getCmp('addOrder').hide();  //To Do: modify following code once backend is done
            Ext.getCmp.store.getProxy();
        Ext.getCmp.store.load({
            scope: this,
            callback: function(records, operation, success){
                if(success){
                    //do the things here
                }
                else{
                    Ext.Msg.alert("Error", Util.getMessageLoadError());
                }
            }
        });
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
                        this._postNewRadiologyOrder(jsonResponse.results[j].uuid);
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
    },    

    getBasicAuthHeaders: function () {
        var headers = {
            "Authorization": localStorage.getItem("basicAuthHeader"),
            "Accept": "application/json",
            "Content-Type": "application/json"
        };
        return headers;
    },
    
    
    
    
    // --------------------------------------
    // Event Handlers
    // --------------------------------------
    /*onViewPortRendered: function()
    {
        
        //SAVE 'MainController' as reference
        var me = this;
        
        //TRACE
        console.log ("MainViewUI.onViewPortRendered() ");
        
        //ONE-TIME-ONLY, STORE REFERENCES TO THE UI
        this.bodyText            = Ext.ComponentManager.get('bodyText');
        this.loadMessageButton   = Ext.ComponentManager.get('loadMessageButton');
        this.clearMessageButton  = Ext.ComponentManager.get('clearMessageButton');
        
        //LISTENERS
        this.loadMessageButton.addListener  ("click", function () { me.onLoadMessageButtonClick() } ) ;
        this.clearMessageButton.addListener ("click", function () { me.onClearMessageButtonClick() } );

    },
    
    onLoadMessageButtonClick: function()
    {
                
        //TRACE
        console.log ("MainViewUI.onLoadMessageButtonClick() ");

        //DISABLE THIS BUTTON
        this.loadMessageButton.setDisabled(true);
        
        //ENABLE CLEAR BUTTON
        this.clearMessageButton.setDisabled(false);
        
        //GET DATA FROM MODEL, THE STORE "WRAPS" THE MODEL        
        var messageStore = this.getStore('src.com.rmc.projects.Radiology.store.MessageStore');
                
        //SET MESSAGE VALUE
        this.bodyText.setValue (messageStore.getMessage());
    },
    
    
    onClearMessageButtonClick: function()
    {
        
        //TRACE
        console.log ("MainViewUI.onClearMessageButtonClick()");

        //SET MESSAGE VALUE
        this.bodyText.setValue ("");
        
        //DISABLE THIS BUTTON
        this.clearMessageButton.setDisabled(true);
        
        //ENABLE CLEAR BUTTON
        this.loadMessageButton.setDisabled (false);
    }*/
});
