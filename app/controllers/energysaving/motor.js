/**
 * Created by Allan on 11/9/2016.
 */
'use strict';
app.controller('MotorCtrl', [
    '$rootScope', '$scope','$interval','highchartsNG','DashboardService', function($rootScope, $scope,$interval,highchartsNG,DashboardService) {

        //   This is not a highcharts object. It just looks a little like one!

        $scope.myInterval = 3000;
        var slides = $scope.slides = [];

        $scope.addSlide = function() {
            var newWidth = 600 + slides.length;
            slides.push({
                image: 'http://placekitten.com/' + newWidth + '/300',
                text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
                ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
            });
        };

        // $scope.addSlide = function() {
        //     var newWidth = 600 + slides.length;
        //     slides.push({
        //         image: 'assets/img/speed/energysavingimages/jienengliang_dianjipic_03.png',
        //         text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
        //         ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
        //     },
        //         {
        //             image: 'assets/img/speed/energysavingimages/dianji02_03.png',
        //             text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
        //             ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
        //         }
        //     ,
        //         {
        //             image: 'assets/img/speed/energysavingimages/dianji03_03.png',
        //             text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
        //             ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
        //         }
        //     ,
        //         {
        //             image: 'assets/img/speed/energysavingimages/dianji04_03.png',
        //             text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
        //             ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
        //         } );
        // };
        for (var i=0; i<4; i++) {
            $scope.addSlide();
        }

        // solution #1
        $scope.$watch('slides[0].active', function (active) {
            if (active) {
                console.log('slide 0 is active');
            }
        });

        // solution #2
        $scope.$watch(function () {
            for (var i = 0; i < slides.length; i++) {
                if (slides[i].active) {
                    return slides[i];
                }
            }
        }, function (currentSlide, previousSlide) {
            if (currentSlide !== previousSlide) {
                console.log('currentSlide:', currentSlide);
            }
        });

        // solution #3 use with the below onCarouselChange directive
        $scope.onSlideChanged = function (nextSlide, direction) {
            console.log('onSlideChanged:', direction, nextSlide);
        };
 
        //     $scope.getDashboardData()},1000);
        $scope.energylightguid=['8b4612c7-36a8-dca9-9dfd-fae7365a7c4a'];


        $scope.chartConfig = {
            options:{
                chart: {
                    type: 'area'
                }},
            title: {
                text: '立式压铸主机'
                //电-生产线设备 1PP/1PP3/1PP3-1
            },
            xAxis: {
                // categories: [ '10.27', '10.28', '10.29','10.30', '10.31','11.01', '11.02'],
                startOnTick:false,
                type : 'datetime',
                labels: {
                    formatter: function() {
                        var dateStr = Highcharts.dateFormat('%m-%d',this.value);
                        return dateStr;
                    },
                },
                crosshair:null
            },
            yAxis: {
                title: {
                    text: 'kwh'
                },
                labels: {
                    formatter: function () {
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


            // series: [{
            //     name: '基准能耗',
            //     data: [502, 635, 809, 947, 654, 732, 666]
            // },   {
            //     name: '实际能耗',
            //     data: [300, 405, 605, 708, 347, 529, 428]
            // },  {
            //     name: '节约能耗',
            //     data: [202, 216, 223, 236, 213, 230, 246]
            // }]

            series: []
            ,
            loading:true
        };



        $scope.getHighChartData = function(typestring,data)
        {
            var mydata =
            {
                name : "",
                data :[]
            }
            mydata.name = typestring;
            for (var i = 0; i < data.length; i++) {
                for (var j = 0; j < data[i].length; j++)
                {

                    if(data[i][j][0] == typestring)
                    {
                        var tempdata = [];
                        tempdata[0] =data[i][0];
                        tempdata[1] =data[i][j][1];
                        mydata.data.push(tempdata)
                    }
                }
            }
            // html += '</tr>';
            return mydata;
        }

        $scope.arraysubtraction = function (dataAmount,dataBase) {
            var result =
            {
                name : "",
                data :[]
            };
            for (var i = 0; i < dataBase.data.length; i++)
            {
                var tempdata = [];
                tempdata[0] = dataBase.data[i][0] * 1000;
                tempdata[1] = dataBase.data[i][1]-dataAmount.data[i][1];

                dataBase.data[i][0] =  dataBase.data[i][0] * 1000;
                dataAmount.data[i][0]  =  dataAmount.data[i][0] * 1000;


                result.data.push(tempdata)
            }
            return result;
        }
        $scope.generateTableData = function(data) {
            var mydata1 =
            {
                name : "",
                data :[]
            };
            var mydata2 =
            {
                name : "",
                data :[]
            };
            var mydata3 =
            {
                name : "",
                data :[]
            };
            mydata1 =  $scope.getHighChartData("amount",data[0].data);

            mydata2 =  $scope.getHighChartData("amountbaseline",data[0].data);
            mydata3 = $scope.arraysubtraction(mydata1,mydata2);

            mydata1.name = "实际能耗";
            mydata2.name = "基准能耗";
            mydata3.name = "节约能耗";
            var total =[mydata1,mydata2,mydata3];
            $scope.chartConfig.loading=false;
            $scope.chartConfig.series=total;

        },

            $scope.getDashboardData = function() {
                DashboardService.getDashboardDataMeter(new Date(new Date().setDate(-15)).toJSON().slice(0,10),new Date().toJSON().slice(0,10),'e59dd5f2-5e54-4f70-9e80-00bce4169193',function(error, data) {
                    if (!error)
                    {
                        $scope.rawData=data.consumption.total[0].metadatacollections;
                        $scope.generateTableData($scope.rawData);

                    }
                    else {
                        $scope.chartConfig.series=[{
                            name: '基准能耗',
                            data: [502, 635, 809, 947, 654, 732, 666]
                        },   {
                            name: '实际能耗',
                            data: [300, 405, 605, 708, 347, 529, 428]
                        },  {
                            name: '节约能耗',
                            data: [202, 216, 223, 236, 213, 230, 246]
                        }];
                    }
                });
            };


        // $scope.getDataFromAPI($scope.rsh[0]);
        $scope.getDashboardData();
        $interval(function(){
            $scope.getDashboardData();
        },10000);
    }
]);