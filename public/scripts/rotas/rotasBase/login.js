// ADMIN Login
angular.module("positive")
    .config(['$routeProvider', function($routeProvider){        
        $routeProvider.when("/login", {
            templateUrl: "./scripts/rotas/rotasBase/login.html",
            controller: "loginCtrl"
        });
    }])
    .controller("loginCtrl", function ($scope, authService, $location) {    
        $scope.fazerLogin = function (dados) {
            authService.signin(dados);
            $scope.info = "Usuário e/ou senha incorretos.";
        };
	});



