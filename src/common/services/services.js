/**
 * Created by amihajlovski on 12.8.2016.
 */

var CANCEL_REASON = 'response failed';

function ServiceProvider($rootScope, config, http, q, $timeout, endpoint) {
    this.$rootScope = $rootScope;
    this.config = config;
    this.http = http;
    this.q = q;
    this.endpoint = endpoint;
    this.$timeout = $timeout;
}

ServiceProvider.prototype.post = function (data, httpParams) {
    var defer = this.q.defer();
    var httpConf = this.config.preparePostRequest('POST', this.endpoint, data, httpParams);
    httpConf.timeout = defer.promise;
    if (httpParams) {
        angular.extend(httpConf, httpParams);
    }
    defer.promise = this.http(httpConf);
    defer.abort = function () {
        defer.resolve(CANCEL_REASON);
    };
    return defer;
};