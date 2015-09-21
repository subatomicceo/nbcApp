'use strict';

angular.module('nbcCommissary.searchView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/searchView', {
    templateUrl: 'searchView/searchView.html',
    controller: 'SearchViewCtrl'
  });
}])

.controller('SearchViewCtrl', ['$scope','$http', function($scope,$http) {
  
  // Get data from json file
  $http.get('assets/data/data_menu_items.json').
    success(function(data, status, headers, config) {
      $scope.results = data;
    }).
    error(function(data, status, headers, config) {
      // log error
    });

  // Hide dropdown
  $scope.hide = function(){
    $('.dropdown').removeClass('active');
  };

  // handle filter event
  $scope.filter = function(e){
  	var q = e.target.value; // set search query value
  	//define view variable menuItems as filtered results
    $scope.menuItems = _.filter($scope.results,function(item){
      return item.menuItem.toLowerCase().indexOf(q.toLowerCase()) != -1;
    });
    // if results passed from filter show dropdown
    if($scope.menuItems.length > 0){
      $('.dropdown').addClass('active');
    }
  };
}]);