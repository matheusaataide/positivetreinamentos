angular.module("positive").factory("usersAPI", function ($http, config) {
	var _getUsers = function () {
		return $http.get(config.baseUrl + "/users");
	};

	var _getUser = function (id) {
		return $http.get(config.baseUrl + "/users/" + id);
	};

	var _addUser = function (user) {
		return $http.post(config.baseUrl + "/users", user);
	};

	var _signin = function (u) {  
		return $http.post(config.baseUrl + "/signin", u);
	}
	
	return {
		getUsers: _getUsers,
		getUser: _getUser,
		addUser: _addUser,
		signin: _signin
	};
});