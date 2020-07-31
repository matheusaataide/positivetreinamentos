angular.module("positive").factory("postagensAPI", function ($http, config) {
	var _getPostagens = function (limite, todos) {
		return $http.get(config.baseUrl + "/postagens?limit=" + limite + (todos ? "&mostrar=todos" : ""));
	};

	var _getPostagem = function (id) {
		return $http.get(config.baseUrl + "/postagens/" + id);
	};

	var _addPostagem = function (post) { 
		return $http.post(config.baseUrl + "/postagens", post);
	};

	var _removePostagem = function (id) {
		return $http.delete(config.baseUrl + "/postagens/" + id)
	}

	var _updatePostagem = function (post) {
		return $http.put(config.baseUrl + "/postagens/" + post.id, post);
	}

	return {
		getPostagens: _getPostagens,
		getPostagem: _getPostagem,
		adicionarPostagem: _addPostagem,
		atualizarPostagem: _updatePostagem,
		excluirPostagem: _removePostagem
	};
});