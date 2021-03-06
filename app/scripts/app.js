'use strict';

/**
 * @ngdoc overview
 * @name contactsApp
 * @description
 * # contactsApp
 *
 * Main module of the application.
 */
angular
  .module('contactsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'satellizer',
    'toastr'
  ])

  .constant('CONFIG', {
    'AURL':'https://contacts.theamalgama.com/v1'
  })

  .config(function ($stateProvider, $urlRouterProvider, $authProvider) {

    $stateProvider
      .state('home', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        url: '/'
      })
      .state('about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        url: '/about'
      })
      .state('login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        url: '/login',
        resolve: {
          skipIfLoggedIn: skipIfLoggedIn
        }
      })
      .state('logout', {
        template: null,
        controller: 'LogoutCtrl',
        url: '/logout'
      })
      .state('user', {
        templateUrl: 'views/user.html',
        controller: 'UserCtrl',
        url: '/user/:id',
        resolve: {
          // Uncommet when API access is done!
          loginRequired: loginRequired
          // For test propuse :)
          // loginRequired: skipIfLoggedIn
        }
      })
      .state('profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl',
        url: '/profile',
        resolve: {
          // Uncommet when API access is done!
          loginRequired: loginRequired
          // For test propuse :)
          // loginRequired: skipIfLoggedIn
        }
      });



      //  Based on Satellizer.
      // Generic OAuth 2.0
      $authProvider.oauth2({
        name: null,
        url: 'https://contacts.theamalgama.com',
        clientId: null,
        redirectUri: '/oauth/token',
        authorizationEndpoint: '/oauth/token',
        defaultUrlParams: ['response_type', 'client_id', 'redirect_uri'],
        requiredUrlParams: null,
        optionalUrlParams: null,
        scope: null,
        scopePrefix: null,
        scopeDelimiter: null,
        state: null,
        type: null,
        popupOptions: null,
        responseType: 'code',
        responseParams: {
          code: 'code',
          clientId: 'clientId',
          redirectUri: 'redirectUri'
        }
      });

      $urlRouterProvider.otherwise('/');

      function skipIfLoggedIn($q, $auth) {
        var deferred = $q.defer();
        if ($auth.isAuthenticated()) {
          deferred.reject();
        } else {
          deferred.resolve();
        }
        return deferred.promise;
      }

      function loginRequired($q, $location, $auth) {
        var deferred = $q.defer();
        if ($auth.isAuthenticated()) {
          deferred.resolve();
        } else {
          $location.path('/login');
        }
        return deferred.promise;
      }

  });
