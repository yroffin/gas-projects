/* 
 * Copyright 2014 Ille et zick.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

/* Services */

var gasPublicServices = 'https://script.google.com/macros/s/'+gasScriptId+'/exec';

var illeEtZickServices = angular.module('illeEtZick.services', ['ngResource']);

illeEtZickServices.factory('gasPublicServices', ['$resource', 
function ($resource) {
    return $resource('', {}, {
                   getInfo: {
                        method: 'JSONP',
                        url: gasPublicServices,
                        params: {
                            callback:'JSON_CALLBACK',
                            operation: 'getInfo'
                        },
                        isArray: false,
                        cache: false
                    },
                   findAllGroups: {
                        method: 'JSONP',
                        url: gasPublicServices,
                        params: {
                            callback:'JSON_CALLBACK',
                            operation: 'findAllGroups'
                        },
                        isArray: true,
                        cache: false
                   },
                   getAllInventory: {
                        method: 'JSONP',
                        url: gasPublicServices,
                        params: {
                            callback:'JSON_CALLBACK',
                            operation: 'getAllInventory'
                        },
                        isArray: true,
                        cache: false
                    }
    })}
]);

illeEtZickServices.factory('googleApi', ['$resource', 
function ($resource) {
    return $resource('', {}, {
                   getInfo: {
                        method: 'JSONP',
                        url: gasPublicServices,
                        params: {
                            callback:'JSON_CALLBACK',
                            operation: 'getInfo'
                        },
                        isArray: false,
                        cache: false
                   },
                   findAllGroups: {
                        method: 'JSONP',
                        url: gasPublicServices,
                        params: {
                            callback:'JSON_CALLBACK',
                            operation: 'findAllGroups'
                        },
                        isArray: false,
                        cache: false
                   },
                   getAllInventory: {
                        method: 'JSONP',
                        url: gasPublicServices,
                        params: {
                            callback:'JSON_CALLBACK',
                            operation: 'getAllInventory'
                        },
                        isArray: true,
                        cache: false
                   }
    })}
]);
