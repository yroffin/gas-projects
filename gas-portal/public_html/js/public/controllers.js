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
   .controller('MainCtrl', ['$scope', '$http', 'GooglePlus', function($scope, $http, GooglePlus) {
    /**
     * load swap
     */
    $scope.auth = function() {
        console.log("auth");
        GooglePlus.auth({client_id:'267432713557-itjcm98bq9o6dpb57n4njms6ku2t78ob.apps.googleusercontent.com'},function(data) {
            console.log("auth");
            console.log(data);
          });
    }
    $scope.revoke = function() {
        console.log("revoke");
        GooglePlus.revoke({token:$scope.Oauth2Session.access_token},function(data) {
            console.log("revoke");
            console.log(data);
          });
    }
    $scope.logout = function() {
        console.log("logout");
        GooglePlus.logout({},function(data) {
            console.log("logout");
            console.log(data);
          });
    }
  }])
  .controller('BootstrapCtrl', ['$rootScope','$window', 'gasPublicServices', function($scope, $window, gasPublicServices) {
    /**
     * bootstrap
     */
    $scope.load = function() {
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
}])
  .controller('indexCtrl', ['$rootScope','$location', 'gasPublicServices', function($scope, $location, gasPublicServices) {
    /**
     * load swap
     */
    $scope.test = function() {
        if($scope.googleDrive) return;
        gasPublicServices.getRootFolder({message: {}},
        function(data) {
            $scope.googleDrive = data;
            console.log("scope");
        });
    }
    $scope.load = function(folder) {
        /**
         * load only one time
         */
        if(folder.loaded != undefined) return;
        gasPublicServices.getChildren({message: {folder: folder}},
        function(data) {
            console.log(data);
            folder.children = data.children;
            folder.loaded = true;
        });
    }
    $scope.show = function(folder) {
        /**
         * show content
         */
        gasPublicServices.getFiles({message: {folder: folder}},
        function(data) {
            console.log(data);
            $scope.googleDriveDetail = data;
        });
    }
    $scope.load = function() {
        /**
         * show content
         */
        console.log("load");
        gasPublicServices.getDocumentAsText({message: {id: '1TfvtWZtyYI6idTvkOw34-_quXwgk_Ee4Kv8K-p_al4I'}},
        function(data) {
            var converter = new Markdown.Converter();
            $scope.documentAsText = converter.makeHtml(data.body);
        });
    }
  }])
  .controller('MyCtrl2', ['$rootScope', '$location', 'gasPublicServices', function($scope, $location, gasPublicServices) {
    /**
     * load swap
     */
    $scope.svg = function() {
        if($scope.graph) return;
        $scope.graph = {height: 800, width:600};
        $scope.circles = [
            {'x': 15, 'y': 20, 'r':30, 'dragged':false, fill:'blue', stroke:'black'},
            {'x': 35, 'y': 60, 'r':20, 'dragged':false, fill:'blue', stroke:'black'},
            {'x': 55, 'y': 10, 'r':40, 'dragged':false, fill:'blue', stroke:'black'},
        ]
    }
    $scope.onmousedown = function(circle) {
        circle.dragged=true;
        circle.fill='red';
        circle.stroke='red';
    }
    $scope.onmouseup = function(circle) {
        circle.dragged=false;
        circle.fill='blue';
        circle.stroke='black';
    }
    $scope.onmousemove = function($event,circle) {
        if(!circle.dragged) return;
        circle.x=$event.offsetX;
        circle.y=$event.offsetY;
    }
  }])
  .controller('MyCtrlPartial1', [function() {

  }])
  ;