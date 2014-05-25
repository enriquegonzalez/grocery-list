// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require angular
//= require angular-resource
//= require jquery
//= require jquery_ujs
//= require foundation
//= require turbolinks
//= require_tree .

// MODULE
var groceriesApp = angular.module('groceriesApp', ['ngResource']);

// Cross Site Request Forgery token is required by Rails for AJAX requests.
groceriesApp.config(['$httpProvider', function ($httpProvider) {
  // CSRF
  $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
}]);


// FACTORY
groceriesApp.factory('Grocery', ['$resource', function ($resource) {
  alert('im here at the factory');
  return $resource("/groceries/:id.json", {id: '@id'}, {
    update: {
      method: 'PUT'
    }
  });
}]);



// CONTROLLER
groceriesApp.controller('GroceriesCtrl', ['$scope', 'Grocery', function ($scope, Grocery){

  // Get the Groceries
  $scope.groceries = Grocery.query();
  console.log($scope.groceries);

  // Add Grocery Item
  $scope.addGrocery = function(e) {
    e.preventDefault();
    grocery = new Grocery({name: $scope.newGrocery, healthy: $scope.isHealthy});
    grocery.$save();
    // prepends the new array to the old one, it's faster than unshift, which has to shift everything over.
    $scope.groceries = [grocery].concat($scope.groceries);
    $scope.newGrocery = "";
  };

  $scope.deleteGrocery = function(e) {
    e.preventDefault();
  };

}]);

$(function(){ $(document).foundation(); });
