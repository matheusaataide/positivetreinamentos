angular.module('positive').directive('simpleNavbar', function () {
    return {
		restrict: 'E',
		transclude: true,
        templateUrl: './partials/navbarAdmin.html',
        controller: function($scope, $location, authService, mensagensAPI) {	
            mensagensAPI.getMensagens(3).then(function (result) {
                $scope.mensagens = result.data;
                console.log('controller de msgs OK');
            });

            $scope.logout = function () {
				authService.logout();
				$location.path('/login');
			}
            
        },
    };
});