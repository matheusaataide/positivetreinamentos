angular.module("positive").config(function($routeProvider, $locationProvider){
        $routeProvider.when("/admin/blog", {
            templateUrl: "./scripts/rotas/rotasPostagem/adminListarPostagens.html",
            controller: "adminListarPostagensCtrl",
            authorize: true,
            resolve: {
                postagens: function (postagensAPI) {
                    return postagensAPI.getPostagens(10, true);
                }
            }
        });
    })
    .controller("adminListarPostagensCtrl", function ($scope, postagens, postagensAPI) { 
		$scope.postagens = postagens.data.rows;
		
		$scope.criterioBusca = '';
		$scope.criterioOrdenacao = {
			campo: 'createdAt',
			sentido: false
		};

		//$scope.selecionarPostagem = function (postagem) {
		//	$scope.postagemSelecionada = postagem;
		//};
		$scope.ordenarPor = function (campo) {
			$scope.criterioOrdenacao.campo = campo;
			$scope.criterioOrdenacao.sentido = !$scope.criterioOrdenacao.sentido;
		};
		$scope.excluirPostagem = function (postagem) {
			postagensAPI.excluirPostagem(postagem.id).success(function (data) {
				$scope.postagens = $scope.postagens.filter(function (p) {
					return p.id !== postagem.id;
				});
			});
		};
		$scope.mudarVisibilidade = function (postagem) {
			postagem.status = !postagem.status;
			postagensAPI.atualizarPostagem(postagem).success(function (data) {

			});
		};
	})