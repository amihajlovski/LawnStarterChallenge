angular.module('ngBoilerplate', [
    'templates-app',
    'templates-common',
    'ngBoilerplate.home',
    'ngBoilerplate.about',
    'ui.router'
])

    .config(function myAppConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/name');
    })

    .run(function run($rootScope, $timeout, ENTER_KEY_CODE) {

        var handleKeyboardEnterButton = function (keyCode) {
            if (keyCode && keyCode === ENTER_KEY_CODE) {
                $timeout(function () {
                    angular.element(document.getElementById('next')).triggerHandler('click');
                }, 0);
            }
        };

        var bindEvents = function () {
            $rootScope.$on('$stateChangeStart', function (e, toState, toParams, fromState, fromParams) {
                $rootScope.prevPage = fromState.name;
                $rootScope.currentPage = toState.name;
            });
            document.addEventListener('keydown', function (event) {
                handleKeyboardEnterButton(event.keyCode);
            });
        };

        bindEvents();

    });