'use strict';

/**
 * @ngdoc function
 * @name blocChatApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the blocChatApp
 */
angular.module('blocChatApp')
  .controller('MainCtrl', function ($scope, $cookies, $window, $firebaseArray) {
    var ref = new $window.Firebase('https://yochat.firebaseio.com/rooms/');
  // create an AngularFire reference to the data
  $scope.rooms = $firebaseArray(ref);
  // download the data into a local array


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

    $scope.addRoom = function (newRoomName) {
      $scope.rooms.$add({name: newRoomName});

      $scope.newRoomName = '';
    };

    //MESSAGES
    $scope.getMessagesForRoom = function (room) {
      $scope.currentRoom = room;
      $scope.currentRoomName = room.name;
      var currentRoomMessagesRef = new $window.Firebase($scope.rooms.$ref() + '/' + room.$id + '/messages/');
      $scope.roomMessages = $firebaseArray(currentRoomMessagesRef);
    };

    $scope.addMessageToRoom = function (messageText) {
      var nickname = $cookies.blocChatCurrentUser;
      var time = $window.moment().format('h:mm a');

      $scope.roomMessages.$add({name: nickname, message: messageText, time: time});
      $scope.newMessageText = '';
    };
  });
