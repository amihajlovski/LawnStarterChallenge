/**
 * Created by amihajlovski on 11.8.2016.
 */

angular.module('ngBoilerplate')
  .factory('UserFactory', function ($rootScope, config, $http, $q, $timeout, API_URL) {

      var factory = {};

      factory.user = {};

      factory.validateName = function (name){
          return name && name.length > 0;
      };

      factory.validateEmail = function (email){
          if(!email){
            return false;
          }
          var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return regex.test(email);
      };

      factory.validateMessage = function(comment){
          return typeof comment !== 'undefined' && comment.length > 0;
      };

      factory.saveUserInMemory = function (user) {
          factory.user = user;
      };

      factory.postRequest = function (data) {
          return new ServiceProvider($rootScope, config, $http, $q, $timeout, API_URL).post(data, null);
      };

      factory.getUser = function(){
          return factory.user;
      };

      return factory;

  });
