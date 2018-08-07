/**
 * Created by Allan on 10/28/2016.
 */
app.factory('DashboardService', function($http) {
    return {
        getDashboardData:function(a,b,callback){
            $http.get(getAPI()+'seed-api/web/v1/energyprofilebaselinereports/q?period=day&date[from]='+a+'&date[to]='+b+'&spaceguids[]=1dc5f392-e0f7-4f42-b03f-980ec8bfeb5b')
                .success(function (response, status, headers, config) {
                    callback(null, response);
                })
                .error(function (e) {
                    callback(e);
                });
        },

        getDashboardDataMeter:function(a,b,meterguid,callback){
            $http.get(getAPI()+'seed-api/web/v1/energyprofilebaselinereports/q?period=day&date[from]='+a+'&date[to]='+b+'&meterguids[]='+meterguid)
                .success(function (response, status, headers, config) {
                    callback(null, response);
                })
                .error(function (e) {
                    callback(e);
                });
        }
        //,
        // getDevices:function(callback){
        //
        //     callback(null,[{id:1,name:"AHU1",area:"一层"},
        //         {id:2,name:"AHU2",area:"一层"},
        //         {id:3,name:"AHU3",area:"二层"},
        //         {id:4,name:"AHU4",area:"三层"},
        //         {id:5,name:"AHU5",area:"四层"}]);
        // }

    };
});  