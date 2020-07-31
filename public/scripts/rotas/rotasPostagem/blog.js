angular.module("positive").config(function($routeProvider, $locationProvider){
    $routeProvider.when("/blog", {
        templateUrl: "./scripts/rotas/rotasPostagem/blog.html",
        controller: "blogCtrl",
        resolve: {
            postagens: function (postagensAPI) {
                return postagensAPI.getPostagens(10, false);
            },
            acessos: function (acessosAPI, $location) {
                return acessosAPI.visualizar('Blog', 0, $location.path());
            }
        }
    });
})
.controller("blogCtrl", function ($scope, postagens) {    
    $scope.postagens = postagens.data.rows;
});
