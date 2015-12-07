'use strict';

/**
 * @ngdoc function
 * @name contactsApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the contactsApp
 */
angular.module('contactsApp')
  .controller('ProfileCtrl', function ($scope, $auth, toastr, Account) {

    $scope.getProfile = function() {
      Account.getProfile()
        .then(function(response) {
          $scope.user = response.data;
        })
        .catch(function(response) {
          toastr.error(response.data.message, response.status);
        });
    };

    $scope.getProfile();

  });
