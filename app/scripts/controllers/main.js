'use strict';

/**
 * @ngdoc function
 * @name angularTestAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTestAppApp
 */
angular.module('angularTestAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
