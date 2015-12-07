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

    // $scope.getProfile = function() {
    //   Account.getProfile()
    //     .then(function(response) {
    //       $scope.user = response;
    //     })
    //     .catch(function(response) {
    //       toastr.error(response.data.message, response.status);
    //     });
    // };

    // $scope.getProfile();

    $scope.user=[
          {
          "id": 1,
          "name": "Gonzalo", 
          "email": "gonzalo@email.com", 
          "phone1": "011 - 555 - 5555",
          "phone2": "+54 11 - 1234 - 5555", 
          "birthdate": "1976/12/03", 
          "address": "Av. Falsa 123", 
          "state": {
            "id": 1,
            "name": "Buenos Aires" 
          },
          "country": { 
            "id": 1,
            "name": "Argentina" 
          },
          "avatar": "/path/a/la/imagen.jpg"
          },
          {
          "id": 2,
          "name": "Federido", 
          "email": "federido@email.com", 
          "phone1": "011 - 555 - 5555",
          "phone2": "+54 11 - 1234 - 5555", 
          "birthdate": "1976/12/03", 
          "address": "Av. Falsa 123", 
          "state": {
            "id": 1,
            "name": "Buenos Aires" 
          },
          "country": { 
            "id": 1,
            "name": "Argentina" 
          },
          "avatar": "/path/a/la/imagen.jpg"
          },
          {
          "id": 3,
          "name": "Jose", 
          "email": "jose@email.com", 
          "phone1": "011 - 555 - 5555",
          "phone2": "+54 11 - 1234 - 5555", 
          "birthdate": "1976/12/03", 
          "address": "Av. Falsa 123", 
          "state": {
            "id": 1,
            "name": "Tigre" 
          },
          "country": { 
            "id": 1,
            "name": "Argentina" 
          },
          "avatar": "/path/a/la/imagen.jpg"
          },
          {
          "id": 4,
          "name": "Esteban", 
          "email": "algun@email.com", 
          "phone1": "011 - 555 - 5555",
          "phone2": "+54 11 - 1234 - 5555", 
          "birthdate": "1976/12/03", 
          "address": "Av. Falsa 123", 
          "state": {
            "id": 1,
            "name": "Buenos Aires" 
          },
          "country": { 
            "id": 1,
            "name": "Argentina" 
          },
          "avatar": "/path/a/la/imagen.jpg"
          },
          {
          "id": 5,
          "name": "Daniel", 
          "email": "algun@email.com", 
          "phone1": "+54 11 - 1234 - 5555",
          "phone2": "", 
          "birthdate": "1976/12/03", 
          "address": "Av. Falsa 123", 
          "state": {
            "id": 1,
            "name": "Buenos Aires" 
          },
          "country": { 
            "id": 1,
            "name": "Argentina" 
          },
          "avatar": "/path/a/la/imagen.jpg"
          },
          {
          "id": 6,
          "name": "Nicolas", 
          "email": "algun@email.com", 
          "phone1": "011 - 555 - 5555",
          "birthdate": "1976/12/03", 
          "address": "Av. Falsa 123", 
          "state": {
            "id": 1,
            "name": "Buenos Aires" 
          },
          "country": { 
            "id": 1,
            "name": "Argentina" 
          },
          "avatar": "/path/a/la/imagen.jpg"
          }];

  });
