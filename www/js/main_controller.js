(function(){
  'use strict';

  angular.module('ss-timer')
    .controller('MainCtrl', ['$scope', '$interval', function($scope, $interval){
      $scope.min = 0;
      $scope.sec = 0;


    function reduceTime(){
      $scope.timer -= 1;

      if($scope.timer <= 0){
        navigator.vibrate(5000);
        $interval.cancel($scope.timerId);

      }
    }

    $scope.start = function(){
      $scope.timer = $scope.min * 60 + $scope.sec * 1;
      console.log($scope.timer);
      $scope.timerId = $interval(reduceTime, 1000);
      console.log($scope.timerId);
    };
    }]);
})();
