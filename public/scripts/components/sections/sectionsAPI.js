angular.module("positive")
	.factory("sectionsAPI", function ($http, config) {
		var _getSection = function (key) {
			return $http.get(config.baseUrl + "/sections/" + key);
		};
		var _saveSection = function (key, section) {
			return $http.post(config.baseUrl + "/sections/" + key, section);
		};
		
		var _getTransformations = function () { 
			return $http.get(config.baseUrl + "/transformations");
		};

		var _getGraduations = function () {
			return $http.get(config.baseUrl + "/graduations");
		};
		var _saveGraduations = function (member, grads) {
			return $http.post(config.baseUrl + "/graduations/" + member, grads);
		};
		var _deleteGraduation = function (id) {
			return $http.delete(config.baseUrl + "/graduations/" + id);
		};
		var _incrementViews = function () {
			return $http.post(config.baseUrl + "/views/sections/" + 0);
		}

		return {
			getSection: _getSection,
			saveSection: _saveSection,
			getTransformations: _getTransformations,
			getGraduations: _getGraduations,
			saveGraduations: _saveGraduations,
			deleteGraduation: _deleteGraduation,
			incrementViews: _incrementViews
		};
	});