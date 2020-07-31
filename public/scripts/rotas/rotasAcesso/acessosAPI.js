angular.module("positive")
	.factory("acessosAPI", function ($http, config) {
		var _getAcessos = function () {
			return $http.get(config.baseUrl + "/acessos");
		};

		var _getAcessosPorPagina = function (tipoPagina, idPagina) {
			return $http.get(config.baseUrl + "/acessos/" + tipoPagina + "/" + idPagina);
		};

		var _visualizar = function (tipoPagina, idPagina, caminho) {
			return $http.post(config.baseUrl + "/acessos", {
                tipoPagina: tipoPagina,
                idPagina: idPagina,
                caminho: caminho
            });
		};

		return {
			getAcessos: _getAcessos,
			getAcessosPorPagina: _getAcessosPorPagina,
			visualizar: _visualizar
		};
	});