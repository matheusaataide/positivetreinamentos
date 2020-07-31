angular.module("positive")
    .config(function($routeProvider, $locationProvider){
        
        // Listagem de postagens
        $routeProvider.when("/blog", {
            templateUrl: "./partials/blog/blog.html",
            controller: "postsCtrl",
            resolve: {
                posts: function (postsAPI) {
                    return postsAPI.getPosts(10, false);
                },
                views: function (postsAPI, $route) {
                    return postsAPI.incrementViews(0);
                }
            }
        });

        // Ver postagem 
        $routeProvider.when("/blog/:postId/:slug", {
            templateUrl: "./partials/blog/postagem.html",
            controller: "postsViewCtrl",
            resolve: {
                post: function (postsAPI, $route) {
                    return postsAPI.getPost($route.current.params.postId);
                },
                views: function (postsAPI, $route) {
                    return postsAPI.incrementViews($route.current.params.postId);
                }
            }
        });
        
        // ADMIN Listar postagens
        $routeProvider.when("/admin/blog", {
            templateUrl: "./partials/admin/blog/blogList.html",
            controller: "postsListCtrl",
            authorize: true,
            resolve: {
                posts: function (postsAPI) {
                    return postsAPI.getPosts(50, true);
                }
            }
        });
        
        // ADMIN Criar nova postagem
        $routeProvider.when("/admin/blog/postar", {
            templateUrl: "./partials/admin/blog/blogAdd.html",
            authorize: true,
            controller: "postsAddCtrl"
        });
        
        // ADMIN Editar postagem
        $routeProvider.when("/admin/blog/editar/:idPost/", {
            templateUrl: "./partials/admin/blog/blogAdd.html",
            controller: "postsUpdateCtrl",
            authorize: true,
            resolve: {
                post: function (postsAPI, $route) {
                    return postsAPI.getPost($route.current.params.idPost);
                }
            }
        });
    });