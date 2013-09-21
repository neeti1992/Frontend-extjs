Ext.define('com.rmc.projects.Radiology.model.addOrder', {
    extend: 'Ext.data.Model',
    config: {
        fields: [{
            name: 'id',
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
    }]
    }
});
