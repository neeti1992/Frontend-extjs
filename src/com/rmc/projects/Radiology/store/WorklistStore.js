Ext.define('com.rmc.projects.Radiology.store.WorklistStore', {
    extend: 'Ext.data.Store',
    model: 'com.rmc.projects.Radiology.model.WorklistModel',
    storeId: 'WorklistStore',
    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'rest'
        url: HOST + '/ws/rest/v1/basicmodule/radiologystudy',                                          //after backend is done
        headers: com.rmc.projects.Radiology.controller.MainController.getBasicAuthHeaders(),
        reader: {
            type:'json',
            root: 'results',
            model: 'WorklistModel'         

                     // temporoary solution
                    /*type: 'ajax',
                    url: 'resources/data/worklist.xml',
                    // specify a XmlReader (coincides with the XML format of the returned data)
                    reader: {
                        type: 'xml',
                        // records will have a 'worklist' tag
                        record: 'worklist',
                        root: 'catalog'
                    }*/
    },
});
