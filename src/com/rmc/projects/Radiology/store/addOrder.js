/**
 * Does the Post call for creating a new order
 */
Ext.define('com.rmc.projects.Radiology.store.addOrder', {
    extend: 'Ext.data.Store',
    xtype: 'addOrder',
    config: {
        model: 'com.rmc.projects.Radiology.model.addOrder',
        proxy: {
            type: 'rest',
            headers: com.rmc.projects.Radiology.controller.MainController.getBasicAuthHeaders(),
            url: HOST + '/ws/rest/v1/basicmodule/radiologystudy',
            reader: {
              type: 'json',
              rootProperty: 'results'
            },
            writer: {
              type: 'json'
            }
        }
    }
});