'use strict';

/**
 * @ngdoc function
 * @name blocChatApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the blocChatApp
 */
angular.module('blocChatApp')
  .controller('MainCtrl', function ($scope, $state, $stateParams) {
    $scope.rooms = [
      {name:'Room1', messages: [{name: 'Phil', message: 'Message 1', time: '1:45 pm'}, {name: 'Patrick', message: 'Message 2', time: '2:19 pm'}]},
      {name:'Room2', messages: []},
      {name:'Room3', messages: []}
    ];
    $scope.getMessagesForRoom = function () {
      return $scope.rooms[0].messages;
    };
    $scope.addRoom = function (newRoomName) {
      $scope.rooms.push({name: newRoomName, messages: []});
      $scope.newRoomName = '';
    };
  });
