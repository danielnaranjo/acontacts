'use strict';

/**
 * @ngdoc function
 * @name contactsApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the contactsApp
 */
angular.module('contactsApp')
  .controller('UserCtrl', function ($scope, $location, $http) {
    
    $scope.user = {};

    $scope.getUser = function(){
		$http({
			method:'GET',
			url:'https://contacts.theamalgama.com',
			data:''
		})        
		.success(function(data) {
            $scope.feed = data.response;
        })
        .error(function(){
			console.log('Error');
        });
    };

    $scope.addUser = function(item){
      $scope.user.push(item);
      $scope.newItem = null;
      $location.path('/profile');
    };

  });
