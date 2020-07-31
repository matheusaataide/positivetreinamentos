angular.module("positive")
	.factory("depoimentsAPI", function ($http, config) {
		var _getDepoiments = function () {
			return $http.get(config.baseUrl + "/depoiments");
		};

		var _getDepoiment = function (id) {
			return $http.get(config.baseUrl + "/depoiments/" + id);
		};

		var _addDepoiment = function (depoiment, file) { 
			return $http.post(config.baseUrl + "/depoiments", depoiment);
		};

		var _removeDepoiment = function (id) {
			return $http.delete(config.baseUrl + "/depoiments/" + id)
		}

		var _updateDepoiment = function (depoiment) {
			return $http.post(config.baseUrl + "/depoiments/" + depoiment.depoimentId, depoiment);
		}

		return {
			getDepoiments: _getDepoiments,
			getDepoiment: _getDepoiment,
			addDepoiment: _addDepoiment,
			updateDepoiment: _updateDepoiment,
			removeDepoiment: _removeDepoiment
		};
	});