'use strict';
angular.module('app' )
    .run(
        [
            '$rootScope', '$state', '$stateParams',
            function($rootScope, $state, $stateParams) {
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
            }
        ]
    )
    .config(
        [
            '$stateProvider', '$urlRouterProvider',
            function($stateProvider, $urlRouterProvider) {

                $urlRouterProvider
                    .otherwise('/app/dashboard');
                $stateProvider
                    .state('app', {
                        abstract: true,
                        url: '/app',

                        templateUrl: 'views/layout.html'
                    })
                    .state('app.dashboard', {
                        url: '/dashboard',
                        templateUrl: 'views/dashboard.html',
                        ncyBreadcrumb: {
                            label: 'TECO Energy Management System',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [

                                            'app/directives/realtimechart.js',
                                            'lib/jquery/charts/flot/jquery.flot.js',
                                            'lib/jquery/charts/flot/jquery.flot.orderBars.js',
                                            'lib/jquery/charts/flot/jquery.flot.tooltip.js',
                                            'lib/jquery/charts/flot/jquery.flot.resize.js',
                                            'lib/jquery/charts/flot/jquery.flot.selection.js',
                                            'lib/jquery/charts/flot/jquery.flot.crosshair.js',
                                            'lib/jquery/charts/flot/jquery.flot.stack.js',
                                            'lib/jquery/charts/flot/jquery.flot.time.js',
                                            'lib/jquery/charts/flot/jquery.flot.pie.js',
                                            'app/services/DashboardService.js',
                                            'app/controllers/flot.js',
                                            'app/controllers/dashboard.js', 
                                            'app/controllers/bacnetcontroller/bacnetTagController.js',
                                        ]
                                    });
                                }
                            ]
                        }
                    })

                    .state('app.fengneng', {
                        url: '/fengneng',
                        templateUrl: 'views/partials/fengneng.html',
                        ncyBreadcrumb: {
                            label: 'TECO Energy Management System',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [

                                            'app/directives/realtimechart.js',
                                            'lib/jquery/charts/flot/jquery.flot.js',
                                            'lib/jquery/charts/flot/jquery.flot.orderBars.js',
                                            'lib/jquery/charts/flot/jquery.flot.tooltip.js',
                                            'lib/jquery/charts/flot/jquery.flot.resize.js',
                                            'lib/jquery/charts/flot/jquery.flot.selection.js',
                                            'lib/jquery/charts/flot/jquery.flot.crosshair.js',
                                            'lib/jquery/charts/flot/jquery.flot.stack.js',
                                            'lib/jquery/charts/flot/jquery.flot.time.js',
                                            'lib/jquery/charts/flot/jquery.flot.pie.js',
                                            'app/services/DashboardService.js',
                                            'app/controllers/flot.js',
                                            'app/controllers/dashboard.js',
                                            'app/controllers/bacnetcontroller/bacnetTagController.js',
                                        ]
                                    });
                                }
                            ]
                        }
                    })

                    .state('app.energysavingmain', {

                        url: '/energysavingmain',
                        controller:'DashboardCtrl',

                        params: {
                            'CheckedShuttle': 'Checked',
                            'CheckedWater': '',
                            'CheckedEnergy': '',
                        },
                        views:{
                            '':{templateUrl: 'views/partials/energysavingmain.html'},
                                 'energysavingmainfooter@app.energysavingmain': {
                                templateUrl:'views/partials/energysavingmainfooter.html',

                            }
                        },
                        ncyBreadcrumb: {
                            label: 'Dashboard',
                            description: ''
                        },

                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                            'lib/jquery/charts/sparkline/jquery.sparkline.js',
                                            'lib/jquery/charts/easypiechart/jquery.easypiechart.js',
                                            'lib/jquery/charts/flot/jquery.flot.js',
                                            'lib/jquery/charts/flot/jquery.flot.resize.js',
                                            'lib/jquery/charts/flot/jquery.flot.pie.js',
                                            'lib/jquery/charts/flot/jquery.flot.tooltip.js',
                                            'lib/jquery/charts/flot/jquery.flot.orderBars.js',
                                            'app/controllers/dashboard.js',
                                            'app/directives/realtimechart.js',
                                            'app/controllers/flot.js'
                                        ]
                                    });
                                }
                            ]
                        }
                    })

                    .state('app.energysavingmotor', {
                        url: '/energysavingmotor',
                        controller:'DashboardCtrl',

                        params: {
                            'CheckedShuttle': 'Checked',
                            'CheckedWater': '',
                            'CheckedEnergy': '',
                        },
                        views:{
                            '':{templateUrl: 'views/partials/energysavingmotor.html'},



                            'energysavingmainfooter@app.energysavingmotor': {
                                templateUrl:'views/partials/energysavingmainfooter.html',

                            }
                        },
                        // templateUrl: 'views/partials/leedshuttlebus.html',
                        ncyBreadcrumb: {
                            label: 'shuttlebus',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                            'lib/jquery/charts/sparkline/jquery.sparkline.js',
                                            'lib/jquery/charts/easypiechart/jquery.easypiechart.js',
                                            'lib/jquery/charts/flot/jquery.flot.js',
                                            'lib/jquery/charts/flot/jquery.flot.resize.js',
                                            'lib/jquery/charts/flot/jquery.flot.pie.js',
                                            'lib/jquery/charts/flot/jquery.flot.tooltip.js',
                                            'lib/jquery/charts/flot/jquery.flot.orderBars.js',
                                            'app/controllers/dashboard.js',
                                            'app/controllers/energysaving/motor.js'
                                        ]
                                    });
                                }
                            ]
                        }
                    })


                    .state('app.energysavingrenewable', {
                        url: '/energysavingrenewable',
                        controller:'DashboardCtrl',

                        params: {
                            'CheckedShuttle': '',
                            'CheckedWater': '',
                            'CheckedEnergy': 'Checked',
                        },
                        views:{
                            '':{templateUrl: 'views/partials/energysavingrenewable.html'},



                            'energysavingmainfooter@app.energysavingrenewable': {
                                templateUrl:'views/partials/energysavingmainfooter.html',

                            }
                        },
                        // templateUrl: 'views/partials/leedshuttlebus.html',
                        ncyBreadcrumb: {
                            label: 'energysavingrenewable',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                            'lib/jquery/charts/sparkline/jquery.sparkline.js',
                                            'lib/jquery/charts/easypiechart/jquery.easypiechart.js',
                                            'lib/jquery/charts/flot/jquery.flot.js',
                                            'lib/jquery/charts/flot/jquery.flot.resize.js',
                                            'lib/jquery/charts/flot/jquery.flot.pie.js',
                                            'lib/jquery/charts/flot/jquery.flot.tooltip.js',
                                            'lib/jquery/charts/flot/jquery.flot.orderBars.js',
                                            'app/controllers/dashboard.js',
                                            'app/directives/realtimechart.js',
                                            'app/controllers/flot.js'
                                        ]
                                    });
                                }
                            ]
                        }
                    })


                    .state('app.energysavingrehuishou', {
                        url: '/energysavingrehuishou',
                        controller:'DashboardCtrl',

                        params: {
                            'CheckedShuttle': '',
                            'CheckedResource': 'Checked',
                            'CheckedEnergy': '',
                            'report':'rehuishou'
                        },
                        views:{
                            '':{templateUrl: 'views/partials/energysavingrehuishou.html'},



                            'energysavingmainfooter@app.energysavingrehuishou': {
                                templateUrl:'views/partials/energysavingmainfooter.html',

                            }
                        },
                        // templateUrl: 'views/partials/leedshuttlebus.html',
                        ncyBreadcrumb: {
                            label: 'energysavingrehuishou',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                            'lib/jquery/charts/sparkline/jquery.sparkline.js',
                                            'lib/jquery/charts/easypiechart/jquery.easypiechart.js',
                                            'lib/jquery/charts/flot/jquery.flot.js',
                                            'lib/jquery/charts/flot/jquery.flot.resize.js',
                                            'lib/jquery/charts/flot/jquery.flot.pie.js',
                                            'lib/jquery/charts/flot/jquery.flot.tooltip.js',
                                            'lib/jquery/charts/flot/jquery.flot.orderBars.js',
                                            'app/controllers/dashboard.js',
                                            'app/directives/realtimechart.js',
                                            'app/controllers/flot.js',
                                            'app/services/indoor/indoor.js',
                                            'app/controllers/indoor/indoor.js',
                                        ]
                                    });
                                }
                            ]
                        }
                    })
                    .state('app.energysavinglight', {
                        url: '/energysavinglight',
                        controller:'DashboardCtrl',

                        params: {
                            'CheckedShuttle': '',
                            'CheckedWater': 'Checked',
                            'CheckedEnergy': '',
                        },
                        views:{
                            '':{templateUrl: 'views/partials/energysavinglight.html'},



                            'energysavingmainfooter@app.energysavinglight': {
                                templateUrl:'views/partials/energysavingmainfooter.html',

                            }
                        },
                        // templateUrl: 'views/partials/leedshuttlebus.html',
                        ncyBreadcrumb: {
                            label: 'energysavinglight',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                            'lib/jquery/charts/sparkline/jquery.sparkline.js',
                                            'lib/jquery/charts/easypiechart/jquery.easypiechart.js',
                                            'lib/jquery/charts/flot/jquery.flot.js',
                                            'lib/jquery/charts/flot/jquery.flot.resize.js',
                                            'lib/jquery/charts/flot/jquery.flot.pie.js',
                                            'lib/jquery/charts/flot/jquery.flot.tooltip.js',
                                            'lib/jquery/charts/flot/jquery.flot.orderBars.js',
                                            'app/controllers/dashboard.js',
                                            'app/directives/realtimechart.js',
                                            'app/controllers/energysaving/light.js'
                                        ]
                                    });
                                }
                            ]
                        }
                    })

                    .state('app.energysavingheatpump', {
                        url: '/energysavingheatpump',
                        controller:'DashboardCtrl',

                        params: {
                            'CheckedShuttle': '',
                            'CheckedWater': '',
                            'CheckedEnergy': 'Checked',
                        },
                        views:{
                            '':{templateUrl: 'views/partials/energysavingheatpump.html'},



                            'energysavingmainfooter@app.energysavingheatpump': {
                                templateUrl:'views/partials/energysavingmainfooter.html',

                            }
                        },
                        // templateUrl: 'views/partials/leedshuttlebus.html',
                        ncyBreadcrumb: {
                            label: 'energysavingheatpump',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                            'lib/jquery/charts/sparkline/jquery.sparkline.js',
                                            'lib/jquery/charts/easypiechart/jquery.easypiechart.js',
                                            'lib/jquery/charts/flot/jquery.flot.js',
                                            'lib/jquery/charts/flot/jquery.flot.resize.js',
                                            'lib/jquery/charts/flot/jquery.flot.pie.js',
                                            'lib/jquery/charts/flot/jquery.flot.tooltip.js',
                                            'lib/jquery/charts/flot/jquery.flot.orderBars.js',
                                            'app/controllers/dashboard.js',
                                            'app/directives/realtimechart.js',
                                            'app/controllers/energysaving/pump.js'
                                        ]
                                    });
                                }
                            ]
                        }
                    })


                    .state('app.indoormain', {

                        url: '/indoormain',
                        controller:'DashboardCtrl',

                        params: {
                            'CheckedShuttle': '',
                            'CheckedWater': '',
                            'CheckedEnergy': '',
                            'report':'rsh'
                        },
                        views:{
                            '':{templateUrl: 'views/partials/indoormain.html'}, 
                            'indoorfooter@app.indoormain': {
                                templateUrl:'views/partials/indoorfooter.html',

                            }
                        },
                        ncyBreadcrumb: {
                            label: 'Dashboard',
                            description: ''
                        },

                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                            // 'lib/jquery/charts/sparkline/jquery.sparkline.js',
                                            // 'lib/jquery/charts/easypiechart/jquery.easypiechart.js',
                                            // 'lib/jquery/charts/flot/jquery.flot.js',
                                            // 'lib/jquery/charts/flot/jquery.flot.resize.js',
                                            // 'lib/jquery/charts/flot/jquery.flot.pie.js',
                                            // 'lib/jquery/charts/flot/jquery.flot.tooltip.js',
                                            // 'lib/jquery/charts/flot/jquery.flot.orderBars.js',
                                            'app/controllers/dashboard.js',
                                            'app/directives/realtimechart.js',
                                            'app/services/indoor/indoor.js',
                                            'app/controllers/indoor/indoor.js'
                                        ]
                                    });
                                }
                            ]
                        }
                    })


                    .state('app.indoorreshushi', {

                        url: '/indoorreshushi',
                        //controller:'DashboardCtrl',

                        params: {
                            'CheckedShuttle': 'Checked',
                            'report':'rsh'
                        },
                        views:{
                            '':{templateUrl: 'views/partials/indoorreshushi.html'},
                            'indoorfooter@app.indoorreshushi': {
                                templateUrl:'views/partials/indoorfooter.html',

                            }
                        },
                        ncyBreadcrumb: {
                            label: 'Dashboard',
                            description: ''
                        },

                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                            //'lib/jquery/charts/sparkline/jquery.sparkline.js',
                                            //'lib/jquery/charts/easypiechart/jquery.easypiechart.js',
                                            //'lib/jquery/charts/flot/jquery.flot.js',
                                            //'lib/jquery/charts/flot/jquery.flot.resize.js',
                                            //'lib/jquery/charts/flot/jquery.flot.pie.js',
                                            //'lib/jquery/charts/flot/jquery.flot.tooltip.js',
                                            //'lib/jquery/charts/flot/jquery.flot.orderBars.js',
                                            'app/controllers/dashboard.js',
                                            'app/services/indoor/indoor.js',
                                            'app/controllers/indoor/indoor.js',
                                            //'app/directives/realtimechart.js',
                                            //'app/controllers/flot.js'
                                        ]
                                    });
                                }
                            ]
                        }
                    })

                    .state('app.indoornoise', {

                        url: '/indoornoise',
                        controller:'DashboardCtrl',

                        params: {
                            'CheckedShuttle': '',
                            'CheckedWater': 'Checked',
                            'CheckedEnergy': '',
                            'report':'noise'
                        },
                        views:{
                            '':{templateUrl: 'views/partials/indoornoise.html'},
                            'indoorfooter@app.indoornoise': {
                                templateUrl:'views/partials/indoorfooter.html',

                            }
                        },
                        ncyBreadcrumb: {
                            label: 'Dashboard',
                            description: ''
                        },

                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                            // 'lib/jquery/charts/sparkline/jquery.sparkline.js',
                                            // 'lib/jquery/charts/easypiechart/jquery.easypiechart.js',
                                            // 'lib/jquery/charts/flot/jquery.flot.js',
                                            // 'lib/jquery/charts/flot/jquery.flot.resize.js',
                                            // 'lib/jquery/charts/flot/jquery.flot.pie.js',
                                            // 'lib/jquery/charts/flot/jquery.flot.tooltip.js',
                                            // 'lib/jquery/charts/flot/jquery.flot.orderBars.js',
                                            'app/controllers/dashboard.js',
                                            'app/services/indoor/indoor.js',
                                            'app/controllers/indoor/indoor.js',
                                        ]
                                    });
                                }
                            ]
                        }
                    })
                    
                    
                    
                    
                    .state('app.indoorlight', {
                        url: '/indoorlight',
                        controller:'DashboardCtrl',

                        params: {
                            'CheckedEnergy': 'Checked',
                        },
                        views:{
                            '':{templateUrl: 'views/partials/indoorlight.html'},



                            'indoorfooter@app.indoorlight': {
                                templateUrl:'views/partials/indoorfooter.html',

                            }
                        },
                        // templateUrl: 'views/partials/leedshuttlebus.html',
                        ncyBreadcrumb: {
                            label: 'shuttlebus',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                            'lib/jquery/charts/sparkline/jquery.sparkline.js',
                                            'lib/jquery/charts/easypiechart/jquery.easypiechart.js',
                                            'lib/jquery/charts/flot/jquery.flot.js',
                                            'lib/jquery/charts/flot/jquery.flot.resize.js',
                                            'lib/jquery/charts/flot/jquery.flot.pie.js',
                                            'lib/jquery/charts/flot/jquery.flot.tooltip.js',
                                            'lib/jquery/charts/flot/jquery.flot.orderBars.js',
                                            'app/controllers/dashboard.js',
                                            'app/directives/realtimechart.js',
                                            //  'assets/slick/slick.js'
                                        ]
                                    });
                                }
                            ]
                        }
                    })

                    .state('app.indoorpm25', {
                        url: '/indoorpm25',
                        controller:'DashboardCtrl',

                        params: {
                            'CheckedShuttle': '',
                            'CheckedWater': '',
                            'CheckedResource': 'Checked',
                            'report':'pm25'
                        },
                        views:{
                            '':{templateUrl: 'views/partials/indoorpm25.html'},



                            'indoorfooter@app.indoorpm25': {
                                templateUrl:'views/partials/indoorfooter.html',

                            }
                        },
                        // templateUrl: 'views/partials/leedshuttlebus.html',
                        ncyBreadcrumb: {
                            label: 'shuttlebus',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                            // 'lib/jquery/charts/sparkline/jquery.sparkline.js',
                                            // 'lib/jquery/charts/easypiechart/jquery.easypiechart.js',
                                            // 'lib/jquery/charts/flot/jquery.flot.js',
                                            // 'lib/jquery/charts/flot/jquery.flot.resize.js',
                                            // 'lib/jquery/charts/flot/jquery.flot.pie.js',
                                            // 'lib/jquery/charts/flot/jquery.flot.tooltip.js',
                                            // 'lib/jquery/charts/flot/jquery.flot.orderBars.js',
                                            'app/controllers/dashboard.js',
                                            'app/services/indoor/indoor.js',
                                            'app/controllers/indoor/indoor.js',
                                            //  'assets/slick/slick.js'
                                        ]
                                    });
                                }
                            ]
                        }
                    })


                    .state('app.indoorco2', {
                        url: '/indoorco2',
                        controller:'DashboardCtrl',

                        params: {

                            'CheckedAirQuality': 'Checked',
                            'report':'co2'
                        },
                        views:{
                            '':{templateUrl: 'views/partials/indoorco2.html'},



                            'indoorfooter@app.indoorco2': {
                                templateUrl:'views/partials/indoorfooter.html',

                            }
                        },
                        // templateUrl: 'views/partials/leedshuttlebus.html',
                        ncyBreadcrumb: {
                            label: 'shuttlebus',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                            // 'lib/jquery/charts/sparkline/jquery.sparkline.js',
                                            // 'lib/jquery/charts/easypiechart/jquery.easypiechart.js',
                                            // 'lib/jquery/charts/flot/jquery.flot.js',
                                            // 'lib/jquery/charts/flot/jquery.flot.resize.js',
                                            // 'lib/jquery/charts/flot/jquery.flot.pie.js',
                                            // 'lib/jquery/charts/flot/jquery.flot.tooltip.js',
                                            // 'lib/jquery/charts/flot/jquery.flot.orderBars.js',
                                            'app/controllers/dashboard.js',
                                            'app/services/indoor/indoor.js',
                                            'app/controllers/indoor/indoor.js',
                                            //  'assets/slick/slick.js'
                                        ]
                                    });
                                }
                            ]
                        }
                    })



                    .state('app.leedmain', {

                        url: '/leedmain',
                        controller:'DashboardCtrl',

                        params: {
                            'CheckedShuttle': '',
                            'CheckedWater': '',
                            'CheckedEnergy': '',
                        },
                        views:{
                            '':{templateUrl: 'views/partials/leedmain.html'},



                            'leedfooter@app.leedmain': {
                                templateUrl:'views/partials/leedfooter.html',

                            }
                        },
                        ncyBreadcrumb: {
                            label: 'Dashboard',
                            description: ''
                        },

                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                            'lib/jquery/charts/sparkline/jquery.sparkline.js',
                                            'lib/jquery/charts/easypiechart/jquery.easypiechart.js',
                                            'lib/jquery/charts/flot/jquery.flot.js',
                                            'lib/jquery/charts/flot/jquery.flot.resize.js',
                                            'lib/jquery/charts/flot/jquery.flot.pie.js',
                                            'lib/jquery/charts/flot/jquery.flot.tooltip.js',
                                            'lib/jquery/charts/flot/jquery.flot.orderBars.js',
                                            'app/controllers/dashboard.js',
                                            'app/directives/realtimechart.js'
                                        ]
                                    });
                                }
                            ]
                        }
                    })
                    .state('app.leedshuttlebus', {
                        url: '/shuttlebus',
                        controller:'DashboardCtrl',

                        params: {
                            'CheckedShuttle': 'Checked',
                            'CheckedWater': '',
                            'CheckedEnergy': '',
                        },
                        views:{
                            '':{templateUrl: 'views/partials/leedshuttlebus.html'},



                            'leedfooter@app.leedshuttlebus': {
                                templateUrl:'views/partials/leedfooter.html',

                            }
                        },
                       // templateUrl: 'views/partials/leedshuttlebus.html',
                        ncyBreadcrumb: {
                            label: 'shuttlebus',
                            description: ''
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                            'lib/jquery/charts/sparkline/jquery.sparkline.js',
                                            'lib/jquery/charts/easypiechart/jquery.easypiechart.js',
                                            'lib/jquery/charts/flot/jquery.flot.js',
                                            'lib/jquery/charts/flot/jquery.flot.resize.js',
                                            'lib/jquery/charts/flot/jquery.flot.pie.js',
                                            'lib/jquery/charts/flot/jquery.flot.tooltip.js',
                                            'lib/jquery/charts/flot/jquery.flot.orderBars.js',
                                            'app/controllers/dashboard.js',
                                            'app/directives/realtimechart.js',
                                         //  'assets/slick/slick.js'
                                        ]
                                    });
                                }
                            ]
                        }
                    })
                    .state('app.indoorairquality', {
                        url: '/indoorairquality',
                        ncyBreadcrumb: {
                            label: 'indoorairquality',
                            description: ''
                        },
                        controller:'DashboardCtrl',

                        params: {
                            'CheckedAirQuality': 'Checked',
                        
                        },
                        views: {
                            '': {templateUrl: 'views/partials/indoorairquality.html'},


                            'leedfooter@app.indoorairquality': {
                                templateUrl: 'views/partials/leedfooter.html',

                            }
                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                            'lib/jquery/charts/sparkline/jquery.sparkline.js',
                                            'lib/jquery/charts/easypiechart/jquery.easypiechart.js',
                                            'lib/jquery/charts/flot/jquery.flot.js',
                                            'lib/jquery/charts/flot/jquery.flot.resize.js',
                                            'lib/jquery/charts/flot/jquery.flot.pie.js',
                                            'lib/jquery/charts/flot/jquery.flot.tooltip.js',
                                            'lib/jquery/charts/flot/jquery.flot.orderBars.js',
                                            'app/controllers/dashboard.js',
                                            'app/directives/realtimechart.js',
                                          //  'assets/slick/slick.js'
                                        ]
                                    });
                                }
                            ]
                        }
                    })
                    .state('app.leedrecoverablematter', {
                        url: '/leedrecoverablematter',

                        ncyBreadcrumb: {
                            label: 'leedrecoverablematter',
                            description: ''
                        },
                        views: {
                            '': {templateUrl: 'views/partials/leedrecoverablematter.html'},


                            'leedfooter@app.leedrecoverablematter': {
                                templateUrl: 'views/partials/leedfooter.html',

                            }
                        },
                        controller:'DashboardCtrl',

                        params: {
                            'CheckedResource': 'Checked',

                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                            'lib/jquery/charts/sparkline/jquery.sparkline.js',
                                            'lib/jquery/charts/easypiechart/jquery.easypiechart.js',
                                            'lib/jquery/charts/flot/jquery.flot.js',
                                            'lib/jquery/charts/flot/jquery.flot.resize.js',
                                            'lib/jquery/charts/flot/jquery.flot.pie.js',
                                            'lib/jquery/charts/flot/jquery.flot.tooltip.js',
                                            'lib/jquery/charts/flot/jquery.flot.orderBars.js',
                                            'app/controllers/dashboard.js',
                                            'app/directives/realtimechart.js',
                                            //  'assets/slick/slick.js'
                                        ]
                                    });
                                }
                            ]
                        }
                    })


                    .state('app.leedrenewablesource', {
                        url: '/leedrenewablesource',

                        ncyBreadcrumb: {
                            label: 'leedrenewablesource',
                            description: ''
                        },
                        views: {
                            '': {templateUrl: 'views/partials/leedrenewablesource.html'},


                            'leedfooter@app.leedrenewablesource': {
                                templateUrl: 'views/partials/leedfooter.html',

                            }
                        },
                        controller:'DashboardCtrl',

                        params: {
                            'CheckedEnergy': 'Checked',

                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                            'lib/jquery/charts/sparkline/jquery.sparkline.js',
                                            'lib/jquery/charts/easypiechart/jquery.easypiechart.js',
                                            'lib/jquery/charts/flot/jquery.flot.js',
                                            'lib/jquery/charts/flot/jquery.flot.resize.js',
                                            'lib/jquery/charts/flot/jquery.flot.pie.js',
                                            'lib/jquery/charts/flot/jquery.flot.tooltip.js',
                                            'lib/jquery/charts/flot/jquery.flot.orderBars.js',
                                            'app/controllers/dashboard.js',
                                            'app/directives/realtimechart.js',
                                            //  'assets/slick/slick.js'
                                        ]
                                    });
                                }
                            ]
                        }
                    })



                    .state('app.leedtropicalisland', {
                        url: '/leedtropicalisland',

                        ncyBreadcrumb: {
                            label: 'leedtropicalisland',
                            description: ''
                        },
                        views: {
                            '': {templateUrl: 'views/partials/leedtropicalisland.html'},


                            'leedfooter@app.leedtropicalisland': {
                                templateUrl: 'views/partials/leedfooter.html',

                            }
                        },
                        controller:'DashboardCtrl',

                        params: {
                            'CheckedShuttle': 'Checked',

                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                            'lib/jquery/charts/sparkline/jquery.sparkline.js',
                                            'lib/jquery/charts/easypiechart/jquery.easypiechart.js',
                                            'lib/jquery/charts/flot/jquery.flot.js',
                                            'lib/jquery/charts/flot/jquery.flot.resize.js',
                                            'lib/jquery/charts/flot/jquery.flot.pie.js',
                                            'lib/jquery/charts/flot/jquery.flot.tooltip.js',
                                            'lib/jquery/charts/flot/jquery.flot.orderBars.js',
                                            'app/controllers/dashboard.js',
                                            'app/directives/realtimechart.js',
                                            //  'assets/slick/slick.js'
                                        ]
                                    });
                                }
                            ]
                        }
                    })


                    .state('app.leedpriorityparking', {
                        url: '/leedpriorityparking',

                        ncyBreadcrumb: {
                            label: 'leedpriorityparking',
                            description: ''
                        },
                        views: {
                            '': {templateUrl: 'views/partials/leedpriorityparking.html'},


                            'leedfooter@app.leedpriorityparking': {
                                templateUrl: 'views/partials/leedfooter.html',

                            }
                        },
                        controller:'DashboardCtrl',

                        params: {
                            'CheckedShuttle': 'Checked',

                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                            'lib/jquery/charts/sparkline/jquery.sparkline.js',
                                            'lib/jquery/charts/easypiechart/jquery.easypiechart.js',
                                            'lib/jquery/charts/flot/jquery.flot.js',
                                            'lib/jquery/charts/flot/jquery.flot.resize.js',
                                            'lib/jquery/charts/flot/jquery.flot.pie.js',
                                            'lib/jquery/charts/flot/jquery.flot.tooltip.js',
                                            'lib/jquery/charts/flot/jquery.flot.orderBars.js',
                                            'app/controllers/dashboard.js',
                                            'app/directives/realtimechart.js',
                                            //  'assets/slick/slick.js'
                                        ]
                                    });
                                }
                            ]
                        }
                    })


                    .state('app.leedshower', {
                        url: '/leedshower',

                        ncyBreadcrumb: {
                            label: 'leedshower',
                            description: ''
                        },
                        views: {
                            '': {templateUrl: 'views/partials/leedshower.html'},


                            'leedfooter@app.leedshower': {
                                templateUrl: 'views/partials/leedfooter.html',

                            }
                        },
                        controller:'DashboardCtrl',

                        params: {
                            'CheckedShuttle': 'Checked',

                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                            'lib/jquery/charts/sparkline/jquery.sparkline.js',
                                            'lib/jquery/charts/easypiechart/jquery.easypiechart.js',
                                            'lib/jquery/charts/flot/jquery.flot.js',
                                            'lib/jquery/charts/flot/jquery.flot.resize.js',
                                            'lib/jquery/charts/flot/jquery.flot.pie.js',
                                            'lib/jquery/charts/flot/jquery.flot.tooltip.js',
                                            'lib/jquery/charts/flot/jquery.flot.orderBars.js',
                                            'app/controllers/dashboard.js',
                                            'app/directives/realtimechart.js',
                                            //  'assets/slick/slick.js'
                                        ]
                                    });
                                }
                            ]
                        }
                    })


                    .state('app.leedsavewater', {
                        url: '/leedsavewater',

                        ncyBreadcrumb: {
                            label: 'leedsavewater',
                            description: ''
                        },
                        views: {
                            '': {templateUrl: 'views/partials/leedsavewater.html'},


                            'leedfooter@app.leedsavewater': {
                                templateUrl: 'views/partials/leedfooter.html',

                            }
                        },
                        controller:'DashboardCtrl',

                        params: {
                            'CheckedWater': 'Checked',

                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                            'lib/jquery/charts/sparkline/jquery.sparkline.js',
                                            'lib/jquery/charts/easypiechart/jquery.easypiechart.js',
                                            'lib/jquery/charts/flot/jquery.flot.js',
                                            'lib/jquery/charts/flot/jquery.flot.resize.js',
                                            'lib/jquery/charts/flot/jquery.flot.pie.js',
                                            'lib/jquery/charts/flot/jquery.flot.tooltip.js',
                                            'lib/jquery/charts/flot/jquery.flot.orderBars.js',
                                            'app/controllers/dashboard.js',
                                            'app/directives/realtimechart.js',
                                            //  'assets/slick/slick.js'
                                        ]
                                    });
                                }
                            ]
                        }
                    })
                    .state('app.leedirrigation', {
                        url: '/leedirrigation',

                        ncyBreadcrumb: {
                            label: 'leedirrigation',
                            description: ''
                        },
                        views: {
                            '': {templateUrl: 'views/partials/leedirrigation.html'},


                            'leedfooter@app.leedirrigation': {
                                templateUrl: 'views/partials/leedfooter.html',

                            }
                        },
                        controller:'DashboardCtrl',

                        params: {
                            'CheckedWater': 'Checked',

                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                            'lib/jquery/charts/sparkline/jquery.sparkline.js',
                                            'lib/jquery/charts/easypiechart/jquery.easypiechart.js',
                                            'lib/jquery/charts/flot/jquery.flot.js',
                                            'lib/jquery/charts/flot/jquery.flot.resize.js',
                                            'lib/jquery/charts/flot/jquery.flot.pie.js',
                                            'lib/jquery/charts/flot/jquery.flot.tooltip.js',
                                            'lib/jquery/charts/flot/jquery.flot.orderBars.js',
                                            'app/controllers/dashboard.js',
                                            'app/directives/realtimechart.js',
                                            //  'assets/slick/slick.js'
                                        ]
                                    });
                                }
                            ]
                        }
                    })



                    .state('app.leedrainwater', {
                        url: '/leedrainwater',

                        ncyBreadcrumb: {
                            label: 'leedrainwater',
                            description: ''
                        },
                        views: {
                            '': {templateUrl: 'views/partials/leedrainwater.html'},


                            'leedfooter@app.leedrainwater': {
                                templateUrl: 'views/partials/leedfooter.html',

                            }
                        },
                     

                        params: {
                            'CheckedWater': 'Checked',

                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                            'lib/jquery/charts/sparkline/jquery.sparkline.js',
                                            'lib/jquery/charts/easypiechart/jquery.easypiechart.js',
                                            'lib/jquery/charts/flot/jquery.flot.js',
                                            'lib/jquery/charts/flot/jquery.flot.resize.js',
                                            'lib/jquery/charts/flot/jquery.flot.pie.js',
                                            'lib/jquery/charts/flot/jquery.flot.tooltip.js',
                                            'lib/jquery/charts/flot/jquery.flot.orderBars.js',
                                            'app/controllers/dashboard.js',
                                            'app/directives/realtimechart.js',
                                            'app/controllers/bacnetcontroller/bacnetTagController.js'
                                            //  'assets/slick/slick.js'
                                        ]
                                    });
                                }
                            ]
                        }
                    })


                    .state('app.leedhighmotor', {
                        url: '/leedhighmotor',

                        ncyBreadcrumb: {
                            label: 'leedhighmotor',
                            description: ''
                        },
                        views: {
                            '': {templateUrl: 'views/partials/leedhighmotor.html'},


                            'leedfooter@app.leedhighmotor': {
                                templateUrl: 'views/partials/leedfooter.html',

                            }
                        },
                        controller:'DashboardCtrl',

                        params: {
                            'CheckedEnergy': 'Checked',

                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                            'lib/jquery/charts/sparkline/jquery.sparkline.js',
                                            'lib/jquery/charts/easypiechart/jquery.easypiechart.js',
                                            'lib/jquery/charts/flot/jquery.flot.js',
                                            'lib/jquery/charts/flot/jquery.flot.resize.js',
                                            'lib/jquery/charts/flot/jquery.flot.pie.js',
                                            'lib/jquery/charts/flot/jquery.flot.tooltip.js',
                                            'lib/jquery/charts/flot/jquery.flot.orderBars.js',
                                            'app/controllers/dashboard.js',
                                            'app/directives/realtimechart.js',
                                            //  'assets/slick/slick.js'
                                        ]
                                    });
                                }
                            ]
                        }
                    })
                    .state('app.leedledlight', {
                        url: '/leedledlight',

                        ncyBreadcrumb: {
                            label: 'leedledlight',
                            description: ''
                        },
                        views: {
                            '': {templateUrl: 'views/partials/leedledlight.html'},


                            'leedfooter@app.leedledlight': {
                                templateUrl: 'views/partials/leedfooter.html',

                            }
                        },
                        controller:'DashboardCtrl',

                        params: {
                            'CheckedEnergy': 'Checked',

                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                            'lib/jquery/charts/sparkline/jquery.sparkline.js',
                                            'lib/jquery/charts/easypiechart/jquery.easypiechart.js',
                                            'lib/jquery/charts/flot/jquery.flot.js',
                                            'lib/jquery/charts/flot/jquery.flot.resize.js',
                                            'lib/jquery/charts/flot/jquery.flot.pie.js',
                                            'lib/jquery/charts/flot/jquery.flot.tooltip.js',
                                            'lib/jquery/charts/flot/jquery.flot.orderBars.js',
                                            'app/controllers/dashboard.js',
                                            'app/directives/realtimechart.js',
                                            //  'assets/slick/slick.js'
                                        ]
                                    });
                                }
                            ]
                        }
                    })


                    .state('app.leedheatpump', {
                        url: '/leedheatpump',

                        ncyBreadcrumb: {
                            label: 'leedheatpump',
                            description: ''
                        },
                        views: {
                            '': {templateUrl: 'views/partials/leedheatpump.html'},


                            'leedfooter@app.leedheatpump': {
                                templateUrl: 'views/partials/leedfooter.html',

                            }
                        },
                        controller:'DashboardCtrl',

                        params: {
                            'CheckedEnergy': 'Checked',

                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                            'lib/jquery/charts/sparkline/jquery.sparkline.js',
                                            'lib/jquery/charts/easypiechart/jquery.easypiechart.js',
                                            'lib/jquery/charts/flot/jquery.flot.js',
                                            'lib/jquery/charts/flot/jquery.flot.resize.js',
                                            'lib/jquery/charts/flot/jquery.flot.pie.js',
                                            'lib/jquery/charts/flot/jquery.flot.tooltip.js',
                                            'lib/jquery/charts/flot/jquery.flot.orderBars.js',
                                            'app/controllers/dashboard.js',
                                            'app/directives/realtimechart.js',
                                            //  'assets/slick/slick.js'
                                        ]
                                    });
                                }
                            ]
                        }
                    })

                    .state('app.leedfsc', {
                        url: '/leedfsc',

                        ncyBreadcrumb: {
                            label: 'leedfsc',
                            description: ''
                        },
                        views: {
                            '': {templateUrl: 'views/partials/leedfsc.html'},


                            'leedfooter@app.leedfsc': {
                                templateUrl: 'views/partials/leedfooter.html',

                            }
                        },
                        controller:'DashboardCtrl',

                        params: {
                            'CheckedResource': 'Checked',

                        },
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                            'lib/jquery/charts/sparkline/jquery.sparkline.js',
                                            'lib/jquery/charts/easypiechart/jquery.easypiechart.js',
                                            'lib/jquery/charts/flot/jquery.flot.js',
                                            'lib/jquery/charts/flot/jquery.flot.resize.js',
                                            'lib/jquery/charts/flot/jquery.flot.pie.js',
                                            'lib/jquery/charts/flot/jquery.flot.tooltip.js',
                                            'lib/jquery/charts/flot/jquery.flot.orderBars.js',
                                            'app/controllers/dashboard.js',
                                            'app/directives/realtimechart.js',
                                            //  'assets/slick/slick.js'
                                        ]
                                    });
                                }
                            ]
                        }
                    })

                    .state('app.madayun', {

                        url: '/madayun',
                        controller:'DashboardCtrl',

                        params: {
                            'CheckedShuttle': '',
                            'CheckedWater': '',
                            'CheckedEnergy': '',
                        },
                        views:{
                            '':{templateUrl: 'views/partials/madayun.html'},
                            'indoorfooter@app.indoormain': {
                                templateUrl:'views/partials/madayun.html',

                            }
                        },
                        ncyBreadcrumb: {
                            label: 'Dashboard',
                            description: ''
                        },

                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                            'lib/jquery/charts/sparkline/jquery.sparkline.js',
                                            'lib/jquery/charts/easypiechart/jquery.easypiechart.js',
                                            'lib/jquery/charts/flot/jquery.flot.js',
                                            'lib/jquery/charts/flot/jquery.flot.resize.js',
                                            'lib/jquery/charts/flot/jquery.flot.pie.js',
                                            'lib/jquery/charts/flot/jquery.flot.tooltip.js',
                                            'lib/jquery/charts/flot/jquery.flot.orderBars.js',
                                            'app/controllers/dashboard.js',
                                            'app/directives/realtimechart.js',
                                            'app/controllers/flot.js'
                                        ]
                                    });
                                }
                            ]
                        }
                    })


            }
        ]
    );