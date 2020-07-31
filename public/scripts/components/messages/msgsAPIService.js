angular.module("positive")
	.factory("msgsAPI", function ($http, config) {
		var _getMsgs = function (limit) {
			return $http.get(config.baseUrl + "/msgs?limit=" + limit);
		};
		
		var _addMsg = function (msg) { 
			return $http.post(config.baseUrl + "/msgs", msg);
		};

		var _updateMsg = function (msg) {
			return $http.post(config.baseUrl + "/msgs/" + msg.msgId, msg);
		}

		return {
			getMsgs: _getMsgs,
			addMsg: _addMsg,
			updateMsg: _updateMsg
		};
	});