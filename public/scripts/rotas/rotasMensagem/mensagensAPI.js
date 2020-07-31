angular.module("positive")
	.factory("mensagensAPI", function ($http, config) {
		var _getMsgs = function (limit) {
			return $http.get(config.baseUrl + "/mensagens?limit=" + limit);
		};
		
		var _addMsg = function (msg) { 
			return $http.post(config.baseUrl + "/mensagens", msg);
		};

		var _updateMsg = function (msg) {
			return $http.put(config.baseUrl + "/mensagens/" + msg.id, msg);
		}

		return {
			getMensagens: _getMsgs,
			adicionarMensagem: _addMsg,
			atualizarMensagem: _updateMsg
		};
	});