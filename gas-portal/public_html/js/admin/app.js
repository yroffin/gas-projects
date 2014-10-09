'use strict';

/**
 * Declare app level module which depends on filters, and services
 */
angular.module('Admin', [
  'ngRoute',
  'ngResource',
  'ngSanitize',
  'Admin.filters',
  'Admin.services',
  'Admin.directives',
  'Admin.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MainCtrl'});
  $routeProvider.when('/menus', {templateUrl: 'partials/admin/menus.html', controller: 'MenuCtrl'});
  $routeProvider.when('/view3', {templateUrl: 'partials/partial3.html', controller: 'MainCtrl'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
