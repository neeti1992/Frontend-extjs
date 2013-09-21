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
 *  Viewport allows loading of different views on it
 */
var RADIOLOGY_PAGES = {
    HOME: {
        value: 0,
        name: "Home"
    }
}; 

Ext.define('com.rmc.projects.Radiology.view.MainViewUI', {
    
    // --------------------------------------
    // Properties
    // --------------------------------------
    extend: 'Ext.container.Viewport',
    requires: ['com.rmc.projects.Radiology.view.Home'],
   layout: {
        align: 'stretch',
        pack: 'center',
        type: 'hbox'
    },

    initComponent: function () {
        this.items = {
            dockedItems: [{
                xtype: 'toolbar',
                height: 40,
                dock: 'top',
                items: [{
                    xtype: 'image',
                    height: 35,
                    width: 40,
                    src: 'resources/img/icon.png'
                }, {
                    xtype: 'tbfill'
                },{
                    xtype: 'button',
                    height: 35,
                    width: 200,
                    text: 'Radiology Home Page',
                    handler: function () {
                        var l = Ext.getCmp('mainArea').getLayout();
                        l.setActiveItem(RADIOLOGY_PAGES.HOME.value);
                    }
                }, ]
            },{
                dock: 'bottom',
                xtype: 'toolbar',
                height: 40,
                items: [{
                    xtype: 'tbspacer',
                    width: 450
                }, {
                    xtype: 'image',
                    height: 35,
                    width: 40,
                    src: 'resources/img/icon.png'
                }]
            }],
            width: 960,
            id: 'mainArea',
            activeItem: 0,
            layout: {
                type: 'card'
            },
            margin: '2 0 2 0',
            region: 'center',
            items: [{
                xtype: 'Home'
            }, {
                xtype: 'addOrder'
            }]
        };
        this.callParent();
    }   
});