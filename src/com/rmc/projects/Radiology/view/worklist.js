Ext.define('com.rmc.projects.Radiology.view.worklist', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.worklist',
    title: 'Worklist: Manage orders',
    height: 600,
    items: [
      {
        layout: 'card',
        border: false,
        activeItem: 0,
        id: 'layoutarea',
        height: 470,
        items: [{
            xtype: 'worklistGrid',
            id: 'worklistGrid'
        },{
        xtype: 'button',
        text: 'Submit',
      //  action: 'submitWorklist', 
        margin: 5
    }]
    },
]
});