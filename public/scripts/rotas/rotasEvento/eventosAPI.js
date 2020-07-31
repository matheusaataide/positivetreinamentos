angular.module("positive").factory("eventosAPI", function ($http, config) {
	var _getEventos = function (limite, todos) {
		return $http.get(config.baseUrl + "/eventos?limit=" + limite + (todos ? "&mostrar=todos" : ""));
	};

	var _getEvento = function (id) {
		return $http.get(config.baseUrl + "/eventos/" + id);
	};

	var _addEvento = function (evento) { 
		return $http.post(config.baseUrl + "/eventos", evento);
	};

	var _removeEvento = function (id) {
		return $http.delete(config.baseUrl + "/eventos/" + id)
	}

	var _updateEvento = function (post) {
		return $http.put(config.baseUrl + "/eventos/" + post.id, post);
	}

	return {
		getEventos: _getEventos,
		getEvento: _getEvento,
		adicionarEvento: _addEvento,
		atualizarEvento: _updateEvento,
		excluirEvento: _removeEvento
	};
});