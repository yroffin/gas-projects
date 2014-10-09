'use strict';

/* Directives */

angular.module('Admin.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);

angular.module('Admin.directives', []).
  directive('jsonEditor', ['$compile',function($compile) {
      return {
        restrict: 'E',
        scope: {
          data: '=',
          type: '='
        },
        controller: function($scope) {
            $scope.traverse = function(name, value, index, level) {
              var template = '';
              switch(jQuery.type(value)) {
                  case 'object':
                    /**
                     * Iterate on members :
                     * - String, Number
                     * - object
                     * - Array
                     */
                    for (var i in value){
                        var currentItem = value[i];
                        template += '<tr>\n';
                        for (var td=0;td<level;td++){
                            template += '<td />';
                        }
                        template += '<td id="folder-'+level+'-'+i+'">' + i + '</td>\n';
                        for (;td<4;td++){
                            template += '<td />';
                        }
                        template += '</tr>\n';
                        template += $scope.traverse(i, currentItem, -1, level+1);
                    }
                    return template;
                  case 'array':
                    /**
                     * Iterate on members :
                     * - String, Number
                     * - object
                     * - Array
                     */
                    for (var i in value){
                        var currentItem = value[i];
                        template += '<tr>\n';
                        for (var td=0;td<level;td++){
                            template += '<td />';
                        }
                        template += '<td id="folder-'+level+'-'+i+'">' + name + '[' + i + ']</td>\n';
                        for (;td<4;td++){
                            template += '<td />';
                        }
                        template += '</tr>\n';
                        template += $scope.traverse(i, currentItem, -1, level+1);
                    }
                    return template;
                  default:
                    /**
                     * simple object (native)
                     */
                    template += '<td ng-click="alert(1)" >' + value + '</td>\n';
                    return template;
              }
              return template;
            }
            /**
             * init the recursion
             * @param {type} jsonValue
             * @param {type} level
             * @returns {Array}
             */
            $scope.recursiveTraverse = function(jsonValue, level){
              var template = '<div>\n';
              template += '<table class="table table-striped table-bordered table-condensed">\n';
              template += $scope.traverse('root', jsonValue, -1, level);
              template += '</table>\n';
              template += '</div>\n';
              template += '<div>\n';
              template += 'xxx\n';
              template += '</div>\n';
              return template;
            }
        },
        link: function(scope, element, attributes) {
            console.info(scope);
            console.info(element, attributes);
            console.info(attributes);
            
            var template = scope.recursiveTraverse(scope.data, 0);
            console.info(template);
            var newElement = angular.element(template);
            $compile(newElement)(scope);
            element.replaceWith(newElement);
        }
      }
  }]);

