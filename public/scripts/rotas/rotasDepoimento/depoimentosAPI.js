angular.module("positive")
	.factory("depoimentosAPI", function ($http, config) {
		var _getDepoimentos = function () {
			return $http.get(config.baseUrl + "/depoimentos");
		};

		var _getDepoimento = function (id) {
			return $http.get(config.baseUrl + "/depoimentos/" + id);
		};

		var _addDepoimento = function (depoimento) { 
			return $http.post(config.baseUrl + "/depoimentos", depoimento);
		};

		var _removeDepoimento = function (id) {
			return $http.delete(config.baseUrl + "/depoimentos/" + id)
		}

		var _updateDepoimento = function (depoimento) {
			return $http.post(config.baseUrl + "/depoimentos/" + depoimento.depoimentoId, depoimento);
		}

		return {
			getDepoimentos: _getDepoimentos,
			getDepoimento: _getDepoimento,
			adicionarDepoimento: _addDepoimento,
			atualizarDepoimento: _updateDepoimento,
			excluirDepoimento: _removeDepoimento
		};
	});