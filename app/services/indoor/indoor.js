/**
 * Created by Allan on 10/28/2016.
 */
app.factory('IndoorService', function($http) {
    return {
        getTrendData:function(query,callback){
            $http.get(getAPI()+'seed-api/web/v1/hybriddatas/q', { params: query })
                .success(function (response, status, headers, config) {
                    callback(null, response);
                })
                .error(function (e) {
                    callback(e);
                });
        }

    };
});  