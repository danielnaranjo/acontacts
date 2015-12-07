'use strict';

/**
 * @ngdoc function
 * @name contactsApp.controller:NavbarCtrl
 * @description
 * # NavbarCtrl
 * Controller of the contactsApp
 */
angular.module('contactsApp')
  .controller('NavbarCtrl', function ($scope, $auth) {
    $scope.isAuthenticated = function() {
      return $auth.isAuthenticated();
    };
  });
