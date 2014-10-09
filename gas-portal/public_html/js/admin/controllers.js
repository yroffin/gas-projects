'use strict';

/* Controllers */

angular.module('Admin.controllers', [])
  .controller('MainCtrl', ['$rootScope', '$http', 'GoogleAppsService', function($scope, $http, GoogleAppsService) {
  }])
  .controller('MenuCtrl', ['$rootScope', '$http', 'GoogleAppsService', function($scope, $http, GoogleAppsService) {
  }])
  .controller('JsoneditViewCtrl', ['$rootScope', '$filter', function($scope, $filter) {
    // example JSON
    $scope.jsonData = {
        Name: "Joe", "Last Name": "Miller", Tabs: [0, "dreaming", [0, "dreaming", [0, "dreaming"]]], Address: {Street: "Neverland 42", Hobbies: ["doing stuff", 2]}, Hobbies: ["doing stuff", "dreaming"]
    };

    $scope.$watch('jsonData', function(json) {
        $scope.jsonString = $filter('json')(json);
    }, true);
    $scope.$watch('jsonString', function(json) {
        $scope.jsonData = JSON.parse(json);
    }, true);
  }])
  .controller('BootstrapCtrl', ['$rootScope','GoogleAppsService', function($scope, GoogleAppsService) {
    /**
     * bootstrap
     */
    $scope.load = function() {
        console.log("Template loading ...");
        GoogleAppsService.getTemplate({message: {name:'content'}},
        function(data) {
            console.log(data);
            $scope.template = data;
            console.log("Template loaded ...");
        });
    }
  }])
  ;