'use strict';
app.controller('IndoorCtrl', [
    '$rootScope', '$scope', '$interval', 'highchartsNG', 'IndoorService',
    function($rootScope, $scope, $interval, highchartsNG, IndoorService) {

        //   This is not a highcharts object. It just looks a little like one!

        $scope.getNowFormatDate = function ()
        {
            var date = new Date();
            var seperator1 = "-";
            var seperator2 = ":";
            var month = date.getMonth() + 1;
            var strDate = date.getDate();
            if (month >= 1 && month <= 9) {
                month = "0" + month;
            }
            if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate;
            }
            var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
                + " " + date.getHours() + seperator2 + date.getMinutes()
                + seperator2 + date.getSeconds();
            return currentdate;
        }

        $scope.chartConfig = {
            options: {
                chart: {
                    type: 'area'
                }
            },
            title: {
                text: null
            },
            xAxis: {
                // categories: [ '10.27', '10.28', '10.29','10.30', '10.31','11.01', '11.02'],
                //startOnTick: false,
                tickInterval: 3600 * 1000 * 24,
                minTickInterval: 3600 * 1000 *24,
                startOnTick: false,
                endOnTick: false,
                type: 'datetime',
                labels: {
                    formatter: function() {
                        var dateStr = Highcharts.dateFormat('%m-%d', this.value);
                        return dateStr;
                    },
                },
                crosshair: null
            },
            yAxis: {
                title: {
                    text: ' '
                },
                labels: {
                    formatter: function() {
                        return this.value;
                    }
                }
            },
            tooltip: {
                shared: true,
                valueSuffix: ' units'
                    //   split: true,
                    // valueSuffix: ' millions'
            },
            plotOptions: {
                areaspline: {
                    fillOpacity: 1
                },
                area: {
                    stacking: 'normal',
                    lineColor: '#666666',
                    lineWidth: 1,
                    marker: {
                        lineWidth: 1,
                        lineColor: '#666666'
                    }
                }
            },

            series: [],
            loading: true
        };

        $scope.rehuishou=["e0a9bbb8-8f9d-559b-8d1b-ca3008baffcd"]; //空压机能量表


        $scope.rsh=[["78e8622d-4c69-934b-67a3-391d076e50c9",'0ce4d5ab-d667-21b0-4454-a8c16f382d75'],
                    ['182dce1d-65d5-dc99-9052-c245fc374cc3','19b092aa-f826-9475-5eb7-2c4ba6a46e60'],
                    ['13b843e2-5d9b-de24-ed37-09f26630aa72','d8b216b6-79da-328b-5ceb-de2be7bb49e4'],
                    ['6c258fde-4403-4594-e309-b1eeff066fa6','c1deace3-765e-2c1e-81ba-725b38c8de08'],
                    ['29d42a4d-4ff0-e768-3d4f-4d93366cef22','e3caf671-62e5-6ac9-d7a4-52fec17ed7fc'],
                    ['2a548d4f-e8c1-e2b7-49f2-93baa0778985','469cff41-efc0-0fe2-df4a-2ca63361382d']];

        $scope.noise=["629d1ac7-4e58-6150-6090-d337325419c1",
                    '9d196f0b-767e-af6d-5b3a-869757592809',
                    '465857bf-11af-b09d-d202-0e03fae9c72b'];
        $scope.pm25=['7652936d-11c7-0514-4a4d-4287abde8337',
                    '44135519-0f4a-4906-2ffb-5d291e1cfc4c'];
        $scope.co2=['f31efe8c-f903-18ae-5331-5e5d1f76a712',
                    '3ae8cedf-5ad3-df4d-2d46-e56d334079cb',
                    '605ae8a1-5a07-aefe-1ac2-96fe63a7adee',
                    'eabcd265-123a-0547-8d3d-5a334a7d149e',
                    'e1f033e2-727a-2fd7-8e86-9e030a35d54f'];
        $scope.out=[['5c19b00b-6e1b-69c0-1de7-f3f8561b2945','b45f2578-392e-b7a2-1eea-0c7f83c4e5f1']];
        $scope.getDataFromAPI=function(guid){
            var query = {
                'startdatetime': new Date(new Date().setDate(new Date().getDate()-7)).toJSON(),
                'enddatetime': new Date().toJSON(),
                'sensorguids[]': guid,
                'meterguids[]':guid
            };
            $scope.chartConfig.loading=true;
            $scope.current=[];
            IndoorService.getTrendData(query,function(error, data){
                 if (!error & error == null) {
                     angular.forEach(data,function(item,key){
                        if(angular.isDefined(item.data)){
                            angular.forEach(item.data,function(d,i){
                                d[0]*=1000;
                            });
                            $scope.current.push(item.data[item.data.length-1][1].toFixed(2));
                        }
                     });
                    $scope.chartConfig.series=data;
                    $scope.chartConfig.loading=false;
                 }
            });
        };

        $scope.getOutsideFromAPI=function(guid){
            var query = {
                'startdatetime': new Date(new Date().setDate(new Date().getDate()-7)).toJSON().slice(0,16).replace('T', ' '),
                'enddatetime':  new Date(new Date().setDate(new Date().getDate()+1)).toJSON().slice(0,16).replace('T', ' '),
                'sensorguids[]': guid
            };
            $scope.outside=[];
            IndoorService.getTrendData(query,function(error, data){
                 if (!error & error == null) {
                     angular.forEach(data,function(item,key){
                        if(angular.isDefined(item.data)){
                            $scope.outside.push(item.data[item.data.length-1][1].toFixed(2));
                        }
                     });
                 }
            });
        };
        


        
        
        $scope.getDataFromAPI($scope[$rootScope.$stateParams.report][0]);
        if($rootScope.$stateParams.report=='rsh'){
            $scope.getOutsideFromAPI($scope.out[0]);
        }
        
    }
]);