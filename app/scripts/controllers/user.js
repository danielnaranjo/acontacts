'use strict';

/**
 * @ngdoc function
 * @name contactsApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the contactsApp
 */
angular.module('contactsApp')
  .controller('UserCtrl', function ($scope, $location, $http, CONFIG) {
    
    $scope.user = {};

    $scope.getUsers = function(){
		$http({
			method:'GET',
			url:CONFIG.AURL+'/users/'+user_id+'/contacts'
		})        
		.success(function(data) {
            $scope.feed = data.response;
        })
        .error(function(){
			console.log('Error');
        });
    };

    $scope.updateUser = function(){
		$http({
			method:'PATCH',
			url:CONFIG.AURL+'/users/'+user_id+'/contacts',
			data:data:$.param($scope.user),
		})        
		.success(function(data) {
            $scope.feed = data.response;
        })
        .error(function(){
			console.log('Error');
        });
    };

    $scope.getUser = function(){
		$http({
			method:'GET',
			url:CONFIG.AURL+'/users/'+user_id+'/contacts/'+contact_id,
			data:data:$.param($scope.user),
		})        
		.success(function(data) {
            $scope.feed = data.response;
        })
        .error(function(){
			console.log('Error');
        });
    };

    $scope.removeUser = function(index){
        $scope.user.splice(index, 1);
        $http({
            method:'DELETE',
            url:CONFIG.AURL+'/users/'+user_id+'/contacts/'+contact_id,
            data:data:$.param($scope.user),
        })        
        .success(function(data) {
            $scope.feed = data.response;
        })
        .error(function(){
            console.log('Error');
        });
    }

    $scope.addUser = function(){
		$http({
			method:'POST',
			url:'/users/'+user_id+'/contacts',
			data:data:$.param($scope.user),
		})        
		.success(function(data) {
            $scope.feed = data.response;
        })
        .error(function(){
			console.log('Error');
        });
      $location.path('/profile');
    };

  });
