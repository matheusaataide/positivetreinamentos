angular.module("positive")
	// ADMIN Listar posts
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
	})

	// ADMIN Criar postagem
	.controller("postsAddCtrl", function ($scope, $location, $rootScope, postsAPI, config, fileUploadService) {
		$scope.post = { postType: 'blog', postStatus: true };
		
		$scope.selectedFile = [];
		$scope.selectFile = function (e) {
			var reader = new FileReader();
			reader.onload = function (e) {
				$scope.previewImage = e.target.result;
				$scope.$apply();
			};

			reader.readAsDataURL(e.target.files[0]);
		};

		$scope.uploadFile = function () {
			var file = $scope.file;
			var uploadUrl = config.baseUrl + "/upload",
                promise = fileUploadService.uploadFileToUrl(file, uploadUrl);
 
            return promise.then(function (response) {
               	return response.filename;
            }, function () {
                $scope.serverResponse = 'Tivemos problemas com o upload.';
            })
		};
		
		$scope.savePost = async function (newPost) {
			if ($scope.previewImage) {
				newPost.postImg = await $scope.uploadFile();
			} else {
				newPost.postImg = '';
			}

			postsAPI.addPost(newPost).success(function (data) {
				delete $scope.post;
				$scope.blogForm.$setPristine();
	
				$rootScope.notification = {
					text: "A publicação '" + newPost.postTitle + "' já está disponível!",
					type: 'success'
				};
	
				$location.path("/admin/blog");
			});
		};
	})

	// ADMIN Atualizar postagem
	.controller("postsUpdateCtrl", function ($scope, $location, $rootScope, post, postsAPI, config, fileUploadService) {
		var thisPost = post.data.thisPost
		$scope.post = thisPost;
		$scope.previewImage = config.publicUrl + thisPost.postImg;
		$scope.selectedFile = [];

		$scope.selectFile = function (e) {
			var reader = new FileReader();
			reader.onload = function (e) {
				$scope.previewImage = e.target.result;
				$scope.$apply();
			};

			reader.readAsDataURL(e.target.files[0]);
		};

		$scope.uploadFile = function () {
			var file = $scope.file;
			var uploadUrl = config.baseUrl + "/upload",
                promise = fileUploadService.uploadFileToUrl(file, uploadUrl);
 
            return promise.then(function (response) {
               	return response.filename;
            }, function () {
                $scope.serverResponse = 'An error has occurred';
            })
		};
		
		$scope.savePost = async function (post) {
			if (post.postImg !== null &&
				post.postImg !== '' && 
				(config.publicUrl + post.postImg) !== $scope.previewImage) {
				
				post.postImg = await $scope.uploadFile();
			}

			postsAPI.updatePost(post).success(function (data) {
				delete $scope.post;
				$scope.blogForm.$setPristine();
	
				$rootScope.notification = {
					text: "A publicação '" + post.postTitle + "' foi alterada!",
					type: 'success'
				};
	
				$location.path("/admin/blog");
			});
		};
	})

	// Visualizaçoes de postagem
	.controller("postsCtrl", function ($scope, posts) {    
		$scope.posts = posts.data;
	})
	.controller("postsViewCtrl", function ($scope, post, views, newsletterAPI) {
		$scope.post = post.data;
		
		var totalViews = views.data;
		$scope.post.thisPost.postViews = totalViews.total;

		$scope.subscribe = function (lead) {
			var inserted = newsletterAPI.addLead(lead).success(function (data) {
				console.log(data);
				$scope.subscribed = true;
				delete $scope.lead;
			});
		};
	});