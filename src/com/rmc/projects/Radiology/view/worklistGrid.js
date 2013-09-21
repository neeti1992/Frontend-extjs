Ext.define('com.rmc.projects.Radiology.view.worklistGrid', {
    extend: 'Ext.grid.Panel',
    requires: ['Ext.ux.RowExpander', 'Ext.grid.feature.RowBody', 'Ext.grid.feature.RowWrap'],
    alias: 'widget.worklistGrid',
    id: 'worklistGrid',   
    width: 780 - 2, // Total pixels - Border
    margin: '0 0 0 0',
      xtype: 'row-expander-grid',
    store: 'com.rmc.projects.Radiology.store.WorklistStore',
    //features: [Ext.create('Ext.grid.feature.Grouping',{
      //  startCollapsed: true,
    //})
    //],
    columns: [
    {
        xtype: 'rownumberer'
    },
    {
        xtype: 'gridcolumn',
        text: 'Name of Patient',
        dataIndex: 'PatientName',
        width: 90
    },
    {
        xtype: 'gridcolumn',
        text: 'Priority',
        dataIndex: 'Priority',
        width: 70
    },
    {
        xtype: 'gridcolumn',
        text: 'Modality',
        dataIndex: 'Modality',
        width: 60
    },
    {
        xtype: 'datecolumn',
        text: 'Start Date',
        renderer: Ext.util.Format.dateRenderer('m/d/Y'),
        dataIndex: 'StartDate',
        width: 75
    },
    {
        xtype: 'gridcolumn',
        text: 'Expiry Date',
        renderer: Ext.util.Format.dateRenderer('m/d/Y'),
        dataIndex: 'ExpiryDate',
        width: 75
    },
    {
        xtype: 'gridcolumn',
        text: 'Scheduled Status',
        dataIndex: 'ScheduledStatus',
        width: 95
    },
    {
        xtype: 'gridcolumn',
        text: 'Performed Status',
        dataIndex: 'PerformedStatus',
        width: 95
    },
    {
        xtype: 'gridcolumn',
        text: 'Body Part',
        dataIndex: 'BodyScan',
        width: 100
    }
    ],    
    width: 710,
    height: 300,
    plugins: [{
        ptype: 'rowexpander',
        rowBodyTpl : new Ext.XTemplate(
            '<p><b>Refering Physician Name:</b> {RefPhyName}</p><br>',
            '<p><b>Reading Physician Name:</b> {ReadPhyName}</p><br>',
            '<p><b>Performing Physician Name:</b> {PerPhyName}</p><br>',
            '<p><b>Other Information:</b> {AddInfo}</p>'
            //If performed status is complete direct a link to oviyum
        )
    }],
    collapsible: true,
    animCollapse: false
});
