'use strict';

/**
 * @ngdoc function
 * @name contactsApp.controller:LogoutCtrl
 * @description
 * # LogoutCtrl
 * Controller of the contactsApp
 */
angular.module('contactsApp')
  .controller('LogoutCtrl', function ($location, $auth, toastr) {
	if (!$auth.isAuthenticated()) { return; }
    $auth.logout()
      .then(function() {
        toastr.info('You have been logged out');
        $location.path('/');
      });
  });
