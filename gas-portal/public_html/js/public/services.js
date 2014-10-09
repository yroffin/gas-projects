'use strict';

/* Services */

angular.module('myApp.services', ['ngResource'],
        function($provide) {
            var gasPrivateServices = 'https://script.google.com/macros/s/AKfycbwxNmqEIyrcWGCy_56UOBqHa3t-9_tf4kRbR6cO0OlZFuoJAJY/exec';
            var gasPublicServices = 'https://script.google.com/macros/s/AKfycbwxNmqEIyrcWGCy_56UOBqHa3t-9_tf4kRbR6cO0OlZFuoJAJY/exec';

            /**
             * swap provider
             */
            console.info('Register google services ' + gasPrivateServices);
            $provide.factory('GooglePlus', function($resource) {
                return $resource('', {}, {
                    auth: {
                        method: 'JSONP',
                        url: 'https://accounts.google.com/o/oauth2/auth',
                        params : {
                            callback:'JSON_CALLBACK',
                            scope:'https://www.googleapis.com/auth/plus.login',
                            request_visible_actions:'http://schemas.google.com/AddActivity',
                            cookie_policy:'single_host_origin',
                            immediate:'true',
                            response_type:'code token id_token gsession',
                            authuser:0,
                            redirect_uri: 'postmessage',
                            include_granted_scopes:'true'
                        },
                        isArray: false,
                        cache: false
                    },
                    revoke: {
                        method: 'JSONP',
                        url: 'https://accounts.google.com/o/oauth2/revoke',
                        params : {
                            callback:'JSON_CALLBACK'
                        },
                        isArray: false,
                        cache: false
                    },
                    logout: {
                        method: 'JSONP',
                        url: 'https://accounts.google.com/Logout',
                        params : {
                            callback:'JSON_CALLBACK'
                        },
                        isArray: false,
                        cache: false
                    }
                });
            });
            console.info('Register gasPrivateServices ' + gasPrivateServices);
            $provide.factory('gasPrivateServices', function($resource, $routeParams, $location) {
                /**
                 * params injection
                 * @type @exp;$routeParams@pro;swapId
                 */
                return $resource('', {}, {
                    gasPrivateServices: {
                        method: 'JSONP',
                        url: gasPrivateServices,
                        params: {
                            callback:'JSON_CALLBACK'
                        },
                        isArray: false,
                        cache: false
                    },
                    getRootFolder: {
                        method: 'JSONP',
                        url: gasPrivateServices,
                        params: {
                            callback:'JSON_CALLBACK',
                            operation: 'getRootFolder'
                        },
                        isArray: false,
                        cache: false
                    },
                    getChildren: {
                        method: 'JSONP',
                        url: gasPrivateServices,
                        params: {
                            callback:'JSON_CALLBACK',
                            operation: 'getChildren'
                        },
                        isArray: false,
                        cache: false
                    },
                    getFiles: {
                        method: 'JSONP',
                        url: gasPrivateServices,
                        params: {
                            callback:'JSON_CALLBACK',
                            operation: 'getFiles'
                        },
                        isArray: false,
                        cache: false
                    },
                    getDocumentAsText: {
                        method: 'JSONP',
                        url: gasPrivateServices,
                        params: {
                            callback:'JSON_CALLBACK',
                            operation: 'getDocumentAsText'
                        },
                        isArray: false,
                        cache: false
                    },
                    getDocumentAsBlob: {
                        method: 'JSONP',
                        url: gasPrivateServices,
                        params: {
                            callback:'JSON_CALLBACK',
                            operation: 'getDocumentAsBlob'
                        },
                        isArray: false,
                        cache: false
                    },
                    getTemplate: {
                        method: 'JSONPP',
                        url: gasPrivateServices,
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
            console.info('Register gasPublicServices ' + gasPublicServices);
            $provide.factory('gasPublicServices', function($resource, $routeParams, $location) {
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
                    }
                });
            });
        }).value('version', '0.1');
