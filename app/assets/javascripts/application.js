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
//= require turbolinks
//= require_tree .

var groceries = angular.module('groceries', ['ngResource']);

// Cross Site Request Forgery token is required by Rails for AJAX requests.
app.config(function ($httpProvider) {
  // CSRF
  $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
});

groceries.factory('', function($resource) {
  $resource();
});

groceries.controller('GroceriesCtrl', function($scope){
  $scope.addGrocery = function(e) {

  };

});
