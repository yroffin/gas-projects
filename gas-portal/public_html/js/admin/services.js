'use strict';

/* Services */

angular.module('Admin.services', ['ngResource'],
        function($provide) {
            var googleAppsService = 'https://script.google.com/macros/s/AKfycbwxNmqEIyrcWGCy_56UOBqHa3t-9_tf4kRbR6cO0OlZFuoJAJY/exec';

            console.info('Register GoogleAppsService services');
            $provide.factory('GoogleAppsService', function($resource, $routeParams, $location) {
                /**
                 * params injection
                 * @type @exp;$routeParams@pro;swapId
                 */
                return $resource('', {}, {
                    googleAppsService: {
                        method: 'JSONP',
                        url: googleAppsService,
                        params: {
                            callback:'JSON_CALLBACK'
                        },
                        isArray: false,
                        cache: false
                    },
                    getRootFolder: {
                        method: 'JSONP',
                        url: googleAppsService,
                        params: {
                            callback:'JSON_CALLBACK',
                            operation: 'getRootFolder'
                        },
                        isArray: false,
                        cache: false
                    },
                    getChildren: {
                        method: 'JSONP',
                        url: googleAppsService,
                        params: {
                            callback:'JSON_CALLBACK',
                            operation: 'getChildren'
                        },
                        isArray: false,
                        cache: false
                    },
                    getFiles: {
                        method: 'JSONP',
                        url: googleAppsService,
                        params: {
                            callback:'JSON_CALLBACK',
                            operation: 'getFiles'
                        },
                        isArray: false,
                        cache: false
                    },
                    getDocumentAsText: {
                        method: 'JSONP',
                        url: googleAppsService,
                        params: {
                            callback:'JSON_CALLBACK',
                            operation: 'getDocumentAsText'
                        },
                        isArray: false,
                        cache: false
                    },
                    getDocumentAsBlob: {
                        method: 'JSONP',
                        url: googleAppsService,
                        params: {
                            callback:'JSON_CALLBACK',
                            operation: 'getDocumentAsBlob'
                        },
                        isArray: false,
                        cache: false
                    },
                    getTemplate: {
                        method: 'JSONP',
                        url: googleAppsService,
                        params: {
                            callback:'JSON_CALLBACK',
                            operation: 'getTemplate'
                        },
                        isArray: false,
                        cache: false
                    },
                    connect: {
                        url: 'https://www.googleapis.com/auth/plus.login', 
                        params: {
                            
                        }, 
                        method: 'GET', 
                        isArray: false, 
                        cache: false
                    }
                });
            });
        }).value('version', '0.1');
