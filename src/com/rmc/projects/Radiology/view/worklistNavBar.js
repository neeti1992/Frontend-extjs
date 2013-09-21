Ext.define('com.rmc.projects.Radiology.view.worklistNavBar', {
    extend: 'Ext.container.Container',
    alias: 'widget.worklistNavBar',
    id: 'worklistNavBar',
    width: 180,
    layout: 'vbox',
    items: [{
        xtype: 'container',
        margin: '10 0 0 20',
        html: '<b><u>ORDERS</u></b>',
        height: 20
   /* }, {
        xtype: 'button',
        width: 180,
        height: 40,
        text: 'View Orders',
        id: 'viewOrderButton',
        //action: 'viewOrder' */
    }, {
        xtype: 'button',
        width: 180,
        height: 40,
        text: 'Add New Order',
        id: 'newOrderButton',
        action: 'newOrder'
    }
    ],
    selectNavBar: function(item) {
        console.log(item);
    }
});
