'use strict';

/**
 * @ngdoc function
 * @name contactsApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the contactsApp
 */
angular.module('contactsApp')
  .controller('LoginCtrl', function ($scope, $location, $auth, toastr) {

    $scope.user = {
      username:'user1@domain.com',
      password:'S0mePassw0rd!'
    }

	$scope.login = function() {
      $auth.login($scope.user)
        .then(function() {
          toastr.success('You have successfully signed in!');
          $location.path('/');
        })
        .catch(function(error) {
          toastr.error(error.data.message, error.status);
        });
    };

  });
