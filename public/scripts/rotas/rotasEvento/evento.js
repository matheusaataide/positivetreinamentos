angular.module("positive").config(function($routeProvider, $locationProvider){
    $routeProvider.when("/agenda/:id/:slug", {
        templateUrl: "./scripts/rotas/rotasEvento/evento.html",
        controller: "eventoCtrl",
        resolve: {
            evento: function (eventosAPI, $route) {
                return eventosAPI.getEvento($route.current.params.id);
            },
            acessos: function (acessosAPI, $location, $route) {
                return acessosAPI.visualizar('Agenda', $route.current.params.id, $location.path());
            }
        }
    });
})
.controller("eventoCtrl", function ($scope, evento, acessos) {    
    $scope.evento = evento.data;
    
    var msgWhatsapp = "Olá! Li sobre o " + $scope.evento.nome + " no seu site, e queria saber mais informações sobre ele! 😁💙";
    $scope.msgWhatsapp = "https://api.whatsapp.com/send?phone=5582999395433&text=" + encodeURI(msgWhatsapp);
});
