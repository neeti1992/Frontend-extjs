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
 * This file lists 
 */
Ext.define('com.rmc.projects.Radiology.store.Priority', {
    
    // --------------------------------------
    // Properties
    // --------------------------------------
    extend: 'Ext.data.ArrayStore',
    model : 'com.rmc.projects.Radiology.model.Priority',
    storeId: 'Priority',
    data: [
        ['STAT'],
        ['HIGH'],
        ['MEDIUM'],
        ['ROUTINE'],
        ['LOW']
    ]
});
