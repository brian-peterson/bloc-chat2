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
    var ref = new Firebase('https://yochat.firebaseio.com/rooms/');
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

    //ROOMS
    // $scope.rooms = [
    //   {name:'Room1', messages: [{name: 'Phil', message: 'Message 1', time: '1:45 pm'}, {name: 'Patrick', message: 'Message 2', time: '2:19 pm'}]},
    //   {name:'Room2', messages: []},
    //   {name:'Room3', messages: []}
    // ];

    $scope.addRoom = function (newRoomName) {
      var messagesRef = ref.child('messages');
      $scope.rooms.$add({name: newRoomName, messages: $firebaseArray(messagesRef)});
      $scope.newRoomName = '';
    };

    //MESSAGES
    $scope.getMessagesForRoom = function (room) {
      $scope.currentRoom = room;
      $scope.currentRoomName = room.name;
      $scope.roomMessages = $scope.rooms.$getRecord(room.$id).messages;
      console.log($scope.roomMessages);
      
      // if (roomName === 'Room1') {
      //   $scope.roomMessages = $scope.rooms[0].messages;
      // } else {
      //   $scope.roomMessages = $scope.rooms[1].messages;
      // }
    };

    $scope.addMessageToRoom = function (messageText) {
      var room = $scope.rooms;
      var nickname = $cookies.blocChatCurrentUser;
      var time = $window.moment().format('h:mm a');
      
      console.log($scope.rooms.$getRecord($scope.currentRoom.$id));
      $scope.newMessageText = '';
    }
  });
