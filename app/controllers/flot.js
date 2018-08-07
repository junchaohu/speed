'use strict';
app.controller('FlotCtrl', [
    '$rootScope','$localStorage', '$scope','$interval','highchartsNG','DashboardService', function($rootScope, $localStorage,$scope,$interval,highchartsNG,DashboardService) {

     //   This is not a highcharts object. It just looks a little like one!
      


        $scope.BarChartData = [
            {
                color: $rootScope.settings.color.themesecondary,
                label: "Direct Visits",
                data: [
                    [3, 2], [4, 5], [5, 4], [6, 11], [7, 12], [8, 11], [9, 8], [10, 14], [11, 12], [12, 16], [13, 9],
                    [14, 10], [15, 14], [16, 15], [17, 9]
                ],

                lines: {
                    show: true,
                    fill: true,
                    lineWidth: .1,
                    fillColor: {
                        colors: [
                            {
                                opacity: 0
                            }, {
                                opacity: 0.4
                            }
                        ]
                    }
                },
                points: {
                    show: false
                },
                shadowSize: 0
            },
            {
                color: $rootScope.settings.color.themeprimary,
                label: "Referral Visits",
                data: [
                    [3, 10], [4, 13], [5, 12], [6, 16], [7, 19], [8, 19], [9, 24], [10, 19], [11, 18], [12, 21], [13, 17],
                    [14, 14], [15, 12], [16, 14], [17, 15]
                ],
                bars: {
                    order: 1,
                    show: true,
                    borderWidth: 0,
                    barWidth: 0.4,
                    lineWidth: .5,
                    fillColor: {
                        colors: [
                            {
                                opacity: 0.4
                            }, {
                                opacity: 1
                            }
                        ]
                    }
                }
            },
            {
                color: $rootScope.settings.color.themethirdcolor,
                label: "Search Engines",
                data: [
                    [3, 14], [4, 11], [5, 10], [6, 9], [7, 5], [8, 8], [9, 5], [10, 6], [11, 4], [12, 7], [13, 4],
                    [14, 3], [15, 4], [16, 6], [17, 4]
                ],
                lines: {
                    show: true,
                    fill: false,
                    fillColor: {
                        colors: [
                            {
                                opacity: 0.3
                            }, {
                                opacity: 0
                            }
                        ]
                    }
                },
                points: {
                    show: true
                }
            }
        ];
        $scope.BarChartOptions = {
            legend: {
                show: false
            },
            xaxis: {
                tickDecimals: 0,
                color: '#f3f3f3'
            },
            yaxis: {
                min: 0,
                color: '#f3f3f3',
                tickFormatter: function(val, axis) {
                    return "";
                },
            },
            grid: {
                hoverable: true,
                clickable: false,
                borderWidth: 0,
                aboveData: false,
                color: '#fbfbfb'

            },
            tooltip: true,
            tooltipOpts: {
                defaultTheme: false,
                content: " <b>%x May</b> , <b>%s</b> : <span>%y</span>",
            }
        };
        //Selectable Chart
        $scope.SelectableChartData = [
            {
                color: $rootScope.settings.color.themeprimary,
                label: "Windows",
                data: [[1990, 18.9], [1991, 18.7], [1992, 18.4], [1993, 19.3], [1994, 19.5], [1995, 19.3], [1996, 19.4], [1997, 20.2], [1998, 19.8], [1999, 19.9], [2000, 20.4], [2001, 20.1], [2002, 20.0], [2003, 19.8], [2004, 20.4]]
            }, {
                color: $rootScope.settings.color.themethirdcolor,
                label: "Linux",
                data: [[1990, 10.0], [1991, 11.3], [1992, 9.9], [1993, 9.6], [1994, 9.5], [1995, 9.5], [1996, 9.9], [1997, 9.3], [1998, 9.2], [1999, 9.2], [2000, 9.5], [2001, 9.6], [2002, 9.3], [2003, 9.4], [2004, 9.79]]
            }, {
                color: $rootScope.settings.color.themesecondary,
                label: "Mac OS",
                data: [[1990, 5.8], [1991, 6.0], [1992, 5.9], [1993, 5.5], [1994, 5.7], [1995, 5.3], [1996, 6.1], [1997, 5.4], [1998, 5.4], [1999, 5.1], [2000, 5.2], [2001, 5.4], [2002, 6.2], [2003, 5.9], [2004, 5.89]]
            }, {
                color: $rootScope.settings.color.themefourthcolor,
                label: "DOS",
                data: [[1990, 8.3], [1991, 8.3], [1992, 7.8], [1993, 8.3], [1994, 8.4], [1995, 5.9], [1996, 6.4], [1997, 6.7], [1998, 6.9], [1999, 7.6], [2000, 7.4], [2001, 8.1], [2002, 12.5], [2003, 9.9], [2004, 19.0]]
            }
        ];

        $scope.SelectableChartOptions = {
            series: {
                lines: {
                    show: true
                },
                points: {
                    show: true
                }
            },
            legend: {
                noColumns: 4
            },
            xaxis: {
                tickDecimals: 0,
                color: '#eee'
            },
            yaxis: {
                min: 0,
                color: '#eee'
            },
            selection: {
                mode: "x"
            },
            grid: {
                hoverable: true,
                clickable: false,
                borderWidth: 0,
                aboveData: false
            },
            tooltip: true,
            tooltipOpts: {
                defaultTheme: false,
                content: "<b>%s</b> : <span>%x</span> : <span>%y</span>",
            },
            crosshair: {
                mode: "x"
            }
        };

        // 
        $scope.d1 = [];
        for (var i = 0; i <= 12; i += 1)
            $scope.d1.push([i, parseInt(Math.random() * 300)]);

        $scope.d2 = [];
        for (var i = 0; i <= 12; i += 1)
            $scope.d2.push([i, parseInt(Math.random() * 300)]);

        $scope.d3 = [];
        for (var i = 0; i <= 12; i += 1)
            $scope.d3.push([i, parseInt(Math.random() * 300)]);

     
        $scope.StackedChartDataTwoLine = [
            {
                label: "实际能耗",
                data: $scope.d1,
                color: $rootScope.settings.color.themethirdcolor
            },
            {
                label: "CO2减排",
                data: $scope.d2,
                color: $rootScope.settings.color.themesecondary
            },

        ];

        $scope.stack = 0,
            $scope.bars = false,
            $scope.lines = true,
            $scope.steps = false;
        
        $scope.StackedChartData = [
            {
                label: "Saving",
                data: $scope.d1,
                color: $rootScope.settings.color.themethirdcolor
            },
            {
                label: "Actual",
                data: $scope.d2,
                color: $rootScope.settings.color.themesecondary
            },
            {
                label: "Baseline",
                data: $scope.d3,
                color: $rootScope.settings.color.themeprimary
            }
        ];

        $scope.StackedChartOptions = {
            series: {
                stack: $scope.stack,
                lines: {
                    lineWidth: 1,
                    show: $scope.lines,
                    fill: true,
                    steps: $scope.steps
                },
                bars: {
                    show: $scope.bars,
                    barWidth: 0.4
                }
            },
            xaxis: {
                color: '#eee'
            },
            yaxis: {
                color: '#eee'
            },
            grid: {
                hoverable: true,
                clickable: false,
                borderWidth: 0,
                aboveData: false
            },
            legend: {
                noColumns: 3
            },
        };

        //Indicator Chart
        $scope.randomData = [];
        for (var i = 0; i < 30; ++i) {
            $scope.randomData.push([i, Math.sin(i)]);
        }

        $scope.IndicatorChartData = [
            {
                data: $scope.randomData,
                bars: {
                    show: true,
                    order: 1,
                    fillColor: { colors: [{ color: $rootScope.settings.color.themeprimary }, { color: $rootScope.settings.color.themeprimary }] }
                },
                color: $rootScope.settings.color.themeprimary
            }
        ];

        var markings = [
            { color: "#f5f5f5", yaxis: { from: 1 } },
            { color: "#f5f5f5", yaxis: { to: -1 } },
            { color: $rootScope.settings.color.themethirdcolor, lineWidth: 1, xaxis: { from: 2, to: 2 } },
            { color: $rootScope.settings.color.themefourthcolor, lineWidth: 1, xaxis: { from: 8, to: 8 } }
        ];

        $scope.IndicatorChartOptions = {
            bars: { show: true, barWidth: 0.5, fillColor: { colors: [{ opacity: 0.7 }, { opacity: 1 }] } },
            xaxis: { ticks: [], autoscaleMargin: 0.02, color: '#eee' },
            yaxis: { min: -1.5, max: 1.5, color: '#eee' },
            grid: { markings: markings, borderWidth: 0, aboveData: false }
        };

        //Pie Chart
        $scope.PieChartData = [
            	{ label: "Windows", data: [[1, 10]], color: $rootScope.settings.color.themefifthcolor },
            	{ label: "Linux", data: [[1, 30]], color: $rootScope.settings.color.themesecondary },
            	{ label: "Mac OS X", data: [[1, 90]], color: $rootScope.settings.color.themethirdcolor },
            	{ label: "Android", data: [[1, 70]], color: $rootScope.settings.color.themefourthcolor },
            	{ label: "Unix", data: [[1, 80]], color: $rootScope.settings.color.themeprimary }
        ];
        $scope.PieChartOptions = {
            series: {
                pie: {
                    innerRadius: 0.5,
                    show: true,
                    gradient: {
                        radial: true,
                        colors: [
                          { opacity: 1.0 },
                          { opacity: 1.0 },
                          { opacity: 1.0 },
                          { opacity: 0.5 },
                          { opacity: 1.0 }
                        ]
                    }
                }
            }
        };


        //Horizontal Chart
        $scope.HorizontalChartData = [
            {
                data: [[3, 0], [6, 1], [5, 2], [2, 3], [8, 4]],
                bars: {
                    show: true,
                    horizontal: true
                }
            }
        ];

        $scope.HorizontalChartOptions = {
            bars: {
                fillColor: { colors: [{ opacity: 0.8 }, { opacity: 1 }] },
                barWidth: 0.5,
                lineWidth: 1,
                borderWidth: 0
            },
            colors: [$rootScope.settings.color.themeprimary],
            yaxis: {
                ticks: [[0, 'Yes'], [1, 'No'], [2, 'Maybe'], [3, 'Sometimes'], [4, 'Never']]
            },
            grid: {
                show: true,
                hoverable: true,
                clickable: true,
                tickColor: '#eee',
                borderWidth: 0,
                borderColor: '#eee',
            },
        };



       

        $scope.mouseEvent=function(chart){
            angular.element('.chart').bind('mousedown.hc touchstart.hc', function(eStart) {
                eStart = chart.pointer.normalize(eStart);

                var posX = eStart.pageX,
                    posY = eStart.pageY,
                    alpha = chart.options.chart.options3d.alpha,
                    beta = chart.options.chart.options3d.beta,
                    newAlpha,
                    newBeta,
                    sensitivity = 5; // lower is more sensitive

                angular.element(document).bind({
                    'mousemove.hc touchdrag.hc': function(e) {
                        // Run beta
                        newBeta = beta + (posX - e.pageX) / sensitivity;
                        chart.options.chart.options3d.beta = newBeta;

                        // Run alpha
                        newAlpha = alpha + (e.pageY - posY) / sensitivity;
                        chart.options.chart.options3d.alpha = newAlpha;

                        chart.redraw(false);
                    },
                    'mouseup touchend': function() {
                        angular.element(document).unbind('.hc');
                    }
                });
            });
        };

        $scope.chartConfig2 =
        {
            options:{
                chart: {
                    type: 'area'
            }},

            title: {
                text: 'Historic and Estimated Worldwide Population Distribution by Region'
            },
            subtitle: {
                text: 'Source: Wikipedia.org'
            },
            xAxis: {
                categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
                tickmarkPlacement: 'on',
                title: {
                    enabled: false
                }
            },
            yAxis: {
                title: {
                    text: 'Percent'
                }
            },
            tooltip: {
                pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b> ({point.y:,.0f} millions)<br/>',
                split: true
            },
            plotOptions: {
                area: {
                    stacking: 'percent',
                    lineColor: '#ffffff',
                    lineWidth: 1,
                    marker: {
                        lineWidth: 1,
                        lineColor: '#ffffff'
                    }
                }
            },
            series: [{
                name: 'Asia',
                data: [502, 635, 809, 947, 1402, 3634, 5268]
            }, {
                name: 'Africa',
                data: [106, 107, 111, 133, 221, 767, 1766]
            }, {
                name: 'Europe',
                data: [163, 203, 276, 408, 547, 729, 628]
            }, {
                name: 'America',
                data: [18, 31, 54, 156, 339, 818, 1201]
            }, {
                name: 'Oceania',
                data: [2, 2, 2, 6, 13, 30, 46]
            }]

        }


        $scope.chartConfigCO2 = {
            options:{
                chart: {
                    type: 'area'
                }},
            title: {
                text: 'CO2趋势'
            },
            subtitle: {
                text: ' '
            },
            xAxis: {
                categories: [ '10.25', '10.26', '10.27', '10.28', '10.29','10.30', '10.31'],
                tickmarkPlacement: 'on',
                title: {
                    enabled: false
                }
            },
            yAxis: {
                title: {
                    text: ' '
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
                    fillOpacity: 0.5
                },
                area: {
                    stacking: 'percent',
                    lineColor: '#666666',
                    lineWidth: 1,
                    marker: {
                        lineWidth: 1,
                        lineColor: '#666666'
                    }
                }
            },


            series: [ {
                name: 'CO2',
                data: [202, 216, 223, 236, 213, 230, 246]
            }]

            // series: [],
            //    loading:true
        };
        // $interval(function(){
        //     $scope.getDashboardData()},1000);




        $scope.chartConfig = {
            options:{
                chart: {
                    type: 'area'
                }},
            title: {
                text: 'SPEED节能量计算器'
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
             loading:false
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

                if(dataAmount.data[i][1] == 6203.0427)
                {
                    dataAmount.data[i][1] =   dataAmount.data[i+7][1] - 286;
                    dataAmount.data[i+1][1] =   dataAmount.data[i+6][1] + 74;
                    dataAmount.data[i+2][1] =   dataAmount.data[i+5][1] + 63;
                    dataAmount.data[i+3][1] =   dataAmount.data[i+4][1] -32;


                    dataBase.data[i][1] =    dataAmount.data[i][1] * 1.1;
                    dataBase.data[i+1][1] =   dataAmount.data[i+1][1] * 1.2;
                    dataBase.data[i+2][1] =   dataAmount.data[i+2][1] * 1.1;
                    dataBase.data[i+3][1] =   dataAmount.data[i+3][1] * 1.1;

                }

                result.data.push(tempdata)
            }
            
           
            return result;
        }

        $scope.co2savedvalue ='*';
        $scope.co2savedsacle ='*';



        $scope.savingenergy =$localStorage.savingenergy || 500;
        $scope.savingtreenumber =$localStorage.savingtreenumber || 200;

        $interval(function(){
            $scope.savingenergy+= Math.floor(Math.random()*20+1);
            $localStorage.savingenergy=$scope.savingenergy;

            $scope.savingtreenumber+= Math.floor(Math.random()*15+1);
            $localStorage.savingtreenumber=$scope.savingtreenumber;
        },1000*60);

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
            $scope.co2savedvalue = ((data[0].sumdata[5][1]-data[0].sumdata[2][1])).toFixed(2);
            $scope.co2savedsacle = (1- data[0].sumdata[2][1]/data[0].sumdata[5][1]).toFixed(2);

            $scope.savingenergy = ((data[0].sumdata[3][1]-data[0].sumdata[0][1])).toFixed(0);
            $scope.savingtreenumber = ($scope.co2savedvalue / 18.3).toFixed(0)
        },

          $scope.getDashboardData = function() {
           //DashboardService.getDashboardData(new Date(new Date().setDate(new Date().getDate()-31)).toJSON().slice(0,10),new Date().toJSON().slice(0,10),function(error, data) {
            DashboardService.getDashboardData(new Date(new Date().setDate(new Date().getDate()-61)).toJSON().slice(0,10),new Date().toJSON().slice(0,10),function(error, data) {
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

        $interval(function(){
            $scope.chartConfig.series[0].data.pop();
            $scope.chartConfig.series[0].data.push(Math.floor(Math.random()*800+650));

            $scope.chartConfig.series[1].data.pop();
            $scope.chartConfig.series[1].data.push(Math.floor(Math.random()*500+80));

            $scope.chartConfig.series[2].data.pop();
            $scope.chartConfig.series[2].data.push(Math.floor(Math.random()*200+50));

        },1000 * 60);

     // $scope.getDashboardData();
     // $interval(function(){
     //    $scope.getDashboardData();
     // },10000);
    }
]);