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
    'ui.router',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/rooms');
    var rooms = {
      name: 'rooms',  //mandatory
      url: '/rooms',
      template: '<div ui-view></div>'
    };

    var room = {
      name: 'rooms.room',
      url: '/:roomName',
      templateUrl: 'views/messages.html',
      parent: rooms
    };
    //var sharedViews = {
    //  'messages': {
    //    templateUrl: 'views/messages.html'
    //  },
    //  'roomList': {
    //    templateUrl: 'views/roomList.html'
    //  }
    //};

    $stateProvider
    .state(rooms)
    .state(room);

  });
