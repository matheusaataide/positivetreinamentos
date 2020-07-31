angular.module("positive").config(function($routeProvider, $locationProvider){
    $routeProvider.when("/depoimentos", {
        templateUrl: "./scripts/rotas/rotasDepoimento/depoimentos.html",
        controller: "depoimentosCtrl",
        resolve: {
            depoimentos: function (depoimentosAPI) {
                return depoimentosAPI.getDepoimentos();
            },
            acessos: function (acessosAPI, $location) {
                return acessosAPI.visualizar('Outros', 0, $location.path());
            }
        }
    });
})
.controller("depoimentosCtrl", function ($scope, depoimentos) {    
    $scope.depoimentos = depoimentos.data;

    $scope.selecionarDepoimento = function (depo) {
        $scope.depoSelecionado = depo;
    };
});