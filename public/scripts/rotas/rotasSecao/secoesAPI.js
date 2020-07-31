angular.module("positive").factory("secoesAPI", function ($http, config) {
	var _getSecaoPorChave = function (chave) {
		return $http.get(config.baseUrl + "/secoes?chave=" + chave);
	};
	var _salvarSecao = function (secao) {
		return $http.post(config.baseUrl + "/secoes", secao);
    };
    
	return {
        getSecaoPorChave: _getSecaoPorChave,
        salvarSecao: _salvarSecao
	};
});