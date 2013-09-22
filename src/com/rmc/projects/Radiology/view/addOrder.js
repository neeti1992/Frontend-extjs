Ext.define('com.rmc.projects.Radiology.view.addOrder', {
    extend: 'Ext.form.Panel',
    alias: 'widget.addOrder',
    id: 'addOrder',
    autoScroll: true,
    title: 'Create Radiology Order',
    layout: {
        type: 'vbox',
        //will stretch to entire screen....
       //align: 'stretch'
    },
    items: [
    {
        layout: 'absolute',
        border: false,
        margin: '20 20 20 20',
        items:[ 
           {
            xtype: 'combobox',
            id: 'addOrderPatientName',
            fieldLabel: 'Name',
            name: 'name',
            hideTrigger: true,
            typeAhead:true,
            minChars: 4,
            loadingText: '',
            queryMode: 'remote',
            forceSelection: true,
            listConfig: {
              proxy: {
                type: 'rest', //rest call for patient search
                method: 'GET',
                headers: com.rmc.projects.Radiology.controller.MainController.getBasicAuthHeaders(), 
                url: HOST + '/ws/rest/v1/patient?q=' + name,
                reader: {
                  type: 'json',
                  rootProperty: 'results'
                },[
                    {name: 'name', type: 'string'}
                ]
              },
              resultsHeight: 300,
              labelKey: 'name'
            }
            x: "-7%",
            y: ".5%",
            allowBlank: false,
            valueField: 'name',
            displayField: 'name'
            }, {
                
            xtype: 'combobox',
            fieldLabel: 'Scheduled Status',
            id: 'addOrderScheduledStatus',
            allowBlank: false,
            typeAhead: true,
            x: "-1.7%",
            y: "8%",
            queryMode: 'local',
            forceSelection: true,
            listConfig: {
                            minWidth: null
                        },
            store: 'com.rmc.projects.Radiology.store.ScheduledStatus',
            valueField: 'ScheduledStatus',
            displayField: 'ScheduledStatus',
            name: 'ScheduledStatus'
          }, {

            xtype: 'combobox',
            fieldLabel: 'Modality',
            id: 'addOrderModality',
             allowBlank: false,
             x: "-6.6%",
            y: "17%",
            typeAhead: true,
            queryMode: 'local',
            forceSelection: true,
            listConfig: {
                            minWidth: null
                        },
            store: 'com.rmc.projects.Radiology.store.Modality',
            valueField: 'Modality',
            displayField: 'Modality',
            name: 'Modality'
          }, {

            xtype: 'textfield',
            width: "90%",
            fieldLabel: '',
            id: 'addOrderBodyScan',
            emptyText: 'Enter the Body Portion to be scanned',
             allowBlank: false,
             //x: 30,
            x: "10%",
            y: "24%",
            name: 'BodyScan'
          }, {

            xtype: 'combobox',
            fieldLabel: 'Priority',
            id: 'addOrderPriority',
             allowBlank: false,
             typeAhead: true,
             x: "-10%",
            y: "31%",
            queryMode: 'local',
            forceSelection: true,
            listConfig: {
                            minWidth: null
                        },
            store: 'com.rmc.projects.Radiology.store.Priority',
            valueField: 'Priority',
            displayField: 'Priority',
            name: 'Priority'
          }, {

            xtype: 'datefield',
            width: 250,
            fieldLabel: 'Start Date',
            id: 'addOrderDate',
             allowBlank: false,
             labelAlign: 'left',
            x: "-3.7%",
            y: 175,
            name: 'StartDate'
            }, {

            xtype: 'datefield',
            width: 250,
            fieldLabel: 'Expiry Date',
            id: 'addOrderExpiryDate',
             allowBlank: false,
             labelAlign: 'left',
            x: "-1%",
            y: 207,
            name: 'ExpiryDate'
            }, {
                
            xtype: 'combobox',
            id: 'addOrderRefPhyName',
            fieldLabel: 'Referring Physician',
            name: 'RefPhyName',
            hideTrigger: true,
            typeAhead:true,
            loadingText: '',
            queryMode: 'remote',
            forceSelection: true,
            listConfig: {
              proxy: {
                type: 'rest', //rest call for doctor who is user of openmrs as well
                method: 'GET',
                headers: com.rmc.projects.Radiology.controller.MainController.getBasicAuthHeaders(), 
                url: HOST + '/ws/rest/v1/user?v=full',
                reader: {
                  type: 'json',
                  rootProperty: 'results'
                },[
                    {name: 'username', type: 'string'}
                ]
              },
              resultsHeight: 300,
              labelKey: 'username'
            }
            x: "-1.7%",
            y: 240,
            allowBlank: false,
            valueField: 'RefPhyName',
            displayField: 'RefPhyName'
            },{
                
            xtype: 'combobox',
            id: 'addOrderPerPhyName',
            fieldLabel: 'Performing Physician',
            name: 'PerPhyName',
            hideTrigger: true,
            typeAhead:true,
            loadingText: '',
            queryMode: 'remote',
            forceSelection: true,
            listConfig: {
              proxy: {
                type: 'rest', //rest call for doctor who is user of openmrs as well
                method: 'GET',
                headers: com.rmc.projects.Radiology.controller.MainController.getBasicAuthHeaders(), 
                url: HOST + '/ws/rest/v1/user?v=full',
                reader: {
                  type: 'json',
                  rootProperty: 'results'
                },[
                    {name: 'username', type: 'string'}
                ]
              },
              resultsHeight: 300,
              labelKey: 'username'
            }
            x: "-1.7%",
            y: 275,
            allowBlank: false,
            valueField: 'PerPhyName',
            displayField: 'PerPhyName'
            }, {
            
            xtype: 'combobox',
            id: 'addOrderReadPhyName',
            fieldLabel: 'Reading Physician',
            name: 'ReadPhyName',
            hideTrigger: true,
            typeAhead:true,
            loadingText: '',
            queryMode: 'remote',
            forceSelection: true,
            listConfig: {
              proxy: {
                type: 'rest', //rest call for doctor who is user of openmrs as well
                method: 'GET',
                headers: com.rmc.projects.Radiology.controller.MainController.getBasicAuthHeaders(), 
                url: HOST + '/ws/rest/v1/user?v=full',
                reader: {
                  type: 'json',
                  rootProperty: 'results'
                },[
                    {name: 'username', type: 'string'}
                ]
              },
              resultsHeight: 300,
              labelKey: 'username'
            }
            x: "-1.7%",
            y: 304,
            allowBlank: false,
            valueField: 'ReadPhyName',
            displayField: 'ReadPhyName'
            }, {

            xtype: 'combobox',
            fieldLabel: 'Performed Status',
            id: 'addOrderPerformedStatus',
            name: 'PerformedStatus',
            allowBlank: false,
            typeAhead: true,
            x: "-1.7%",
            y: 335,
            queryMode: 'local',
            forceSelection: true,
            listConfig: {
                            minWidth: null
                        },
            store: 'com.rmc.projects.Radiology.store.PerformedStatus',
            valueField: 'PerformedStatus',
            displayField: 'PerformedStatus'
            }, {
            
            xtype: 'textfield',
            width: "90%",
            height: 60,
            blankText: '',
            id: 'addOrderAddInfo',
            emptyText: 'Enter any additional information',
             allowBlank: true,
             x: "10%",
            y: 380,
            name: 'AddInfo'
            }
        ]
     },
    
     {
        layout: {
            type: 'hbox',
            pack: 'end'
        },
        
        border: false,
        items:[{
            xtype: 'button',
            text: 'Cancel',
            action: 'cancelNewOrder',
            margin: '0 20 20 40',
            },{
            xtype: 'button',
            text: 'Submit',
            //disabled: true,
            //formBind: true,
            action: 'submitNewOrder',
            margin: '0 20 20 15',
            },{
            xtype: 'button',
            text: 'Reset',
            action: 'resetNewOrder',
            margin: '0 20 20 15',
        }]
     }
    ],
    saveForm: function () {
        return this.getValues();
    }
});
