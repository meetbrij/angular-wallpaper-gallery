'use strict';

// Declare app level module which depends on views, and components
angular.module('onlineTemplateStore', [
  'ngRoute',
  'onlineTemplateStore.view1',
  'onlineTemplateStore.view2',
  'onlineTemplateStore.templates'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/templates'});
}]);
