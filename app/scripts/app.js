'use strict';

/**
 * @ngdoc overview
 * @name blocChatApp
 * @description
 * # blocChatApp
 *
 * Main module of the application.
 */

angular
  .module('blocChatApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
  })
  .run(['$cookies', function($cookies) {

    if (!$cookies.blocChatCurrentUser || $cookies.blocChatCurrentUser === '' ) {
      angular.element('#myModal2').modal('show');
    }

  }])
  ;
