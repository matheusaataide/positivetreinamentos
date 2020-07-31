angular.module("positive").factory("postsAPI", function ($http, config) {
	var _getPosts = function (limit, showAll) {
		var requestUrl = config.baseUrl + "/posts?limit=" + limit;

		if (showAll) requestUrl += "&show=all";

		return $http.get(requestUrl);
	};

	var _getPost = function (id) {
		return $http.get(config.baseUrl + "/posts/" + id);
	};

	var _addPost = function (post, file) { 
		return $http.post(config.baseUrl + "/posts", post);
	};

	var _removePost = function (id) {
		return $http.delete(config.baseUrl + "/posts/" + id)
	}

	var _updatePost = function (post) {
		return $http.post(config.baseUrl + "/posts/" + post.postId, post);
	}

	var _incrementViews = function (id) {
		return $http.post(config.baseUrl + "/views/posts/" + id);
	}


	return {
		getPosts: _getPosts,
		getPost: _getPost,
		addPost: _addPost,
		updatePost: _updatePost,
		removePost: _removePost,
		incrementViews: _incrementViews
	};
});