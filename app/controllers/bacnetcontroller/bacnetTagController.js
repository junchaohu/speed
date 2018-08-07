/**
 * Created by Allan on 10/21/2016.
 */
'use strict';

app.controller('bacnetTagController', function ($rootScope, $scope,$localStorage,$interval) {
    $scope.rainwaterrecycle = '300';
    $scope.totalmeter = $localStorage.counter || 100000;
    $scope.bushui = '*';
    $scope.jishui = '*';


    $interval(function(){
        $scope.totalmeter+= Math.floor(Math.random()*1000+1);
        $localStorage.counter=$scope.totalmeter;
    },1000*60);
    $scope.getLastData = function () {
        $scope.getLastData(function (error, data) {
            if (!error) {
                $scope.curbacnettags = data;
                $scope.rainwaterrecycle = 9898;

                $scope.pm2_5 = 112;
                $scope.totalmeter = 9999;
                //    $scope.changeColor($scope.pm2_5);
                //$scope.pm2_5=$rootScope.pm2_5;
                //$scope.pm2_5=300;
                //$scope.fontcolor="severely";
            } else {

            }
        });
    };

    $scope.timeout = function () {
        $scope.message = "Waiting 2000ms for update";
        setTimeout(function () {
            $scope.message = "Timeout called!";
            // AngularJS unaware of update to $scope
        }, 2000);
    }
    $scope.rootValue = function () {
        return $rootScope.bacnettags;
    };
    $scope.changeColor = function (currentValue) {
        if (currentValue == '*') {
            return;
        }
        if (currentValue < 50) {
            $scope.fontcolor = "excellent";
        } else if (currentValue >= 50 && currentValue < 100) {
            $scope.fontcolor = "good";
        } else if (currentValue >= 100 && currentValue < 150) {
            $scope.fontcolor = "lightly";
        } else if (currentValue >= 150 && currentValue < 200) {
            $scope.fontcolor = "moderately";
        } else if (currentValue >= 200 && currentValue < 300) {
            $scope.fontcolor = "heavily";
        } else if (currentValue >= 300) {
            $scope.fontcolor = "severely";
        }
    };
    $scope.parseNum = function (num) {
        return (parseFloat(num).toFixed(2) + '').replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');

    }
    // timeout = $timeout(function() {
    //     console.log("time out")}, 8000);
    $scope.changeRealtimeValue = function (newValue, oldValue) {


        if (angular.isDefined(newValue)) {
            var receiveValue = angular.copy(newValue);
            // if(receiveValue.PointName == 'OBJECT_ANALOG_VALUE:3004034:NAE-15/AV6')
            //     $scope.bushui = receiveValue.PointValue;
            // if(receiveValue.PointName == 'OBJECT_ANALOG_INPUT:3004404:NAE-15/BACnet IP1.Device-505804.Analog Inputs.AI-3000043')
            //     $scope.jishui = receiveValue.PointValue;
            console.log("receiveValue.PointName " +  receiveValue.PointName);
            if (receiveValue.PointName == 'OBJECT_ANALOG_INPUT:3000494:NCE00108D0534FC/BACnet IP.Getway2.electricity meters1.AI-207')
            {
                $scope.totalmeter = $scope.parseNum(receiveValue.PointValue);
                console.log("totalmeter " +  $scope.totalmeter);
            }

            if (receiveValue.PointName == 'OBJECT_ANALOG_INPUT:3000507:NCE00108D0534FC/BACnet IP.Getway2.water.AI-363') {
                $scope.jishui = receiveValue.PointValue;
                console.log("jishui " + $scope.jishui);
            }
            if (receiveValue.PointName == 'OBJECT_ANALOG_INPUT:3000510:NCE00108D0534FC/BACnet IP.Getway2.water.AI-368') {
                $scope.bushui = receiveValue.PointValue;
                console.log("bushui " +  $scope.bushui);
            }
            if ($scope.bushui != '*' && $scope.jishui != '*')
            {
                $scope.rainwaterrecycle = $scope.jishui - $scope.bushui;
                console.log("rainwaterrecycle " + $scope.rainwaterrecycle);
            }
        }


    };
    //$scope.$watch($scope.rootValue, $scope.changeRealtimeValue, true);

    //console.log($scope.parseNum(124015.83));

//  $scope.getLastData();


});