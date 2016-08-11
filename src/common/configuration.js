/**
 * Created by amihajlovski on 12.8.2016.
 */

angular.module('ngBoilerplate')
    .factory('config', function (API_URL) {

        return {
            preparePostRequest: function (method, serviceEndpoint, newData, customParam) {
                var url;
                var params;
                url = serviceEndpoint;
                params = {
                };
                if (customParam) {
                    angular.extend(params, customParam);
                }
                var headers = {};

                return {
                    method: method,
                    url: url,
                    data: angular.toJson(newData),
                    headers: headers,
                    params: params
                };
            }
        };

    });