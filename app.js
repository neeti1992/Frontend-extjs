<!--
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
 * This file lists all the models, views, controllers & stores. Launch function is used to call the viewport
 */                           
-->

// --------------------------------------
// Classpaths
//      Now any code that references "com.blah.foo" will look 
//      at the physical location "src.com.blah.foo"
// --------------------------------------
Ext.Loader.setConfig({
        enabled	: true,
          paths	: {
            "com"	: "src/com",
            "Ext.ux": "ux"
       }
});


// --------------------------------------
// Main Application
// --------------------------------------
Ext.application ({
        
        // --------------------------------------
        // Properties
        // --------------------------------------
        name: 'Radiology',
        //models: ['com.rmc.projects.Radiology.model.MessageModel'],
       // autoCreateViewport : false,

        //AFTER 'LAUNCH' THE CODE IN THE CONTROLLER IS FIRED
        //THE UI AND OTHER IMPORTANT THINGS HAPPEN WITHIN THE FOLLOWING CLASS
        //SIMPLY SETTING THIS PROPERY HERE WIRES-UP AND RUNS THE CONTROLLER
       controllers: [
             'com.rmc.projects.Radiology.controller.MainController'
        ],
        
        views : ['com.rmc.projects.Radiology.view.MainView', 'com.rmc.projects.Radiology.view.MainViewUI', 'com.rmc.projects.Radiology.view.Home',
         'com.rmc.projects.Radiology.view.worklist','com.rmc.projects.Radiology.view.worklistGrid', 'com.rmc.projects.Radiology.view.worklistNavBar',
         'com.rmc.projects.Radiology.view.addOrder',
        ],
        // --------------------------------------
        // Properties
        // --------------------------------------
        launch: function()
        {
               // Ext.QuickTips.init();
        //TRACE
        console.log ("Radiology.launch()");

                //SHOW DIALOG BOX (OPTIONAL)
               // Ext.MessageBox.alert('Radiology','Close this MessageBox and click "Load Message" or "Clear Message". That is it!');
                   
                //NEXT?
                //See the MainController.js code from above

                
        }
});


