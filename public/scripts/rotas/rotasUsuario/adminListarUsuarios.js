// ADMIN Listar usuários
angular.module("positive")
    .config(['$routeProvider', function($routeProvider){        
        $routeProvider.when("/admin/usuarios", {
            templateUrl: "./scripts/rotas/rotasUsuario/adminListarUsuarios.html",
            controller: "adminListarUsuariosCtrl",
            authorize: true,
            resolve: {
                usuarios: function (usuariosAPI) {
                    return usuariosAPI.getUsuarios();
                }
            }
        });
    }])
    .controller("adminListarUsuariosCtrl", function ($scope, usuarios, usuariosAPI) {    
        $scope.usuarios = usuarios.data;
        
        $scope.salvarUsuario = function (novoUsuario) {
			usuariosAPI.saveUsuario(novoUsuario).success(function (data) {
				delete $scope.novoUsuario;
				$scope.usuarioForm.$setPristine();
			});
        };
        
        $scope.selecionarUsuario = function (u) {
            $scope.usuarioSelecionado = u;
        }

        $scope.apagarUsuario = function (usuario) {
            usuariosAPI.deleteUsuario(usuario.id).success(function (data) {});
        };
	});



