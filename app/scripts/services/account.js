'use strict';

/**
 * @ngdoc service
 * @name contactsApp.Account
 * @description
 * # Account
 * Factory in the contactsApp.
 */
angular.module('contactsApp')
  .factory('Account', function ($http) {
    return {
      getProfile: function() {
        return $http.get('/api/me');
      }
    };
  });
