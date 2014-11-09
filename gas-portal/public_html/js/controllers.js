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

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('BootstrapCtrl', ['$rootScope','$window', 'gasPublicServices', function($scope, $window, gasPublicServices) {
    /**
     * bootstrap
     */
    $scope.load = function() {
        $scope.theme="b";
        $scope.inventoryItem = {href:''};
        console.log("Template loading ...");
        gasPublicServices.getInfo({message: {}},
        function(data) {
            console.log(data);
            $scope.auth = data;
            console.log("getInfo loaded ...");
        },function(failure) {
            $window.location.href = failure.config.url;
        });
    }
    $scope.loadInventory = function() {
        console.log("getAllInventory loading ...");
        gasPublicServices.getAllInventory({message: {}},
        function(data) {
            console.log(data);
            $scope.inventory = data;
            console.log("getAllInventory loaded ...");
            setTimeout(function(){
                $("#inventorylist").listview("refresh");
            },100);
        },function(failure) {
            $window.location.href = failure.config.url;
        });
    }
    $scope.selectItem = function(item) {
        console.log("selectItem");
        $scope.inventoryItem = item;
        console.log(item);
    }
}])
;