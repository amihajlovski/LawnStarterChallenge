/**
 * Created by amihajlovski on 12.8.2016.
 */
angular.module( 'ngBoilerplate.about', [
    'ui.router',
    'ui.bootstrap'
])

    .config(function config( $stateProvider ) {
        $stateProvider.state('success', {
            url: '/success',
            views: {
                "main": {
                    controller: 'HomeCtrl',
                    templateUrl: 'success/success.tpl.html'
                }
            },
            data:{ pageTitle: 'Success' }
        });
    })

    .controller( 'SuccessCtrl', function AboutCtrl($scope, $state, UserFactory) {
        $scope.redirect = function () {
            $state.go('comment');
        };

        var init = function () {
            $scope.user = UserFactory.getUser();
        };

        init();
    })

;