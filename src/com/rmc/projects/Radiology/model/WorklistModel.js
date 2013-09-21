Ext.define('com.rmc.projects.Radiology.model.WorklistModel', {
    extend: 'Ext.data.Model',
    fields: [{   //name, type, model, mapping
        name: 'id',
        //shouldn't go with post call's body so we make the persist property false 
        persist: false 
    }, {
        name: 'name',
        type: 'string'
    }, {
        name: 'Priority',
        type: 'string'
    }, {
        name: 'Modality',
        type: 'string'
    },{
        name: 'BodyScan',
        type: 'string'
    }, {
        name: 'StartDate',
        type: 'date',
        dateFormat: 'm/d/Y'
    }, {
        name: 'ExpiryDate',
        type: 'date',
        dateFormat: 'm/d/Y'
    }, {
        name: 'ScheduledStatus',
        type: 'string'
    }, {
        name: 'PerformedStatus',
        type: 'string'
    }, {
        name: 'AddInfo',
        type: 'string'
    }, {
        name: 'RefPhyName',
        type: 'string'
    }, {
        name: 'ReadPhyName',
        type: 'string'
    }, {
        name: 'PerPhyName',
        type: 'string'        
    }
]
});
