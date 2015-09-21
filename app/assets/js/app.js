'use strict';

// Declare app level module which depends on views, and components
angular.module('nbcCommissary', [
  'ngRoute',
  'nbcCommissary.searchView',
  'nbcCommissary.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/searchView'});
}]);
