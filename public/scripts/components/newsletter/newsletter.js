angular.module('positive')
    .factory("newsletterAPI", function ($http, config) {
        var _getLeads = function () {
            return $http.get(config.baseUrl + "/newsletter");
        };

        var _addLead = function (lead) { 
            return $http.post(config.baseUrl + "/newsletter", lead);
        };

        var _removeLead = function (id) {
            return $http.delete(config.baseUrl + "/newsletter/" + id)
        }

        return {
            getLeads: _getLeads,
            addLead: _addLead,
            removeLEad: _removeLead
        };
    })
    
	.controller("postsListCtrl", function ($scope, posts, $rootScope, postsAPI) {    
		$scope.posts = posts.data;

		$scope.selectPost = function (post) {
			$scope.selectedPost = post;
		}
		$scope.deletePost = function (post) {
			postsAPI.removePost(post.postId).success(function (data) {
				$scope.posts = $scope.posts.filter(p => {
					if (p.postId != post.postId) return p;
				});
				
				$scope.notification = {
					text: "A publicação \"" + post.postTitle + "\" foi excluída permanentemente do sistema!",
					type: 'warning'
				};

				
			});
		};
		$scope.hidePost = function (post) {
			post.postStatus = false;
			postsAPI.updatePost(post).success(function (data) {
				delete $scope.post;
				$scope.blogForm.$setPristine();
			});
			$rootScope.notification = {};
		};
		$scope.verifySelectedPost = function (posts) {
			$scope.hasSelectedPost = posts.some(function (post) {
				return post.selected;
			});
		};
		$scope.orderBy = function (field) {
			$scope.criteria = field;
			$scope.orderCriteria = !$scope.orderCriteria;
		};
	});