angular.module("positive")
	// ADMIN Listar usuários
	.controller("usersListCtrl", function ($scope, $rootScope, $location, users, $filter) {    
		$scope.users = users.data;

		$scope.viewUser = function (user) {
			$location.path("/admin/usuarios/" + user.userId);
		};
	})

	// ADMIN Adicionar usuários
	.controller("usersAddCtrl", function ($scope, $rootScope, usersAPI, $location) {
		$scope.addUser = function (newUser) {
			usersAPI.addUser(newUser).success(function (data) {
				delete $scope.newUser;
				$scope.userForm.$setPristine();

				$rootScope.notification = {
					text: "Enviamos para " + newUser.userNicename + " um email com o link para confirmar sua entrada no sistema!",
					type: 'success'
				};

				$location.path("/admin/usuarios");
			});
		};
	})

	// ADMIN Editar usuários
	.controller("usersUpdateCtrl", function ($scope, $routeParams, user) {
		$scope.user = user.data;
	})

	// Fazer login no sistema 
	.controller('loginCtrl', function ($scope, $location, authService) {
		$scope.doLogin = function(u) {
			const user = authService.signin(u);
			$scope.info = "Usuário e/ou senha incorretos.";
		}
	});