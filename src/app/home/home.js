angular.module('ngBoilerplate.home', [
    'ui.router'
])
    .config(function config($stateProvider) {
        $stateProvider.state('name', {
            url: '/name',
            views: {
                "main": {
                    controller: 'HomeCtrl',
                    templateUrl: 'home/home.tpl.html'
                }
            },
            data: {pageTitle: 'Home'}
        })
            .state('email', {
                url: '/email',
                views: {
                    "main": {
                        controller: 'HomeCtrl',
                        templateUrl: 'home/email.tpl.html'
                    }
                },
                data: {pageTitle: 'Email'}
            })
            .state('comment', {
                url: '/comment',
                views: {
                    "main": {
                        controller: 'HomeCtrl',
                        templateUrl: 'home/comment.tpl.html'
                    }
                },
                data: {pageTitle: 'Comment'}
            });
    })

    /**
     * And of course we define a controller for our route.
     */
    .controller('HomeCtrl', function HomeController($scope, UserFactory, $state, $rootScope) {

        var successCallback = function () {
            $state.go('success');
        };

        var failCallback = function () {
        };

        $scope.isInputValid = function (property) {
            if (property === 'name') {
                return UserFactory.validateName($scope.user.name);
            }
            if (property === 'email') {
                return UserFactory.validateEmail($scope.user.email);
            }
            if (property === 'comment') {
                return UserFactory.validateMessage($scope.user.comment);
            }
            return false;
        };

        $scope.goToNextPage = function (url) {
            if (url && $scope.isInputValid($rootScope.currentPage)) {
                UserFactory.saveUserInMemory($scope.user);
                $state.go(url);
            }
        };

        $scope.goBack = function (url) {
            if(url){
                $state.go(url);
            }
        };

        $scope.submitForm = function () {
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

