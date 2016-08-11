
    angular.module('ngBoilerplate.home', [
        'ui.router'
    ])
    .config(function config($stateProvider) {
        $stateProvider.state('home', {
            url: '/home',
            views: {
                "main": {
                    controller: 'HomeCtrl',
                    templateUrl: 'home/home.tpl.html'
                }
            },
            data: {pageTitle: 'Home'}
        });
    })

    /**
     * And of course we define a controller for our route.
     */
    .controller('HomeCtrl', function HomeController($scope, UserFactory, $state) {

        $scope.isFormValid = function(){
            return UserFactory.validateName($scope.user.name) && UserFactory.validateEmail($scope.user.email) &&
                UserFactory.validateMessage($scope.user.comment);
        };

        var successCallback = function () {
            $state.go('success');
        };

        var failCallback = function () {
        };

        $scope.submitForm = function(){
            UserFactory.saveUserInMemory($scope.user);
            UserFactory.postRequest({
                name: $scope.user.name,
                email: $scope.user.email,
                message: $scope.user.comment
            }).promise.then(successCallback, failCallback);
        };

        var init = function () {
            $scope.user = UserFactory.getUser() || {};
        };

        init();
    });

