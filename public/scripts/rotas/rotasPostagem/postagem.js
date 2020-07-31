angular.module("positive").config(function($routeProvider, $locationProvider){
    $routeProvider.when("/blog/:id/:slug", {
        templateUrl: "./scripts/rotas/rotasPostagem/postagem.html",
        controller: "postagemCtrl",
        resolve: {
            postagem: function (postagensAPI, $route) {
                return postagensAPI.getPostagem($route.current.params.id);
            },
            acessos: function (acessosAPI, $location, $route) {
                return acessosAPI.visualizar('Blog', $route.current.params.id, $location.path());
            }
        }
    });
})
.controller("postagemCtrl", function ($scope, postagem, acessos) {    
    var posts = postagem.data;
    console.log(posts);
    $scope.estaPostagem = posts.postagem;
    $scope.estaPostagem.acessos = acessos.data.total;
    $scope.recomendados = posts.recomendados;
    $scope.proximaPostagem = posts.proxima;
    $scope.postagemAnterior = posts.anterior;
});
