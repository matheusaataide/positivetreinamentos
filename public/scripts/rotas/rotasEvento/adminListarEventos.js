angular.module("positive").config(function($routeProvider, $locationProvider){
        $routeProvider.when("/admin/agenda", {
            templateUrl: "./scripts/rotas/rotasEvento/adminListarEventos.html",
            controller: "adminListarEventosCtrl",
            authorize: true,
            resolve: {
                eventos: function (eventosAPI) {
                    return eventosAPI.getEventos(10, true);
				}, 
				anuncio: function (secoesAPI) {
					return secoesAPI.getSecaoPorChave('anuncio');
				}
            }
        });
    })
    .controller("adminListarEventosCtrl", function ($scope, $location, config, fileUploadService, eventos, anuncio, eventosAPI, secoesAPI) { 
		$scope.eventos = eventos.data.rows;
		$scope.previewImage = anuncio.data ? anuncio.data.conteudo : '';
		
		$scope.criterioBusca = '';
		$scope.criterioOrdenacao = {
			campo: 'createdAt',
			sentido: false
		};

		$scope.selectedFile = [];
		$scope.selectFile = function (e) {
			var reader = new FileReader();
			reader.onload = function (e) {
				$scope.previewImage = e.target.result;
				$scope.$apply();
			};
	
			reader.readAsDataURL(e.target.files[0]);
		};
		$scope.uploadFile = function () {
			var file = $scope.file;
			var uploadUrl = config.baseUrl + "/upload",
				promise = fileUploadService.uploadFileToUrl(file, uploadUrl);
	
			return promise.then(function (response) {
				return response.arquivo;
			}, function () {
				$scope.serverResponse = 'Tivemos problemas com o upload.';
				return '';
			})
		};
		$scope.salvarAnuncio = function() {
			if ($scope.previewImage) {
				$scope.uploadFile().then(function (data) {
					secoesAPI.salvarSecao({
						tipo: 'anuncio',
						chave: 'anuncio',
						conteudo: data
					}).then(function (result) {
						$location.path('/admin/agenda');
					});
				});
			}
		}


		$scope.ordenarPor = function (campo) {
			$scope.criterioOrdenacao.campo = campo;
			$scope.criterioOrdenacao.sentido = !$scope.criterioOrdenacao.sentido;
		};
		$scope.excluirEvento = function (evento) {
			eventosAPI.excluirEvento(evento.id).success(function (data) {
				$scope.eventos = $scope.eventos.filter(function (e) {
					return e.id !== evento.id;
				});
			});
		};
		$scope.mudarVisibilidade = function (evento) {
			evento.status = !evento.status;
			eventosAPI.atualizarEvento(evento).success(function (data) {

			});
		};
	})