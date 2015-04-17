'use strict';

/**
 * @ngdoc function
 * @name blocChatApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the blocChatApp
 */
angular.module('blocChatApp')
  .controller('MainCtrl', function ($scope, $cookies) {

    //USERS
    $scope.addUser = function (nickname) {
      console.log(nickname);
      if (nickname === undefined) {
        angular.element('#myModal2').modal({backdrop:'static'});
        angular.element('#myModal2').modal('show');
      } else {
        $cookies.blocChatCurrentUser = nickname;
        $scope.newNickname = '';
        angular.element('#myModal2').modal('hide');
      }
    };

    //ROOMS
    $scope.rooms = [
      {name:'Room1', messages: [{name: 'Phil', message: 'Message 1', time: '1:45 pm'}, {name: 'Patrick', message: 'Message 2', time: '2:19 pm'}]},
      {name:'Room2', messages: []},
      {name:'Room3', messages: []}
    ];

    $scope.addRoom = function (newRoomName) {
      $scope.rooms.push({name: newRoomName, messages: []});
      $scope.newRoomName = '';
    };

    //MESSAGES
    $scope.getMessagesForRoom = function (roomName) {
      console.log(roomName);
      if (roomName === 'Room1') {
        $scope.roomMessages = $scope.rooms[0].messages;
      } else {
        $scope.roomMessages = $scope.rooms[1].messages;
      }
    };
  });
