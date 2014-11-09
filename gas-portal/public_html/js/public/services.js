/* 
 * Copyright 2014 Yannick Roffin.
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

var gasPrivateServices = 'https://script.google.com/macros/s/AKfycbw2Q23RjpRHNHYGEcMzWYKhs7LwAHQKYHLzXJhTJRoDsptHNcM/exec';
var gasPublicServices = 'https://script.google.com/macros/s/AKfycbw2Q23RjpRHNHYGEcMzWYKhs7LwAHQKYHLzXJhTJRoDsptHNcM/exec';
var module1 = angular.module('myApp.services', ['ngResource']);
        
module1.factory('gasPrivateServices', ['$resource', function ($resource) {
    var Todo = $resource('', {}, {
                   getInfo: {
                        method: 'JSONP',
                        url: gasPublicServices,
                        params: {
                            callback:'JSON_CALLBACK',
                            operation: 'getInfo'
                        },
                        isArray: false,
                        cache: false
                    }
    });
    return Todo;
}]);

module1.factory('gasPublicServices', ['$resource', function ($resource) {
    var Todo = $resource('', {}, {
                   getInfo: {
                        method: 'JSONP',
                        url: gasPublicServices,
                        params: {
                            callback:'JSON_CALLBACK',
                            operation: 'getInfo'
                        },
                        isArray: false,
                        cache: false
                    }
    });
    return Todo;
}]);

/* Services */
angular.module('myApp.servicess', ['ngResource'],
        function($provide) {
            return;
            var gasPrivateServices = 'https://script.google.com/macros/s/AKfycbw2Q23RjpRHNHYGEcMzWYKhs7LwAHQKYHLzXJhTJRoDsptHNcM/exec';
            var gasPublicServices = 'https://script.google.com/macros/s/AKfycbw2Q23RjpRHNHYGEcMzWYKhs7LwAHQKYHLzXJhTJRoDsptHNcM/exec';

            /**
             * swap provider
             */
            console.info('Register gasPrivateServices ' + gasPrivateServices);
            $provide.factory('gasPrivateServices', function($resource, $location) {
                /**
                 * params injection
                 * @type @exp;$routeParams@pro;swapId
                 */
                return $resource('', {}, {
                    getTemplate: {
                        method: 'JSONPP',
                        url: gasPrivateServices,
                        params: {
                            callback:'JSON_CALLBACK',
                            operation: 'getTemplate'
                        },
                        isArray: false,
                        cache: false
                    }
                });
            });
            console.info('Register gasPublicServices ' + gasPublicServices);
            $provide.factory('gasPublicServices', function($resource, $location) {
                /**
                 * params injection
                 * @type @exp;$routeParams@pro;swapId
                 */
                return $resource('', {}, {
                    getTemplate: {
                        method: 'JSONP',
                        url: gasPublicServices,
                        params: {
                            callback:'JSON_CALLBACK',
                            operation: 'getTemplate'
                        },
                        isArray: false,
                        cache: false
                    },
                    getInfo: {
                        method: 'JSONP',
                        url: gasPublicServices,
                        params: {
                            callback:'JSON_CALLBACK',
                            operation: 'getInfo'
                        },
                        isArray: false,
                        cache: false
                    }
                });
            });
        }).value('version', '0.1');
